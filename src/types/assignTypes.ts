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
  domain:string;
  subDomain:string;
  title: string;
  frequncy: number;
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
  contact: string;
  email: string;
  address: string;
}

export interface TargetItemDT {
  id: number | string;
  isSelected?: boolean;
  script: {
    current: ScriptItemDT;
    list: ScriptItemDT[];
  };
  target: {
    current: CriteriaItemDT;
    list: CriteriaItemDT[];
  };
  assignee: {
    current: AssigneeItemDT;
    list: AssigneeItemDT[];
  };
  deadLine: string;
  remark: {
    date: string;
    time: string;
    name: string;
    role: string;
    details: string;
  };
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