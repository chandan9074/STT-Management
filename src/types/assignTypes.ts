import { roleDT } from "./billingTypes";
import { allScriptResDT, scriptResDT } from "./script";
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
  remark: string;
  buttonName?: "";
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
  // deadLine: string;
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
  type: "check" | "select" | "date" | "select-with-checkbox" | "multiple-select" | "form" | "date";
  isParent?: string;
  key: string;
  title: string;
  child?: string[];
  children?: subChildDT[];
  isFromAPI?: boolean;
  selects?: filterSelectsDT[];
  formData?: filterFromDT[];
}

export type filterSelectsDT = {
  type: string;
  isFromAPI: boolean;
  child?: string[];
  role?: string;
}

export type filterFromDT = {
  type: "checkbox" | "check" | "multiple-select";
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
  remark: string;
  role: string;
  speech: assignAudioTrackDT;
  audioUploadStatus?: string;
  status?: string;
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
  speaker: roleDT[];
  collector: collectorDT;
  device: string;
  speeches: string;
  maxSpeeches: string;
  remark: string;
  role: string;
  speech: assignAudioTrackDT;
  audioUploadStatus?: string;
  status?: string;
  submissionDate?: string; // Ensure submissionDate is a required string
}


export type targetAllSpeechDT = {
  id: string;
  speechData: speechDT3[]
}

export type speechDT3 = {
  id: string;
  speaker: roleDT[];
  collector: collectorDT;
  remark: string;
  speech: assignAudioTrackDT;
  status?: string;
  submissionDate?: string; // Ensure submissionDate is a required string
// export type customSingleCriteria1DT = {
//   [key:string]: string | string[];
// }
}

export type customSingleCriteriaDT = {
  [key: string]: string;
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