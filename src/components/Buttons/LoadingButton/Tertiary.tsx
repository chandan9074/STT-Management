import React from 'react';
import Icons from '../../../assets/Icons';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    size: "xSmall" | "small" | "medium";
    variant: "CT-Blue" | "Blue";
    disabled?: boolean;
    icon?: React.ReactElement;
    iconAlign?: "start" | "end";
}
const Tertiary = (props: Props) => {
    const { label, size, variant, disabled, icon, iconAlign, ...rest } = props
    return (
        <>
            {
                disabled ?
                    <button
                        style={{ cursor: `url("/disableCursor.svg"), auto` }}
                        disabled
                        className={` text-blue-gray-40 flex gap-2 items-center cursor-not-allowed
                                ${size === "xSmall" ? "xSmallIconButton" : size === "small" ? "smallIconButton" : "mediumIconButton"}
                                ${iconAlign === "start" ? "pl-4 pr-6" : "pl-6 pr-4"}
                                `}

                    >
                        {iconAlign === "start" ? <span>{variant === "CT-Blue" ? <img src={Icons.LoadingBlue} alt=''/> : variant === 'Blue' ? <img src={Icons.LoadingBlue} alt=''/> : ''}</span> : null}
                        <span>{label}</span>
                        {iconAlign === "end" ? <span>{variant === "CT-Blue" ? <img src={Icons.LoadingBlue} alt=''/> : variant === 'Blue' ? <img src={Icons.LoadingBlue} alt=''/> : ''}</span> : null}
                    </button>
                    :
                    <button {...rest}
                        className={`border flex gap-2 items-center duration-200
                                ${variant === "CT-Blue" ? "text-ct-blue-60" : variant === "Blue" ? "text-secondary-blue-50" : ""}
                                ${variant === "CT-Blue" ? "hover:border-blue-gray-A10" : "border-transparent"}
                                ${variant === "Blue" ? "hover:border-blue-gray-A10" : "border-transparent"}
                                ${variant === "CT-Blue" ? "active:bg-blue-20" : variant === "Blue" ? "active:bg-blue-20" : ""}
                                ${size === "xSmall" ? "xSmallIconButton" : size === "small" ? "smallIconButton" : "mediumIconButton"}
                                ${iconAlign === "start" ? "pl-4 pr-6" : "pl-6 pr-4"}
                                `}
                    >
                        {iconAlign === "start" ? <span>{variant === "CT-Blue" ? <img src={Icons.LoadingBlue} alt=''/> : variant === 'Blue' ? <img src={Icons.LoadingBlue} alt=''/> : ''}</span> : null}
                        <span>{label}</span>
                        {iconAlign === "end" ? <span>{variant === "CT-Blue" ? <img src={Icons.LoadingBlue} alt=''/> : variant === 'Blue' ? <img src={Icons.LoadingBlue} alt=''/> : ''}</span> : null}
                    </button>
            }
        </>
    );
};

export default Tertiary;