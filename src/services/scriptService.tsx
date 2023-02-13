import axios from "axios";
import * as PATH from "../helpers/APIURL";
import { getAllScriptsParamsDT } from "../types/script";


export default class ScriptService {
  static uploadCsv(formData: any) {
    axios.post(PATH.UPLOAD_SCRIPT_CSV_FILE_URL, formData);
  }

  static getAllScript(data: getAllScriptsParamsDT) {
    return axios.get(PATH.GET_ALL_SCRIPTS_URL, { params: data });
  }
}
