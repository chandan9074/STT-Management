import React from 'react';
import { IconBorderStyleType, IconButtonSizeStyleType, IconButtonVariantStyleType } from '../../../types/common';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size: "xSmall" | "small" | "medium" | "large";
    variant: "CT-Blue" | "Gray";
    icon?: React.ReactElement;
    Bg?: "none" | "Bg";
}
const Rounded = (props: Props) => {
    const { size, variant, Bg = "none", icon, ...rest } = props

    const IconButtonVariantStyle: IconButtonVariantStyleType = {
        "Gray": {
            hover: "hover:bg-blue-gray-20",
            active: "active:bg-blue-gray-A20"

        },
        "CT-Blue": {
            hover: "hover:border-ct-blue-30 hover:bg-blue-gray-10",
            active: "active:bg-ct-blue-30"
        }

    }

    const IconButtonSizeStyle: IconButtonSizeStyleType = {
        "xSmall": {
            size: "h-5 w-5"

        },
        "small": {
            size: "h-6 w-6"

        },
        "medium": {
            size: "h-8 w-8"

        },
        "large": {
            size: "h-9 w-9"
        },

    }

    const IconBorderStyle: IconBorderStyleType = {
        "none": {
            border: "border border-inherit rounded"
        },
        "Bg": {
            border: "bg-[#F4F7FA] border border-inherit rounded"
        }
    }
    return (
        <>
            <button {...rest}
                className={`duration-300  
                ${IconButtonSizeStyle[size].size} ${IconButtonVariantStyle[variant].hover} ${IconButtonVariantStyle[variant].active} ${IconBorderStyle[Bg].border}`}
            >
                {icon}
            </button>

        </>
    );
};

export default Rounded;