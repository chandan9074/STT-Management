import React, { useState, useContext } from "react";
import Icons from "../../../../assets/Icons";
import MonthCalender from "../../../calender/MonthCalender";
import { CommonContext } from "../../../../context/CommonProvider";
import { DashboardContext } from "../../../../context/DashboardProvider";
import Buttons from "../../../Buttons";

type Props = {
  year: number;
  activeMonth: string;
};

const Header = ({ year, activeMonth }: Props) => {
  // const [calender, setCalender] = React.useState(false);
  const [calenderBtn, setCalenderBtn] = useState(false);
  const [currentYear, setCurrentYear] = useState(year);

  const commonContext = useContext(CommonContext);
  const dashboardContext = useContext(DashboardContext);

  const handleYear = (year: number) => {
    setCurrentYear(year);
  };

  const handleCalenderVisibility = () => {
    setCalenderBtn(!calenderBtn);
  }

  const handleOverTheTimeData = (year: number, month: string) => {
    dashboardContext.getOverTheTimeData(
      commonContext.type,
      commonContext.role,
      year,
      month
    );
  };

  return (
    <div className="flex justify-between items-center relative">
      <div className="flex items-center">
        <h1 className="text-base font-semibold text-ct-blue-45 mb-0 ml-3">
          Over the time
        </h1>
        <div className="flex items-center ml-7">
          <div className="w-2 h-2 rounded-full bg-green-A10 mr-2" />
          <h3 className="text-xxs font-medium text-ct-blue-90 mb-0">Valid</h3>
        </div>
        <div className="flex items-center ml-7">
          <div className="w-2 h-2 rounded-full bg-orange-A10 mr-2" />
          <h3 className="text-xxs font-medium text-ct-blue-90 mb-0">Invalid</h3>
        </div>
        <div className="flex items-center ml-7">
          <div className="w-2 h-2 rounded-full bg-secondary-blue-50 mr-2" />
          <h3 className="text-xxs font-medium text-ct-blue-90 mb-0">
            Not Checked
          </h3>
        </div>
      </div>
      <div
        onMouseDown={() => setCalenderBtn(!calenderBtn)}
        className={`fixed top-0 left-0 w-full h-full bg-transparent bg-opacity-50 z-[80] animate-fadeIn ${calenderBtn ? "block" : "hidden"
          }`}
      ></div>
      <div className="flex items-center relative z-[80]">
        <button>
          <img src={Icons.left_indicator} alt="" className="py-1.5 px-1.5" />
        </button>
        <Buttons.Date activeMonth={activeMonth} year={year} calenderBtn={calenderBtn} setCalenderBtn={setCalenderBtn} />
        <button>
          <img src={Icons.right_indicator} alt="" className="py-1.5 px-1.5" />
        </button>
      </div>

      <div
        className={`absolute right-0 top-11 z-[100] ${calenderBtn ? "block" : "hidden"
          } animate-fadeIn`}
      >
        <MonthCalender
          year={currentYear}
          handleYear={handleYear}
          activeMonth={activeMonth}
          handleOverTheTimeData={handleOverTheTimeData}
          handleCalenderVisibility={handleCalenderVisibility}
        />
      </div>
    </div>
  );
};

export default Header;
