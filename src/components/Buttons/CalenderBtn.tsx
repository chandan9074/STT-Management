import React from 'react'
import Icons from '../../assets/Icons'

type Props = {
    activeMonth: string;
    year: number;
    setCalenderBtn: React.Dispatch<React.SetStateAction<boolean>>;
    calenderBtn: boolean;
    handleCalenderArrow: (type: "inc" | "dec") => void;
}

const CalenderBtn = ({ activeMonth, calenderBtn, setCalenderBtn, year, handleCalenderArrow }: Props) => {
    return (
        <div className='flex items-center bg-ct-blue-10 px-1 py-0.5 rounded-[20px]'>
            <button onClick={() => handleCalenderArrow('dec')}>
                <img src={Icons.bold_light_left_arrow} alt="" className="" />
            </button>
            <button onClick={() => setCalenderBtn(!calenderBtn)} className='text-ct-blue-90-70% font-medium text-xxs p-1'>{activeMonth}'{year.toString().slice(2, 4)}</button>
            <button onClick={() => handleCalenderArrow('inc')}>
                <img src={Icons.bold_light_right_arrow} alt="" className="" />
            </button>
        </div>
    )
}

export default CalenderBtn