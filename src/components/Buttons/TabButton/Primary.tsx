import React, { Dispatch, SetStateAction, useState } from 'react';

interface Props {
    tabLabel: string[];
    // size: "xSmall" | "small" | "medium" | "large";
    variant?: "Red" | "CT-Blue" | "Blue";
    // icon?: React.ReactElement;
    setActiveData: Dispatch<SetStateAction<string>>;
}
const Primary = (props: Props) => {
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
            text: "text-[#2C79BE]",
            hover: "hover:bg-[#EAF3FA]",
            pressed: "active:bg-[#D6E5F5] active:text-opacity-75",
            selected: "bg-ct-blue-60 text-white"
        }

    }
    return (
        <div
            style={{ boxShadow: "0px 1px 3px rgba(96, 108, 128, 0.05)" }}
            className='flex p-[3px] rounded-[100px] bg-white'>
            {tabLabel.map((data: string, index: number) =>
                <button
                    key={index}
                    onClick={() => handleActive(data, index)}
                    className={`py-2 rounded-[24px] px-3 text-xxs duration-300 font-bold ${activeButton === index ? `${buttonVariantStyle[variant].selected}` :
                        `${buttonVariantStyle[variant].hover} ${buttonVariantStyle[variant].pressed} ${buttonVariantStyle[variant].text}`}`}
                >
                    {data}
                </button>
            )}
        </div>
    );
};

export default Primary;