import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    size: "xSmall" | "small" | "medium";
    variant: "Megenta" | "CT-Blue" | "Blue";
    disabled?: boolean
}
const Secondary = (props: Props) => {
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

                    : <button {...rest}
                        className={`${variant === "Megenta" ? "border border-primary-ct-magenta-60" : variant === "CT-Blue" ? "border border-ct-blue-60" : "border border-ct-blue-30"}
                                     ${variant === "Megenta" ? "text-primary-ct-magenta-60" : variant === "CT-Blue" ? "text-ct-blue-60 bg-white" : "text-ct-blue-80"}
                                     ${variant === "Megenta" ? "hover:bg-red-10" : variant === "CT-Blue" ? "hover:bg-ct-blue-10" : "hover:bg-blue-gray-10"}
                                    ${variant === "Megenta" ? "active:bg-red-10 active:text-opacity-60" : variant === "CT-Blue" ? "active:bg-ct-blue-10 active:text-opacity-60" : "active:bg-blue-gray-10 active:text-opacity-60"}
                                     ${size === "xSmall" ? "xSmallButton" : size === "small" ? "smallButton" : "mediumButton"}
                                    `}
                    >
                        {label}
                    </button>
            }
        </>
    );
};

export default Secondary;