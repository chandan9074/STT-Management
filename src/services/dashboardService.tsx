import * as PATH from "../helpers/APIURL";
import axios from "axios";
import {
  totalDataParamsDT,
  createCollectParamsDT,
} from "../types/dashboardTypes";
import { GET_OVER_THE_TIME_DATA_URL } from "../helpers/APIURL";

export default class DashboardService {
  static getOverTheTimeData(
    module: string,
    role: string,
    year?: number,
    month?: string
  ) {
    // return overTheTimeGData;
    const res = axios.get(
      `${GET_OVER_THE_TIME_DATA_URL}/?role=${role}&module=${module}${year ? `&year=${year}` : ""
      }${month ? `&month=${month}` : ""}`
    );
    return res;
  }

  static getTotalDataCollection(params: totalDataParamsDT) {
    return axios.get(PATH.GET_TOTAL_DATA_URL, { params });
  }

  static getCreateCollectData(data: createCollectParamsDT) {
    return axios.get(PATH.GET_CREATE_COLLECT_DATA_URL, { params: data });
  }
}
