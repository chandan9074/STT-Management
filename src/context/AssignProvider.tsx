import React, { createContext, useContext, useEffect, useState } from "react";
import AssignService from "../services/assignService";
import {
  allScriptDT,
  allScriptParamsDT,
  AssigneeItemDT,
  CriteriaItemDT,
  postSelectedScriptBodyDT,
  ScriptItemDT,
  TargetItemDT,
  updateDraftTargetQueryParams,
} from "../types/assignTypes";

interface ContextProps {
  criterias: any,
  singleCriteria: any
  saveCriteria: (value: any) => void,
  getSingleCriteria: (value: any) => void,
  currentWeek: number;
  setCurrentWeek: React.Dispatch<React.SetStateAction<number>>,
  sumTarget: number | undefined,
  setEmptySingleCriteria: () => void,
  setEmptyEditId: () => void
  emptyCriteria: () => void
  selectedScriptList: ScriptItemDT[];
  selectedAssigneList: AssigneeItemDT[];
  selectedCriteriaList: CriteriaItemDT[];
  selectedTargetList: TargetItemDT[];
  selectScript: (
    item: ScriptItemDT | null,
    checked: boolean,
    selectAll?: boolean
  ) => void;
  selectAssigne: (
    item: AssigneeItemDT | null,
    checked: boolean,
    selectAll?: boolean
  ) => void;
  selectCriteria: (
    item: CriteriaItemDT | null,
    checked: boolean,
    selectAll?: boolean
  ) => void;
  getAllScript: (data: allScriptParamsDT) => void;
  allScript: allScriptDT | undefined;
  postSelectedScript: (data: postSelectedScriptBodyDT) => void;
  getSelectedScript: () => void;
  getCriteria: () => void;
  getAssignee: () => void;
  deleteSingleScript: (id: string) => void;
  deleteSingleCriteria: (id: string) => void;
  deleteSingleAssignee: (id: string) => void;
  postDraftTarget: () => void;
  getDraftTarget: () => void;
  updateDraftTarget: (data: updateDraftTargetQueryParams) => void;
}

export const AssignContext = createContext({} as ContextProps);
export const useAssigneeContext = () => {
  return useContext(AssignContext);
};

