import React, { Dispatch, SetStateAction, useState } from 'react';

interface Props {
    tabLabel: string[];
    // size: "xSmall" | "small" | "medium" | "large";
    variant?: "Red" | "CT-Blue" | "Blue";
    // icon?: React.ReactElement;
    setActiveData: Dispatch<SetStateAction<string>>;
}
const Secondary = (props: Props) => {
    const { tabLabel, variant = "Blue", setActiveData } = props
    const [activeButton, setActiveButton] = useState<number>(0)

    const handleActive = (data: string, active: number) => {
        setActiveButton(active)
        setActiveData(data)
    }

    const buttonVariantStyle: any = {
        "Red": {

        },
        "CT-Blue": {

        },
        "Blue": {
            text: "text-[#1F384CB2]",
            hover: "hover:bg-[#F9FAFC]",
            pressed: "active:opacity-70 active:bg-[#E0E7EF]",
            selected: "bg-ct-blue-60 text-white"
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
                    className={`py-2 px-3 text-xxs duration-300 font-bold ${index === 0 ? "rounded-l-md" : ""} ${index === (tabLabel.length - 1) ? "rounded-r-md" : ""}
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