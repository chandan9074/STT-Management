import axios from "axios";
import {GET_TIME_WISE_DISBURSEMENTS_URL} from "../helpers/APIURL";
import {managerData} from "../data/billing/timeWiseDisbursement";
import {roleDT, roleParamsDT, timeWiseDisbursementParamsDT} from "../types/billingTypes";

export default class TimeWiseDisbursementService {

    static getManagerDisbursement(params: timeWiseDisbursementParamsDT) {
        return axios.get(GET_TIME_WISE_DISBURSEMENTS_URL, {params})
        // return timeWiseDisbursement;
    }


    static getManager(params: roleParamsDT) {
        // return axios.get(GET_MANAGERS_URL, {params})
        return managerData;
    }

    static getManagerById(id: string) {
        // return axios.get(`${GET_MANAGER_BY_ID_URL}/${id}`);
        return (managerData.filter((m: roleDT) => m.id === id));
    }

    static deleteManager(id: any) {
        // return axios.delete(`${DELETE_BLOG_URL}/${id}`);
        return (managerData.data.filter((m: any) => m.id !== id));
    }
}