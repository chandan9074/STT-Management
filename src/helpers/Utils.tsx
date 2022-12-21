import {roleDT} from "../types/billingTypes";

export const isEmpty = (obj: roleDT | undefined) => {
    if (obj) {
        return Object.keys(obj).length === 0;
    }  else {
        return true;
    }
}