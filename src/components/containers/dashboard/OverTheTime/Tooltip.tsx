import React from "react";
import Icons from "../../../../assets/Icons";
import { dayDataDT, overTheTimeGDT } from "../../../../types/dashboardTypes";

const Tooltip = ({
  item,
  barHeight,
  overTheTimeGData,
  index,
}: {
  item: dayDataDT;
  barHeight: number;
  overTheTimeGData: overTheTimeGDT;
  index: number;
}) => {
  return (
    <div
      className={`absolute  px-5 py-6 rounded-[12px] bg-tooltip-bg hidden group-hover:block animate-fadeIn z-[90] ${
        index < 4
          ? "-left-5"
          : overTheTimeGData.dayData.length - 6 < index
          ? "-right-5"
          : ""
      }`}
      style={{
        bottom:
          item.hourData[0].hour &&
          item.hourData[1].hour &&
          item.hourData[2].hour
            ? Math.round(
                Math.round(barHeight * item.hourData[0]?.hour) /
                  overTheTimeGData.maxReceivedHour
              ) +
              Math.round(
                Math.round(barHeight * item.hourData[1]?.hour) /
                  overTheTimeGData.maxReceivedHour
              ) +
              Math.round(
                Math.round(barHeight * item.hourData[2]?.hour) /
                  overTheTimeGData.maxReceivedHour
              ) +
              17
            : 0,
      }}
    >
      <div className="flex items-center">
        <h3 className="text-small text-white mb-0">Received: </h3>
        <h5 className="text-base text-white mb-0 font-semibold">
          {item.receivedHour}h
        </h5>
      </div>
      <div className="mt-4 flex items-center gap-x-1">
        {item.hourData.map((hourItem, index) => (
          <div
            className={`py-1 px-2 rounded-[4px] w-[100px] ${
              hourItem.title === "Valid"
                ? "bg-green-bg-O25"
                : hourItem.title === "Invalid"
                ? "bg-orange-A10-O25"
                : "bg-winter-wizard-O25"
            }`}
          >
            <h3 className="text-xxs text-white mb-1">{hourItem.title}</h3>
            <h3 className="text-base text-white mb-0 font-semibold">
              {hourItem.hour}h
            </h3>
          </div>
        ))}
        <div className="py-1 px-2 rounded-[4px] bg-purple-bg-O18 w-[100px]">
          <h3 className="text-xxs text-white mb-1">Accuracy</h3>
          <h3 className="text-base text-white mb-0 font-semibold">
            {item.accuracy}%
          </h3>
        </div>
      </div>
      <div className="border border-[#5F6B7D8C] border-dashed mt-5" />
      <div className="mt-2 flex items-center">
        <img src={Icons.schedule} alt="schedule" className="mr-2" />
        <h3 className="text-small text-white mb-0">
          Last Update: {item.lastUpdate}
        </h3>
      </div>
      <img
        src={Icons.blackDropArrow}
        alt=""
        className={`w-10 h-6 absolute -bottom-3.5 ${
          index < 4
            ? "left-5"
            : overTheTimeGData.dayData.length - 6 < index
            ? "right-5"
            : "left-1/2 transform -translate-x-1/2"
        }`}
      />
    </div>
  );
};

export default Tooltip;
