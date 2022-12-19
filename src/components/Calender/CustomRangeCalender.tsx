import React, {useState} from 'react';
import type {DatePickerProps} from 'antd';
import {DatePicker, Input} from "antd";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import './customizeCalender.css'
import CloseIcon from '../../assets/Icons/close.png'

dayjs.extend(isBetween)


const CustomRangeCalender = () => {

    const [fistClick, setFirstClick] = useState<boolean>(false);

    const _init = {start: "", end: ""};

    const [date, setDate] = useState<any>(_init)

    const [inputDate, setInputDate] = useState<any>(_init)

    const getCalenderDate: DatePickerProps['onChange'] = (date, dateString) => {
        if (fistClick) {
            setDate((prev: any) => ({...prev, end: date}))
            setInputDate((prev: any) => ({...prev, end: date ? date.format("YYYY-MM-DD") : ""}))
        } else {
            setDate((prev: any) => ({...prev, start: date}))
            setInputDate((prev: any) => ({...prev, start: date ? date.format("YYYY-MM-DD") : ""}))
            setFirstClick(true);
        }
    };

    // @ts-ignore
    const handleInputDateEnter = (e: any, type: any) => {

        e.stopPropagation();

        if (e.key === 'Enter') {

            const _date = dayjs(e.target.value);

            if (type === "start") {

                if (date && date.end && _date.isAfter(date.end)) {
                    return;
                }

                setDate((prev: any) => ({...prev, start: _date}))
                setFirstClick(true);
            } else {

                if (date && date.start && _date.isBefore(date.start)) {
                    return;
                }

                setDate((prev: any) => ({...prev, end: _date}))
            }

        }

    }

    const handleInputDateChange = (e: any, type: any) => {

        e.stopPropagation();

        if (type === "start") {
            setInputDate((prev: any) => ({...prev, start: e.target.value}))
            setFirstClick(true);
        } else {
            setInputDate((prev: any) => ({...prev, end: e.target.value}))
        }

    }

    const inputClickEvent = (type: any) => {

        if (type === "start") {
            setFirstClick(false);
        } else {
            setFirstClick(true);
        }

    }

    const idDisabledDate = (currentDate: any) => {

        if (!date) return false;

        if (fistClick && date.start) {
            return currentDate.isBefore(date.start);
        }

        if (!fistClick && date.end) {
            return currentDate.isAfter(date.end);
        }

        return false
    }
    const handleClear = (type: any) => {
        if (type === "start") {
            setInputDate((prev: any) => ({...prev, start: ""}))
            setDate((prev: any) => ({...prev, start: ""}))
        }
        if (type === "end") {
            setInputDate((prev: any) => ({...prev, end: ""}))
            setDate((prev: any) => ({...prev, end: ""}))
        }
    }

    console.log('-------------------', inputDate.start.length)
    return (
        <div className="custom-range-calender">
            <DatePicker
                showToday={false}
                open={true}
                onChange={getCalenderDate}
                disabledDate={idDisabledDate}

                value={date && (date.start || date.end)} // Important for render the component
                dateRender={(current) => {

                    const style: any = {};

                    let inRange = false;

                    if (date && date.start && date.end) {
                        inRange = dayjs(current).isBetween(date.start, date.end)
                    }

                    if (inRange) {

                        style.borderRadius = '50%';
                        style.color = "#ffffff";
                        style.backgroundColor = "red";
                    }

                    const isStartSelected = date && date.start && (current.isSame(date.start));
                    const isEndSelected = date && date.start && (current.isSame(date.end));

                    if (isStartSelected || isEndSelected) {
                        style.borderRadius = '50%';
                        style.color = "#ffffff";
                        style.backgroundColor = "#136EE5";
                    }


                    return (
                        <div
                            className="ant-picker-cell-inner"
                            style={style}
                        >
                            {current.date()}
                        </div>
                    );
                }}
                renderExtraFooter={() =>

                    <div className="p-2">
                        <p className='text-center text-white mb-0'>Or</p>
                        <div
                            onMouseDown={(e) => e.stopPropagation()}
                            className="flex gap-2"
                        >
                            <div className="relative">
                                <Input
                                    suffix={inputDate.start ? <img
                                        className="h-3 w-3 cursor-pointer"
                                        src={CloseIcon}
                                        alt="network-error"
                                        onClick={()=>handleClear('start')}/> : null}
                                    className="bg-black-90 text-white border-none "
                                    // placeholder="Start Date"
                                    value={inputDate ? inputDate.start : ""}
                                    onClick={() => inputClickEvent("start")}
                                    onKeyDown={(e) => handleInputDateEnter(e, "start")}
                                    onChange={(e) => handleInputDateChange(e, "start")}
                                />
                                {/*<small style={{left:"12px",bottom:"32px"}} className="text-white bg-ct-blue-60 absolute">Start Date</small>*/}
                            </div>
                            <div className="relative">
                                <Input
                                    suffix={<img
                                        className="h-3 w-3 cursor-pointer"
                                        src={CloseIcon}
                                        alt="network-error"
                                        onClick={() => handleClear('end')}/>}
                                    className="bg-black-90 text-white border-none "
                                    value={inputDate ? inputDate.end : ""}
                                    onClick={() => inputClickEvent("end")}
                                    onKeyDown={(e) => handleInputDateEnter(e, "end")}
                                    onChange={(e) => handleInputDateChange(e, "end")}
                                />
                            </div>
                        </div>
                        <div>
                            <button className="bg-ct-blue-60 w-full text-white rounded-md mt-3"> Search Payment
                                History
                            </button>
                        </div>
                    </div>
                }

            />
        </div>
    );
};

export default CustomRangeCalender;