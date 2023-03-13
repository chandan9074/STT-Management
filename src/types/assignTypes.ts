import { allScriptResDT } from "./script";
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
  script: allScriptResDT
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

export type assignSpeechDT = {
  id: string;
  speaker: speakerDt[];
  collector: collectorDT;
  recordingArea: string;
  recordingDistance: string;
  device: string;
  speeches: string;
  maxSpeeches: string;
  remark: string;
  role: string;
  speech?: any
}

export type speakerDt = {
  name: string;
  gender: string;
  role: string;
  contact: string;
  address: string;
  id: string;
}

export type collectorDT = {
  name: string;
  gender: string;
  role: string;
  contact: string;
  address: string;
  id: string;
}

