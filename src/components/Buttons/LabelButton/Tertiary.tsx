import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    size: "xSmall" | "small" | "medium";
    variant: "CT-Blue" | "Blue";
    disabled?: boolean
    marginX?: string;
    marginY?: string;
}
const Tertiary = (props: Props) => {
    const { label, size, variant, disabled, marginX, marginY, ...rest } = props
    return (
        <>
            {
                disabled ?
                    <button
                        style={{ cursor: `url("/disableCursor.svg"), auto` }}
                        disabled
                        className={`bg-blue-gray-30 text-blue-gray-60 cursor-not-allowed ${marginX} ${marginY}
                                ${size === "xSmall" ? "xSmallButton" : size === "small" ? "smallButton" : "mediumButton"}
                                `}

                    >
                        {label}
                    </button>
                    :
                    <button {...rest}
                        className={`duration-300 border ${marginX} ${marginY}
                                ${variant === "CT-Blue" ? "text-ct-blue-60" : variant === "Blue" ? "text-secondary-blue-50" : ""}
                                ${variant === "CT-Blue" ? "hover:border-blue-gray-A10 hover:bg-white" : "border-transparent bg-transparent"}
                                ${variant === "Blue" ? "hover:border-blue-gray-A10 hover:bg-white" : "border-transparent bg-transparent"}
                                ${variant === "CT-Blue" ? "active:bg-blue-gray-20" : variant === "Blue" ? "active:bg-blue-gray-A10" : ""}
                                ${size === "xSmall" ? "xSmallButton" : size === "small" ? "smallButton" : "mediumButton"}
                                `}
                    >
                        {label}
                    </button>
            }
        </>
    );
};

export default Tertiary;