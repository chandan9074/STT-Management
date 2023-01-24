import React from 'react';



interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    size: "xSmall" | "small" | "medium";
    variant: "Megenta" | "CT-Blue" | "Blue";
    disabled?: boolean;
    icon?: React.ReactElement;
    iconAlign?: "start" | "end";
}
const Primary = (props: Props) => {
    const { label, size, variant, disabled, icon, iconAlign = "start", ...rest } = props
    // ${variant === "Megenta" ? "focus:outline outline-secondary-blue-50" : variant === "CT-Blue" ? "focus:outline outline-ct-blue-95" : "focus:outline outline-ct-blue-95"}
    return (
        <>
            {
                disabled ?
                    <button
                        style={{ cursor: `url("/disableCursor.svg"), auto` }}
                        disabled
                        className={`bg-blue-gray-30 text-blue-gray-60 cursor-not-allowed flex gap-2 items-center
                        ${size === "xSmall" ? "xSmallIconButton" : size === "small" ? "smallIconButton" : "mediumIconButton"}
                        ${iconAlign === "start" ? "pl-4 pr-6" : "pl-6 pr-4"}
                         `}

                    >
                        {iconAlign === "start" ? <span>{icon}</span> : null}
                        <span>{label}</span>
                        {iconAlign === "end" ? <span>{icon}</span> : null}
                    </button>
                    : <button {...rest}
                        className={`flex gap-2 items-center ${variant === "Megenta" ? "bg-primary-ct-magenta-60" : variant === "CT-Blue" ? "bg-ct-blue-60" : "bg-secondary-blue-50"}
                        ${variant === "Megenta" ? "hover:bg-magenta-70" : variant === "CT-Blue" ? "hover:bg-ct-blue-70" : "hover:bg-blue-60"}
                        ${variant === "Megenta" ? "active:bg-magenta-70 active:text-opacity-60" : variant === "CT-Blue" ? "active:bg-ct-blue-70 active:text-opacity-60" : "active:bg-blue-60 active:text-opacity-60"}
                         ${variant === "Megenta" ? "text-white" : variant === "CT-Blue" ? "text-[#FFFFFF]" : "text-white"}
                        ${size === "xSmall" ? "xSmallIconButton" : size === "small" ? "smallIconButton" : "mediumIconButton"}
                        ${iconAlign === "start" ? "pl-4 pr-6" : "pl-6 pr-4"}
                        `}
                    >
                        {iconAlign === "start" ? <span>{icon}</span> : null}
                        <span>{label}</span>
                        {iconAlign === "end" ? <span>{icon}</span> : null}
                    </button>
            }
        </>
    );
};

export default Primary;