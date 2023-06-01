import { Autocomplete, Box, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';
import { ageRange, education, educationSituation, gender, homeDistrict, profession } from '../../../../../../data/userManagement/UserManagementData';
import { healthFactors, recordingArea, recordingDistanceAssign } from '../../../../../../data/assign/AssignData';
import MultipleSelect from '../../../../../Form/MultipleSelect';
import Icons from '../../../../../../assets/Icons';
import { FormikValues } from 'formik';
import { useState } from 'react';
import CustomSelect from '../../../../../CustomSelect';
import HomeDistrictSelect from '../../../../../Form/HomeDistrictSelect';


const SpeakerInformation = ({ formik }: { formik: FormikValues }) => {

    const [clicked, setClicked] = useState(false);
    const [focus, setFocus] = useState("")


    return (
        <div className=''>
            <div className='w-[308px]'>
                <div className='mb-6'>
                    <h1 className='text-ct-blue-60 text-small font-semibold'>Speaker Information</h1>
                </div>
                <div className='flex gap-x-[16px] items-center h-[48px]'>
                    <h1 className='text-blue-gray-75 font-medium text-small'>Gender</h1>
                    <div className='gap-x-2 flex'>
                        {
                            gender.map(value => (
                                <div onClick={() => formik.setFieldValue('gender', value)} key={value} className={`${formik.values.gender.toLowerCase() === value.toLowerCase() ? ' text-[#136EE5] bg-blue-50 border-[1px] border-secondary-blue-50' : 'bg-white text-blue-gray-75'}  px-[12px] py-[8px] rounded-[20px] border-[1px] border-blue-gray-20 cursor-pointer font-medium duration-200 flex gap-x-[7px] items-center`}>
                                    {
                                        formik.values.gender.toLowerCase() === value.toLowerCase() &&
                                        <img className='w-[11px] h-[8px]' src={Icons.CorrectIcon} alt="" />
                                    }
                                    <h1>{value}</h1>
                                </div>
                            ))
                        }
                    </div>
                </div>


                {/* <Autocomplete
                    disableClearable
                    placeholder='Choose one'
                    size='small'
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
                                <h1 className='text-blue-gray-80 text-small font-medium'>{option}</h1>
                                <h1 className='text-blue-gray-A20 text-xs font-medium pr-[4pxx]'>year</h1>
                            </div>
                        </Box>
                    )}

                    renderInput={(params) => (
                        <TextField
                            // style={{border: '1px solid green', borderRadius: '7px'}}
                            placeholder='Choose one'
                            {...params}
                            name="ageRange"
                            error={formik.touched.ageRange && Boolean(formik.errors.ageRange)}
                            helperText={formik.touched.ageRange && formik.errors.ageRange}

                            InputLabelProps={{
                                // shrink: true,
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }
                            }}

                            sx={{
                                '&:hover fieldset': {
                                    borderColor: 'rgb(19, 110, 229) !important',
                                },
                            }}
                            label={<div className={`${!clicked && "w-[15.7rem]"} flex justify-between ${focus === "description" ? "" : "mt-[3px]"}`} >
                                <h1 className='comboBoxLabel'>
                                    Age Range
                                    <span className='text-[red]'>*</span>
                                </h1>
                                <h1 className={`${clicked && 'hidden'} text-xs font-medium text-blue-gray-A20`}>year</h1>
                            </div>}
                            onFocus={() => setFocus("description")}
                            onBlur={() => setFocus("")}
                            // label={
                            //     <div className={`${!clicked && "w-[15.7rem]"} flex justify-between`}>
                            //         <h1 className='comboBoxLabel'>
                            //             Age Range
                            //             <span className='text-[red]'>*</span>
                            //         </h1>
                            //         <h1 className={`${clicked && 'hidden'} text-xs font-medium text-blue-gray-A20`}>year</h1>
                            //     </div>
                            // }

                            variant="outlined"
                        // onFocus={() => {
                        //     setSelectedFieldOutline("ageRange");
                        //     setClicked(!clicked)
                        // }}
                        // onBlur={() => {
                        //     setSelectedFieldOutline("")
                        //     setClicked(!clicked)
                        // }}

                        />
                    )}
                /> */}

                <div className='mt-4'>
                    <CustomSelect.Type1
                        formikValues={formik.values.ageRange}
                        data={ageRange}
                        formikError={formik.errors.ageRange}
                        formikTouched={formik.touched.ageRange}
                        formik={formik}
                        name={'ageRange'}
                        fieldLabel='Age Range'

                    />
                </div>

                <div className='mt-4'>
                    <HomeDistrictSelect
                        formikValues={formik.values.district}
                        data={homeDistrict}
                        formikError={formik.errors.district}
                        formikTouched={formik.touched.district}
                        formik={formik}
                        name={'district'}
                        fieldLabel='District'
                    />
                </div>

                <div className='flex gap-3 mt-4'>

                    {/* <Autocomplete
                        disableClearable
                        placeholder='Choose one'
                        id="profession"
                        style={{ width: '122px' }}
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
                                    <h1 className='text-blue-gray-80 text-small font-medium'>{option}</h1>
                                </div>
                            </Box>
                        )}

                        renderInput={(params) => (

                            <TextField
                                {...params}
                                name="profession"
                                error={formik.touched.profession && Boolean(formik.errors.profession)}
                                helperText={formik.touched.profession && formik.errors.profession}

                                label={<h1 className='comboBoxLabel'>Profession
                                </h1>}
                                variant="outlined"
                            
                            />
                        )}
                    /> */}
                    <div className='w-full flex justify-between'>
                        <div className='w-[122px]'>
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
                        </div>



                        {/* <Autocomplete
                        disableClearable
                        placeholder='Choose one'
                        id="economicSituation"
                        style={{ width: '174px' }}
                        options={educationSituation}
                        value={formik.values.economicSituation}
                        onChange={(event, value) => {
                            if (typeof value === 'string') {

                                formik.setFieldValue('economicSituation', value)
                            } else {
                                formik.setFieldValue('economicSituation', '')
                            }
                        }}


                        renderOption={(props, option) => (
                            <Box key={option} component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                <div className='flex justify-between items-center w-full'>
                                    <h1 className='text-blue-gray-80 text-small font-medium'>{option}</h1>
                                </div>
                            </Box>
                        )}

                        renderInput={(params) => (

                            <TextField
                                {...params}
                                name="economicSituation"
                                

                                label={<h1 className='comboBoxLabel'>Economic Situation</h1>}
                                variant="outlined"
                            />
                        )}
                    /> */}
                        <div className='w-[174px]'>
                            <CustomSelect.Type1
                                formikValues={formik.values.economicSituation}
                                data={educationSituation}
                                formikError={formik.errors.economicSituation}
                                formikTouched={formik.touched.economicSituation}
                                formik={formik}
                                name={'economicSituation'}
                                fieldLabel='Economic Situation'
                                optional={true}
                            />
                        </div>
                    </div>
                </div>


                {/* <Autocomplete
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
                        <TextField
                            placeholder='Choose one'
                            {...params}
                            name="education"
                            error={formik.touched.education && Boolean(formik.errors.education)}
                            helperText={formik.touched.education && formik.errors.education}
                            label={<h1 className='comboBoxLabel'>Education </h1>}
                            variant="outlined"
                        // onFocus={() => setSelectedFieldOutline("education")}
                        // onBlur={() => setSelectedFieldOutline("")}
                        />
                    )}
                /> */}
                <div className='mt-4'>
                    <CustomSelect.Type1
                        formikValues={formik.values.education}
                        data={education}
                        formikError={formik.errors.education}
                        formikTouched={formik.touched.education}
                        formik={formik}
                        name={'education'}
                        fieldLabel='Education'
                        optional={true}
                    />
                </div>


                <div className='mt-4'>
                    <FormGroup row>
                        {healthFactors.map((value, i) => (
                            <div key={i} className={`border-[1px] pr-[7px] pl-[13px] border-ct-blue-05 rounded-tl-[7px] w-[102px] h-[46px] bg-[#FFFFFF]`}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name={value}
                                            checked={formik.values.healthFactors.includes(value)}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    formik.setFieldValue("healthFactors", [...formik.values.healthFactors, value]);
                                                } else {
                                                    formik.setFieldValue("healthFactors", formik.values.healthFactors.filter((item: string) => item !== value));
                                                }
                                            }}
                                        />
                                    }
                                    label={<h1 className={`text-xs font-medium ${formik.values.healthFactors.includes(value) ? 'text-secondary-blue-50' : ((formik.values.healthFactors.length > 0 && !formik.values.healthFactors.includes("Speaker") && value === "Speaker") || (formik.values.healthFactors.includes("Speaker") && value !== "Speaker")) ? 'text-blue-gray-45' : 'text-blue-gray-75 '} `}>{value}</h1>}
                                />
                            </div>
                        ))}



                    </FormGroup>
                </div>


                {/* <Autocomplete
                    disableClearable
                    placeholder='Choose one'
                    id="recordingArea"
                    style={{ width: '100%' }}
                    options={recordingArea}
                    value={formik.values.recordingArea}
                    onChange={(event, value) => {
                        if (typeof value === 'string') {

                            formik.setFieldValue('recordingArea', value)
                        } else {
                            formik.setFieldValue('recordingArea', '')
                        }
                    }}

                    renderInput={(params) => (

                        <TextField
                            placeholder='Choose one'
                            {...params}
                            name="recordingArea"
                            

                            label={<h1 className='comboBoxLabel'>Recording Area
                            </h1>}
                            variant="outlined"
                        
                        />
                    )}
                /> */}
                <div className='mt-4'>
                    <CustomSelect.Type1
                        formikValues={formik.values.recordingArea}
                        data={recordingArea}
                        formikError={formik.errors.recordingArea}
                        formikTouched={formik.touched.recordingArea}
                        formik={formik}
                        name={'recordingArea'}
                        fieldLabel='Recording Area'
                        optional={true}
                        dropdownAlign='top'
                    />
                </div>


                {/* <Autocomplete
                    disableClearable
                    placeholder='Choose one'
                    id="recordingDistance"
                    style={{ width: '100%' }}
                    options={recordingDistanceAssign}
                    value={formik.values.recordingDistance}
                    onChange={(event, value) => {
                        if (typeof value === 'string') {

                            formik.setFieldValue('recordingDistance', value)
                        } else {
                            formik.setFieldValue('recordingDistance', '')
                        }
                    }}

                    renderInput={(params) => (

                        <TextField
                            placeholder='Choose one'
                            {...params}
                            name="recordingDistance"

                            label={<h1 className='comboBoxLabel'>Recording Distance/ Mode
                            </h1>}
                            variant="outlined"
                       
                        />
                    )}
                /> */}

                <div className='mt-4'>
                    <CustomSelect.Type1
                        formikValues={formik.values.recordingDistance}
                        data={recordingDistanceAssign}
                        formikError={formik.errors.recordingDistance}
                        formikTouched={formik.touched.recordingDistance}
                        formik={formik}
                        name={'recordingDistance'}
                        fieldLabel='Recording Distance'
                        optional={true}
                        dropdownAlign='top'
                    />
                </div>

            </div>
        </div>
    );
};

export default SpeakerInformation;