import React from 'react'

type Props = {
    activeMonth: string;
    year: number;
    setCalenderBtn: React.Dispatch<React.SetStateAction<boolean>>;
    calenderBtn: boolean;
}

const Date = ({ activeMonth, calenderBtn, setCalenderBtn, year }: Props) => {
    return (
        <button
            onClick={() => setCalenderBtn(!calenderBtn)}
            className={`border-[1px] border-transparent ${calenderBtn ? "bg-ct-blue-05" : "bg-ct-blue-05 hover:bg-ct-blue-10 hover:border-ct-blue-30 active:bg-ct-blue-30"} rounded-[4px] py-1 px-4 text-small font-medium text-ct-blue-90 mx-2 duration-300`}
        >
            {activeMonth}'{year.toString().slice(2, 4)}
        </button>
    )
}

export default Date