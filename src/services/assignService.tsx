import { assignDataList } from "../data/assign/AssignListData";
import { criteriaDataList } from "../data/assign/CriteriaData";
import { scriptDataList } from "../data/assign/ScriptData";
import { targetDataList } from "../data/assign/TargetData";

export default class AssignService {
  static async fetchScriptList() {
    return scriptDataList;
  }
  static async fetchCriteriaList() {
    return criteriaDataList;
  }
  static async fetchAssignList() {
    return assignDataList;
  }
  static async fetchTargetList() {
    return targetDataList;
  }
}
