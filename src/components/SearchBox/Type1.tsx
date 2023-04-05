import React from 'react'
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
    return (
        <form>
            <div className={`flex items-center px-3 py-1.5 ${bgColor} rounded-[4px] hover:rounded-full border-[1px] border-transparent hover:border-ct-blue-30 focus-within:rounded-full group focus-within:bg-white focus-within:border-secondary-blue-50`}>
                <img src={Icons.search} alt="" className="mr-2" />
                <input
                    type="text"
                    placeholder={placeholder}
                    className={`bg-transparent text-small outline-none border-none ${textColor} ${inputWidth}`}
                />
                <img src={Icons.CloseIconButton} alt="" className="ml-2 w-[9px] h-[9px] group-focus-within:visible invisible" />
            </div>
        </form>
    )
}

export default Type1