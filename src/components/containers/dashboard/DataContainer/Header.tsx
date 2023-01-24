import React from "react";
import { RingProgressBar } from "../../../common/RingProgress";
import Dropdown from "../../../Dropdown";
import { ClockCircleOutlined } from "@ant-design/icons";
import { collectDataDT, createDataDT } from "../../../../types/dashboardTypes";

interface Props {
  type: string;
  bgColor: string;
  targetColor: string;
  borderColor: string;
  data: createDataDT | collectDataDT
}

const Header = ({ bgColor, type, targetColor, borderColor, data }: Props) => {
  return (
    <div className="relative">
      <div
        className={`${bgColor} w-full flex justify-between rounded-t-xl p-6`}
      >
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 align-middle">
            <p className="text-heading-6 font-medium text-ct-blue-95">
              {type} Data
            </p>
            <p className={`text-small font-medium my-auto ${targetColor}`}>
              Target : {data.target}h
            </p>
          </div>
          <hr className="bg-ct-blue-20" />
          <div className="flex gap-3">
            <p className="text-small font-semibold text-ct-blue-90-88%">
              Total Valid : {data.totalValid}h
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
              Received : {data.totalReceived}h
            </p>
          </div>
        </div>

        <div className="flex">
          <RingProgressBar.Type1 type={type} value={data.achieved} />
          <Dropdown.Type2 />
        </div>
      </div>
      <div
        className={` mx-6 border-dashed border-b-[2px] ${borderColor}`}
      ></div>
      <p
        className={`${targetColor} bg-white w-fit py-1 px-2 absolute left-[42%] -bottom-[14px] rounded-[4px]`}
      >
        valid data start
      </p>
    </div>
  );
};

export default Header;
