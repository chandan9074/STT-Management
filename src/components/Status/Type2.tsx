import React from 'react';

interface Props {
    status: "Blocked" | "Active" ;
    label: string
}
const Type2 = (props: Props) => {
    const { status, label } = props
    const statusStyle: any = {
        "Active": {
            bg: "bg-[#DEF7F0]",
            circleBg: "bg-[#05956F]",
            text: "text-[#03543F]",
            width:"w-[65px]"

        },
        "Blocked": {
            bg: "bg-[#F7DEE0]",
            circleBg: "bg-[#FF293D]",
            text: "text-[#BF1F2E]",
            width:"w-[76px]"
        },
       
    }
    return (
        <>
            <div className={` h-[22px] py-[2px] pl-[10px] pr-[8px] flex items-center justify-center gap-1 rounded-[20px] mx-auto ${statusStyle[status]?.bg} ${statusStyle[status]?.width}`}>
                <div className={`h-[6px] w-[6px] rounded-full ${statusStyle[status]?.circleBg}`} />
                <p className={`text-xxs font-normal ${statusStyle[status]?.text}`}>{label}</p>
            </div>

        </>
    );
};

export default Type2;