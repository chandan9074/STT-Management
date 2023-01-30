import React from 'react'
import Icons from '../../assets/Icons';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    active: string;
}

const Dropdown = ({ active, ...rest }: Props) => {
    return (
        <button
            {...rest}
            className={`flex gap-3 items-center duration-200 justify-center hover:bg-ct-blue-10 active:bg-ct-blue-20 cursor-pointer px-2 py-1 rounded-[4px]`}>
            <span className="text-heading-6 font-medium text-ct-blue-60">{active}</span>
            <img
                className="h-[7px] w-[10px]"
                src={Icons.blueDropArrow}
                alt="" />
        </button>
    )
}

export default Dropdown