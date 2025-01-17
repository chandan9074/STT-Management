import axios from "axios";
import * as PATH from "../helpers/APIURL";
import { targetSpeechData } from "../data/assign/AssignData";
import { activityQueryParamsDT, activityTableParamsDT, getUserByIdParamsDT, userManagementParamsDT } from "../types/userManagementTypes";

export default class UserManagementService {
  static getActivityStatistics(value: activityQueryParamsDT) {
    return axios.get(PATH.GET_RES_ACTIVITY_STATISTICS_USER_MANAGEMENT_MODULE, { params: value });
  }

  static getActivityTable(value: activityTableParamsDT) {
    return axios.get(PATH.GET_RES_ACTIVITY_TABLE_USER_MANAGEMENT_MODULE, { params: value });
  }

  static getUserTargetPendingSpeeches(id: string) {
    // const res = axios.get(PATH.GET_ROLE_LIST_URL, { params: { id: id } });
    // return res;
    return targetSpeechData;
  }

  static getUserManagementTable(values: userManagementParamsDT) {
    return axios.get(PATH.GET_RES_USER_MANAGEMENT_MODULE, { params: values });
  }

  static getUserRoleListByRole(role: string) {
    return axios.get(PATH.GET_ROLE_LIST_URL, { params: { role: role } });
  }

  static createUser(params: FormData) {
    return axios.post(PATH.POST_RES_USER_MANAGEMENT_MODULE, params);
  }

  static getUserById(params: getUserByIdParamsDT) {
    return axios.get(PATH.GET_RES_USER_MANAGEMENT_BY_ID_MODULE, { params: params });
  }

  static updateUser(params: FormData) {
    return axios.post(PATH.UPDATE_RES_USER_MANAGEMENT_BY_ID_MODULE, params);
  }

}
