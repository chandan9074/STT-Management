import moment from "moment";

export const isEmpty = (obj: any) => {
    return Object.keys(obj).length === 0;
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