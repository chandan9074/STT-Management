import React from "react";
import Icons from "../../assets/Icons";

type Props = {
  year: number;
  activeMonth: string;
  handleOverTheTimeData: (year: number, month: string) => void;
  handleYear: (year: number) => void;
  handleCalenderVisibility: () => void;
};

const MonthCalender = ({
  year,
  activeMonth,
  handleOverTheTimeData,
  handleYear,
  handleCalenderVisibility,
}: Props) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "Mei",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // const [currentYear, setCurrentYear] = React.useState(year);
  return (
    <div className=" p-6 bg-black rounded-[8px] shadow-light-blue-2">
      <div className="flex justify-between w-full mb-2 py-1">
        <button onClick={() => handleYear(year - 1)}>
          <img src={Icons.left_indicator} alt="" className="py-1.5 px-1.5" />
        </button>
        <h3 className="text-base font-medium text-white mb-0">{year}</h3>
        <button onClick={() => handleYear(year + 1)}>
          <img src={Icons.right_indicator} alt="" className="py-1.5 px-1.5" />
        </button>
      </div>
      <div className="flex items-center gap-x-1 mb-1">
        {months.slice(0, 4).map((month, index) => (
          <button
            onClick={() => {
              handleOverTheTimeData(year, month);
              handleCalenderVisibility();
            }}
            className={`text-base text-white font-medium w-[85px] h-[51px] ${
              activeMonth === month ? "bg-secondary-blue-50" : ""
            } rounded-[4px] duration-300 hover:bg-black-60`}
          >
            {month.slice(0, 3)}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-x-1 mb-1">
        {months.slice(4, 8).map((month, index) => (
          <button
            onClick={() => {
              handleOverTheTimeData(year, month);
              handleCalenderVisibility();
            }}
            className={`text-base text-white font-medium w-[85px] h-[51px] ${
              activeMonth === month ? "bg-secondary-blue-50" : ""
            } rounded-[4px] duration-300 hover:bg-black-60`}
          >
            {month.slice(0, 3)}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-x-1">
        {months.slice(8, 12).map((month, index) => (
          <button
            onClick={() => {
              handleOverTheTimeData(year, month);
              handleCalenderVisibility();
            }}
            className={`text-base text-white font-medium w-[85px] h-[51px] ${
              activeMonth === month ? "bg-secondary-blue-50" : ""
            } rounded-[4px] duration-300 hover:bg-black-60`}
          >
            {month.slice(0, 3)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MonthCalender;
