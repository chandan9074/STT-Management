import { activityData } from "../data/userManagement/activityData";

export default class UserManagementService {
  static getActivityStatistics(id: string) {
    return activityData;
  }
}
 