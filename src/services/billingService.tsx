import { GET_TOTAL_AMOUNT_DISBURSEMENTS_URL } from "../helpers/APIURL";
import axios from "axios";

export default class BillingService {
  static amountDisbursed() {
    const res = axios.get(GET_TOTAL_AMOUNT_DISBURSEMENTS_URL);
    return res;
    // return amountDisbursed;
  }
}
