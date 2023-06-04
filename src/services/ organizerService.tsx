import axios from "axios";
import * as PATH from "../helpers/APIURL";
import { deviceBodyDT, roleBodyDT, roleParamDT, tagBodyDT } from "../types/organizerTypes";

export default class OrganizerService {

  //Role
  static createRole(params: roleParamDT) {
    return axios.post(PATH.POST_RES_ROLE_ORGANIZE_MODULE, params);
  }

  static getRole() {
    return axios.get(PATH.GET_RES_ROLE_ORGANIZE_MODULE);
  }

  static postRole(body: roleBodyDT) {
    return axios.post(PATH.POST_RES_ROLE_ORGANIZE_MODULE, body);
  }

  static updateRole(body: roleBodyDT) {
    return axios.put(PATH.UPDATE_RES_ROLE_ORGANIZE_MODULE, body);
  }

  static deleteRole(id: string) {
    return axios.delete(PATH.DELETE_RES_ROLE_ORGANIZE_MODULE, { params: { id: id } });
  }

  //Tag
  static getTag() {
    return axios.get(PATH.GET_RES_TAG_ORGANIZE_MODULE);
  }

  static postTag(body: tagBodyDT) {
    return axios.post(PATH.POST_RES_TAG_ORGANIZE_MODULE, body);
  }

  static updateTag(body: tagBodyDT) {
    return axios.put(PATH.UPDATE_RES_TAG_ORGANIZE_MODULE, body);
  }

  static deleteTag(id: string) {
    return axios.delete(PATH.DELETE_RES_TAG_ORGANIZE_MODULE, { params: { id: id } });
  }

  //Device
  static getDevice() {
    return axios.get(PATH.GET_RES_DEVICE_ORGANIZE_MODULE);
  }

  static postDevice(body: deviceBodyDT) {
    return axios.post(PATH.POST_RES_DEVICE_ORGANIZE_MODULE, body);
  }

  static updateDevice(body: deviceBodyDT) {
    return axios.put(PATH.UPDATE_RES_DEVICE_ORGANIZE_MODULE, body);
  }

  static deleteDevice(id: string) {
    return axios.delete(PATH.DELETE_RES_DEVICE_ORGANIZE_MODULE, { params: { id: id } });
  }

}