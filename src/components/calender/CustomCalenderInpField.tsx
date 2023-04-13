import { DatePicker, DatePickerProps } from 'antd';
import React, { useEffect } from 'react'
import Icons from '../../assets/Icons';
import { targetFilterDT, targetFilterListDT } from '../../types/assignTypes';
import CustomRangeCalender from './CustomRangeCalender';
import { getDateRangeInMonthFormate } from '../../helpers/Utils';

type Props = {
    data: targetFilterDT;
    isParent: string | undefined;
    filterList: targetFilterListDT;
    handleFilterList: (key: string, value: string) => void;
    popupClassName?: string;
    dateRanger?: boolean;
};

const CustomCalenderInpField = ({ data, filterList, handleFilterList, isParent, popupClassName, dateRanger }: Props) => {
    const [open, setOpen] = React.useState(false);
    const [dateValue, setDateValue] = React.useState<{ start: string, end: string }>({ start: "", end: "" });

    useEffect(() => {
        if (dateValue.start && dateValue.end) {
            const newDate = getDateRangeInMonthFormate(dateValue);
            console.log(newDate, "newDate")
            if (newDate) {
                handleFilterList(data.key, newDate)
            }
        }
    }, [dateValue]);

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        handleFilterList(data.key, dateString)
    };

    return (
        <div className="relative w-80">
            <div className="p-3 border border-blue-gray-10 rounded-[7px] bg-white inline-flex">
                <div className="w-72 overflow-x-auto flex items-center">
                    {filterList[data.key].length === 0 ? (
                        <button
                            onClick={() => setOpen(!open)}
                            className="text-xs text-blue-gray-60 mb-0 py-0.5 w-full text-left"
                        >
                            Select One
                        </button>
                    ) : (
                        <>
                            {filterList[data.key].map((item: string, index: number) => (
                                <div key={index} className="flex items-center py-1 px-2 rounded-[4px] bg-ct-blue-20 mr-2 animate-fadeIn">
                                    <h5 className="text-xs text-blue-gray-80 font-medium mb-0 mr-1 whitespace-nowrap">
                                        {item}
                                    </h5>
                                    <button
                                        onClick={() => handleFilterList(data.key, item)}
                                        className="p-0.5 bg-white rounded-[3px] w-3 h-3 hover:bg-ct-blue-10 active:bg-ct-blue-30"
                                    >
                                        <img src={Icons.CloseIconButton} alt="" className="" />
                                    </button>
                                </div>
                            ))}
                        </>
                    )}
                </div>
                <button className="p-0.5" onClick={() => setOpen(!open)}>
                    <img
                        src={Icons.calenderIcon}
                        alt=""
                        className={`ml-2 ${open ? "rotate-180" : "rotate-0"} duration-200`}
                    />
                </button>
            </div>
            {dateRanger ?
                (
                    <CustomRangeCalender
                        trigger={open}
                        setOpen={setOpen}
                        setDateValue={setDateValue}
                    />)
                :
                (<div className='userFormDate'>
                    <DatePicker
                        bordered={false}
                        onChange={onChange}
                        open={open}
                        popupClassName={popupClassName}
                    />
                </div>)
            }


        </div >
    )
}

export default CustomCalenderInpField