const AssignProvider = ({ children }: { children: any }) => {

  const [criterias, setCriterias] = useState<any>([]);
  const [singleCriteria, setSingleCriteria] = useState<any>({})
  const [sumTarget, setSumTarget] = useState<number>();
  const [currentWeek, setCurrentWeek] = useState<number>(1);
  const [editId, setEditId] = useState<number>();

  const [selectedScriptList, setSelectedScriptList] = useState<ScriptItemDT[]>([]);
  const [selectedAssigneList, setSelectedAssigneList] = useState<AssigneeItemDT[]>([]);
  const [selectedCriteriaList, setSelectedCriteriaList] = useState<CriteriaItemDT[]>([]);
  const [selectedTargetList, setSelectedTargetList] = useState<TargetItemDT[]>([]);
  const [allScript, setAllScript] = useState<allScriptDT | undefined>();

  const saveCriteria = (data: any) => {
    const filteredCriterias = criterias.filter((criteria: any, i: number) => i !== editId);
    setCriterias([...filteredCriterias, data]);
    setEmptySingleCriteria();
  }

  const emptyCriteria = () => {
    setCriterias([]);
  }


  const getSingleCriteria = (id: number) => {
    const _data = criterias?.filter((value: any, i: number) => i === id);
    setSingleCriteria(_data[0])
    setEditId(id);
  }

  const setEmptySingleCriteria = () => {

    setSingleCriteria({});

  }

  const setEmptyEditId = () => {
    setEditId(undefined);
  }

  const getAllScript = async (data: allScriptParamsDT) => {
    const res = await AssignService.getAllScript(data);
    // console.log(res)
    setAllScript(res.data);
    // return res;
  }

  const postSelectedScript = async (data: postSelectedScriptBodyDT) => {
    const res = await AssignService.postSelectedScript(data);
    if (res.status === 200) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      await getSelectedScript();
    }
  }

  const getSelectedScript = async () => {
    const res = await AssignService.fetchScriptList();
    console.log('get selected script', res.data)
    setSelectedScriptList(res.data);
  }

  const getCriteria = async () => {
    const res = await AssignService.fetchCriteriaList();
    setSelectedCriteriaList(res.data);
  }

  const getAssignee = async () => {
    const res = await AssignService.fetchAssignList();
    setSelectedAssigneList(res.data);
  }

  const deleteSingleScript = async (id: string) => {
    const res = await AssignService.deleteSingleScript(id);
    console.log('AssignService.deleteSingleScript response:', res);
    if (res.status === 200) {
      // await new Promise(resolve => setTimeout(resolve, 1000));
      // await getSelectedScript();
      setSelectedScriptList(selectedScriptList.filter((item) => item.id !== id));
    }
  }

  const deleteSingleCriteria = async (id: string) => {
    const res = await AssignService.deleteSingleCriteria(id);
    if (res.status === 200) {
      // await new Promise(resolve => setTimeout(resolve, 1000));
      // await getCriteria();
      setSelectedCriteriaList(selectedCriteriaList.filter((item) => item.id !== id));
    }
  }

  const deleteSingleAssignee = async (id: string) => {
    const res = await AssignService.deleteSingleAssignee(id);
    if (res.status === 200) {
      // await new Promise(resolve => setTimeout(resolve, 1000));
      // await getAssignee();
      setSelectedAssigneList(selectedAssigneList.filter((item) => item.id !== id));
    }
  }

  function checkSelected(arr: ScriptItemDT[] | AssigneeItemDT[] | CriteriaItemDT[], type: string) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      const obj = arr[i];
      if (obj.hasOwnProperty('isSelected')) {
        // result.push(Boolean(obj.isSelected));
        if (obj.isSelected) {
          if (type === "assignee" && isAssignee(obj)) {
            result.push(obj.roleID);
          } else {
            result.push(obj.id);
          }
        }
      }
    }
    return result;
  }

  function isAssignee(obj: any): obj is AssigneeItemDT {
    return obj && obj.roleID !== undefined;
  }

  const postDraftTarget = async () => {

    const body = {
      selectedScript: checkSelected(selectedScriptList, 'script'),
      selectedCriteria: checkSelected(selectedCriteriaList, 'criteria'),
      selectedAssignee: checkSelected(selectedAssigneList, 'assignee'),
    }

    await AssignService.postDraftTarget(body);
    selectScript(null, false, true)
    selectAssigne(null, false, true)
    selectCriteria(null, false, true)
  }

  const getDraftTarget = async () => {
    const res = await AssignService.fetchTargetList();
    setSelectedTargetList(res.data);
  }

  const updateDraftTarget = async (data: updateDraftTargetQueryParams) => {
    const res = await AssignService.updateDraftTarget({ ...data });
    if (res.status === 200) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      await getDraftTarget();
    }
  }

  // useEffect(() => {
  //   const fetchInitialData = async () => {
  //     // const scriptList = await AssignService.fetchScriptList();
  //     // const assigneeList = await AssignService.fetchAssignList();
  //     // const criteriaList = await AssignService.fetchCriteriaList();
  //     // const targetList = await AssignService.fetchTargetList();
  //     // setSelectedAssigneList(assigneeList);
  //     // setSelectedScriptList(scriptList);
  //     // setSelectedCriteriaList(criteriaList);
  //     // setSelectedTargetList(targetList);
  //   };
  //   fetchInitialData();
  // }, []);

  const selectScript = (
    selectedItem: ScriptItemDT | null,
    checked: boolean,
    selectAll?: boolean
  ) => {
    if (selectAll) {
      setSelectedScriptList((prevList) =>
        prevList?.map((item) => ({ ...item, isSelected: checked }))
      );
    } else if (!selectAll && selectedItem?.id) {
      setSelectedScriptList((prevList) => {
        return prevList?.map((item) => {
          if (item?.id === selectedItem?.id) {
            return {
              ...item,
              isSelected: checked,
            };
          }
          return item;
        });
      });
      console.log('selectedScriptList', selectedScriptList)
    }
  };
  const selectAssigne = (
    selectedItem: AssigneeItemDT | null,
    checked: boolean,
    selectAll?: boolean
  ) => {
    if (selectAll) {
      setSelectedAssigneList((prevList) =>
        prevList?.map((item) => ({ ...item, isSelected: checked }))
      );
    } else if (!selectAll && selectedItem?.id) {
      setSelectedAssigneList((prevList) => {
        return prevList?.map((item) => {
          if (item?.id === selectedItem?.id) {
            return {
              ...item,
              isSelected: checked,
            };
          }
          return item;
        });
      });
    }
  };
  const selectCriteria = (
    selectedItem: CriteriaItemDT | null,
    checked: boolean,
    selectAll?: boolean
  ) => {
    if (selectAll) {
      setSelectedCriteriaList((prevList) =>
        prevList?.map((item) => ({ ...item, isSelected: checked }))
      );
    } else if (!selectAll && selectedItem?.id) {
      setSelectedCriteriaList((prevList) => {
        return prevList?.map((item) => {
          if (item?.id === selectedItem?.id) {
            return {
              ...item,
              isSelected: checked,
            };
          }
          return item;
        });
      });
    }
  };

  useEffect(() => {
    const targetSum = criterias.reduce((acc: any, item: any) => acc + item.target, 0);
    setSumTarget(targetSum);

  }, [criterias]);


  return (
    <AssignContext.Provider
      value={{
        criterias,
        saveCriteria,
        sumTarget,
        singleCriteria,
        getSingleCriteria,
        setEmptySingleCriteria,
        currentWeek,
        setCurrentWeek,
        setEmptyEditId,
        emptyCriteria,
        selectedAssigneList,
        selectedCriteriaList,
        selectedScriptList,
        selectAssigne,
        selectCriteria,
        selectScript,
        selectedTargetList,
        getAllScript,
        allScript,
        postSelectedScript,
        getSelectedScript,
        getCriteria,
        getAssignee,
        deleteSingleScript,
        deleteSingleCriteria,
        deleteSingleAssignee,
        postDraftTarget,
        getDraftTarget,
        updateDraftTarget
      }}
    >
      {children}
    </AssignContext.Provider>
  );
};



export default AssignProvider;
