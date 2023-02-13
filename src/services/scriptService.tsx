import axios from "axios";
import * as PATH from "../helpers/APIURL";
import { getAllScriptsParamsDT } from "../types/script";


export default class ScriptService {
  static uploadCsv(formData: any) {
    // const res = axios.get(GET_TOTAL_AMOUNT_DISBURSEMENTS_URL);
    // return res;
    // for (const value of formData.values()) {
    //   console.log(value);
    // }
    // console.log(formData);
  }

  static getAllScript(data: getAllScriptsParamsDT) {
    return axios.get(PATH.GET_ALL_SCRIPTS_URL, { params: data });
  }
}
