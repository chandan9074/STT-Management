import React from 'react'
import Icons from '../../../assets/Icons';

type Props = {
    current: number;
}

const Primary = ({ current, ...rest }: Props) => {
    return (
        <button
            // onClick={() => setOpen(!open)}
            {...rest}
            className="flex items-center px-3 py-1 rounded-[4px] bg-ct-blue-70 text-ct-blue-10 border-[1px] border-transparent hover:border-ct-blue-20 active:bg-ct-blue-80 active:text-ct-blue-30 active:border-transparent duration-300"
        >
            <span className="text-xs font-medium  mr-2.5">
                {current}
            </span>
            <img src={Icons.whiteDropArrow} alt="" className="w-2 h-1.5" />
        </button>
    )
}

export default Primary