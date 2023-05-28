import axios from "axios";
import * as PATH from "../helpers/APIURL";
import { roleParamDT } from "../types/organizerTypes";

export default class OrganizerService {

  static createRole(params: roleParamDT) {
    return axios.post(PATH.CREATE_ROLE_URL, params);
  }

  static getRole() {
    return axios.get(PATH.GET_RES_ROLE_ORGANIZE_MODULE);
  }

  static getTag() {
    return axios.get(PATH.GET_RES_TAG_ORGANIZE_MODULE);
  }

  static getDevice() {
    return axios.get(PATH.GET_RES_DEVICE_ORGANIZE_MODULE);
  }

}