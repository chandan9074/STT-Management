import axios from "axios";
import * as PATH from "../helpers/APIURL"
import { assignDataList } from "../data/assign/AssignListData";
import { criteriaDataList } from "../data/assign/CriteriaData";
import { scriptDataList } from "../data/assign/ScriptData";
import { targetDataList } from "../data/assign/TargetData";
import { allScriptParamsDT } from "../types/assignTypes";

export default class AssignService {
  static getAllScript(data: allScriptParamsDT) {
    const res = axios.get(`https://amarkantho.revesoft.com:3456/all_scripts_with_frequency`, { params: data });
    return res;
  }
  static async fetchScriptList() {
    return scriptDataList;
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
