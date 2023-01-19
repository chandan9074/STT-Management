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
                className="px-2 flex items-center h-[32px] border-none bg-blue-gray-10 hover:bg-blue-gray-40 rounded-[6px] gap-x-2"
                onClick={() => onOpenModal()}
            >
                <SearchOutlined style={{ color: "#5F707F" }} />
                <h1 className="text-[14px] text-ct-blue-90">
                    Search {search.role} by Id or Name
                </h1>
            </div>

            <div className="relative mt-[15px] w-full py-2 px-2 h-[140px] border-[1px] border-border-light-blue rounded-[4px]">
                <h1 className="text-ct-blue-45 text-[13px] font-medium">
                    Total Amount Disbursed{" "}
                </h1>
                <div className="flex">
                    <h1 className="mt-[9px] text-ct-blue-90-70% text-[14px] mr-[4px]">
                        BDT
                    </h1>
                    <h1 className="text-[32px] bg-gradient-to-r from-[#F405FE] via-[#136EE5] to-[#EAA678] text-transparent bg-clip-text">
                        {totalDisbursed?.totalDisbursedAmount}
                    </h1>
                </div>

                <div className="absolute flex w-full h-[110px] top-6 left-4 justify-center items-start">
                    <div className="w-[2px] h-[92px] rotate-[18deg] bg-gradient-to-r from-border-light via-green-10 to-border-light" />
                </div>

                <div className="absolute bottom-[2px] right-2 gap-y-0">
                    <h1 className="text-ct-blue-90-70% text-[14px] ">
                        Total Valid
                    </h1>
                    <span className="text-[32px] bg-gradient-to-r from-[#F405FE] via-[#136EE5] to-[#EAA678] text-transparent bg-clip-text">
                      {totalDisbursed?.totalValidHours}hr
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TotalDisbursed;