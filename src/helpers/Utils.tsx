import exp from "constants";
import moment from "moment";
import { tableColorProperty } from "../data/dashboard/tableColorProperty";
import { roleDT } from "../types/billingTypes";
import { colorForTitle } from "../data/dashboard/colorForTitle";

export const isEmpty = (obj: roleDT | undefined) => {
  if (obj) {
    return Object.keys(obj).length === 0;
  } else {
    return true;
  }
};
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

export const getValueFromPercentage = (maxValue: number, data: number[]) => {
  return data?.map((value) => {
    return (maxValue * value) / 100;
  });
};

// export const getValueFromHeight = (barHeight: number, maxValue:number, value: number) => {
export const getValueFromHeight = (barHeight: number, data: number[]) => {
  const max = Math.max(...data);
  return data?.map((value) => {
    return (barHeight * value) / max;
  });
  // return ((barHeight * value) / maxValue)
};

export const getYearMonthDate = (date: string) => {
  const splitData = date.split("-").reverse().join("-").toString();
  return splitData;
};

export const getDateWithMonthName = (date: string) => {
  const splitData = date.split("-");
  const month = moment.months()[parseInt(splitData[1]) - 1];
  const day = splitData[0];
  const year = splitData[2];

  return `${day} ${month} ${year}`;
};

export const getTitleColor = (value: string, children: boolean) => {
  if (children) {
    const data = colorForTitle.filter((item) => item.name === value);
    if (data[0].children) {
      return data[0]?.children.hoverBg + " " + data[0]?.children.bgColor;
    } else {
      return "";
    }
  } else {
    const data = colorForTitle.filter((item) => item.name === value);
    return data[0]?.bgColor + " hover:" + data[0]?.hoverBg;
  }
};

export const getValidBgColor = (value: string) => {
  const data = colorForTitle.filter((item) => item.name === value)[0];
  console.log(data);
  return data?.ttValidBg;
};
export const getValueFromPercentages = (height: number, data: number) => {
  return (height * data) / 100;
};
export const getTableColorByName = (name: string) => {
  const data = tableColorProperty.find((value) => value.name === name);
  return data?.tableColor;
};

export const slugFormatter = (value: string) => {
  if (!value) return;

  const words = value.split("-");
  return words
    .map((value) => value[0].toUpperCase() + value.substring(1))
    .join(" ");
};

export const getMontNumberFormat = (date: string | undefined) => {
  if (date) {
    const splitData = date.split(" ");
    const month = new Date(`${date}`).getMonth() + 1;
    let newMonth;
    if (month > 0 && month <= 9) {
      newMonth = `0${month}`;
    } else {
      newMonth = month;
    }
    console.log("month", newMonth);
    return `${splitData[2]}-${newMonth}-${splitData[0]}`;
  }
};
