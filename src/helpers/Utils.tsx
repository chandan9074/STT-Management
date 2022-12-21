import moment from "moment";
import {roleDT} from "../types/billingTypes";

export const isEmpty = (obj: roleDT | undefined) => {
    if (obj) {
        return Object.keys(obj).length === 0;
    }  else {
        return true;
    }
}
export const excelNameFormatter = (name:any, isDate:any) => {
    const date = moment
        .utc(moment(), "YYYY-MM-DD HH:mm:ss")
        .local()
        .format("D MMM YYYY hh:mm a");
    const formattedDate = date.split(" ").join("_");

    if (isDate) {
        return `${name}_${formattedDate}`;
    } else {
        return name;
    }
};
