import axios from "axios";
import * as PATH from "../helpers/APIURL";
import { roleParamDT } from "../types/organizerTypes";

export default class OrganizerService {

    static createRole(params: roleParamDT) {
        return axios.post(PATH.CREATE_ROLE_URL, params);
      }

}