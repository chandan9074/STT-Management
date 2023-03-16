import React, { useContext } from "react";
import { RingProgressBar } from "../../../common/RingProgress";
import Dropdown from "../../../Dropdown";
import { ClockCircleOutlined } from "@ant-design/icons";
import { collectDataDT, createDataDT } from "../../../../types/dashboardTypes";
import { CommonContext } from "../../../../context/CommonProvider";
import { STTMODULE } from "../../../../helpers/ConditionVariable";

interface Props {
  headerType: string;
  bgColor: string;
  targetColor: string;
  borderColor: string;
  data: createDataDT | collectDataDT,
 
}
export type RingProgressDT = {
  [key:string]: {
    trailColor: string;
    stock1: string;
    stock2: string;
    textColor: string

  }
}
const Header = ({ bgColor, headerType, targetColor, borderColor, data, }: Props) => {
  const commonContext = useContext(CommonContext)
  const { type } = commonContext

  const sttStyle: RingProgressDT = {
    Create: {
      trailColor: "#DEF7F0",
      stock1: "#05956F",
      stock2: "#00FFBB",
      textColor: "text-green/50-05956F"
    },
    Collect: {
      trailColor: "#F7DEE0",
      stock1: "#940412",
      stock2: "#FF0018",
      textColor: "text-red-60"
    }
  }

  const ttsStyle: RingProgressDT = {
    Create: {
      trailColor: "#F5EBF4",
      stock1: "#C22EB6",
      stock2: "#FF00EA",
      textColor: "text-[#C22EB6]"
    },
    Collect: {
      trailColor: "#E5E5DC8C",
      stock1: "#88991C",
      stock2: "#D0E108",
      textColor: "text-[#88991C]"
    }
  }


  return (
    <div className="relative">
      <div
        className={`${bgColor} w-full flex justify-between rounded-t-xl p-6`}
      >
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 align-middle">
            <p className="text-heading-6 font-medium text-ct-blue-95">
              {headerType} Data
            </p>
            <p className={`text-small font-medium my-auto ${targetColor}`}>
              Target : {data.target}h
            </p>
          </div>
          <hr className="bg-ct-blue-20" />
          <div className="flex gap-3">
            <p className="text-small font-semibold text-ct-blue-90-88%">
              Total Valid : {data.totalValid}h;
            </p>
            <div className="flex gap-2 items-center">
              <ClockCircleOutlined
                style={{ color: "#5F6B7D", fontSize: "12px" }}
              />
              <p className="text-small font-normal text-ct-blue-90-88%">
                Last Update: {data.lastUpdate}
              </p>
            </div>
          </div>
          <div>
            <p className="text-small font-normal text-ct-blue-90-88%">
              Total Received : {data.totalReceived}h
            </p>
          </div>
        </div>

        <div className="flex h-full">
          <RingProgressBar.Type1
            type={headerType}
            value={data.achieved}
            style={type === STTMODULE ? sttStyle : ttsStyle} />
          <Dropdown.Type2
            data={data}
            headerType={headerType}
            module={type}
          />
        </div>
      </div>
      <div
        className={` mx-6 border-dashed border-b-[2px] ${borderColor}`}
      ></div>
      <p
        className={`${targetColor} bg-white w-fit py-1 px-2 absolute left-[41%] -bottom-[14px] rounded-[4px] text-small`}
      >
        valid data stat
      </p>
    </div>
  );
};

export default Header;
