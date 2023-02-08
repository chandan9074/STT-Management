import axios from "axios";
import * as PATH from "../helpers/APIURL";

export default class ScriptService {
  static uploadCsv(formData: any) {
    axios.post(PATH.UPLOAD_SCRIPT_CSV_FILE_URL, formData);
  }
}
