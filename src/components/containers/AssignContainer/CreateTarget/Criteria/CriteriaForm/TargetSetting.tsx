import { FormControl, TextField } from '@mui/material';
import { DatePicker, DatePickerProps } from 'antd';
import { FormikValues } from 'formik';
import { useState } from 'react';

const TargetSetting = ({ formik }: { formik: FormikValues }) => {

    const [openCalender, setOpenCalender] = useState<boolean>(false);

    const [openReminderCalender, setOpenReminderCaleder] = useState<boolean>(false);

    const [focus, setFocus] = useState("")

    const onDateChange: DatePickerProps['onChange'] = (date, dateString) => {
        formik.setFieldValue("deadline", dateString);
        setOpenCalender(false);
    };

    const onReminderDateChange: DatePickerProps['onChange'] = (date, dateString) => {
        // formik.setFieldValue("reminder", [...formik.values.reminder, getDateWithMonthName2(dateString)]);
        formik.setFieldValue("reminder", [...formik.values.reminder, dateString]);
        setOpenReminderCaleder(false);
    };

    // const onReminderRemove = (value: string) => {

    //     const _data = formik.values.reminder?.filter((m: string, index: number) => m !== value);

    //     formik.setFieldValue("reminder", _data);

    // }

    return (
        <div className='w-[308px]'>
            <div className={`${(!openCalender) && 'hidden'} bg-transparent fixed top-0 left-0 h-full w-full z-[90]`} onClick={() => setOpenCalender(false)}></div>
            <div className={`${(!openReminderCalender) && 'hidden'} bg-transparent fixed top-0 left-0 h-full w-full z-[90]`} onClick={() => setOpenReminderCaleder(false)}></div>
            <div className='mb-6'>
                <h1 className='text-ct-blue-60 text-small font-semibold'>Target Setting</h1>
            </div>
            <div >
                <TextField
                    type='number'
                    id="target"
                    name="target"
                    size='small'
                    sx={{
                        '&:hover fieldset': {
                            borderColor: 'rgb(19, 110, 229) !important',
                        },
                    }}
                    label={<div className={`${focus === "description" ? "" : "mt-[3px]"}`} ><span className={`${focus === "description" ? "font-medium" : "text-[14px] font-semibold"}`}>Target <span className='text-red-500'>*</span></span></div>}
                    onFocus={() => setFocus("description")}
                    onBlur={() => setFocus("")}
                    value={formik.values.target === 0 ? "" : formik.values.target}
                    onChange={formik.handleChange}
                    // error={formik.touched.target && Boolean(formik.errors.target)}
                    // helperText={formik.touched.target && formik.errors.target}
                    style={{
                        width: '122px',
                        // border: selectedFieldOutline === 'target' ? '1px solid #136EE5' : '1px solid transparent'
                    }}
                    InputProps={{
                        style: {
                            color: '#464E5F',
                            fontWeight: '600',
                            fontSize: '15px',
                        }
                    }}

                    variant="outlined"
                // onFocus={() => setSelectedFieldOutline("target")}
                // onBlur={() => setSelectedFieldOutline("")}
                />

                <p className='text-blue-gray-75 text-xxs mt-[4px]'>No. of audio to be uploaded</p>
            </div>


            <div className='mt-4'>

                <FormControl sx={{ width: '100%' }} variant="outlined">
                    {/* <InputLabel htmlFor='deadline'>{<h1 className='comboBoxLabel'>Deadline <span className='text-[red]'></span></h1>}</InputLabel>
                        <OutlinedInput
                            id='deadline'
                            autoComplete='off'
                            type='text'
                            name={formik.values.deadline}
                            label={<h1 className='comboBoxLabel'>Deadline <span className='text-[red]'>*</span></h1>}
                            value={formik.values.deadline}
                            onChange={formik.handleChange}
                            onClick={() => setOpenCalender(true)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton

                                        
                                        onClick={() => setOpenCalender(true)}
                                    >
                                        <img src={Icons.calenderIcon} alt="" />
                                    </IconButton>
                                </InputAdornment>
                            }
                            onFocus={() => setSelectedFieldOutline("deadline")}
                            onBlur={() => setSelectedFieldOutline("")}
                        /> */}
                    <TextField
                        id='deadline'
                        autoComplete='off'
                        type='text'
                        name={formik.values.deadline}
                        size='small'
                        sx={{
                            '&:hover fieldset': {
                                borderColor: 'rgb(19, 110, 229) !important',
                            },
                        }}
                        label={<div className={`${focus === "deadline" ? "" : "mt-[3px]"}`} ><span className={`${focus === "deadline" ? "font-medium" : "text-[14px] font-semibold"}`}>Deadline</span></div>}
                        onFocus={() => setFocus("deadline")}
                        onBlur={() => setFocus("")}
                        value={formik.values.deadline}
                        onChange={formik.onReminderDateChange}
                        onClick={() => setOpenCalender(true)}
                        inputProps={{
                            style: {
                                color: '#464E5F',
                                fontWeight: '600',
                                fontSize: '15px',
                                caretColor: '#136EE5',
                                // border: selectedFieldOutline === 'description' ? '1px solid #136EE5' : '1px solid transparent',
                            },
                            endAdornment: (
                                // <InputAdornment position="end">
                                //     <IconButton
                                //         onClick={() => setOpenReminderCaleder(true)}
                                //     >
                                //         <img src={Icons.calenderIcon} alt="" />
                                //     </IconButton>
                                // </InputAdornment>
                                <div>hello</div>
                            )
                        }}
                    />
                </FormControl>

                <div className={`userFormDate relative ${openCalender ? "block" : "hidden"}`}>
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

                {/* <div className='-mt-[10px]'>
                    <div className='w-full border-[1px] border-blue-gray-20 rounded-[7px] py-[8px] pr-[15px] pl-3 bg-white flex items-center justify-between relative'>
                        {
                            formik.values.reminder.length !== 0 &&
                            <div className='p-[4px] absolute -top-[14px]'>
                                <h1 className=' bg-white text-blue-gray-80 font-medium text-small'>Reminder</h1>
                            </div>
                        }
                        <div className='flex gap-x-2 w-[240px] overflow-x-auto '>
                            {
                                formik.values.reminder.length === 0 ?
                                    <h2 className=' comboBoxLabel'>Reminder</h2>
                                    :
                                    formik.values.reminder.map((value: string, i: number) => (
                                        <div key={i} className='bg-ct-blue-20 rounded-[4px] flex justify-center items-center py-[3px] px-[8px] gap-x-[4px]'>
                                            <h1 className='text-xs text-blue-gray-80 font-medium whitespace-nowrap'>
                                                {getDateWithMonthName2(value)}
                                            </h1>
                                            <div className='cursor-pointer w-[14px] p-[3px] bg-white rounded-[3px]'>
                                                <img
                                                    className='h-[8px] w-[8px]'
                                                    src={Icons.CloseIconButton}
                                                    alt=""
                                                    onClick={() => onReminderRemove(value)}
                                                />
                                            </div>
                                        </div>
                                    ))
                            }
                        </div>
                        <button
                            disabled={formik.values.reminder.length === 3}
                            onClick={(event) => {
                                event.preventDefault();
                                setOpenReminderCaleder(true);
                            }}
                        >
                            <img
                                className='w-[24px] h-[24px]'
                                src={Icons.calenderIcon}
                                alt=""
                            />
                        </button>
                    </div>

                    <h4 className='text-blue-gray-75 text-xxs pl-[14px] mt-[4px]'>
                        Select {3 - formik.values.reminder.length} ({(3 - formik.values.reminder.length) === 0 ? 'Zero' : (3 - formik.values.reminder.length) === 1 ? 'One' : (3 - formik.values.reminder.length) === 2 ? "Two" : 'Three'}) dates
                    </h4>

                    <div className='userFormDate relative'>
                        <DatePicker
                            bordered={false}
                            open={openReminderCalender}
                            popupClassName='reminderDatePicker'
                            onChange={onReminderDateChange}
                        />
                    </div>

                </div> */}
                <div className='mt-4'>
                    <FormControl sx={{ width: '100%' }} variant="outlined">
                        {/* <InputLabel htmlFor='reminder'>{<h1 className='comboBoxLabel'>Reminder <span className='text-[red]'></span></h1>}</InputLabel>
                        <OutlinedInput
                            id='reminder'
                            autoComplete='off'
                            type='text'
                            name={formik.values.reminder}
                            label={<h1 className='comboBoxLabel'>Reminder <span className='text-[red]'>*</span></h1>}
                            value={formik.values.reminder}
                            onChange={formik.onReminderDateChange}
                            onClick={() => setOpenReminderCaleder(true)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => setOpenReminderCaleder(true)}
                                    >
                                        <img src={Icons.calenderIcon} alt="" />
                                    </IconButton>
                                </InputAdornment>
                            }
                            onFocus={() => setSelectedFieldOutline("reminder")}
                            onBlur={() => setSelectedFieldOutline("")}
                        /> */}
                        <TextField
                            id='reminder'
                            autoComplete='off'
                            type='text'
                            name={formik.values.reminder}
                            size='small'
                            sx={{
                                '&:hover fieldset': {
                                    borderColor: 'rgb(19, 110, 229) !important',
                                },
                            }}
                            label={<div className={`${focus === "reminder" ? "" : "mt-[3px]"}`} ><span className={`${focus === "reminder" ? "font-medium" : "text-[14px] font-semibold"}`}>Reminder</span></div>}
                            onFocus={() => setFocus("reminder")}
                            onBlur={() => setFocus("")}
                            value={formik.values.reminder}
                            onChange={formik.onReminderDateChange}
                            onClick={() => setOpenReminderCaleder(true)}
                            inputProps={{
                                style: {
                                    color: '#464E5F',
                                    fontWeight: '600',
                                    fontSize: '15px',
                                    caretColor: '#136EE5',
                                    // border: selectedFieldOutline === 'description' ? '1px solid #136EE5' : '1px solid transparent',
                                },
                                endAdornment: (
                                    // <InputAdornment position="end">
                                    //     <IconButton
                                    //         onClick={() => setOpenReminderCaleder(true)}
                                    //     >
                                    //         <img src={Icons.calenderIcon} alt="" />
                                    //     </IconButton>
                                    // </InputAdornment>
                                    <div>hello</div>
                                )
                            }}
                        />
                    </FormControl>

                    <div className={`userFormDate relative ${openReminderCalender ? "block" : "hidden"}`}>
                        <DatePicker
                            bordered={false}
                            open={openReminderCalender}
                            popupClassName='reminderDatePicker'
                            onChange={onReminderDateChange}
                        />
                    </div>
                </div>

                <div className='mt-4'>
                    <TextField
                        id="remark"
                        name="remark"
                        multiline
                        rows={4}
                        maxRows={4}
                        size='small'
                        sx={{
                            '&:hover fieldset': {
                                borderColor: 'rgb(19, 110, 229) !important',
                            },
                        }}
                        label={<div className={`${focus === "remark" ? "" : "mt-[3px]"}`} ><span className={`${focus === "remark" ? "font-medium" : "text-[14px] font-semibold"}`}>Remark </span></div>}
                        onFocus={() => setFocus("remark")}
                        onBlur={() => setFocus("")}
                        value={formik.values.remark}
                        onChange={formik.handleChange}
                        // error={formik.touched.remark && Boolean(formik.errors.remark)}
                        // helperText={formik.touched.remark && formik.errors.remark}
                        style={{
                            width: '100%',
                            // border: selectedFieldOutline === 'primaryRole' ? '1px solid #136EE5' : '1px solid transparent'
                        }}
                        InputProps={{
                            style: {
                                color: '#464E5F',
                                fontWeight: '600',
                                fontSize: '15px'
                            }
                        }}
                        variant="outlined"
                    // onFocus={() => setSelectedFieldOutline("primaryRole")}
                    // onBlur={() => setSelectedFieldOutline("")}
                    />
                </div>
            </div>
        </div >
    );
};

export default TargetSetting;