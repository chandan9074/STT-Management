import React, { SetStateAction, useState } from 'react'
import Icons from '../../assets/Icons'
import Buttons from '../Buttons';

type Props = {
    placeholder: string;
    // paddingX?: string;
    // paddingY?: string;
    inputWidth: string;
    bgColor?: string;
    textColor?: string;
    setIsSearchBox?: React.Dispatch<SetStateAction<boolean>>;
}

const Type2 = ({ inputWidth, placeholder, bgColor, textColor, setIsSearchBox }: Props) => {

    const [inputValue, setInputValue] = useState('');

    const handleClearInput = () => {
        setInputValue('');
        if (setIsSearchBox) {
            setIsSearchBox(false);
        }
    };

    return (
        <div className={`flex items-center px-3 py-2 ${bgColor} rounded-[4px]  border-[1px] border-secondary-blue-50 h-[48px]`}>
            <img src={Icons.search} alt="" className="mr-2 w-4 h-4" />
            <input
                type="text"
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className={`bg-transparent text-small font-medium leading-[16.8px] outline-none border-none ${textColor} ${inputWidth} `}
            />
            <Buttons.IconButton.Circle size='medium' variant='Blue' icon={<img src={Icons.CloseIconButton} alt="" />} onClick={handleClearInput} />
            {/* <button className='bg-red-200 p-2 rounded-full'>
                    <img src={Icons.CloseIconButton} alt="" />
                </button> */}
        </div>
    )
}

export default Type2