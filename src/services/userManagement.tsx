import axios from "axios";
import * as PATH from "../helpers/APIURL";
import { targetSpeechData } from "../data/assign/AssignData";
import { activityData } from "../data/userManagement/activityData";
import { userManagementParamsDT } from "../types/userManagementTypes";

export default class UserManagementService {
  static getActivityStatistics(id: string) {
    return activityData;
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
}
