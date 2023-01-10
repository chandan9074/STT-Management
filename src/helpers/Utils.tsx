import moment from "moment";
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

export const getValueFromPercentage = (
  maxValue: number,
  percentage: number[]
) => {
  return percentage?.map((value) => {
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
  const year = splitData[0];
  const day = splitData[2];

  return `${day} ${month} ${year}`;
};

export const getTitleColor = (value: string, children: boolean) => {
  if (children) {
    const data = colorForTitle.filter((item) => item.name === value);
    return data[0]?.children.hoverBg + " " + data[0]?.children.bgColor;
  } else {
    const data = colorForTitle.filter((item) => item.name === value);
    const a = data[0]?.bgColor + " hover:" + data[0]?.hoverBg;
    console.log("nice", a.split(" ")[0].split("-")[1]);
    return data[0]?.bgColor + " hover:" + data[0]?.hoverBg;
  }
};
