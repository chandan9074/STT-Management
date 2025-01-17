import { historyRemarkDT, othersDT, speakerLocalityDT2 } from "./audioManagementTypes";
import { roleDT } from "./billingTypes";
import { scriptResDT } from "./script";
import { audioStatusDT, overTheTimeDataDT } from "./userManagementTypes";
export type assignStatisticsDT = {
  target: number;
  received: number;
  audios: number;
  audioStatus: audioStatusDT[];
  overTheTimeData: overTheTimeDataDT;
};

export interface ScriptItemDT {
  isSelected?: boolean;
  id: string;
  description: string;
  domain: string;
  subDomain: string;
  title: string;
  frequency: number;
}

export interface CriteriaItemDT {
  isSelected?: boolean;
  id: string;
  gender: string;
  ageRange: string;
  district: string[];
  profession: string;
  economicSituation: string;
  healthFactors: string[];
  recordingArea: string;
  recordingDistance: string;
  education: string;
  target: number;
  deadline: string;
  reminder: string[];
  childhoodPlace?: string,
  remark?: remarkDT | string;
  remarkDes?: string,
  remarkRoleID?: string,
  buttonName?: "";
}

export type remarkDT = {
  roleInfo: {
    id: string;
    name: string;
    role: string;
    gender: string;
  },
  Des: string;
  deadline: string;
}

export interface AssigneeItemDT {
  isSelected?: boolean;
  id: string;
  name: string;
  role: string;
  roleID: string;
  contact: string;
  email: string;
  address: string;
}

export interface TargetItemDT {
  id: string;
  isSelected?: boolean;
  script: scriptResDT;
  target: CriteriaItemDT;
  assignee: AssigneeItemDT;
  deadLine: string;
  // remark: {
  //   date: string;
  //   time: string;
  //   name: string;
  //   role: string;
  //   details: string;
  // };
}

export type allScriptParamsDT = {
  ascending?: boolean;
  page: number;
  pageSize: number;
  module?: string;
  domain?: string;
  subDomain?: string;
  distribution?: string;
}

export type allScriptDT = {
  totalScript: number;
  scripts: singleScriptDT[];
}

export type singleScriptDT = {
  id: string;
  title: string;
  description: string;
  domain: string;
  subDomain: string;
  frequency: number;
}

export type postSelectedScriptBodyDT = {
  scriptList: string[];
}

export type postDraftTargetBodyDT = {
  selectedScript: string[];
  selectedCriteria: string[];
  selectedAssignee: string[];
}

export type updateDraftTargetQueryParams = {
  id: string;
  script?: string;
  target?: string;
  assignee?: string;
}

export type targetForRecreate = {
  id: string;
  script: ScriptItemDT;
  target: CriteriaItemDT;
  assignee: AssigneeItemDT;
}

export type recreateTableDT = {
  script: ScriptItemDT;
  target: CriteriaItemDT;
  assignee: AssigneeItemDT;
}

export type targetScriptDT = {
  id: string;
  module: string;
  distributionSource: string;
  isAge: boolean;
  domain: string;
  subdomain: string;
  sourceType: string;
  sourceUrl: string;
  sourceFile: string;
  sourceFileName: string;
  sourceFileImage: string;
  title: string;
  description: string;
  date: string;
  frequency: number;
}
export type targetDT = {
  id: string;
  script: targetScriptDT;
  target: CriteriaItemDT;
  // target: userSpeakerDt;
  assignee: AssigneeItemDT;
  status: number;
  speeches: {
    total: number;
    uploaded: number;
  };
  assignedDate: string;
}

export type targetCompletedDT = {
  id: string;
  target: CriteriaItemDT;
  assignee: AssigneeItemDT;
  status: number;
  speeches: {
    total: number;
    uploaded: number;
  };
  assignedDate: string;
  submissionDate: string
}

export type targetFilterDT = {
  type: "check" | "select" | "date" | "select-with-checkbox" | "multiple-select" | "form" | "date" | "select-with-roleImg" | "date-ranger" | "select-with-subItem" | "select-with-role";
  isParent?: string;
  key: string;
  title: string;
  child?: string[];
  children?: subChildDT[];
  isFromAPI?: boolean;
  selects?: filterSelectsDT[];
  formData?: filterFromDT[];
  viewKey?: string;
  viewRoleImg?: string;
  divisions?: divisionDT[];
  placeholder?: string;
}

export type divisionDT = {
  division: string;
  district: string[];
}

