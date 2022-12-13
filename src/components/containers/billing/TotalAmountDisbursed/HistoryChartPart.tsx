import { yearlyDataDT } from "../../../../types/billingTypes";
import Icons from "../../../../assets/Icons";
import Dropdown from "../../../Dropdown";

const HistoryChartPart = ({
  currentData,
  yearList,
}: {
  currentData: yearlyDataDT;
  yearList: number[];
}) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h3 className="text-base font-semibold text-ct-blue-05 mb-0 mr-7">
            Over the time
          </h3>
          <div className="flex items-center mr-6">
            <div className="w-2 h-2 rounded-full bg-sea-serpent mr-2" />
            <h5 className="text-xxs font-medium text-ct-blue-10 mb-0">
              1st Disbursement
            </h5>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-sea-foam-green mr-2" />
            <h5 className="text-xxs font-medium text-ct-blue-10 mb-0">
              2nd Disbursement
            </h5>
          </div>
        </div>
        <Dropdown.Type1 data={yearList} />
      </div>
      <div className="mt-6 h-32 w-full flex items-start">
        <div className="flex flex-col justify-between items-start h-full">
          <h3 className="text-xxs text-ct-blue-20 mb-0 mr-2">
            {currentData?.maxDisbursed}/-
          </h3>
          <h3 className="text-xxs text-ct-blue-20 mb-0 mr-2">
            {currentData?.maxDisbursed
              ? Math.round(currentData?.maxDisbursed / 2) +
                Math.round((currentData?.maxDisbursed * 16) / 125)
              : 0}
            /-
          </h3>
          <h3 className="text-xxs text-ct-blue-20 mb-0 mr-2">
            {currentData?.maxDisbursed
              ? Math.round((currentData?.maxDisbursed * 16) / 125)
              : 0}
            /-
          </h3>
        </div>
        <div className="w-full h-full flex flex-col justify-between relative">
          <div className="h-0.5 border-t border-dotted border-ct-blue-70 w-full mt-2" />
          <div className="h-0.5 border-t border-dotted border-ct-blue-70 w-full" />
          <div className="h-0.5 border-t border-dotted border-ct-blue-70 w-full mb-2" />
          <div className="absolute -bottom-9 left-0 flex justify-between w-full px-2">
            {currentData?.yearData.map((item, i) => (
              <div className={`flex flex-col items-center`}>
                <div
                  className={`w-4 h-[125px] bg-ct-blue-70 bg-opacity-40 rounded-t-[3px] relative flex ${
                    currentData.yearData.length - 2 <= i
                      ? "justify-end"
                      : // : i === 0
                        // ? "justify-start"
                        "justify-center"
                  } group cursor-pointer`}
                >
                  {item.monthlyDisbursed[0] && !item.monthlyDisbursed[1] ? (
                    <div
                      className={`rounded-[12px] px-5 py-4 bg-[#212121] absolute ${
                        currentData.yearData.length - 2 <= i ? "-right-6" : ""
                      } z-50 hidden group-hover:block animate-fadeIn`}
                      style={{
                        bottom: `${
                          item.monthlyDisbursed[0]
                            ? Math.round(
                                (125 * item.monthlyDisbursed[0]?.amount) /
                                  currentData?.maxDisbursed
                              ) + 18
                            : 0
                        }px`,
                      }}
                    >
                      <div className="flex items-center">
                        <h1 className="text-base text-white mb-0 flex mr-4">
                          Disbursed:
                          <span className="font-bold flex ml-2">
                            <span className="mr-1.5">BDT</span>{" "}
                            {item.totalDisbursed}
                          </span>
                        </h1>
                        <h1 className="text-base text-white mb-0 flex">
                          Valid:
                          <span className="font-bold flex ml-2">
                            {item.validHours}hr
                          </span>
                        </h1>
                      </div>
                      <div className="mt-4 flex justify-between w-[300px] bg-winter-wizard bg-opacity-25 py-1.5 px-2 rounded-[4px]">
                        <h3 className="flex items-center text-winter-wizard text-base font-medium mb-0">
                          <span className="mr-1">{item.monthlyDisbursed[0].day}</span>
                          <span>{item.month}</span>
                        </h3>
                        <h3 className="flex items-center text-winter-wizard text-base font-medium mb-0">
                          <span className="mr-1">
                            {item.monthlyDisbursed[0].hours}
                          </span>
                          hr
                        </h3>
                        <h3 className="flex items-center text-winter-wizard text-base font-medium mb-0">
                          {item.monthlyDisbursed[0].amount}/-
                        </h3>
                      </div>
                      <img
                        src={Icons.blackDropArrow}
                        alt=""
                        className={`w-10 h-6 absolute -bottom-3.5 ${
                          currentData.yearData.length - 2 <= i
                            ? "right-3"
                            : "left-1/2 transform -translate-x-1/2"
                        }`}
                      />
                    </div>
                  ) : null}

                  <div
                    className={`absolute z-40 w-full  bg-[#59C1BD] bottom-0 ${
                      !item.monthlyDisbursed[1] ? "rounded-t-[3px]" : ""
                    }`}
                    style={{
                      height: `${
                        item.monthlyDisbursed[0]
                          ? Math.round(
                              (125 * item.monthlyDisbursed[0]?.amount) /
                                currentData?.maxDisbursed
                            )
                          : 0
                      }px`,
                    }}
                  />
                  {item.monthlyDisbursed[1] && item.monthlyDisbursed[0] ? (
                    <div
                      className={`rounded-[12px] px-5 py-4 bg-[#212121] absolute ${
                        currentData.yearData.length - 2 <= i ? "-right-6" : ""
                      } z-50  hidden group-hover:block animate-fadeIn`}
                      style={{
                        bottom: `${
                          item.monthlyDisbursed[1]
                            ? Math.round(
                                (125 * item.monthlyDisbursed[1]?.amount) /
                                  currentData?.maxDisbursed
                              ) + 18
                            : 0
                        }px`,
                      }}
                    >
                      <div className="flex items-center">
                        <h1 className="text-base text-white mb-0 flex mr-4">
                          Disbursed:
                          <span className="font-bold flex ml-2">
                            <span className="mr-1.5">BDT</span>{" "}
                            {item.totalDisbursed}
                          </span>
                        </h1>
                        <h1 className="text-base text-white mb-0 flex">
                          Valid:
                          <span className="font-bold flex ml-2">
                            {item.validHours}hr
                          </span>
                        </h1>
                      </div>
                      <div className="mt-4 flex justify-between w-[300px] bg-winter-wizard bg-opacity-25 py-1.5 px-2 rounded-[4px]">
                        <h3 className="flex items-center text-winter-wizard text-base font-medium mb-0">
                          <span className="mr-1">{item.monthlyDisbursed[0].day}</span>
                          <span>{item.month}</span>
                        </h3>
                        <h3 className="flex items-center text-winter-wizard text-base font-medium mb-0">
                          <span className="mr-1">
                            {item.monthlyDisbursed[0].hours}
                          </span>
                          hr
                        </h3>
                        <h3 className="flex items-center text-winter-wizard text-base font-medium mb-0">
                          {item.monthlyDisbursed[0].amount}/-
                        </h3>
                      </div>
                      <div className="mt-0.5 flex justify-between w-[300px] bg-blue-gray-85 py-1.5 px-2 rounded-[4px]">
                        <h3 className="flex items-center text-winter-wizard text-base font-medium mb-0">
                          <span className="mr-1">{item.monthlyDisbursed[1].day}</span>
                          <span>{item.month}</span>
                        </h3>
                        <h3 className="flex items-center text-winter-wizard text-base font-medium mb-0">
                          <span className="mr-1">
                            {item.monthlyDisbursed[1].hours}
                          </span>
                          hr
                        </h3>
                        <h3 className="flex items-center text-winter-wizard text-base font-medium mb-0">
                          {item.monthlyDisbursed[1].amount}/-
                        </h3>
                      </div>
                      <img
                        src={Icons.blackDropArrow}
                        alt=""
                        className={`w-10 h-6 absolute -bottom-3.5 ${
                          currentData.yearData.length - 2 <= i
                            ? "right-3"
                            : "left-1/2 transform -translate-x-1/2"
                        }`}
                      />
                    </div>
                  ) : null}
                  <div
                    className={`absolute z-30 w-full bg-[#A0E4CB] rounded-t-[3px] bottom-0`}
                    style={{
                      height: `${
                        item.monthlyDisbursed[1]
                          ? Math.round(
                              (125 * item.monthlyDisbursed[1]?.amount) /
                                currentData?.maxDisbursed
                            )
                          : 0
                      }px`,
                    }}
                  />
                  {/* </Popover> */}
                </div>
                <h5 className="text-ct-blue-20 text-xxs mb-0 mt-3">
                  {item.month}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryChartPart;
