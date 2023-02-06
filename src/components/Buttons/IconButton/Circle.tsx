import { border } from '@mui/system';
import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size: "xSmall" | "small" | "medium" | "large";
    variant: "Red" | "CT-Blue" | "Blue" | "Gray";
    icon?: React.ReactElement;
    border?: "none" | "border";
    background?: "white" | "transparent"
}
const Circle = (props: Props) => {
    const { size, variant, background = "transparent", border = "none", icon, ...rest } = props

    const IconButtonVariantStyle: any = {
        "Red": {
            hover: "hover:bg-[#FCF7F7]",
            active: "active:bg-red-10"

        },
        "Blue": {
            hover: "hover:bg-ct-blue-10",
            active: "active:bg-ct-blue-20 border-ct-blue-10"

        },
        "CT-Blue": {
            hover: "hover:bg-blue-gray-20",
            active: "active:bg-blue-gray-A20"

        },
        "Gray": {
            hover: "hover:border-[#D9D9D9]",
            active: "active:bg-[#D9D9D9]"
        }

    }

    const IconButtonSizeStyle: any = {
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

    const IconBorderStyle: any = {
        "none": {
            border: "border-transparent rounded-full"
        },
        "border": {
            border: "border border-ct-blue-10 rounded-full"
        }
    }
    return (
        <>
            <button {...rest}
                className={`duration-300 flex items-center justify-center ${background === "white" ? "bg-white" : "bg-transparent"}
                ${IconButtonSizeStyle[size].size} ${IconButtonVariantStyle[variant].hover} ${IconButtonVariantStyle[variant].active} ${IconBorderStyle[border].border}`}
            >
                {icon}
            </button>

        </>
    );
};

export default Circle;