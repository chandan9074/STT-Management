// import axios from "axios";
// import * as PATH from "../Helpers/apiURL";
// import {LOGIN_URL} from "../Helpers/apiURL";
import { amountDisbursed } from "../data/billing/timeAmountDisbursed";

export default class BillingService {

    static amountDisbursed() {
        return amountDisbursed;
    }

}