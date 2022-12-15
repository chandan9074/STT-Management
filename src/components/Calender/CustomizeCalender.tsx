import React, {useState} from 'react';
import {DatePicker, DatePickerProps, Space} from 'antd';
import './customizeCalender.css'
const { RangePicker } = DatePicker;

const CustomizeCalender = () => {
    const [calenderOpen,setCalenderOpen]=useState<boolean>(false)
    // const openCalender=()=>{
    //
    // }
    const onChange: any = (date:any, dateString:any) => {
        console.log("hello", date, dateString);
    };
    const hello = (value:any, mode:any)=>{
        console.log(value)
    }
    return (
        <div className='cm-range-picker'>
            <button onClick={()=>setCalenderOpen(!calenderOpen)}>Open cl</button>
            <RangePicker
                open={calenderOpen}
                onPanelChange={hello}
                // onChange={onChange}
                // dateRender={hello}
                // onFocus={onChange}
                // dateRender={(current) => {
                //     // const style: React.CSSProperties = {};
                //     console.log(current)
                //     // if (current.date() === 1) {
                //     //     style.border = '1px solid #1890ff';
                //     //     style.borderRadius = '50%';
                //     // }
                //     return null;
                // }}
                // renderExtraFooter={() => <div>
                //
                //     <button className="w-100 bg-ct-blue-60 text-white">Search Payment History</button>
                // </div>}

            />
        </div>
    );
};

export default CustomizeCalender;