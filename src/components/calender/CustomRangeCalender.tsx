import React, { useState } from 'react';
import { ConfigProvider, DatePickerProps } from 'antd';
import { DatePicker } from "antd";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import CloseIcon from '../../assets/Icons/close.png'
import { InputAdornment, styled, TextField } from "@mui/material";
import './customizeCalender.css'
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'moment/locale/en-gb';
import locale from 'antd/es/locale/en_GB';
import moment from 'moment';

dayjs.extend(customParseFormat);
dayjs.extend(isBetween)
moment.locale('en-gb', {
    week: {
        dow: 1, /// Date offset
    },
});

const CssTextField = styled(TextField)({
    '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root': {
        color: "white",
        background: "black",
        borderRadius: "4px",
        padding: "2px 4px"
    },
    '& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root': {
        background: "black",
    },

    '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
        color: "white",
        fontSize: "16px",
        background: "black",
        fontWeight: "500",
        borderRadius: "4px",
        fontFamily: "Fira Sans",
        padding: "0px 14px"

    },
    '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
        color: "#F9FAFC",
        fontWeight: "500",
        fontFamily: "Fira Sans"

    },
    '& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
        color: "#9FA3B2",
        fontSize: "12px",
        fontWeight: "500",
        fontFamily: "Fira Sans"

    },
    '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
        color: "white",
        fontSize: "12px",
        background: "black",
        borderRadius: "4px"

    },
    '& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: "#136EE5"
    },
    '& label.Mui-focused': {
        // color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'none',
        },
        '&:hover fieldset': {
            // borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
            // borderColor: 'green',
            color: "white !important"
        },
    },
});
export type DateDT = {
    start: string;
    end: string

}
interface Props {
    trigger: boolean;
    setDateValue: any
    setOpen: React.Dispatch<boolean>;
}
const CustomRangeCalender = ({ trigger, setDateValue, setOpen }: Props) => {
    const DateFormat: string = "DD-MM-YYYY"
    const [fistClick, setFirstClick] = useState<boolean>(false);

    const _init: DateDT = { start: "", end: "" };

    const [date, setDate] = useState<any>(_init)

    const [inputDate, setInputDate] = useState<any>(_init)

    const getCalenderDate: DatePickerProps['onChange'] = (date, dateString) => {
        if (fistClick) {
            setDate((prev: any) => ({ ...prev, end: date }))
            setInputDate((prev: any) => ({ ...prev, end: date ? date.format(DateFormat) : "" }))
            // setDateValue((prev:any)=>({...prev,end: date ? date.format(DateFormat) : ""}))
        } else {
            setDate((prev: any) => ({ ...prev, start: date }))
            setInputDate((prev: any) => ({ ...prev, start: date ? date.format(DateFormat) : "" }))
            setFirstClick(true);
            // setDateValue((prev:any)=>({...prev,start: date ? date.format(DateFormat) : ""}))
        }
    };

    // @ts-ignore
    const handleInputDateEnter = (e: any, type: any) => {

        e.stopPropagation();

        if (e.key === 'Enter') {

            const _date = dayjs(e.target.value, DateFormat);

            if (type === "start") {

                if (date && date.end && _date.isAfter(date.end)) {
                    return;
                }

                setDate((prev: any) => ({ ...prev, start: _date }))
                setFirstClick(true);
            } else {

                if (date && date.start && _date.isBefore(date.start)) {
                    return;
                }

                setDate((prev: any) => ({ ...prev, end: _date }))
            }

        }

    }

    const handleInputDateChange = (e: any, type: any) => {

        e.stopPropagation();

        if (type === "start") {
            setInputDate((prev: any) => ({ ...prev, start: e.target.value }))
            // setDateValue((prev:any)=>({...prev,start:e.target.value }))

            setFirstClick(true);
        } else {
            setInputDate((prev: any) => ({ ...prev, end: e.target.value }))
            // setDateValue((prev:any)=>({...prev,end:e.target.value }))
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
            setInputDate((prev: any) => ({ ...prev, start: "" }))
            setDate((prev: any) => ({ ...prev, start: "" }))
            // setDateValue((prev: any) => ({...prev, start: ""}))
        }
        if (type === "end") {
            setInputDate((prev: any) => ({ ...prev, end: "" }))
            setDate((prev: any) => ({ ...prev, end: "" }))
            // setDateValue((prev: any) => ({...prev, end: ""}))
        }
    }

    const onSearch = (value: any) => {
        setDateValue(inputDate)
        setOpen(false);
    }


    return (
        <>
            <div onClick={() => setOpen(false)} className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-10 z-[80] animate-fadeIn ${trigger ? "block" : "hidden"}`} />
            <ConfigProvider locale={locale}>
                <DatePicker
                    className="custom-date-picker"
                    showToday={false}
                    open={trigger}
                    onChange={getCalenderDate}
                    disabledDate={idDisabledDate}
                    suffixIcon={null}
                    bordered={false}
                    format={DateFormat}
                    value={date && (date.start || date.end)} // Important for render the component
                    dateRender={(current) => {

                        const style: any = {};

                        let inRange = false;

                        if (date && date.start && date.end) {
                            inRange = dayjs(current).isBetween(date.start, date.end)
                        }

                        if (inRange) {
                            style.color = "#ffffff";
                        }

                        const isStartSelected = date && date.start && (current.isSame(date.start));
                        const isEndSelected = date && date.start && (current.isSame(date.end));

                        if (isStartSelected || isEndSelected) {
                            style.borderRadius = '50%';
                            style.color = "#ffffff";
                            style.backgroundColor = "#136EE5";
                        }

                        const inRangeClass = inRange ? 'date-in-range' : '';
                        const isSelectedStart = isStartSelected ? 'date-s-selected' : '';
                        const isSelectedEnd = isEndSelected ? 'date-e-selected' : '';

                        return (
                            <div
                                className={`ant-picker-cell-inner ${inRangeClass} ${isSelectedStart} ${isSelectedEnd}`}
                                style={style}
                            >
                                <span className="date">{current.date()}</span>
                            </div>
                        );
                    }}
                    renderExtraFooter={() =>

                        <div className="">
                            <p className='text-center text-white mb-0'>Or</p>
                            <div
                                onMouseDown={(e) => e.stopPropagation()}
                                className="flex gap-2"
                            >
                                <div className="relative rounded">
                                    <CssTextField
                                        id="startDate"
                                        label="Start Date"
                                        variant="outlined"
                                        className="bg-black-90 text-white border-none rounded"
                                        placeholder="DD-MM-YYYY"
                                        value={inputDate ? inputDate.start : ""}
                                        onClick={() => inputClickEvent("start")}
                                        onKeyDown={(e) => handleInputDateEnter(e, "start")}
                                        onChange={(e) => handleInputDateChange(e, "start")}
                                        InputProps={{
                                            endAdornment: <InputAdornment
                                                position="end"
                                            >
                                                {
                                                    inputDate.start && <img
                                                        className="h-3 w-3 cursor-pointer"
                                                        src={CloseIcon}
                                                        alt="network-error"
                                                        onClick={() => handleClear('start')} />
                                                }
                                            </InputAdornment>,
                                        }}
                                        sx={{
                                            input: {
                                                "&::placeholder": {
                                                    opacity: 1,
                                                    color: "#5F6B7D",
                                                    fontSize: "13px",
                                                },
                                            },
                                        }}
                                    />

                                </div>
                                <div className="relative rounded">
                                    <CssTextField
                                        id="endDate"
                                        label="End Date"
                                        variant="outlined"
                                        className="bg-black-90 text-white border-none rounded"
                                        value={inputDate ? inputDate.end : ""}
                                        onClick={() => inputClickEvent("end")}
                                        onKeyDown={(e) => handleInputDateEnter(e, "end")}
                                        onChange={(e) => handleInputDateChange(e, "end")}
                                        placeholder="DD-MM-YYYY"
                                        InputProps={{
                                            endAdornment: <InputAdornment
                                                position="end"
                                            >
                                                {
                                                    inputDate.end && <img
                                                        className="h-3 w-3 cursor-pointer"
                                                        src={CloseIcon}
                                                        alt="network-error"
                                                        onClick={() => handleClear('end')} />
                                                }
                                            </InputAdornment>,
                                        }}
                                        sx={{
                                            input: {
                                                "&::placeholder": {
                                                    opacity: 1,
                                                    color: "#5F6B7D",
                                                    fontSize: "13px",
                                                },
                                            },
                                        }}
                                    />

                                </div>
                            </div>
                            <div>
                                <button onClick={onSearch} className="bg-ct-blue-60 w-full text-white rounded-md mt-6 py-1 text-base font-medium"> Search Payment
                                    History
                                </button>
                            </div>
                        </div>
                    }

                />
            </ConfigProvider>
        </>
    );
};

export default CustomRangeCalender;