import axios from "axios";
import * as PATH from "../helpers/APIURL"
import { assignDataList } from "../data/assign/AssignListData";
import { criteriaDataList } from "../data/assign/CriteriaData";
import { scriptDataList } from "../data/assign/ScriptData";
import { targetDataList } from "../data/assign/TargetData";
import { allScriptParamsDT, postSelectedScriptBodyDT } from "../types/assignTypes";

export default class AssignService {
  static getAllScript(data: allScriptParamsDT) {
    const res = axios.get(PATH.GET_ALL_SCRIPT_URL, { params: data });
    return res;
  }

  static postSelectedScript(data: postSelectedScriptBodyDT) {
    const res = axios.post(PATH.POST_SELECTED_SCRIPT_URL, data);
    return res;
  }

  static async fetchScriptList() {
    const res = axios.get(PATH.GET_SELECTED_SCRIPT_URL);
    return res;
  }
  static async fetchCriteriaList() {
    return criteriaDataList;
    // return [];
  }
  static async fetchAssignList() {
    return assignDataList;
    // return [];
  }
  static async fetchTargetList() {
    return targetDataList;
  }
}
