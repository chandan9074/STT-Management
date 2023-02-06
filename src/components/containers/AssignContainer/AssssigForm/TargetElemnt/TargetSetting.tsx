import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { DatePicker, DatePickerProps } from 'antd';
import { useState } from 'react';
import Icons from '../../../../../assets/Icons';
import { getDateWithMonthName2 } from '../../../../../helpers/Utils';

const TargetSetting = ({ formik }: { formik: any }) => {

    const [openCalender, setOpenCalender] = useState<boolean>(false);

    const [openReminderCalender, setOpenReminderCaleder] = useState<boolean>(false);

    const onDateChange: DatePickerProps['onChange'] = (date, dateString) => {
        formik.setFieldValue("deadline", dateString);
        setOpenCalender(false);
    };

    const onReminderDateChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(dateString);
        formik.setFieldValue("reminder", [...formik.values.reminder, dateString]);
        setOpenReminderCaleder(false);
    };

    const onReminderRemove = (i: number) => {
        console.log(i);

        const _data = formik.values.reminder?.filter((m: string, index: number) => index !== i)

        formik.setFieldValue("reminder", _data);

    }

    return (
        <div className='w-[308px]'>
            <div className={`${(!openCalender) && 'hidden'} bg-transparent fixed top-0 left-0 h-full w-full z-[90]`} onClick={() => setOpenCalender(false)}></div>
            <div className={`${(!openReminderCalender) && 'hidden'} bg-transparent fixed top-0 left-0 h-full w-full z-[90]`} onClick={() => setOpenReminderCaleder(false)}></div>
            <div className='mb-[24px]'>
                <h1 className='text-ct-blue-60 text-[14px] font-semibold'>Target</h1>
            </div>
            <div className='mt-4'>
                <TextField
                    id="target"
                    name="target"
                    label={<div>Target <span className='text-[red]'>*</span></div>}
                    value={formik.values.target}
                    onChange={formik.handleChange}
                    error={formik.touched.target && Boolean(formik.errors.target)}
                    helperText={formik.touched.target && formik.errors.target}
                    style={{
                        width: '122px'
                    }}
                    InputProps={{
                        style: {
                            color: '#464E5F',
                            fontWeight: '600',
                            fontSize: '15px',
                        }
                    }}

                    variant="outlined" />

                <h4 className='text-blue-gray-75 text-[12px] mt-[4px] pl-[14px]'>No. of audio to be uploaded</h4>
            </div>


            <div className='mt-4'>
                <FormControl sx={{ width: '100%' }} variant="outlined">
                    <InputLabel htmlFor='deadline'>{<div>Date of Birth <span className='text-[red]'>*</span></div>}</InputLabel>
                    <OutlinedInput
                        id='deadline'
                        autoComplete='off'
                        type='text'
                        name={formik.values.deadline}
                        label={<div>Date of Birth <span className='text-[red]'>*</span></div>}
                        value={formik.values.deadline}
                        onChange={formik.handleChange}
                        onClick={() => setOpenCalender(true)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton

                                    // aria-label="toggle password visibility"
                                    // edge="end"
                                    onClick={() => setOpenCalender(true)}
                                >
                                    <img src={Icons.calenderIcon} alt="" />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <div className='userFormDate relative'>
                    <DatePicker
                        bordered={false}
                        open={openCalender}
                        popupClassName='targetElementDatePicker'
                        onChange={onDateChange}
                    />
                </div>

                {/* <div>
                    <FormControl>
                        <div className={"container"}>
                            {values.map((item, index) => (
                                <Chip size="small" onDelete={() => handleDelete(item, index)} label={item} />
                            ))}
                        </div>
                        <Input
                            value={currValue}
                            onChange={handleChange}
                            onKeyDown={handleKeyUp}
                        />
                    </FormControl>
                </div> */}

                <div>
                    <div className='w-full border-[1px] border-blue-gray-20 rounded-[7px] py-[16px] pr-[15px] pl-3 bg-white flex items-center justify-between relative'>
                        {
                            formik.values.reminder.length !== 0 &&
                            <div className='p-[4px] absolute -top-[10px]'>
                                <h1 className=' bg-white text-blue-gray-80 font-medium text-[14px]'>Reminder</h1>
                            </div>
                        }
                        <div className='flex gap-x-2 w-[240px] overflow-x-auto '>
                            {
                                formik.values.reminder.length === 0 ?
                                    <h1 className=' bg-white text-blue-gray-80 font-medium text-[12px]'>Reminder</h1>
                                    :
                                    formik.values.reminder.map((value: string, i: number) => (
                                        <div className='bg-ct-blue-20 rounded-[4px] flex justify-center items-center py-[3px] px-[8px] gap-x-[4px]'>
                                            <h1 className='text-[13px] text-blue-gray-80 font-medium whitespace-nowrap'>
                                                {getDateWithMonthName2(value)}
                                                {/* 21 dec */}
                                            </h1>
                                            <div className='cursor-pointer w-[14px] p-[3px] bg-white rounded-[3px]'>
                                                <img
                                                    className='h-[8px] w-[8px]'
                                                    src={Icons.CloseIconButton}
                                                    alt=""
                                                    onClick={() => onReminderRemove(i)}
                                                />
                                            </div>
                                        </div>
                                    ))
                            }
                        </div>
                        <div>
                            <img
                                onClick={() => setOpenReminderCaleder(true)}
                                className='w-[24px] h-[24px]'
                                src={Icons.calenderIcon}
                                alt=""
                            />
                        </div>
                    </div>

                    <div className='userFormDate relative'>
                        <DatePicker
                            bordered={false}
                            open={openReminderCalender}
                            popupClassName='reminderDatePicker'
                            onChange={onReminderDateChange}
                        />
                    </div>
                </div>

                <div>
                    <TextField
                        id="remark"
                        name="remark"
                        multiline
                        rows={4}
                        label={<div>Speakers Name </div>}
                        value={formik.values.remark}
                        onChange={formik.handleChange}
                        error={formik.touched.remark && Boolean(formik.errors.remark)}
                        helperText={formik.touched.remark && formik.errors.remark}
                        style={{ width: '100%' }}
                        InputProps={{
                            style: {
                                color: '#464E5F',
                                fontWeight: '600',
                                fontSize: '15px'
                            }
                        }}
                        variant="outlined" />
                </div>
            </div>
        </div>
    );
};

export default TargetSetting;