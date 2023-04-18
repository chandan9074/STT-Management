import { targetSpeechData } from "../data/assign/AssignData";
import { userManagementTable } from "../data/userManagement/UserManagementData";
import { activityData } from "../data/userManagement/activityData";

export default class UserManagementService {
  static getActivityStatistics(id: string) {
    return activityData;
  }

  static getUserTargetPendingSpeeches(id: string) {
    // const res = axios.get(PATH.GET_USER_TARGET_PENDING_SPEECHES_URL, { params: { id: id } });
    // return res;
    return targetSpeechData;
  }

  static getUserManagementTable(){
    return userManagementTable;
  }
}
