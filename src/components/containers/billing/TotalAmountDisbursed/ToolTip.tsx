import React from "react";
import Icons from "../../../../assets/Icons";
import { yearDataDT, yearlyDataDT } from "../../../../types/billingTypes";

type ToolTipProps = {
  currentData: yearlyDataDT;
  barHeight: number;
  item: yearDataDT;
  i: number;
  maxBar: number;
};

const ToolTip = ({ currentData, barHeight, item, i, maxBar }: ToolTipProps) => {
  return (
    <div
      className={`rounded-[12px] px-5 py-4 bg-[#212121] absolute ${
        currentData.yearData.length - 2 <= i &&
        Math.round(barHeight / 2) >=
          Math.round(
            (barHeight * item.disbursed[maxBar]?.amount) /
              currentData?.maxAmount
          )
          ? "-right-6"
          : Math.round(barHeight / 2) <=
            Math.round(
              (barHeight * item.disbursed[maxBar]?.amount) /
                currentData?.maxAmount
            )
          ? "right-10 -top-3"
          : ""
      } z-[90] hidden group-hover:block animate-fadeIn`}
      style={{
        bottom: `${
          item.disbursed[maxBar]
            ? Math.round(barHeight / 2) >
              Math.round(
                (barHeight * item.disbursed[maxBar]?.amount) /
                  currentData?.maxAmount
              )
              ? Math.round(
                  (barHeight * item.disbursed[maxBar]?.amount) /
                    currentData?.maxAmount
                ) + 18
              : ""
            : ""
        }px`,
      }}
    >
      <div className="flex items-center">
        <h1 className="text-base text-white mb-0 flex mr-4">
          Disbursed:
          <span className="font-bold flex ml-2">
            <span className="mr-1.5">BDT</span> {item.totalDisbursed}
          </span>
        </h1>
        <h1 className="text-base text-white mb-0 flex">
          Valid:
          <span className="font-bold flex ml-2">{item.validHours}hr</span>
        </h1>
      </div>
      {item.disbursed.map((data, i) => (
        <div
          className={`${
            i === 0 ? "mt-4 bg-winter-wizard" : "mt-0.5 bg-blue-gray-85"
          } flex justify-between w-[300px] bg-opacity-25 py-1.5 px-2 rounded-[4px]`}
        >
          <h3 className="flex items-center text-winter-wizard text-base font-medium mb-0">
            <span className="mr-1">{data.day}</span>
            <span>{item.month}</span>
          </h3>
          <h3 className="flex items-center text-winter-wizard text-base font-medium mb-0">
            <span className="mr-1">{data.hours}</span>
            hr
          </h3>
          <h3 className="flex items-center text-winter-wizard text-base font-medium mb-0">
            {data.amount}/-
          </h3>
        </div>
      ))}
      {/* <div className="mt-4 flex justify-between w-[300px] bg-winter-wizard bg-opacity-25 py-1.5 px-2 rounded-[4px]">
        <h3 className="flex items-center text-winter-wizard text-base font-medium mb-0">
          <span className="mr-1">{item.disbursed[0].day}</span>
          <span>{item.month}</span>
        </h3>
        <h3 className="flex items-center text-winter-wizard text-base font-medium mb-0">
          <span className="mr-1">{item.disbursed[0].hours}</span>
          hr
        </h3>
        <h3 className="flex items-center text-winter-wizard text-base font-medium mb-0">
          {item.disbursed[0].amount}/-
        </h3>
      </div>
      <div className="mt-0.5 flex justify-between w-[300px] bg-blue-gray-85 py-1.5 px-2 rounded-[4px]">
        <h3 className="flex items-center text-winter-wizard text-base font-medium mb-0">
          <span className="mr-1">{item.disbursed[1].day}</span>
          <span>{item.month}</span>
        </h3>
        <h3 className="flex items-center text-winter-wizard text-base font-medium mb-0">
          <span className="mr-1">{item.disbursed[1].hours}</span>
          hr
        </h3>
        <h3 className="flex items-center text-winter-wizard text-base font-medium mb-0">
          {item.disbursed[1].amount}/-
        </h3>
      </div> */}
      <img
        src={Icons.blackDropArrow}
        alt=""
        className={`w-10 h-6 absolute ${
          Math.round(barHeight / 2) <=
          Math.round(
            (barHeight * item.disbursed[maxBar]?.amount) /
              currentData?.maxAmount
          )
            ? "-right-6 -rotate-[90deg] top-1/2 transform -translate-y-1/2"
            : currentData.yearData.length - 2 <= i
            ? "right-3 -bottom-3.5"
            : "left-1/2 -bottom-3.5 transform -translate-x-1/2"
        }`}
      />
    </div>
  );
};

export default ToolTip;
