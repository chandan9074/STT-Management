import React from 'react';
import { StatusStylesDT } from '../../types/common';

interface Props {
    status: "Approved" | "Rejected" | "Annotated" | "Validated";
    label: string
}
const Type1 = (props: Props) => {
    const { status, label } = props
    const statusStyle: StatusStylesDT = {
        "Approved": {
            bg: "bg-[#DEF7F0]",
            circleBg: "bg-[#05956F]",
            text: "text-[#03543F]"

        },
        "Rejected": {
            bg: "bg-[#F7DEE0]",
            circleBg: "bg-[#FF293D]",
            text: "text-[#BF1F2E]"
        },
        "Annotated": {
            bg: "bg-[#F3F4F6]",
            circleBg: "bg-[#4B5563]",
            text: "text-[#4B5563]"
        },
        "Validated": {
            bg: "bg-[#FAFAD2]",
            circleBg: "bg-[#D4AF37]",
            text: "text-[#CD853F]"
        }
    }
    return (
        <>
            <div className={` h-[22px] py-[2px] pl-[10px] pr-[8px] flex items-center justify-center gap-1 rounded-[20px] mx-auto ${statusStyle[status].bg}`}>
                <div className={`h-[6px] w-[6px] rounded-full ${statusStyle[status].circleBg}`} />
                <p className={`text-xxs font-normal ${statusStyle[status].text}`}>{label}</p>
            </div>

        </>
    );
};

export default Type1;