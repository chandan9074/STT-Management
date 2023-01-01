import moment from "moment";
import {roleDT} from "../types/billingTypes";

export const isEmpty = (obj: roleDT | undefined) => {
    if (obj) {
        return Object.keys(obj).length === 0;
    } else {
        return true;
    }
}
export const excelNameFormatter = (name: any, isDate: any) => {
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

export const getValueFromPercentage = (maxValue: number, percentage: number[]) => {
    return percentage?.map(value => {
        return (maxValue * value) / 100;
    });
}

// export const getValueFromHeight = (barHeight: number, maxValue:number, value: number) => {
export const getValueFromHeight = (barHeight: number, data: number[]) => {
    const max = Math.max(...data);
    return data?.map(value => {
        return ((barHeight * value) / max)
    })
    // return ((barHeight * value) / maxValue)
}
