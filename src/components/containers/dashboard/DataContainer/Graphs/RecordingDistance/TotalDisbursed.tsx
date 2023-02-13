import React from 'react';
import {SearchOutlined} from "@ant-design/icons";
import {timeWiseDisbursementDT, timeWiseDisbursementParamsDT} from "../../../../../../types/billingTypes";

interface Prop {
    onOpenModal: () => void;
    search: timeWiseDisbursementParamsDT;
    totalDisbursed: timeWiseDisbursementDT | undefined
}
const TotalDisbursed = ({onOpenModal, search, totalDisbursed}: Prop) => {
    return (
        <div className="w-[273px] ml-auto">
            <div
                className="px-[12px] cursor-pointer flex items-center h-[32px] border-none bg-blue-gray-10 hover:bg-blue-gray-40 rounded-[6px] gap-x-2"
                onClick={() => onOpenModal()}
            >
                <SearchOutlined style={{ color: "#5F707F" }} />
                <h1 className="text-small text-ct-blue-90 opacity-[70%]">
                    Search {search.role} by Id or Name
                </h1>
            </div>

            <div className="relative mt-[15px] w-full p-[12px] h-[140px] border-[1px] border-border-light-blue rounded-[4px]">
                <h1 className="text-ct-blue-45 text-xs font-medium">
                    Total Amount Disbursed{" "}
                </h1>
                <div className="flex">
                    <h1 className="mt-[4px] text-ct-blue-90-70% text-small mr-[4px]">
                        BDT
                    </h1>
                    <h1 className="text-[32px] -mt-[5px] bg-gradient-to-r from-[#F405FE] via-[#136EE5] to-[#EAA678] text-transparent bg-clip-text">
                        {totalDisbursed?.totalDisbursedAmount}
                    </h1>
                </div>

                <div className="absolute flex w-full h-[110px] top-6 left-4 justify-center items-start">
                    <div className="w-[2px] h-[92px] rotate-[18deg] bg-gradient-to-r from-border-light via-green-10 to-border-light" />
                </div>

                <div className="absolute bottom-[12px] right-2 ">
                    <h1 className="text-ct-blue-90-70% text-small  ">
                        Total Valid
                    </h1>
                    <span className="text-[32px] leading-[35px] bg-gradient-to-r from-[#F405FE] via-[#136EE5] to-[#EAA678] text-transparent bg-clip-text">
                      {totalDisbursed?.totalValidHours}hr
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TotalDisbursed;