// import * as PATH from "../Helpers/apiURL";
// import {LOGIN_URL} from "../Helpers/apiURL";
import {amountDisbursed} from "../data/billing/timeAmountDisbursed";
import axios from "axios";
import {GET_ALL_BILLING_INFO_URL, GET_LAST_BILLING_INFO_URL} from "../helpers/APIURL";
import {allBillingParamsDT, lastBillingParamsDT} from "../types/billingTypes";


export default class BillingService {

    static amountDisbursed() {
        return amountDisbursed;
    }

    static allBillingInfo(data:allBillingParamsDT){
        return axios.get(`${GET_ALL_BILLING_INFO_URL}/?pageSize=${data.pageSize}&type=${data.type}&role=${data.role}`);
    }
    static lastBillingInfo(data:lastBillingParamsDT){
        return axios.get(`${GET_LAST_BILLING_INFO_URL}/?page=${data.page}&pageSize=${data.pageSize}&type=${data.type}&role=${data.role}`);
    }

}