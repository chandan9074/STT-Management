import React, { createContext, useContext, useEffect, useState } from "react";
import AssignService from "../services/assignService";
import {
  allScriptDT,
  allScriptParamsDT,
  AssigneeItemDT,
  assignSpeechDT,
  assignStatisticsDT,
  audioStatisticsParamDT,
  createAssigneeParamsDT,
  CriteriaItemDT,
  postRecreateTargetParamDT,
  postResTargetAssignParamDT,
  postSelectedScriptBodyDT,
  recreateTableDT,
  roleListByRoleParamDT,
  ScriptItemDT,
  singleTargetSpeechesAssignDT,
  targetAssignParamDT,
  targetDT,
  TargetItemDT,
  updateAssigneeMainTargetParamDT,
  updateDraftTargetQueryParams,
} from "../types/assignTypes";
import { roleDT } from "../types/billingTypes";

interface ContextProps {
  criterias: CriteriaItemDT[],
  singleCriteria: CriteriaItemDT
  saveCriteria: (value: CriteriaItemDT) => void,
  getSingleCriteria: (value: number) => void,
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
  creteAssignCriteria: (data: CriteriaItemDT | CriteriaItemDT[]) => void;
  singleCriteriaData: CriteriaItemDT;
  UpdateAssignCriteria: (data: CriteriaItemDT) => void;
  getCriteriaByID: (data: string) => void;
  setSingleCriteriaData: React.Dispatch<React.SetStateAction<CriteriaItemDT>>,
  createAssignee: (data: createAssigneeParamsDT) => void;
  getTargetForRecreate: (id: string) => void;
  scriptForRecreate: ScriptItemDT[];
  targetForRecreate: CriteriaItemDT[];
  assigneeForRecreate: AssigneeItemDT[];
  setScriptForRecreate: React.Dispatch<React.SetStateAction<ScriptItemDT[]>>;
  setTargetForRecreate: React.Dispatch<React.SetStateAction<CriteriaItemDT[]>>;
  setAssigneeForRecreate: React.Dispatch<React.SetStateAction<AssigneeItemDT[]>>;
  getSingleCriteriaRecreate: (id: string) => void;
  setSingleCriteriaRecreate: React.Dispatch<React.SetStateAction<CriteriaItemDT | undefined>>;
  singleCriteriaRecreate: CriteriaItemDT | undefined;
  setRecreateTable: React.Dispatch<React.SetStateAction<recreateTableDT>>;
  recreateTable: recreateTableDT;
  getTargetAssign: (data: targetAssignParamDT) => void;
  targetsAssign: any;
  roleListByRole: roleDT[];
  getRoleListByRole: (data: roleListByRoleParamDT) => void;
  updateAssigneeMainTarget: (data: updateAssigneeMainTargetParamDT) => void;
  postRestTargetAssign: (data: postResTargetAssignParamDT) => Promise<number | undefined>;
  deleteDraftTargetAssign: (data: string) => void;
  getResSingleTargetSpeechesAssign: (data: singleTargetSpeechesAssignDT) => void;
  singleTargetSpeechesAssign: assignSpeechDT | undefined,
  setSingleTargetSpeechesAssign: React.Dispatch<React.SetStateAction<assignSpeechDT>>,
  postSingleTargetSpeechesAssign: (data: FormData) => Promise<number | undefined>,
  loading: boolean,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  fetchResAudioStatistics: () => void;
  audioStatisticsParams: audioStatisticsParamDT;
  setAudioStatisticsParams: React.Dispatch<React.SetStateAction<audioStatisticsParamDT>>;
  audioStatisticsData: assignStatisticsDT;
  postRecreateTargetAssign: (data: postRecreateTargetParamDT) => Promise<"ok" | "error">;
  isCriteriaClosed: boolean,
  setIsCriteriaClosed: React.Dispatch<React.SetStateAction<boolean>>
  predefinedRemarks: string[];
  getResPredefinedRemarks: () => void;
  targetRoleList: roleDT[];
  getResRolesUpdateAssigneeAssignModule: () => void;
  targetDataLength: number;
  singleTargetSpeechesLength: number;
}

export const AssignContext = createContext({} as ContextProps);
export const useAssigneeContext = () => {
  return useContext(AssignContext);
};

