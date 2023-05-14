import axios from "axios";
import * as PATH from "../helpers/APIURL";
import { allScriptParamsDT, audioStatisticsParamDT, createAssigneeParamsDT, CriteriaItemDT, postDraftTargetBodyDT, postResTargetAssignParamDT, postSelectedScriptBodyDT, roleListByRoleParamDT, singleTargetSpeechesAssignDT, targetAssignParamDT, updateAssigneeMainTargetParamDT, updateDraftTargetQueryParams } from "../types/assignTypes";

export default class AssignService {

  static async getTargetAssign(params: targetAssignParamDT) {
    const res = axios.get(PATH.GET_TARGET_ASSIGN_URL, { params: params });
    return res;
  }

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

  static createAssignCriteria(params: CriteriaItemDT | CriteriaItemDT[]) {
    const res = axios.post(PATH.POST_RES_CRITERIA_URL, params);
    return res;
  }

  static UpdateAssignCriteria(params: CriteriaItemDT) {
    return axios.put(PATH.UPDATE_ASSIGN_CRITERIA_URL, params);
  }

  static getAssignCriteriaById(id: string) {
    return axios.get(PATH.GET_ASSIGN_CRITERIA_BY_ID_URL, { params: { id: id } });

  }

  static createAssignee(params: createAssigneeParamsDT) {
    return axios.post(PATH.CREATE_ASSIGNEE_URL, params);
  }

  static fetchTargetForRecreate(id: string) {
    return axios.get(`${PATH.GET_ID_TARGET_ASSIGN_URL}`, { params: { id: id } });
  }

  static fetchRoleListByRole(params: roleListByRoleParamDT) {
    return axios.get(PATH.GET_ROLE_LIST_BY_ROLE, { params });
  }

  static updateAssigneeMainTarget(params: updateAssigneeMainTargetParamDT) {
    return axios.put(PATH.UPDATE_ASSIGNEE_MAIN_TARGET_ASSIGN_PATH, params);
  }

  static createTargetAssign(params: postResTargetAssignParamDT) {
    return axios.post(PATH.POST_RES_TARGET_ASSIGN_PATH, params);
  }

  static async deleteDraftTargetAssign(id: string) {
    const res = axios.delete(PATH.DELETE_DRAFT_TARGET_ASSIGN_PATH, { params: { id: id } });
    return res;
  }

  static fetchResSingleTargetData(params: singleTargetSpeechesAssignDT) {
    return axios.get(PATH.GET_RES_SINGLE_TARGET_SPEECHES_ASSIGN_PATH, { params });
  }

  static postSingleTargetSpeechesAssign(data: FormData) {
    const res = axios.post(PATH.POST_SINGLE_TARGET_SPEECHES_ASSIGN_PATH, data);
    return res;
  }

  static fetchResAudioStatistics(params: audioStatisticsParamDT) {
    return axios.get(PATH.GET_RES_AUDIO_STATISTICS_PATH, { params });
  }
}