export type filterSelectsDT = {
  type: "check" | "select" | "date" | "select-with-checkbox" | "multiple-select" | "form" | "date" | "select-with-roleImg" | "date-ranger" | "select-with-subItem" | "select-with-role";
  isFromAPI: boolean;
  key: string;
  title: string;
  child?: string[];
  role?: string;
  children?: subChildDT[];
  isParent?: string;
  placeholder?: string;
}

export type filterFromDT = {
  type: "checkbox" | "check" | "multiple-select";
  key?: string;
  title?: string;
  child?: string[];
  selects?: filterSelectsDT[];

}

export type subChildDT = {
  title: string;
  child: string[];
}

export type targetFilterListDT = {
  [key: string]: string[];
}

export type assignSpeechDT = {
  id: string;
  otherInfo: otherInfoDT
  speechData: speechDt[]
}

export type speechDt = {
  id: string;
  speaker: roleDT[];
  collector: collectorDT;
  recordingArea: string;
  recordingDistance: string;
  device: string;
  speeches: string;
  maxSpeeches: string;
  remark: remark;
  role: string;
  speech: assignAudioTrackDT;
  // audioUploadStatus?: string;
  status?: string;
}

export type remark = {
  roleName: string,
  role: string
  date: string,
  desc: string
}

export type otherInfoDT = {
  roleInfo: roleDT;
  deadLine: string;
  speeches: {
    total: number;
    uploaded: number
  }
}


export type collectorDT = {
  name: string;
  gender: string;
  role: string;
  contact: string;
  address: string;
  id: string;
}

export type assignAudioTrackDT = {
  id?: string;
  title?: string;
  duration?: string;
  url?: string;
  name?: string;
  file?: Blob | File;
}

export type targetSpeechDT = {
  id: string;
  otherInfo: speechOtherInfoDT
  speechData: speechDt2[]
}

export type speechDt2 = {
  id: string;
  // speaker: roleDT[];
  speaker: speakerLocalityDT2;
  others: othersDT;
  script: scriptResDT;
  collector: collectorDT;
  device: string;
  // speeches: string;
  // maxSpeeches: string;
  // remark: string;
  remark: historyRemarkDT[],
  role: string;
  speech: assignAudioTrackDT;
  audioUploadStatus?: string;
  status?: string;
  submissionDate?: string; // Ensure submissionDate is a required string
}


export type targetAllSpeechDT = {
  id: string;
  // speaker: roleDT[];
  speaker: speakerLocalityDT2;
  collector: collectorDT;
  remark: historyRemarkDT[];
  speech: assignAudioTrackDT;
  status?: string;
  submissionDate?: string;
  script: scriptResDT;
  others: othersDT;
}


export type assignOthersDT = {
  device: string;
  journey: journeyDT
}

export type journeyDT = {
  role: audioManagementRoleDT[];
}

export type audioManagementRoleDT = {
  id: string;
  role: string;
  name: string;
  date: string;
}

export type customSingleCriteriaDT = {
  // [key: string]: string;
  [key: string]: string | string[];
}

export type createAssigneeParamsDT = {
  selectedAssignee: string[]
}
export type speechOtherInfoDT = {
  roleInfo: roleDT;
  targetSpeech: number;
  receivedSpeech: number;
  receivedHour: number;
  lastUpdate: string;
  audioStatus: {
    valid: number;
    invalid: number;
  }
}

export type targetAssignParamDT = {
  page: number;
  pageSize: 20;
}

export type roleListByRoleParamDT = {
  roleID: string;
  role: string;
}

export type updateAssigneeMainTargetParamDT = {
  targetId: string[];
  assignee: string
}

export type postResTargetAssignParamDT = {
  selectedTargets: string[];
}

export type singleTargetSpeechesAssignDT = {
  id: string;
  page: number;
  pageSize: number;
}

export type audioStatisticsParamDT = {
  month?: string;
  year?: string;
  overall?: boolean;
}

export type postRecreateTargetParamDT = {
  script: string;
  target: CriteriaItemDT;
  assignee: string;
}

export type postResSpeechUploadAudioMgtDT = {
  sourceFile: string;
  sourceFileName?: string;
  dataType: string;
  sourceName: string;
  sourceUrl: string;
  speechFile: string;
  speechFileName?: string;
  distributionSource: string;
  domain: string;
  subdomain: string,
  speakerNumber: number,
  gender: string,
  ageRange: string[],
  homeDistrict: string;
}