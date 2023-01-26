import React, {useState} from 'react';
import {Button, DatePicker, DatePickerProps, Form, Input, Modal, Space} from 'antd';
import './customizeCalender.css'
import {Moment} from "moment";
import dayjs from 'dayjs';

const {RangePicker} = DatePicker;

const CustomizeCalender = () => {

    const [form] = Form.useForm();

    const [open, setOpen] = useState<boolean>(false);
    const [startDate, setStartDate] = useState<any>("")
    const [endDate, setEndDate] = useState<any>("")
    const dateFormat = 'YYYY-MM-DD';
    const getDateCalender: any = (date: any, dateString: any, info: any) => {

      

        if(dateString[0]) {
        // if(dateString[0]) {
            form.setFieldsValue({start: dateString[0]});
        }

        if(dateString[1]){
            form.setFieldsValue({end: dateString[1]});
        }

        return []

    };

    const onFinish = (values: any) => {
        if(values.start){
            setStartDate(values.start)
        }
        if(values.end){
            setEndDate(values.end)
        }
    };

    const onFinishFailed = (errorInfo: any) => {
      
    };


   
    return (
        <div className='cm-range-picker flex'>
            <button className="" onClick={() => setOpen(!open)}>Open calender</button>
            <div className="myy-class">
                <RangePicker
                    bordered={false}
                    suffixIcon={null}
                    allowClear={false}
                    open={open}
                    separator={null}
                    // style={{ visibility: "hidden", width: 0 }}
                    // defaultValue={[dayjs('2022/12/01', dateFormat), dayjs('2022/12/05', dateFormat)]}
                    format={dateFormat}
                    value={[startDate ? dayjs(startDate, dateFormat) : null, endDate ? dayjs(endDate, dateFormat) : null]}
                    onCalendarChange={getDateCalender}
                    onChange={(e, e1) => console.log("onChange", e, e1)}
                    renderExtraFooter={() => <div className="m-5" onMouseDown={(e) => e.stopPropagation()}>
                        <p className='text-center'>Or</p>

                        <Form
                            name="basic"
                            initialValues={{
                                start: startDate ? startDate : "",
                                end: endDate ? endDate : ""
                        }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            className="flex gap-5"
                            form={form}
                        >
                            <Form.Item
                                name="start"
                            >
                                <Input placeholder="Start Date" allowClear/>

                            </Form.Item>

                            <Form.Item
                                name="end"
                            >
                                <Input placeholder="End Date" allowClear/>
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 8, span: 16 }} className="hidden">
                                <Button type="primary" htmlType="submit" >
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                        <div>
                            <button className="bg-ct-blue-60 p-1 w-full text-white rounded-md"> Search Payment History</button>
                        </div>
                    </div>}
                />

            </div>

        </div>
    );
};

export default CustomizeCalender;