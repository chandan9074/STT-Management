import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size: "xSmall" | "small" | "medium" | "large";
    variant: "Red" | "CT-Blue" | "Blue";
    icon?: React.ReactElement;
}
const Circle = (props: Props) => {
    const { size, variant, icon, ...rest } = props

    const IconButtonVariantStyle: any = {
        "Red": {
            hover: "hover:bg-magenta-70",
            active: "active:bg-magenta-70"

        },
        "CT-Blue": {
            hover: "hover:bg-magenta-70",
            active: "active:bg-magenta-70"

        },
        "Blue": {
            hover: "hover:bg-magenta-70",
            active: "active:bg-magenta-70"

        },
    }

    const IconButtonSizeStyle: any = {
        "xSmall": {
          size:"h-5 w-5"

        },
        "small": {
            size:"h-6 w-6"

        },
        "medium": {
            size:"h-8 w-8"

        },
        "large": {
            size:"h-9 w-9"
        },

    }
    return (
        <>
            <button {...rest}
                className={`  `}
            >
                {icon}
            </button>

        </>
    );
};

export default Circle;