import React, { useState } from 'react'
import Icons from '../../assets/Icons'

type Props = {
    placeholder: string;
    // paddingX?: string;
    // paddingY?: string;
    inputWidth: string;
    bgColor?: string;
    textColor?: string;
}

const Type1 = ({ inputWidth, placeholder, bgColor, textColor }: Props) => {

    const [inputValue, setInputValue] = useState('');

    const handleClearInput = () => {
        setInputValue('');
    };

    return (
        <form>
            <div className={`flex items-center px-3 py-2 ${bgColor} rounded-[4px] hover:rounded-full border-[1px] border-transparent hover:border-ct-blue-30 focus-within:rounded-full group focus-within:bg-white focus-within:border-secondary-blue-50`}>
                <img src={Icons.search} alt="" className="mr-2 w-3 h-3" />
                <input
                    type="text"
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className={`bg-transparent text-small font-medium leading-[16.8px] outline-none border-none ${textColor} ${inputWidth}`}
                />
                <img
                    src={Icons.CloseIconButton}
                    alt=""
                    className={`ml-2 w-[9px] h-[9px] ${inputValue ? "" : "group-focus-within:visible invisible"} hover:cursor-pointer`}
                    onClick={handleClearInput}
                />
            </div>
        </form>
    )
}

export default Type1