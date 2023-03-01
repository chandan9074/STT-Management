import { yearlyDataDT } from "../../../../types/billingTypes";
import Buttons from "../../../Buttons";
import Dropdown from "../../../Dropdown";
import ToolTip from "./ToolTip";
import { BillingContext } from "../../../../context/BillingProvider";
import { useContext } from "react";

const HistoryChartPart = ({
  currentData,
  yearList,
}: {
  currentData: yearlyDataDT;
  yearList: number[];
}) => {
  const barHeight = 125;
  const billingContext = useContext(BillingContext);

  const handleSelectedItem = (value: string) => {
    billingContext.handleAmountDropDown(parseInt(value));
  }

  return (
    <>
      <div className="flex items-center justify-between relative">
        <div className="flex items-center">
          <h3 className="text-heading-6 font-semibold text-ct-blue-05 mb-0 mr-7">
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
        <Dropdown.Type1 data={yearList.map((num => num.toString()))} handleSelectedItem={handleSelectedItem} top="top-8" width="w-[68px]" >
          <Buttons.DateDropdown.Primary current={currentData?.year} />
        </Dropdown.Type1>
      </div>
      <div className="mt-6 h-32 w-full flex items-start">
        <div className="flex flex-col justify-between items-start h-full">
          <h3 className="text-xxs text-ct-blue-20 mb-0 mr-2">
            {currentData?.maxAmount}/-
          </h3>
          <h3 className="text-xxs text-ct-blue-20 mb-0 mr-2">
            {currentData?.maxAmount
              ? Math.round(currentData?.maxAmount / 2) +
              Math.round((currentData?.maxAmount * 16) / barHeight)
              : 0}
            /-
          </h3>
          <h3 className="text-xxs text-ct-blue-20 mb-0 mr-2">
            {currentData?.maxAmount
              ? Math.round((currentData?.maxAmount * 16) / barHeight)
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
              <div key={i} className={`flex flex-col items-center`}>
                <div
                  className={`w-4 h-[125px] bg-ct-blue-70 bg-opacity-40 rounded-t-[3px] relative flex ${currentData.yearData.length - 2 <= i ||
                    Math.round(barHeight / 2) <=
                    Math.round(
                      (barHeight * item.disbursed[0]?.amount) /
                      currentData?.maxAmount
                    ) ||
                    Math.round(barHeight / 2) <=
                    Math.round(
                      (barHeight * item.disbursed[1]?.amount) /
                      currentData?.maxAmount
                    )
                    ? "justify-end"
                    : // : i === 0
                    // ? "justify-start"
                    "justify-center"
                    } group cursor-pointer`}
                >
                  {item.disbursed[0] && !item.disbursed[1] ? (
                    <ToolTip
                      barHeight={barHeight}
                      currentData={currentData}
                      maxBar={0}
                      i={i}
                      item={item}
                    />
                  ) : null}
                  <div
                    className={`absolute ${item.disbursed[0]?.amount > item.disbursed[1]?.amount
                      ? "z-30 rounded-t-[3px]"
                      : "z-40"
                      } w-full bg-[#59C1BD] bottom-0 ${!item.disbursed[1] ? "rounded-t-[3px]" : ""
                      } duration-300`}
                    style={{
                      height: `${item.disbursed[0]
                        ? Math.round(
                          (barHeight * item.disbursed[0]?.amount) /
                          currentData?.maxAmount
                        )
                        : 0
                        }px`,
                    }}
                  />
                  {item.disbursed[1] && item.disbursed[0] ? (
                    <ToolTip
                      barHeight={barHeight}
                      currentData={currentData}
                      i={i}
                      maxBar={
                        item.disbursed[1]?.amount > item.disbursed[0]?.amount
                          ? 1
                          : 0
                      }
                      item={item}
                    />
                  ) : null}
                  <div
                    className={`absolute ${item.disbursed[1]?.amount > item.disbursed[0]?.amount
                      ? "z-30 rounded-t-[3px]"
                      : "z-40"
                      } w-full bg-[#A0E4CB] bottom-0 duration-300`}
                    style={{
                      height: `${item.disbursed[1]
                        ? Math.round(
                          (barHeight * item.disbursed[1]?.amount) /
                          currentData?.maxAmount
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

// <div
//   className={`rounded-[12px] px-5 py-4 bg-[#212121] absolute ${
//     currentData.yearData.length - 2 <= i &&
//     Math.round(barHeight / 2) >=
//       Math.round(
//         (barHeight * item.disbursed[0]?.amount) /
//           currentData?.maxAmount
//       )
//       ? "-right-6"
//       : Math.round(barHeight / 2) <=
//         Math.round(
//           (barHeight * item.disbursed[0]?.amount) /
//             currentData?.maxAmount
//         )
//       ? "right-10 -top-3"
//       : ""
//   } z-[90] hidden group-hover:block animate-fadeIn`}
//   style={{
//     bottom: `${
//       item.disbursed[0]
//         ? Math.round(barHeight / 2) >
//           Math.round(
//             (barHeight * item.disbursed[0]?.amount) /
//               currentData?.maxAmount
//           )
//           ? Math.round(
//               (barHeight * item.disbursed[0]?.amount) /
//                 currentData?.maxAmount
//             ) + 18
//           : ""
//         : ""
//     }px`,
//   }}
// >
//   <div className="flex items-center">
//     <h1 className="text-base text-white mb-0 flex mr-4">
//       Disbursed:
//       <span className="font-bold flex ml-2">
//         <span className="mr-1.5">BDT</span>{" "}
//         {item.totalDisbursed}
//       </span>
//     </h1>
//     <h1 className="text-base text-white mb-0 flex">
//       Valid:
//       <span className="font-bold flex ml-2">
//         {item.validHours}hr
//       </span>
//     </h1>
//   </div>
//   <div className="mt-4 flex justify-between w-[300px] bg-winter-wizard bg-opacity-25 py-1.5 px-2 rounded-[4px]">
//     <h3 className="flex items-center text-winter-wizard text-base font-medium mb-0">
//       <span className="mr-1">{item.disbursed[0].day}</span>
//       <span>{item.month}</span>
//     </h3>
//     <h3 className="flex items-center text-winter-wizard text-base font-medium mb-0">
//       <span className="mr-1">
//         {item.disbursed[0].hours}
//       </span>
//       hr
//     </h3>
//     <h3 className="flex items-center text-winter-wizard text-base font-medium mb-0">
//       {item.disbursed[0].amount}/-
//     </h3>
//   </div>
//   <img
//     src={Icons.blackDropArrow}
//     alt=""
//     className={`w-10 h-6 absolute ${
//       Math.round(barHeight / 2) <=
//       Math.round(
//         (barHeight * item.disbursed[0]?.amount) /
//           currentData?.maxAmount
//       )
//         ? "-right-6 -rotate-[90deg] top-1/2 transform -translate-y-1/2"
//         : currentData.yearData.length - 2 <= i
//         ? "right-3 -bottom-3.5"
//         : "left-1/2 -bottom-3.5 transform -translate-x-1/2"
//     }`}
//   />
// </div>
