import { FormControl, FormControlLabel, Grid, IconButton, InputAdornment, Radio, RadioGroup, TextField } from '@mui/material';
import { DatePicker, DatePickerProps } from 'antd';
import { FormikValues } from 'formik';
import { useContext, useState } from 'react';
import Icons from '../../../../assets/Icons';
import { ageRange, education, educationSituation, gender, homeDistrict, profession, yesNoPreferData } from '../../../../data/userManagement/UserManagementData';
import '../../../calender/customizeCalender.css';
import HomeDistrictSelect from '../../../Form/HomeDistrictSelect';
import LabelForm from '../../../common/Form/LabelForm';
import { UserManagementContext } from '../../../../context/UserManagementProvider';
import CustomSelect from '../../../CustomSelect';

type Prop =
    {
        formik: FormikValues,
    }

const PersonalInformation2 = ({ formik }: Prop) => {

    const [openCalender, setOpenCalender] = useState<boolean>(false);

    const [focus, setFocus] = useState("")

    const onDateChange: DatePickerProps['onChange'] = (date, dateString) => {
        formik.setFieldValue("dateOfBirth", dateString)
    };

    const { selectedFieldOutline } = useContext(UserManagementContext);


    return (
        <div >
            <div className={`${!openCalender && 'hidden'} bg-transparent fixed top-0 left-0 h-full w-full z-[90]`} onClick={() => setOpenCalender(false)}></div>
            <Grid container spacing={3.5}>
                {/* Speakers name */}
                <Grid item xs={6}>
                    <div>
                        <TextField
                            id="name"
                            name="name"
                            size='small'
                            sx={{
                                '&:hover fieldset': {
                                    borderColor: 'rgb(19, 110, 229) !important',
                                },
                            }}
                            label={<div className={`${focus === "name" ? "" : "mt-[3px]"}`} ><span className={`${focus === "name" ? "font-medium" : "text-[14px] font-semibold"}`}>Speaker's Name </span></div>}
                            onFocus={() => setFocus("name")}
                            onBlur={() => setFocus("")}
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            // helperText={formik.touched.speakersName && formik.errors.speakersName}
                            style={{ width: '100%' }}
                            InputProps={{
                                style: {
                                    color: '#464E5F',
                                    fontWeight: '500',
                                    fontSize: '14px',
                                    caretColor: '#136EE5',
                                    // border: selectedFieldOutline === 'speakersName' ? '1px solid #136EE5' : '1px solid transparent'
                                }
                            }}
                            variant="outlined"
                        // onFocus={() => setSelectedFieldOutline("speakersName")}
                        // onBlur={() => setSelectedFieldOutline("")}
                        />
                        {(formik.touched.name && formik.errors.name) && <p className='text-xxs text-red-500 ml-3.5 mt-1'>{formik.errors.name}</p>}
                    </div>
                </Grid>

                <Grid item xs={6}>
                    <div className='flex gap-x-[16px] items-center h-[48px]'>
                        <h1 className='text-blue-gray-75 font-medium text-small'>Gender</h1>
                        <div className='gap-x-2 flex'>
                            {
                                gender.map(value => (
                                    <div onClick={() => formik.setFieldValue('gender', value)} key={value} className={`${formik.values.gender === value ? 'text-secondary-blue-50 bg-blue-50 border-[1px] border-secondary-blue-50' : 'bg-white text-blue-gray-75'}  px-[12px] py-[8px] rounded-[20px] border-[1px] border-blue-gray-20 cursor-pointer font-medium duration-200`}>
                                        {value}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </Grid>

                <Grid item xs={6}>
                    <div className=''>
                        <TextField
                            id="email"
                            name="email"
                            size='small'
                            sx={{
                                '&:hover fieldset': {
                                    borderColor: 'rgb(19, 110, 229) !important',
                                },
                            }}
                            label={<div className={`${focus === "email" ? "" : "mt-[3px]"}`} ><span className={`${focus === "email" ? "font-medium" : "text-[14px] font-semibold"}`}>Email </span></div>}
                            onFocus={() => setFocus("email")}
                            onBlur={() => setFocus("")}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            style={{ width: '100%' }}
                            InputProps={{
                                style: {
                                    color: '#464E5F',
                                    fontWeight: '600',
                                    fontSize: '15px',
                                    caretColor: '#136EE5',
                                    // border: selectedFieldOutline === 'email' ? '1px solid #136EE5' : '1px solid transparent'
                                }
                            }}
                            variant="outlined"
                        // onFocus={() => setSelectedFieldOutline("email")}
                        // onBlur={() => setSelectedFieldOutline("")}
                        />
                    </div>
                </Grid>

                {/* Mobile Nujmber */}
                <Grid item xs={6}>
                    <div className=''>
                        <TextField
                            id="mobileNumber"
                            name="mobileNumber"
                            size='small'
                            sx={{
                                '&:hover fieldset': {
                                    borderColor: 'rgb(19, 110, 229) !important',
                                },
                            }}
                            label={<div className={`${focus === "mobileNumber" ? "" : "mt-[3px]"}`} ><span className={`${focus === "mobileNumber" ? "font-medium" : "text-[14px] font-semibold"}`}>Mobile Number </span></div>}
                            onFocus={() => setFocus("mobileNumber")}
                            onBlur={() => setFocus("")}
                            value={formik.values.mobileNumber}
                            onChange={formik.handleChange}
                            error={formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)}
                            helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
                            style={{ width: '100%' }}
                            InputProps={{
                                style: {
                                    color: '#464E5F',
                                    fontWeight: '600',
                                    fontSize: '15px',
                                    caretColor: '#136EE5',
                                    // border: selectedFieldOutline === 'mobileNumber' ? '1px solid #136EE5' : '1px solid transparent'
                                }
                            }}
                            variant="outlined"
                        // onFocus={() => setSelectedFieldOutline("mobileNumber")}
                        // onBlur={() => setSelectedFieldOutline("")}
                        />
                    </div>
                </Grid>

            </Grid>

            <div>
                <Grid container spacing={0} alignItems={"center"}>
                    <Grid item xs={5.8}>
                        <div className={`border ${selectedFieldOutline === 'dateOfBirth' ? 'border-secondary-blue-50' : 'border-transparent'} rounded-[7px] mt-6`}>
                            <FormControl sx={{ width: '100%' }} variant="outlined">
                                {/* <InputLabel htmlFor='dateOfBirth'>{<h1 className='comboBoxLabel'>Date of Birth <span className='text-[red]'>*</span></h1>}</InputLabel>
                                <OutlinedInput
                                    id='dateOfBirth'
                                    autoComplete='off'
                                    type='text'
                                    name={formik.values.dateOfBirth}
                                    error={formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)}
                                    label={<h1 className='comboBoxLabel'>Date of Birth <span className='text-[red]'>*</span></h1>}
                                    placeholder='DD-MM-YYYY'
                                    value={formik.values.dateOfBirth}
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
                                    onFocus={() => setSelectedFieldOutline("dateOfBirth")}
                                    onBlur={() => setSelectedFieldOutline("")}
                                /> */}

                                <TextField
                                    id='dateOfBirth'
                                    autoComplete='off'
                                    type='text'
                                    name={formik.values.dateOfBirth}
                                    size='small'
                                    sx={{
                                        '&:hover fieldset': {
                                            borderColor: 'rgb(19, 110, 229) !important',
                                        },
                                    }}
                                    label={<div className={`${focus === "dateOfBirth" ? "" : "mt-[3px]"}`} ><span className={`${focus === "dateOfBirth" ? "font-medium" : "text-[14px] font-semibold"}`}>Date of Birth <span className='text-[red]'>*</span></span></div>}
                                    onFocus={() => setFocus("dateOfBirth")}
                                    onBlur={() => setFocus("")}
                                    value={formik.values.dateOfBirth}
                                    onChange={formik.handleChange}
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
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={() => setOpenCalender(true)}
                                                >
                                                    <img src={Icons.calenderIcon} alt="" />
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </FormControl>
                            <div className={`userFormDate relative ${openCalender ? "block" : "hidden"}`}>
                                <DatePicker
                                    bordered={false}
                                    open={openCalender}
                                    popupClassName='datePicker2'
                                    onChange={onDateChange}
                                />
                            </div>
                        </div>
                        {(formik.touched.dateOfBirth && formik.errors.dateOfBirth) && <p className='text-xxs text-red-500 ml-3.5 mt-1'>{formik.errors.dateOfBirth}</p>}
                        {/* <div className={`userFormDate relative ${openCalender ? "block" : "hidden"}`}> */}

                    </Grid>
                    <Grid item xs={0.4}>
                        <div className={`text-small text-blue-gray-75 font-medium flex justify-center items-center h-full ${(formik.touched.dateOfBirth && formik.errors.dateOfBirth) && (formik.touched.ageRange && formik.errors.ageRange) ? "" : "pt-6"}`}><span>or</span></div>
                    </Grid>

                    <Grid item xs={5.8}>
                        {/* <div className={`mt-6 personalInfo border ${selectedFieldOutline === 'ageRange' ? 'border-secondary-blue-50' : 'border-transparent'} rounded-[7px]`}>
                            <Autocomplete
                                classes={{ option: classes.option }}
                                disableClearable
                                placeholder='Choose one'
                                id="ageRange"
                                style={{ width: '100%' }}
                                options={ageRange}
                                value={formik.values.ageRange}
                                onChange={(event, value) => {
                                    if (typeof value === 'string') {

                                        formik.setFieldValue('ageRange', value)
                                    } else {
                                        formik.setFieldValue('ageRange', '')
                                    }
                                }}
                                renderOption={(props, option) => (
                                    <Box key={option} component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                        <div className='flex justify-between items-center w-full'>
                                            <h2 className='text-blue-gray-80 text-small font-medium'>{option}</h2>
                                            <h2 className='text-blue-gray-A20 text-xs font-medium pr-[4pxx]'>year</h2>
                                        </div>
                                    </Box>
                                )}
                                renderInput={(params) => (
                                    <>
                                        <TextField
                                            placeholder='Choose one'
                                            {...params}
                                            name="ageRange"
                                            error={formik.touched.ageRange && Boolean(formik.errors.ageRange)}
                                            // helperText={formik.touched.ageRange && formik.errors.ageRange}
                                            // InputProps={{
                                            //     style: {
                                            //         height: '44px',
                                            //     }
                                            // }}
                                            variant="outlined"
                                            onFocus={() => setSelectedFieldOutline("ageRange")}
                                            onBlur={() => setSelectedFieldOutline("")}
                                            label={<h1 className='comboBoxLabel'>Age Range <span className='text-[red]'>*</span></h1>}
                                        />

                                    </>

                                )}

                            />
                        </div>
                        {(formik.touched.ageRange && formik.errors.ageRange) && <p className='text-xxs text-red-500 ml-3.5 mt-1'>{formik.errors.ageRange}</p>} */}
                        <div className='mt-6'>
                            <CustomSelect.Type1
                                formikValues={formik.values.ageRange}
                                data={ageRange}
                                formikError={formik.errors.ageRange}
                                formikTouched={formik.touched.ageRange}
                                formik={formik}
                                name={'ageRange'}
                                fieldLabel='Age Range'
                                optionWidth='w-[380px]'
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>

            <div className='mt-6  personalInfo'>
                <Grid container spacing={3.5}>

                    <Grid item xs={6}>
                        {/* <div className={`border ${selectedFieldOutline === 'education' ? 'border-secondary-blue-50' : 'border-transparent'} rounded-[7px]`}>
                            <Autocomplete
                                classes={{ option: classes.option }}
                                disableClearable
                                placeholder='Choose one'
                                id="education"
                                style={{ width: '100%' }}
                                options={education}
                                value={formik.values.education}
                                onChange={(event, value) => {
                                    if (typeof value === 'string') {

                                        formik.setFieldValue('education', value)
                                    } else {
                                        formik.setFieldValue('education', '')
                                    }
                                }}

                                renderInput={(params) => (
                                    <>
                                        <TextField
                                            placeholder='Choose one'
                                            {...params}
                                            name="education"
                                            error={formik.touched.education && Boolean(formik.errors.education)}
                                            // helperText={formik.touched.education && formik.errors.education}
                                            // InputProps={{
                                            //     style: {
                                            //         color: 'red',
                                            //         fontWeight: '600',
                                            //         fontSize: '30px',
                                            //     }
                                            // }}
                                            variant="outlined"
                                            onFocus={() => setSelectedFieldOutline("education")}
                                            onBlur={() => setSelectedFieldOutline("")}

                                            label={<h1 className='comboBoxLabel'>Education <span className='text-[red]'>*</span></h1>}
                                        />

                                    </>
                                )}
                            />
                        </div>
                        {(formik.touched.education && formik.errors.education) && <p className='text-xxs text-red-500 ml-3.5 mt-1'>{formik.errors.education}</p>} */}

                        <CustomSelect.Type1
                            formikValues={formik.values.education}
                            data={education}
                            formikError={formik.errors.education}
                            formikTouched={formik.touched.education}
                            formik={formik}
                            name={'education'}
                            fieldLabel='Education'
                            optional={true}
                            optionWidth='w-[380px]'
                        />

                    </Grid>

                    <Grid item xs={6}>
                        {/* <div className={`personalInfo border ${selectedFieldOutline === 'educationSituation' ? 'border-secondary-blue-50' : 'border-transparent'} rounded-[7px]`}>
                            <Autocomplete
                                classes={{ option: classes.option }}
                                disableClearable
                                placeholder='Choose one'
                                id="educationSituation"
                                style={{ width: '100%' }}
                                options={educationSituation}
                                value={formik.values.educationSituation}
                                onChange={(event, value) => {
                                    if (typeof value === 'string') {

                                        formik.setFieldValue('educationSituation', value)
                                    } else {
                                        formik.setFieldValue('educationSituation', '')
                                    }
                                }}

                                renderInput={(params) => (
                                    <>
                                        <TextField
                                            placeholder='Choose one'
                                            {...params}
                                            name="educationSituation"
                                            error={formik.touched.educationSituation && Boolean(formik.errors.educationSituation)}
                                            // helperText={formik.touched.educationSituation && formik.errors.educationSituation}
                                            label={<h1 className='comboBoxLabel'>Economic Situation <span className='text-[red]'>*</span></h1>}
                                            variant="outlined"
                                            onFocus={() => setSelectedFieldOutline("educationSituation")}
                                            onBlur={() => setSelectedFieldOutline("")}
                                        />
                                        {(formik.touched.educationSituation && formik.errors.educationSituation) && <p className='text-xxs text-red-500 ml-3.5 mt-1'>{formik.errors.educationSituation}</p>}

                                    </>
                                )}
                            />
                        </div> */}
                        <CustomSelect.Type1
                            formikValues={formik.values.economicSituation}
                            data={educationSituation}
                            formikError={formik.errors.economicSituation}
                            formikTouched={formik.touched.economicSituation}
                            formik={formik}
                            name={'economicSituation'}
                            fieldLabel='Economic Situation'
                            optional={true}
                            optionWidth='w-[380px]'
                        />
                    </Grid>

                    <Grid item xs={6}>
                        {/* <div className={`personalInfo border ${selectedFieldOutline === 'profession' ? 'border-secondary-blue-50' : 'border-transparent'} rounded-[7px]`}>
                            <Autocomplete
                                classes={{ option: classes.option }}
                                disableClearable
                                placeholder='Choose one'
                                id="profession"
                                style={{ width: '100%' }}
                                options={profession}
                                value={formik.values.profession}
                                onChange={(event, value) => {
                                    if (typeof value === 'string') {

                                        formik.setFieldValue('profession', value)
                                    } else {
                                        formik.setFieldValue('profession', '')
                                    }
                                }}


                                renderOption={(props, option) => (
                                    <Box key={option} component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                        <div className='flex justify-between items-center w-full'>
                                            <h1 className='text-blue-gray-80 text-small font-normal'>{option}</h1>
                                        </div>
                                    </Box>
                                )}

                                renderInput={(params) => (
                                    <>
                                        <TextField
                                            {...params}
                                            name="profession"
                                            error={formik.touched.profession && Boolean(formik.errors.profession)}
                                            // helperText={formik.touched.profession && formik.errors.profession}
                                            variant="outlined"
                                            onFocus={() => setSelectedFieldOutline("profession")}
                                            onBlur={() => setSelectedFieldOutline("")}
                                            label={<h1 className='comboBoxLabel'>Profession
                                                <span className='text-[red]'> *</span>
                                            </h1>}
                                        />
                                        {(formik.touched.profession && formik.errors.profession) && <p className='text-xxs text-red-500 ml-3.5 mt-1'>{formik.errors.profession}</p>}
                                    </>
                                )}
                            />
                        </div> */}
                        <CustomSelect.Type1
                            formikValues={formik.values.profession}
                            data={profession}
                            formikError={formik.errors.profession}
                            formikTouched={formik.touched.profession}
                            formik={formik}
                            name={'profession'}
                            fieldLabel='Profession'
                            optional={true}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <div>
                            <HomeDistrictSelect
                                required={true}
                                formikValues={formik.values.childhoodPlace}
                                data={homeDistrict}
                                formikError={formik.errors.childhoodPlace}
                                formikTouched={formik.touched.childhoodPlace}
                                formik={formik}
                                name={'childhoodPlace'}
                                fieldLabel='Childhood Place'
                            />
                            <div className='flex items-center mt-[5px]'>
                                <img className='w-[13.33px] h-[13.33px] mr-[5px]' src={Icons.Leading} alt="" />
                                <p className='text-blue-gray-75 text-xxs'>Where lived from 2-15 years of age</p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>

            <div className='mt-6 mb-3'>
                <LabelForm
                    title='Permanent Address'
                    required={true}
                />
            </div>

            <div >
                <Grid container spacing={3.5}>
                    <Grid item xs={4}>
                        <HomeDistrictSelect
                            required={true}
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
                            required={true}
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
                        {/* <HomeDistrictSelect
                            formikValues={formik.values.villageArea}
                            data={homeDistrict}
                            formikError={formik.errors.villageArea}
                            formikTouched={formik.touched.villageArea}
                            formik={formik}
                            name={'villageArea'}
                            fieldLabel='Village/ Area'
                        /> */}
                        <TextField
                            id="villageArea"
                            name="villageArea"
                            // label={<h1 className='comboBoxLabel'>Village/Area <span className='text-[red]'>*</span></h1>}
                            size='small'
                            sx={{
                                '&:hover fieldset': {
                                    borderColor: 'rgb(19, 110, 229) !important',
                                },
                            }}
                            label={<div className={`${focus === "villageArea" ? "" : "mt-[3px]"}`} ><span className={`${focus === "villageArea" ? "font-medium" : "text-[14px] font-semibold"}`}>Village Area <span className='text-[red]'>*</span></span></div>}
                            onFocus={() => setFocus("villageArea")}
                            onBlur={() => setFocus("")}
                            value={formik.values.villageArea}
                            onChange={formik.handleChange}
                            error={formik.touched.villageArea && Boolean(formik.errors.villageArea)}
                            // helperText={formik.touched.villageArea && formik.errors.villageArea}
                            style={{ width: '100%' }}
                            InputProps={{
                                style: {
                                    color: '#464E5F',
                                    fontWeight: '500',
                                    fontSize: '14px',
                                    caretColor: '#136EE5',
                                    border: selectedFieldOutline === 'villageArea' ? '1px solid #136EE5' : '1px solid transparent'
                                }
                            }}
                            variant="outlined"
                            // onFocus={() => setSelectedFieldOutline("villageArea")}
                            // onBlur={() => setSelectedFieldOutline("")}
                        />
                        {(formik.touched.villageArea && formik.errors.villageArea) && <p className='text-xxs text-red-500 ml-3.5 mt-1'>{formik.errors.villageArea}</p>}
                    </Grid>
                </Grid>
            </div>

            <div className='flex items-center gap-x-[35px] mt-6'>
                <h1 className='text-blue-gray-75 text-small font-medium w-[94px]'>Smoking</h1>
                <div>
                    <FormControl>
                        <RadioGroup
                            row
                            name="smoking"
                            value={formik.values.smoking}
                            onChange={formik.handleChange}
                            onBlur={() => formik.setFieldTouched("smoking", true)}
                        // defaultValue='Yes'
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
                            <div className='text-red-600 text-xxs'>{formik.errors.smoking}</div>
                        ) : null}
                    </FormControl>
                </div>
            </div>

            <div className='flex items-center gap-x-[35px] mt-[5px]'>
                <h1 className='text-blue-gray-75 text-small font-medium w-[94px]'>Stutter</h1>
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
                            <div className='text-red-600 text-xxs'>{formik.errors.stutter}</div>
                        ) : null}
                    </FormControl>
                </div>
            </div>

            <div className='flex items-center gap-x-[35px] mt-[5px]'>
                <h1 className='text-blue-gray-75 text-small font-medium'>Hearing Status</h1>
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
                            <div className='text-red-600 text-xxs'>{formik.errors.hearingStatus}</div>
                        ) : null}
                    </FormControl>
                </div>
            </div>

        </div >
    );
};

export default PersonalInformation2;