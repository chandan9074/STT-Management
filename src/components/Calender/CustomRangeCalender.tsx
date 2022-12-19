import React, {useState} from 'react';
import type {DatePickerProps} from 'antd';
import {DatePicker, Input} from "antd";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import './customizeCalender.css'

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

    return (
        <div>
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
                        style.backgroundColor = "#e6f4ff"
                    }

                    const isStartSelected = date && date.start && (current.isSame(date.start));
                    const isEndSelected = date && date.start && (current.isSame(date.end));

                    if (isStartSelected || isEndSelected) {
                        style.color = "#ffffff";
                        style.backgroundColor = "#1677FF";
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
                        <p className='text-center mb-0'>Or</p>
                        <div className="flex gap-2">
                            <Input
                                placeholder="Start Date"
                                allowClear
                                value={inputDate ? inputDate.start : ""}
                                onClick={() => inputClickEvent("start")}
                                onKeyDown={(e) => handleInputDateEnter(e, "start")}
                                onChange={(e) => handleInputDateChange(e, "start")}
                            />
                            <Input
                                placeholder="End Date"
                                allowClear
                                value={inputDate ? inputDate.end : ""}
                                onClick={() => inputClickEvent("end")}
                                onKeyDown={(e) => handleInputDateEnter(e, "end")}
                                onChange={(e) => handleInputDateChange(e, "end")}
                            />
                        </div>
                        <div>
                            <button className="bg-ct-blue-60 w-full text-white rounded-md mt-3"> Search Payment History</button>
                        </div>
                    </div>
                }

            />
        </div>
    );
};

export default CustomRangeCalender;