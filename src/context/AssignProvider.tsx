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
import { callingToast } from "../helpers/Utils";

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
  postResSpeechUploadAudioMgModule: (data: FormData) => Promise<number | undefined>,

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

  const postResSpeechUploadAudioMgModule = async (data: FormData) => {
    try {
      setLoading(true);
      await AssignService.postResSpeechUploadAudioMgtService(data);
      setLoading(false);
      callingToast("Speech updated successfully");
      return 200;
      // await getSelectedScript();
    } catch (error) {
      setLoading(false)
    }
  }

  const postSingleTargetSpeechesAssign = async (data: FormData) => {
    try {
      setLoading(true);
      await AssignService.postSingleTargetSpeechesAssign(data);
      setLoading(false);
      return 200;
      // await getSelectedScript();
    } catch (error) {
      setLoading(false)
    }
  }

  const fetchResAudioStatistics = async () => {
    try {
      const res = await AssignService.fetchResAudioStatistics(audioStatisticsParams);
      setAudioStatisticsData(res.data);
    } catch (error) {
    }
  }

  const getResSingleTargetSpeechesAssign = async (data: singleTargetSpeechesAssignDT) => {

    try {
      const res = await AssignService.fetchResSingleTargetData(data);
      setSingleTargetSpeechesAssign(res.data.data);
      setSingleTargetSpeechesLength(res.data.total_data_size);
    } catch (error) {
    }
  }

  const postRestTargetAssign = async (data: postResTargetAssignParamDT) => {
    try {
      await AssignService.createTargetAssign(data);
      return 200;
      // await getSelectedScript();
    } catch (error) {

    }
  }

  const deleteDraftTargetAssign = async (id: string) => {
    try {
      await AssignService.deleteDraftTargetAssign(id);
      setSelectedTargetList(selectedTargetList.filter((item) => item.id !== id))
    } catch (error) {

    }
  }

  const getRoleListByRole = async (params: roleListByRoleParamDT) => {
    try {
      const res = await AssignService.fetchRoleListByRole(params);
      setRoleListByRole(res.data);
    } catch (error) {

    }
  }

  const updateAssigneeMainTarget = async (data: updateAssigneeMainTargetParamDT) => {
    try {
      await AssignService.updateAssigneeMainTarget(data);
      await new Promise(resolve => setTimeout(resolve, 1000));
      // await getTargetAssign();
    } catch (error) {

    }
  }

  const getTargetAssign = async (data: targetAssignParamDT) => {
    try {
      const res = await AssignService.getTargetAssign(data);
      setTargetsAssign(res.data.data);
      setTargetDataLength(res.data.total_data_size);
    } catch (error) {

    }
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
    setAllScript(res.data);
  }

  const postSelectedScript = async (data: postSelectedScriptBodyDT) => {
    try {
      await AssignService.postSelectedScript(data);
      await new Promise(resolve => setTimeout(resolve, 1000));
      await getSelectedScript();
    } catch (error) { }
  }

  const getSelectedScript = async () => {
    try {
      const res = await AssignService.fetchScriptList();
      setSelectedScriptList(res.data);
    } catch (error) { }
  }

  const getCriteria = async () => {
    try {
      const res = await AssignService.fetchCriteriaList();
      setSelectedCriteriaList(res.data);
    } catch (error) { }
  }

  const getAssignee = async () => {
    try {
      const res = await AssignService.fetchAssignList();
      setSelectedAssigneList(res.data);
    } catch (error) { }
  }

  const deleteSingleScript = async (id: string) => {
    try {
      await AssignService.deleteSingleScript(id);
      setSelectedScriptList(selectedScriptList.filter((item) => item.id !== id));
    } catch (error) { }
  }

  const deleteSingleCriteria = async (id: string) => {
    try {
      await AssignService.deleteSingleCriteria(id);
      setSelectedCriteriaList(selectedCriteriaList.filter((item) => item.id !== id));
    } catch (error) {

    }
  }

  const deleteSingleAssignee = async (id: string) => {
    try {
      await AssignService.deleteSingleAssignee(id);
      setSelectedAssigneList(selectedAssigneList.filter((item) => item.id !== id));
    } catch (error) {

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
    try {
      const res = await AssignService.fetchTargetList();
      setSelectedTargetList(res.data.data);
    } catch (error) { }
  }

  const updateDraftTarget = async (data: updateDraftTargetQueryParams) => {
    try {
      await AssignService.updateDraftTarget({ ...data });
      await new Promise(resolve => setTimeout(resolve, 1000));
      await getDraftTarget();
    } catch (error) { }
  }

  const getTargetForRecreate = async (id: string) => {
    try {
      const res = await AssignService.fetchTargetForRecreate(id);
      setScriptForRecreate([{ ...res.data.script }])
      setTargetForRecreate([{ ...res.data.target }])
      setAssigneeForRecreate([{ ...res.data.assignee }])
      setRecreateTable({ script: res.data.script, target: res.data.target, assignee: res.data.assignee })
    } catch (error) { }
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
    try {
      await AssignService.createAssignCriteria(data);
      await new Promise(resolve => setTimeout(resolve, 1000));
      getCriteria();
    } catch (error) {

    }
  }

  const UpdateAssignCriteria = async (data: CriteriaItemDT) => {
    try {
      await AssignService.UpdateAssignCriteria(data);
      await new Promise(resolve => setTimeout(resolve, 1000));
      getCriteria();
      setSingleCriteriaData({} as CriteriaItemDT);
    } catch (error) {

    }
  }

  const getCriteriaByID = async (id: string) => {

    try {
      const res = await AssignService.getAssignCriteriaById(id);
      setSingleCriteriaData(res?.data);
    } catch (error) {
    }
  }

  useEffect(() => {
    const targetSum = criterias.reduce((acc: number, item: CriteriaItemDT) => acc + item.target, 0);
    setSumTarget(targetSum);

  }, [criterias]);

  const createAssignee = async (data: createAssigneeParamsDT) => {
    try {
      await AssignService.createAssignee(data);
      await new Promise(resolve => setTimeout(resolve, 1000));
      getAssignee();
    } catch (error) {

    }
  }

  const postRecreateTargetAssign = async (data: postRecreateTargetParamDT) => {
    try {
      setLoading(true);
      await AssignService.postRecreateTargetAssign(data);
      setLoading(false);
      return "ok"
    } catch (error) {
      setLoading(false);
      return "error"
    }
  }

  const getResPredefinedRemarks = async () => {
    try {
      const res = await AssignService.getResPredefinedRemark();
      setPredefinedRemarks(res.data);
    } catch (error) {
    }
  }

  const getResRolesUpdateAssigneeAssignModule = async () => {
    try {
      const res = await AssignService.getResRolesUpdateAssigneeAssignModule();
      setTargetRoleList(res.data);
    } catch (error) {

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
        singleTargetSpeechesLength,
        postResSpeechUploadAudioMgModule
      }}
    >
      {children}
    </AssignContext.Provider>
  );
};



export default AssignProvider;
