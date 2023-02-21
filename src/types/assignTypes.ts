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
  id: number;
  script: string;
  frequency?: number;
}

export interface CriteriaItemDT {
  isSelected?: boolean;
  id: number;
  target: number;
  criteria: string;
}

export interface AssigneeItemDT {
  id: number;
  isSelected?: boolean;
  role: string;
  roleId: string;
  name: string;
  image?: string;
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