const AssignProvider = ({ children }: { children: any }) => {

  const [criterias, setCriterias] = useState<CriteriaItemDT[]>([]);
  const [singleCriteria, setSingleCriteria] = useState<CriteriaItemDT>({} as CriteriaItemDT)
  const [sumTarget, setSumTarget] = useState<number>();
  const [currentWeek, setCurrentWeek] = useState<number>(1);
  const [editId, setEditId] = useState<number>();

  const [selectedScriptList, setSelectedScriptList] = useState<ScriptItemDT[]>([]);
  const [selectedAssigneList, setSelectedAssigneList] = useState<AssigneeItemDT[]>([]);
  const [selectedCriteriaList, setSelectedCriteriaList] = useState<CriteriaItemDT[]>([]);
  const [selectedTargetList, setSelectedTargetList] = useState<TargetItemDT[]>([]);
  const [allScript, setAllScript] = useState<allScriptDT | undefined>();
  const [singleCriteriaData, setSingleCriteriaData] = useState<CriteriaItemDT>({} as CriteriaItemDT)
  const [scriptForRecreate, setScriptForRecreate] = useState<ScriptItemDT[]>([] as ScriptItemDT[])
  const [targetForRecreate, setTargetForRecreate] = useState<CriteriaItemDT[]>([] as CriteriaItemDT[]);
  const [singleCriteriaRecreate, setSingleCriteriaRecreate] = useState<CriteriaItemDT>();
  const [assigneeForRecreate, setAssigneeForRecreate] = useState<AssigneeItemDT[]>([] as AssigneeItemDT[]);
  const [recreateTable, setRecreateTable] = useState<recreateTableDT>({} as recreateTableDT);
  const [targetsAssign, setTargetsAssign] = useState<targetDT[]>([] as targetDT[]);
  const [targetDataLength, setTargetDataLength] = useState<number>(0);
  const [roleListByRole, setRoleListByRole] = useState<roleDT[]>([] as roleDT[]);
  const [singleTargetSpeechesAssign, setSingleTargetSpeechesAssign] = useState<assignSpeechDT>({} as assignSpeechDT)
  const [singleTargetSpeechesLength, setSingleTargetSpeechesLength] = useState<number>(0);
  const [audioStatisticsData, setAudioStatisticsData] = useState<assignStatisticsDT>({} as assignStatisticsDT)
  const [audioStatisticsParams, setAudioStatisticsParams] = useState<audioStatisticsParamDT>({
    overall: false,
  } as audioStatisticsParamDT)
  const [loading, setLoading] = useState<boolean>(false);
  const [predefinedRemarks, setPredefinedRemarks] = useState<string[]>([] as string[]);
  const [targetRoleList, setTargetRoleList] = useState<roleDT[]>([] as roleDT[]);

  const [isCriteriaClosed, setIsCriteriaClosed] = useState<boolean>(false);

  const postSingleTargetSpeechesAssign = async (data: FormData) => {
    setLoading(true);
    const res = await AssignService.postSingleTargetSpeechesAssign(data);
    if (res.status && res.status === 200) {
      setLoading(false);
      return 200;
      // await getSelectedScript();
    } else {
      setLoading(false);
    }
  }

  const fetchResAudioStatistics = async () => {
    const res = await AssignService.fetchResAudioStatistics(audioStatisticsParams);
    console.log("res", res.data)
    setAudioStatisticsData(res.data);
  }

  const getResSingleTargetSpeechesAssign = async (data: singleTargetSpeechesAssignDT) => {

    try {
      const res = await AssignService.fetchResSingleTargetData(data);
      setSingleTargetSpeechesAssign(res.data.data);
      setSingleTargetSpeechesLength(res.data.total_data_size);
    } catch (error) {
      console.log('error', error);

    }
  }

  const postRestTargetAssign = async (data: postResTargetAssignParamDT) => {
    const res = await AssignService.createTargetAssign(data);
    if (res.status && res.status === 200) {
      return 200;
      // await getSelectedScript();
    }
  }

  const deleteDraftTargetAssign = async (id: string) => {
    const res = await AssignService.deleteDraftTargetAssign(id);
    if (res.status === 200) {
      setSelectedTargetList(selectedTargetList.filter((item) => item.id !== id))
    }
  }

  const getRoleListByRole = async (params: roleListByRoleParamDT) => {
    const res = await AssignService.fetchRoleListByRole(params);
    setRoleListByRole(res.data);
  }

  const updateAssigneeMainTarget = async (data: updateAssigneeMainTargetParamDT) => {
    const res = await AssignService.updateAssigneeMainTarget(data);
    if (res.status === 200) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      // await getTargetAssign();
    }
  }

  const getTargetAssign = async (data: targetAssignParamDT) => {
    const res = await AssignService.getTargetAssign(data);
    setTargetsAssign(res.data.data);
    setTargetDataLength(res.data.total_data_size);
  }

  const saveCriteria = (data: CriteriaItemDT) => {

    const filteredCriterias = criterias.filter((criteria: CriteriaItemDT, i: number) => i !== editId);

    setCriterias([...filteredCriterias, data]);
    setEmptySingleCriteria();
  }


  const emptyCriteria = () => {
    setCriterias([]);
  }

  const getSingleCriteria = (id: number) => {
    const _data = criterias?.filter((value: CriteriaItemDT, i: number) => i === id);
    setSingleCriteria(_data[0])
    setEditId(id);
  }

  const setEmptySingleCriteria = () => {

    setSingleCriteria({} as CriteriaItemDT);

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

  function isAssignee(obj: ScriptItemDT | AssigneeItemDT | CriteriaItemDT): obj is AssigneeItemDT {
    // return obj && obj.roleID !== undefined;
    return 'roleID' in obj;
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
    setSelectedTargetList(res.data.data);
  }

  const updateDraftTarget = async (data: updateDraftTargetQueryParams) => {
    const res = await AssignService.updateDraftTarget({ ...data });
    if (res.status === 200) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      await getDraftTarget();
    }
  }

  const getTargetForRecreate = async (id: string) => {
    const res = await AssignService.fetchTargetForRecreate(id);
    console.log('getTargetForRecreate', res)
    // const newScript = {
    //   isSelected: true,
    //   ...res.script
    // }
    setScriptForRecreate([{ ...res.data.script }])
    setTargetForRecreate([{ ...res.data.target }])
    setAssigneeForRecreate([{ ...res.data.assignee }])
    setRecreateTable({ script: res.data.script, target: res.data.target, assignee: res.data.assignee })
  }

  const getSingleCriteriaRecreate = (id: string) => {
    const _data = targetForRecreate?.filter((item: CriteriaItemDT) => item?.id === id);
    setSingleCriteriaRecreate(_data[0]);
  }

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


  const creteAssignCriteria = async (data: CriteriaItemDT | CriteriaItemDT[]) => {
    const res = await AssignService.createAssignCriteria(data);
    if (res.status === 200) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      getCriteria();
    }
  }

  const UpdateAssignCriteria = async (data: CriteriaItemDT) => {
    const res = await AssignService.UpdateAssignCriteria(data);
    if (res.status === 200) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      getCriteria();
      setSingleCriteriaData({} as CriteriaItemDT);
    }
  }

  const getCriteriaByID = async (id: string) => {

    try {
      const res = await AssignService.getAssignCriteriaById(id);
      setSingleCriteriaData(res?.data);
    } catch (error) {
      console.log('error', error);

    }
  }

  useEffect(() => {
    const targetSum = criterias.reduce((acc: number, item: CriteriaItemDT) => acc + item.target, 0);
    setSumTarget(targetSum);

  }, [criterias]);

  const createAssignee = async (data: createAssigneeParamsDT) => {
    const res = await AssignService.createAssignee(data);
    if (res.status === 200) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      getAssignee();
    }
  }

  const postRecreateTargetAssign = async (data: postRecreateTargetParamDT) => {
    setLoading(true);
    const res = await AssignService.postRecreateTargetAssign(data);
    if (res.status === 200) {
      // await new Promise(resolve => setTimeout(resolve, 1000));
      setLoading(false);
      return "ok"
    }
    else {
      setLoading(false);
      return "error"
    }
  }

  const getResPredefinedRemarks = async () => {
    try {
      const res = await AssignService.getResPredefinedRemark();
      setPredefinedRemarks(res.data);
    } catch (error) {
      console.log('error', error);

    }
  }

  const getResRolesUpdateAssigneeAssignModule = async () => {
    try {
      const res = await AssignService.getResRolesUpdateAssigneeAssignModule();
      console.log("res----------ut", res.data)
      setTargetRoleList(res.data);
    } catch (error) {
      console.log('error', error);

    }
  }


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
        updateDraftTarget,
        creteAssignCriteria,
        singleCriteriaData,
        UpdateAssignCriteria,
        getCriteriaByID,
        setSingleCriteriaData,
        createAssignee,
        getTargetForRecreate,
        assigneeForRecreate,
        scriptForRecreate,
        setAssigneeForRecreate,
        setScriptForRecreate,
        targetForRecreate,
        setTargetForRecreate,
        getSingleCriteriaRecreate,
        setSingleCriteriaRecreate,
        singleCriteriaRecreate,
        recreateTable,
        setRecreateTable,
        getTargetAssign,
        targetsAssign,
        roleListByRole,
        getRoleListByRole,
        updateAssigneeMainTarget,
        postRestTargetAssign,
        deleteDraftTargetAssign,
        getResSingleTargetSpeechesAssign,
        singleTargetSpeechesAssign,
        setSingleTargetSpeechesAssign,
        postSingleTargetSpeechesAssign,
        loading,
        setLoading,
        audioStatisticsParams,
        fetchResAudioStatistics,
        setAudioStatisticsParams,
        audioStatisticsData,
        postRecreateTargetAssign,
        isCriteriaClosed,
        setIsCriteriaClosed,
        predefinedRemarks,
        getResPredefinedRemarks,
        targetRoleList,
        getResRolesUpdateAssigneeAssignModule,
        targetDataLength,
        singleTargetSpeechesLength
      }}
    >
      {children}
    </AssignContext.Provider>
  );
};



export default AssignProvider;
