import React from 'react'
import Icons from '../../assets/Icons';

type Props = {
    week: number;
    month: string;
}

const weekData = [
    { week: 1, name: 'Week 01(01-07' },
    { week: 2, name: 'Week 02(08-14' },
    { week: 3, name: 'Week 03(15-21' },
    { week: 4, name: 'Week 04(22-28' },
    { week: 5, name: 'Week 05(29-31' },

]

const DropdownWeekBtn = ({ week, month }: Props) => {
    return (
        <button className='py-1 px-3 flex items-center border-[1px] border-ct-blue-20 rounded-[20px]'><span className='text-ct-blue-90-70% font-medium text-xxs'>{weekData.filter(item => item.week === week)[0].name.split("(")[0]}</span> <img src={Icons.lightDropDown} alt="" className='w-1.5 h-1 ml-2.5 mr-1' /></button>
    )
}

export default DropdownWeekBtn