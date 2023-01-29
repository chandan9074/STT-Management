import React from 'react';
import Icons from '../../../assets/Icons';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    size: "xSmall" | "small" | "medium";
    variant: "CT-Blue" | "Blue";
    disabled?: boolean
}
const Tertiary = (props: Props) => {
    const { label, size, variant, disabled, ...rest } = props
    return (
        <>
            {
                disabled ?
                    <button
                        style={{ cursor: `url("/disableCursor.svg"), auto` }}
                        disabled
                        className={`bg-blue-gray-30 text-blue-gray-60 cursor-not-allowed
                                ${size === "xSmall" ? "xSmallButton" : size === "small" ? "smallButton" : "mediumButton"}
                                `}

                    >
                        {label}
                    </button>
                    :
                    <button {...rest}
                        className={`duration-300 border
                                ${variant === "CT-Blue" ? "text-ct-blue-60" : variant === "Blue" ? "text-secondary-blue-50" : ""}
                                ${variant === "CT-Blue" ? "hover:border-blue-gray-A10" : "border-white"}
                                ${variant === "Blue" ? "hover:border-blue-gray-A10" : "border-white"}
                                ${variant === "CT-Blue" ? "active:bg-blue-gray-A20" : variant === "Blue" ? "active:bg-blue-gray-A20" : ""}
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