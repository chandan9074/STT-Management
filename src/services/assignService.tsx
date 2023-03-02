import axios from "axios";
import * as PATH from "../helpers/APIURL"
import { assignDataList } from "../data/assign/AssignListData";
import { criteriaDataList } from "../data/assign/CriteriaData";
import { scriptDataList } from "../data/assign/ScriptData";
import { targetDataList } from "../data/assign/TargetData";
import { allScriptParamsDT, postDraftTargetBodyDT, postSelectedScriptBodyDT, updateDraftTargetQueryParams } from "../types/assignTypes";

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
  static async deleteSingleScript(id: string) {
    const res = axios.delete(PATH.DELETE_SINGLE_SCRIPT_URL, { params: { id: id, testID: "1" } });
    console.log('delete script called');
    return res;
  }
  static async fetchCriteriaList() {
    const res = axios.get(PATH.GET_CRITERIA_SCRIPT_URL);
    return res;
  }
  static async deleteSingleCriteria(id: string) {
    const res = axios.delete(PATH.DELETE_SINGLE_CRITERIA_URL, { params: { id: id } });
    return res;
  }
  static async fetchAssignList() {
    const res = axios.get(PATH.GET_ASSIGNEE_SCRIPT_URL);
    return res;
  }
  static async deleteSingleAssignee(id: string) {
    const res = axios.delete(PATH.DELETE_SINGLE_ASSIGNEE_URL, { params: { id: id } });
    return res;
  }
  static async fetchTargetList() {
    const res = axios.get(PATH.GET_DRAFT_TARGET_URL);
    return res;
  }
  static async postDraftTarget(data: postDraftTargetBodyDT) {
    const res = axios.post(PATH.POST_DRAFT_TARGET_URL, data);
    // console.log('postDraftTarget called', data);
    return res;
  }
  static async updateDraftTarget(data: updateDraftTargetQueryParams) {
    console.log('updateDraftTarget called', data)
    const res = axios.put(PATH.UPDATE_DRAFT_TARGET_URL, null, { params: data });
    // console.log('postDraftTarget called', data);
    return res;
  }
}
