import moment from "moment";
import { tableColorProperty } from "../data/dashboard/tableColorProperty";
import { colorForTitle } from "../data/dashboard/colorForTitle";
import { homeDistrictTypes } from "../types/userManagementTypes";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toast } from "../components/Toast";
import { statusColorsData } from "../data/audioManagement/AudioManagementData";
import { makeStyles } from '@material-ui/core/styles';

export const isEmpty = (obj: any) => {
  if (obj) {
    return Object.keys(obj).length === 0;
  } else {
    return true;
  }
};
export const excelNameFormatter = (name: string, isDate: boolean) => {
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

export const getDateWithMonthName2 = (date: string) => {
  const splitData = date?.split("-");
  const month = moment.months()[parseInt(splitData[1]) - 1];
  // const year = splitData[0];
  const day = splitData[2];

  return `${day} ${month?.slice(0, 3)}`;
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
    return `${splitData[2]}-${newMonth}-${splitData[0]}`;
  }
};

export function camelizeWithUnderScore(text: string) {
  let newStr = text.split(/(?=[A-Z])|[^a-zA-Z0-9]+/).join(" ");

  const a = newStr.toLowerCase()
    .replace(/[-_\s.]+(.)?/g, (_, c) => c ? ` ${c.toUpperCase()}` : '');
  return a.substring(0, 1).toUpperCase() + a.substring(1);
}

export const homeDistrictSearch = (value: string, data: homeDistrictTypes[]) => {
  const searchTerm = value;
  const matchingDistricts = data.filter((districtObj: homeDistrictTypes) =>
    districtObj.district.some((district: string) => district.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  const matchedDistrict = matchingDistricts.map((districtObj: homeDistrictTypes) => {
    return {
      division: districtObj.division,
      district: districtObj.district.filter((district: string) => district.toLowerCase().includes(searchTerm.toLowerCase()))
    }
  });

  return matchedDistrict;
}


export const compareWithCurrentMonthYear = (mn: string, yr: number) => {
  const month = Number(new Date(Date.parse(mn + " 1, 2012")).getMonth() + 1);
  const year = yr;
  const currentMonth = Number(moment().format("MM"));
  const currentYear = Number(moment().format("YYYY"));

  if (year < currentYear) {
    return false;
  } else if (year === currentYear) {
    if (month <= currentMonth) {
      return false;
    }
    return true;
  } else {
    return true;
  }

  // if (year <= currentYear) {
  //   if (month <= currentMonth) {
  //     return false;
  //   }
  //   return true;
  // } else {
  //   return true;
  // }
}

let previous = 0;
let currentState = 0;

export const getRandomInt = (min: number, max: number, current: number) => {
  if (current === currentState) {
    return previous;
  }
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  while (random === previous) {
    random = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  previous = random;
  currentState = current;

  return random;
}

export const handleIncDecMonth = (month: string, year: number, type: string) => {
  let newMonth = new Date(Date.parse(month + ' 1, 2022')).getMonth() + 1;
  let monthNumber = new Date(Date.parse(month + ' 1, 2022')).getMonth() + 1;
  let newYear = year;

  if (type === "inc") {
    if (monthNumber === 12) {
      newMonth = 1;
      newYear = year + 1;
    } else {
      newMonth = monthNumber + 1;
    }
  } else {
    if (monthNumber === 1) {
      newMonth = 12;
      newYear = year - 1;
    } else {
      newMonth = monthNumber - 1;
    }
  }
  const date = new Date(newYear, newMonth - 1);
  const newMonthName = date.toLocaleString('default', { month: 'long' });
  return { newMonthName, newYear };
}

export const callingToast = (message: string) => {
  toast(<Toast.Type1 massage={message} />, {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeButton: false,
    className: "bg-blue-500",
    style: {
      padding: '0px',
    },
    bodyStyle: {
      backgroundColor: 'black',
      padding: '0px',
      display: 'flex',
      justifyContent: 'center',
    }
  })
}

export const urlPatternValidation = (url: string) => {
  const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
  return regex.test(url);
};

export const getStatusColor = (status: string, type: "bg" | "bullet" | "text") => {
  const data = statusColorsData.find((item) => item.name === status)
  console.log("color-------------------", data);

  if (data) {
    if (type === "bg") {
      return data.bgColor
    } else if (type === "bullet") {
      return data.bulletColor
    } else if (type === "text") {
      return data.textColor
    } else {
      return ""
    }
  }
}

export const getDateRangeInMonthFormate = (date: { start: string, end: string }) => {
  const startDate = date.start;
  const endDate = date.end;
  const startMonth = new Date(startDate.split('-').reverse().join('-')).toLocaleString("default", { month: "short" });
  const endMonth = new Date(endDate.split('-').reverse().join('-')).toLocaleString("default", { month: "short" });
  console.log(date, "date", startDate, endDate)
  console.log("startMonth", startMonth, "endMonth", endMonth)
  if (startMonth && endMonth) {
    if (startDate.split("-")[2] === endDate.split("-")[2]) {
      return `${startDate.split("-")[0]} ${startMonth} - ${endDate.split("-")[0]} ${endMonth} ${startDate.split("-")[2]}`
    }
    return `${startDate.split("-")[0]} ${startMonth} ${startDate.split("-")[2]} - ${endDate.split("-")[0]} ${endMonth} ${endDate.split("-")[2]}`;
  }
}

export const customMuiListStyle = makeStyles({
  option: {
      color: '#464E5F',
      fontSize: '14px',
      fontWeight: 500,
  },
});



