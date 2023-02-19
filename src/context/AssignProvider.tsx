import React, { createContext, useContext, useEffect, useState } from "react";
import AssignService from "../services/assignService";
import {
  AssigneeItemDT,
  CriteriaItemDT,
  ScriptItemDT,
  TargetItemDT,
} from "../types/assignTypes";

interface ContextProps {
  criterias: any;
  singleCriteria: any;
  saveCriteria: (value: any) => void;
  getSingleCriteria: (value: any) => void;
  sumTarget: number | undefined;
  setEmptySingleCriteria: () => void;
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
}

export const AssignContext = createContext({} as ContextProps);

export const useAssigneContext = () => {
  return useContext(AssignContext);
};

const AssignProvider = ({ children }: { children: any }) => {
  const [criterias, setCriterias] = useState<any>([]);

  const [singleCriteria, setSingleCriteria] = useState<any>({});

  const [sumTarget, setSumTarget] = useState<number>();
  const [selectedScriptList, setSelectedScriptList] = useState<ScriptItemDT[]>(
    []
  );
  const [selectedAssigneList, setSelectedAssigneList] = useState<
    AssigneeItemDT[]
  >([]);
  const [selectedCriteriaList, setSelectedCriteriaList] = useState<
    CriteriaItemDT[]
  >([]);
  const [selectedTargetList, setSelectedTargetList] = useState<TargetItemDT[]>(
    []
  );

  const saveCriteria = (data: any) => {
    const filteredCriterias = criterias.filter(
      (criteria: any) => criteria.target !== data.target
    );
    setCriterias([...filteredCriterias, data]);

    // setCriterias([...criterias, data]);
  };

  const getSingleCriteria = (id: number) => {
    const _data = criterias?.filter((value: any) => value.target === id);
    setSingleCriteria(_data[0]);
  };

  const setEmptySingleCriteria = () => {
    setSingleCriteria({});
  };
  //fetch all inital data
  useEffect(() => {
    const fetchInitialData = async () => {
      const scriptList = await AssignService.fetchScriptList();
      const assigneeList = await AssignService.fetchAssignList();
      const criteriaList = await AssignService.fetchCriteriaList();
      const targetList = await AssignService.fetchTargetList();
      setSelectedAssigneList(assigneeList);
      setSelectedScriptList(scriptList);
      setSelectedCriteriaList(criteriaList);
      setSelectedTargetList(targetList);
    };
    fetchInitialData();
  }, []);

  useEffect(() => {
    const targetSum = criterias.reduce(
      (acc: any, item: any) => acc + item.target,
      0
    );
    setSumTarget(targetSum);
  }, [criterias]);

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

  return (
    <AssignContext.Provider
      value={{
        criterias,
        saveCriteria,
        sumTarget,
        singleCriteria,
        getSingleCriteria,
        setEmptySingleCriteria,
        selectedAssigneList,
        selectedCriteriaList,
        selectedScriptList,
        selectAssigne,
        selectCriteria,
        selectScript,
        selectedTargetList,
      }}
    >
      {children}
    </AssignContext.Provider>
  );
};

export default AssignProvider;
