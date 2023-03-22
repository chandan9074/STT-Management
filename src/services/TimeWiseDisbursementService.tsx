import axios from "axios";
import { GET_ROLE_LIST_URL, GET_TIME_WISE_DISBURSEMENTS_URL } from "../helpers/APIURL";
import { roleParamsDT, timeWiseDisbursementParamsDT } from "../types/billingTypes";

export default class TimeWiseDisbursementService {

    static getManagerDisbursement(params: timeWiseDisbursementParamsDT) {
        return axios.get(GET_TIME_WISE_DISBURSEMENTS_URL, { params })
    }


    static getManager(params: roleParamsDT) {
        return axios.get(GET_ROLE_LIST_URL, { params });
    }
}