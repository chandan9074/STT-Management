import { overTheTimeGData } from "../data/dashboard/overTheTimeGData";
import { createCollectData } from "../data/dashboard/createCollectData";

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
}
