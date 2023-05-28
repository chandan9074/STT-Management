import axios from "axios";
import * as PATH from "../helpers/APIURL";
import { roleBodyDT, roleParamDT } from "../types/organizerTypes";

export default class OrganizerService {

  static createRole(params: roleParamDT) {
    return axios.post(PATH.POST_RES_ROLE_ORGANIZE_MODULE, params);
  }

  static getRole() {
    return axios.get(PATH.GET_RES_ROLE_ORGANIZE_MODULE);
  }

  static postRole(body: roleBodyDT) {
    return axios.post(PATH.POST_RES_ROLE_ORGANIZE_MODULE, body);
  }

  static deleteRole(id: string) {
    return axios.delete(PATH.DELETE_RES_ROLE_ORGANIZE_MODULE, { params: { id: id } });
  }

  static getTag() {
    return axios.get(PATH.GET_RES_TAG_ORGANIZE_MODULE);
  }

  static getDevice() {
    return axios.get(PATH.GET_RES_DEVICE_ORGANIZE_MODULE);
  }

}