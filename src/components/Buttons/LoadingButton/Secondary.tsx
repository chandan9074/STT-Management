import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    size: "xSmall" | "small" | "medium";
    variant: "Megenta" | "CT-Blue" | "Blue";
    disabled?: boolean;
    icon?: React.ReactElement;
    iconAlign?: "start" | "end";
    marginX?: string;
    marginY?: string;
}
const Secondary = (props: Props) => {
    const { label, size, variant, disabled, icon, marginX, marginY, iconAlign, ...rest } = props
    return (
        <>
            {
                disabled ?
                    <button
                        style={{ cursor: `url("/disableCursor.svg"), auto` }}
                        disabled
                        className={`bg-blue-gray-30 duration-200 ${marginX} ${marginY} text-blue-gray-60 flex gap-2 items-center cursor-not-allowed
                        ${size === "xSmall" ? "xSmallIconButton" : size === "small" ? "smallIconButton" : "mediumIconButton"}
                        ${iconAlign === "start" ? "pl-4 pr-6" : "pl-6 pr-4"}
                         `}

                    >
                        {iconAlign === "start" ? <span>{icon}</span> : null}
                        <span>{label}</span>
                        {iconAlign === "end" ? <span>{icon}</span> : null}
                    </button>

                    : <button {...rest}
                        className={`flex gap-2 items-center duration-200  group active:text-opacity-60 ${marginX} ${marginY} ${variant === "Megenta" ? "border border-primary-ct-magenta-60" : variant === "CT-Blue" ? "border border-ct-blue-60" : "border border-ct-blue-30"}
                                     ${variant === "Megenta" ? "text-primary-ct-magenta-60" : variant === "CT-Blue" ? "text-ct-blue-60" : "text-ct-blue-80"}
                                     ${variant === "Megenta" ? "hover:bg-red-10" : variant === "CT-Blue" ? "hover:bg-ct-blue-10" : "hover:bg-blue-gray-10"}
                                    ${variant === "Megenta" ? "active:bg-red-10" : variant === "CT-Blue" ? "active:bg-ct-blue-10" : "active:bg-blue-gray-10"}
                                    ${size === "xSmall" ? "xSmallIconButton" : size === "small" ? "smallIconButton" : "mediumIconButton"}
                                    ${iconAlign === "start" ? "pl-4 pr-6" : "pl-6 pr-4"}
                                    `}
                    >
                        {iconAlign === "start" ? <span className='group-active:opacity-60'>{icon}</span> : null}
                        <span>{label}</span>
                        {iconAlign === "end" ? <span>{icon}</span> : null}
                    </button>
            }
        </>
    );
};

export default Secondary;