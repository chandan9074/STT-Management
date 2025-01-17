import React, { Dispatch, SetStateAction, useState } from 'react';
import { IconButtonSizeStyleType, IconButtonVariantStyleType } from '../../../types/common';

interface Props {
    tabLabel: string[];
    size: "small" | "medium";
    variant?: "Red" | "White" | "Blue";
    // icon?: React.ReactElement;
    setActiveData: Dispatch<SetStateAction<string>>;
    activePanelProps?: number;
}
const Primary = (props: Props) => {
    const { tabLabel, variant = "Blue", setActiveData, size, activePanelProps = 0 } = props
    const [activeButton, setActiveButton] = useState<number>(activePanelProps)

    const handleActive = (data: string, active: number) => {
        setActiveButton(active)
        setActiveData(data)
    }

    const buttonVariantStyle: IconButtonVariantStyleType = {
        "Red": {
            text: "text-primary-ct-magenta-60",
            hover: "hover:bg-red-03",
            pressed: "active:bg-red-10 active:text-opacity-75",
            selected: "bg-primary-ct-magenta-60 text-white"
        },
        "White": {
            text: "text-white",
            hover: "hover:bg-black  hover:bg-opacity-[0.1]",
            pressed: "active:bg-[#D6E5F5] active:text-opacity-75",
            selected: "bg-white text-ct-blue-60",
            btnBg: "bg-black bg-opacity-[0.3]"
        },
        "Blue": {
            text: "text-[#2C79BE]",
            hover: "hover:bg-[#EAF3FA]",
            pressed: "active:bg-[#D6E5F5] active:text-opacity-75",
            selected: "bg-ct-blue-60 text-white",
            btnBg: "bg-white"
        }
    }

    const buttonSizeStyle: IconButtonSizeStyleType = {
        "small": {
            btnPadding: "p-[2px] shadow-md",
            tabPadding: "py-[12px] leading-[14.4px] px-2 w-[121px]",
        },
        "medium": {
            btnPadding: "p-[3px]",
            tabPadding: "py-3 px-9",
        }
    }
    return (
        <div
            className={`inline-flex ${buttonSizeStyle[size].btnPadding} rounded-[100px] ${buttonVariantStyle[variant].btnBg}`}>
            {tabLabel.map((data: string, index: number) =>
                <button
                    key={index}
                    onClick={() => handleActive(data, index)}
                    className={`${buttonSizeStyle[size].tabPadding} rounded-[24px] text-xxs duration-300 ${activeButton === index ? `${buttonVariantStyle[variant]?.selected} font-bold` :
                        `${buttonVariantStyle[variant]?.hover} ${buttonVariantStyle[variant]?.pressed} ${buttonVariantStyle[variant]?.text} font-semibold`}`}
                >
                    {data}
                </button>
            )}
        </div>
    );
};

export default Primary;