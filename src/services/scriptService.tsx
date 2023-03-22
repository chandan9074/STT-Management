import axios from "axios";
import * as PATH from "../helpers/APIURL";
import { getAllScriptsParamsDT, scriptParamDT } from "../types/script";


export default class ScriptService {
  static uploadCsv(formData: FormData) {
    axios.post(PATH.UPLOAD_SCRIPT_CSV_FILE_URL, formData);
  }

  static getAllScript(data: getAllScriptsParamsDT) {
    return axios.get(PATH.GET_ALL_SCRIPTS_URL, { params: data });
  }

  static createScript(params: FormData) {
    return axios.post(PATH.CREATE_SCRIPTS_URL, params);
  }

  static getScriptById(params: scriptParamDT) {
    return axios.get(PATH.GET_SCRIPT_BY_ID, { params: params });
  }

  static UpdateScript(params: FormData) {
    return axios.put(PATH.UPDATE_SCRIPT_URL, params);
  }
}
