import { CaretDownOutlined } from '@ant-design/icons';
import { Autocomplete, FormControl, FormControlLabel, FormLabel, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Radio, RadioGroup, TextField } from '@mui/material';
import { DatePicker, DatePickerProps, Modal } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { ageRange, education, educationSituation, gender, homeDistrict, yesNoPreferData } from '../../../../data/userManagement/UserManagementData';
import '../../../calender/customizeCalender.css';
import HomeDistrictSelect from '../../../Form/HomeDistrictSelect';

type Prop =
    {
        formik?: any,
    }

const PersonalInformation2 = ({ formik }: Prop) => {

    const [openCalender, setOpenCalender] = useState<boolean>(false);

    return (
        <div>
            <div className={`${!openCalender && 'hidden'} bg-transparent fixed top-0 left-0 h-full w-full z-[90]`} onClick={() => setOpenCalender(false)}></div>
            <Grid container spacing={5}>
                {/* Speakers name */}
                <Grid item xs={6}>
                    <TextField
                        id="speakersName"
                        name="speakersName"
                        label={<div>Speakers Name <span className='text-[red]'>*</span></div>}
                        value={formik.values.speakersName}
                        onChange={formik.handleChange}
                        error={formik.touched.speakersName && Boolean(formik.errors.speakersName)}
                        helperText={formik.touched.speakersName && formik.errors.speakersName}
                        style={{ width: '100%' }}
                        InputProps={{
                            style: {
                                color: '#464E5F',
                                fontWeight: '600',
                                fontSize: '15px'
                            }
                        }}
                        variant="outlined" />
                </Grid>

                <Grid item xs={6}>
                    <div className='flex gap-x-[16px] items-center h-[48px]'>
                        <h1 className='text-blue-gray-75 font-medium text-[14px]'>Gender</h1>
                        <div className='gap-x-2 flex'>
                            {
                                gender.map(value => (
                                    <div onClick={() => formik.setFieldValue('gender', value)} key={value} className={`${formik.values.gender === value ? 'text-[#136EE5] bg-blue-50 border-[1px] border-[#136EE5]' : 'bg-white text-blue-gray-75'}  px-[12px] py-[8px] rounded-[20px] border-[1px] border-blue-gray-20 cursor-pointer font-medium duration-200`}>
                                        {value}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </Grid>

                <Grid item xs={6}>
                    <div>
                        <FormControl sx={{ width: '100%' }} variant="outlined">
                            <InputLabel htmlFor='dateOfBirth'>{<div>Date of Birth <span className='text-[red]'>*</span></div>}</InputLabel>
                            <OutlinedInput
                                id='dateOfBirth'
                                autoComplete='off'
                                type='text'
                                // onMouseDown={onHomeDistrictFocus}
                                name={formik.values.dateOfBirth}
                                label={<div>Date of Birth <span className='text-[red]'>*</span></div>}
                                // value={onTextField || ''}
                                // onChange={(e) => {
                                //     handleSearch(e);
                                //     setOnTextField(e.target.value);
                                // }}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton

                                            // aria-label="toggle password visibility"
                                            // edge="end"
                                            onClick={() => setOpenCalender(true)}
                                        >
                                            <CaretDownOutlined />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>

                        <div className='userFormDate relative'>
                            <DatePicker
                                style={{
                                    position: 'absolute',
                                }}
                                bordered={false}
                                open={openCalender}
                            />
                        </div>
                    </div>
                </Grid>

                <Grid item xs={6}>
                    <Autocomplete
                        id="ageRange"
                        style={{ width: '100%' }}
                        options={ageRange}
                        value={formik.values.ageRange}
                        onChange={(event, value) => {
                            if (typeof value === 'string') {
                                console.log('event', event);

                                formik.setFieldValue('ageRange', value)
                            } else {
                                formik.setFieldValue('ageRange', '')
                            }
                        }}

                        renderInput={(params) => (

                            <TextField
                                {...params}
                                name="ageRange"
                                error={formik.touched.ageRange && Boolean(formik.errors.ageRange)}
                                helperText={formik.touched.ageRange && formik.errors.ageRange}

                                label={<span className='comboBoxLabel'>Age Range <span className='text-[red]'>*</span></span>}

                            />
                        )}
                    />
                </Grid>


                <Grid item xs={6}>
                    <Autocomplete
                        id="education"
                        style={{ width: '100%' }}
                        options={education}
                        value={formik.values.education}
                        onChange={(event, value) => {
                            if (typeof value === 'string') {
                                console.log('event', event);

                                formik.setFieldValue('education', value)
                            } else {
                                formik.setFieldValue('education', '')
                            }
                        }}

                        renderInput={(params) => (

                            <TextField
                                {...params}
                                name="education"
                                error={formik.touched.education && Boolean(formik.errors.education)}
                                helperText={formik.touched.education && formik.errors.education}

                                label={<span className='comboBoxLabel'>Education <span className='text-[red]'>*</span></span>}

                            />
                        )}
                    />
                </Grid>

                <Grid item xs={6}>
                    <Autocomplete
                        id="educationSituation"
                        style={{ width: '100%' }}
                        options={educationSituation}
                        value={formik.values.educationSituation}
                        onChange={(event, value) => {
                            if (typeof value === 'string') {
                                console.log('event', event);

                                formik.setFieldValue('educationSituation', value)
                            } else {
                                formik.setFieldValue('educationSituation', '')
                            }
                        }}

                        renderInput={(params) => (

                            <TextField
                                {...params}
                                name="educationSituation"
                                error={formik.touched.educationSituation && Boolean(formik.errors.educationSituation)}
                                helperText={formik.touched.educationSituation && formik.errors.educationSituation}

                                label={<span className='comboBoxLabel'>Education Situation <span className='text-[red]'>*</span></span>}

                            />
                        )}
                    />
                </Grid>

                <Grid item xs={6}>
                    <div>
                        <HomeDistrictSelect
                            formikValues={formik.values.childhoodPlace}
                            data={homeDistrict}
                            formikError={formik.errors.childhoodPlace}
                            formikTouched={formik.touched.childhoodPlace}
                            formik={formik}
                            name={'childhoodPlace'}
                            fieldLabel='Childhood Place'
                        />
                    </div>
                </Grid>
            </Grid>

            <div className='mt-[35px]'>
                <Grid container spacing={4}>
                    <Grid item xs={4}>
                        <HomeDistrictSelect
                            formikValues={formik.values.district}
                            data={homeDistrict}
                            formikError={formik.errors.district}
                            formikTouched={formik.touched.district}
                            formik={formik}
                            name={'district'}
                            fieldLabel='District'
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <HomeDistrictSelect
                            formikValues={formik.values.upazilaCity}
                            data={homeDistrict}
                            formikError={formik.errors.upazilaCity}
                            formikTouched={formik.touched.upazilaCity}
                            formik={formik}
                            name={'upazilaCity'}
                            fieldLabel='Upazilla/ City'
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <HomeDistrictSelect
                            formikValues={formik.values.villageArea}
                            data={homeDistrict}
                            formikError={formik.errors.villageArea}
                            formikTouched={formik.touched.villageArea}
                            formik={formik}
                            name={'villageArea'}
                            fieldLabel='Village/ Area'
                        />
                    </Grid>
                </Grid>
            </div>

            <div className='flex items-center gap-x-[35px] mt-[29px]'>
                <h1 className='text-blue-gray-75 text-[14px] font-medium w-[94px]'>Smoking</h1>
                <div>
                    <FormControl>
                        <RadioGroup
                            row
                            name="smoking"
                            value={formik.values.smoking}
                            onChange={formik.handleChange}
                            onBlur={() => formik.setFieldTouched("smoking", true)}
                        // defaultValue='Read'
                        >
                            {
                                yesNoPreferData?.map((value, i) => (
                                    <FormControlLabel
                                        style={{
                                            color: `${formik.values.smoking === value ? '#136EE5' : '#5F6B7D'} `,
                                            fontSize: '14px',
                                        }}
                                        key={i}
                                        value={value}
                                        control={<Radio
                                        />}
                                        label={value} />
                                ))
                            }
                        </RadioGroup>
                        {formik.touched.smoking && formik.errors.smoking ? (
                            <div className='text-red-600 text-[12px]'>{formik.errors.smoking}</div>
                        ) : null}
                    </FormControl>
                </div>
            </div>

            <div className='flex items-center gap-x-[35px] mt-[39px]'>
                <h1 className='text-blue-gray-75 text-[14px] font-medium w-[94px]'>Shutter</h1>
                <div>
                    <FormControl>
                        <RadioGroup
                            row
                            name="stutter"
                            value={formik.values.stutter}
                            onChange={formik.handleChange}
                            onBlur={() => formik.setFieldTouched("stutter", true)}
                        // defaultValue='Read'
                        >
                            {
                                yesNoPreferData?.map((value, i) => (
                                    <FormControlLabel
                                        style={{
                                            color: `${formik.values.stutter === value ? '#136EE5' : '#5F6B7D'} `,
                                            fontSize: '14px',
                                        }}
                                        key={i}
                                        value={value}
                                        control={<Radio
                                        />}
                                        label={value} />
                                ))
                            }
                        </RadioGroup>
                        {formik.touched.stutter && formik.errors.stutter ? (
                            <div className='text-red-600 text-[12px]'>{formik.errors.stutter}</div>
                        ) : null}
                    </FormControl>
                </div>
            </div>

            <div className='flex items-center gap-x-[35px] mt-[39px]'>
                <h1 className='text-blue-gray-75 text-[14px] font-medium'>Hearing Status</h1>
                <div>
                    <FormControl>
                        <RadioGroup
                            row
                            name="hearingStatus"
                            value={formik.values.hearingStatus}
                            onChange={formik.handleChange}
                            onBlur={() => formik.setFieldTouched("hearingStatus", true)}
                        // defaultValue='Read'
                        >
                            {
                                yesNoPreferData?.map((value, i) => (
                                    <FormControlLabel
                                        style={{
                                            color: `${formik.values.hearingStatus === value ? '#136EE5' : '#5F6B7D'} `,
                                            fontSize: '14px',
                                        }}
                                        key={i}
                                        value={value}
                                        control={<Radio
                                        />}
                                        label={value} />
                                ))
                            }
                        </RadioGroup>
                        {formik.touched.hearingStatus && formik.errors.hearingStatus ? (
                            <div className='text-red-600 text-[12px]'>{formik.errors.hearingStatus}</div>
                        ) : null}
                    </FormControl>
                </div>
            </div>

        </div>
    );
};

export default PersonalInformation2;