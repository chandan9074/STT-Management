import { overTheTimeGData } from "../data/dashboard/overTheTimeGData";
import { createCollectData } from "../data/dashboard/createCollectData";
import * as PATH from "../helpers/APIURL";
import axios from "axios";
import { totalDataParamsDT } from "../types/dashboardTypes";


export default class DashboardService {
  static getOverTheTimeData(
    module: string,
    role: string,
    year?: number,
    month?: string
  ) {
    return overTheTimeGData;
  }
  static getCollectCreateData() {
    return createCollectData;
  }

  static getTotalDataCollection(data:totalDataParamsDT){
    return axios.get(
      `${PATH.GET_TOTAL_DATA_URL}/?role=${data.role}&module=${data.module}`
    );
  }
}
