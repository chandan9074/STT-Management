import axios from "axios";
import * as PATH from "../helpers/APIURL";
import { allScriptParamsDT, postDraftTargetBodyDT, postSelectedScriptBodyDT } from "../types/assignTypes";

export default class AssignService {
  static getAllScript(data: allScriptParamsDT) {
    const res = axios.get(PATH.GET_ALL_SCRIPT_URL, { params: data });
    return res;
  }

  static postSelectedScript(data: postSelectedScriptBodyDT) {
    const res = axios.post(PATH.POST_SELECTED_SCRIPT_URL, data);
    return res;
  }

  static createAssignCriteria(params: any) {
    const res = axios.post(PATH.POST_RES_CRITERIA_URL, params);
    return res;
  }

  static async fetchScriptList() {
    const res = axios.get(PATH.GET_SELECTED_SCRIPT_URL);
    return res;
  }
  static async deleteSingleScript(id: string) {
    const res = axios.delete(PATH.DELETE_SINGLE_SCRIPT_URL, { params: { id: id } });
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
}
