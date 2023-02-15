import React from 'react'
import Icons from '../../assets/Icons';
import { weekBtnData } from '../../data/assign/AssignData';


type Props = {
    week: number;
}

const DropdownWeekBtn = ({ week, ...rest }: Props) => {
    return (
        <button {...rest} className='py-1 px-3 flex items-center border-[1px] border-ct-blue-20 rounded-[20px]'><span className='text-ct-blue-90-70% font-medium text-xxs'>{weekBtnData.filter(item => item.week === week)[0].name}</span> <img src={Icons.lightDropDown} alt="" className='w-1.5 h-1 ml-2.5 mr-1' /></button>
    )
}

export default DropdownWeekBtn