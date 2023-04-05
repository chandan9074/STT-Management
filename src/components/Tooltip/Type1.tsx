import React from 'react'
import Icons from '../../assets/Icons'

type Props = {
    title: string
    align: 'left' | 'right' | 'center'
}

const Type1 = ({ title, align }: Props) => {
    return (
        <div className='py-1.5 px-3 bg-black-90 relative rounded-[4px]'>
            <span className='text-xs font-semibold text-ct-blue-05 leading-4 whitespace-nowrap'>{title}</span>
            <img src={Icons.up_arrow_black} alt='' className={`absolute -top-1.5 ${align === "left"
                ? "left-2"
                : align === "right"
                    ? "right-2.5"
                    : "left-1/2 transform -translate-x-1/2"
                }`}
            />
        </div>
    )
}

export default Type1