import React, { Dispatch, SetStateAction, useState } from 'react';
import { IconButtonVariantStyleType, sizeStyleType } from '../../../types/common';

interface Props {
    tabLabel: string[];
    size?: "xSmall" | "small" | "medium" | "large";
    variant?: "Red" | "CT-Blue" | "Blue" | "White";
    // icon?: React.ReactElement;
    setActiveData: Dispatch<SetStateAction<string>>;
    handleActiveData?: (value: string) => void;
}
const Secondary = (props: Props) => {
    const { tabLabel, handleActiveData, variant = "Blue", setActiveData, size = "medium" } = props
    const [activeButton, setActiveButton] = useState<number>(0)

    const handleActive = (data: string, active: number) => {
        setActiveButton(active)
        setActiveData(data)
        handleActiveData && handleActiveData(data);
    }

    const sizeStyle: sizeStyleType = {
        "xSmall": {

        },
        "small": {
            py: "py-1",
            px: "px-4"
        },
        "medium": {
            py: "py-2",
            px: "px-6"
        },
        "large": {
            w: "w-[120px]",
            py: "py-2.5",
            px: "px-2"
        }
    }

    const buttonVariantStyle: IconButtonVariantStyleType = {
        "Red": {

        },
        "CT-Blue": {

        },
        "Blue": {
            text: "text-[#1F384CB2]  rounded-none",
            hover: "hover:bg-[#F9FAFC] hover:rounded-md",
            pressed: "active:opacity-70 active:bg-[#E0E7EF] rounded-md",
            selected: "bg-ct-blue-60 text-white rounded-md"
        },
        "White": {
            text: "text-ct-blue-90 text-opacity-70 bg-white border border-blue-gray-30 rounded-none",
            hover: "hover:bg-ct-blue-05 hover:rounded-md",
            pressed: "active:opacity-70 active:bg-[#E0E7EF] rounded-md",
            selected: "bg-blue-gray-30 text-ct-blue-90 font-medium text-opacity-70 bg-[#F4F7FA] rounded-md"
        }

    }
    return (
        <div
            style={{ boxShadow: "0px 1px 3px rgba(96, 108, 128, 0.05)" }}
            className='flex p-[3px] rounded-[9px] bg-white'>
            {tabLabel.map((data: string, index: number) =>
                <button
                    key={index}
                    onClick={() => handleActive(data, index)}
                    className={`text-xs leading-[15.6px] duration-300 ${sizeStyle ? sizeStyle[size].w : ""} ${sizeStyle ? sizeStyle[size].px : "px-6"} ${sizeStyle ? sizeStyle[size].py : "py-2"}  ${index === 0 ? "rounded-l-md" : ""} ${index === (tabLabel.length - 1) ? "rounded-r-md" : ""}
                    ${activeButton === index ? `${buttonVariantStyle[variant]?.selected}` :
                            `${buttonVariantStyle[variant]?.hover} ${buttonVariantStyle[variant]?.pressed} ${buttonVariantStyle[variant]?.text}
                        bg-blue-gray-A10 
                        `}`}
                >
                    {data}
                </button>
            )}
        </div>
    );
};

export default Secondary;