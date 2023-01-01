import { overTheTimeGData } from "../data/dashboard/overTheTimeGData";

export default class DashboardService {
  static getOverTheTimeData(
    module: string,
    role: string,
    year?: number,
    month?: string
  ) {
    return overTheTimeGData;
  }
}
