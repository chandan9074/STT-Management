import React, { Dispatch, SetStateAction, useState } from 'react';

interface Props {
    tabLabel: string[];
    size: "small" | "medium";
    variant?: "Red" | "CT-Blue" | "Blue";
    // icon?: React.ReactElement;
    setActiveData: Dispatch<SetStateAction<string>>;
}
const Primary = (props: Props) => {
    const { tabLabel, variant = "Blue", setActiveData, size } = props
    const [activeButton, setActiveButton] = useState<number>(0)

    const handleActive = (data: string, active: number) => {
        setActiveButton(active)
        setActiveData(data)
    }

    const buttonVariantStyle: any = {
        "Red": {
            text: "text-primary-ct-magenta-60",
            hover: "hover:bg-red-03",
            pressed: "active:bg-red-10 active:text-opacity-75",
            selected: "bg-primary-ct-magenta-60 text-white"
        },
        "CT-Blue": {

        },
        "Blue": {
            text: "text-[#2C79BE]",
            hover: "hover:bg-[#EAF3FA]",
            pressed: "active:bg-[#D6E5F5] active:text-opacity-75",
            selected: "bg-ct-blue-60 text-white"
        }
    }

    const buttonSizeStyle: any = {
        "small": {
            btnPadding: "p-[2px] shadow-md",
            tabPadding: "py-[9px] leading-[14.4px] px-9",
        },
        "medium": {
            btnPadding: "p-[3px]",
            tabPadding: "py-3 px-9",
        }
    }
    return (
        <div
            className={`flex ${buttonSizeStyle[size].btnPadding} rounded-[100px] bg-white`}>
            {tabLabel.map((data: string, index: number) =>
                <button
                    key={index}
                    onClick={() => handleActive(data, index)}
                    className={`${buttonSizeStyle[size].tabPadding} rounded-[24px] text-xxs duration-300 ${activeButton === index ? `${buttonVariantStyle[variant]?.selected} font-bold` :
                        `${buttonVariantStyle[variant]?.hover} ${buttonVariantStyle[variant]?.pressed} ${buttonVariantStyle[variant]?.text} font-bold`}`}
                >
                    {data}
                </button>
            )}
        </div>
    );
};

export default Primary;