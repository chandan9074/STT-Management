import React from 'react'
import Icons from '../../assets/Icons'

type Props = {
    placeholder: string;
    paddingX?: string;
    paddingY?: string;
    inputWidth: string;
    bgColor?: string;
    textColor?: string;
}

const Type1 = ({ inputWidth, placeholder, bgColor, paddingX, paddingY, textColor }: Props) => {
    return (
        <form>
            <div className={`flex items-center ${paddingX} ${paddingY} ${bgColor} rounded-[4px] focus-within:rounded-full`}>
                <img src={Icons.search} alt="" className="mr-2" />
                <input
                    type="text"
                    placeholder={placeholder}
                    className={`bg-transparent text-small outline-none border-none ${textColor} ${inputWidth}`}
                />
            </div>
        </form>
    )
}

export default Type1