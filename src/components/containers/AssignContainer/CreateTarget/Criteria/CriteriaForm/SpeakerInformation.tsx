import { Autocomplete, Box, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';
import { ageRange, education, educationSituation, gender, homeDistrict, profession } from '../../../../../../data/userManagement/UserManagementData';
import { healthFactors, recordingArea, recordingDistanceAssign } from '../../../../../../data/assign/AssignData';
import MultipleSelect from '../../../../../Form/MultipleSelect';
import Icons from '../../../../../../assets/Icons';
import { FormikValues } from 'formik';
import { useContext, useState } from 'react';
import { UserManagementContext } from '../../../../../../context/UserManagement';


const SpeakerInformation = ({ formik }: { formik: FormikValues }) => {

    const [clicked, setClicked] = useState(false);
    const { selectedFieldOutline, setSelectedFieldOutline } = useContext(UserManagementContext);


    return (
        <div className=''>
            <div className='w-[308px]'>
                <div className='mb-[18px]'>
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

                <div className={`personalInfo border ${selectedFieldOutline === 'ageRange' ? 'border-secondary-blue-50' : 'border-transparent'} rounded-[7px] mt-2`}>
                    <Autocomplete
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

                                label={
                                    <div className={`${!clicked && "w-[15.7rem]"} flex justify-between`}>
                                        <h1 className='comboBoxLabel'>
                                            Age Range
                                            <span className='text-[red]'>*</span>
                                        </h1>
                                        <h1 className={`${clicked && 'hidden'} text-xs font-medium text-blue-gray-A20`}>year</h1>
                                    </div>
                                }

                                variant="outlined"
                                onFocus={() => {
                                    setSelectedFieldOutline("ageRange");
                                    setClicked(!clicked)
                                }}
                                onBlur={() => {
                                    setSelectedFieldOutline("")
                                    setClicked(!clicked)
                                }}

                            />
                        )}
                    />
                </div>

                <div className='mt-4'>
                    <MultipleSelect
                        formikValues={formik.values.district}
                        data={homeDistrict}
                        formikError={formik.errors.district}
                        formikTouched={formik.touched.district}
                        formik={formik}
                        name={'district'}
                        fieldLabel='District'
                    />
                </div>

                <div className='flex gap-3'>
                    <div className={`mt-4 personalInfo border ${selectedFieldOutline === 'profession' ? 'border-secondary-blue-50' : 'border-transparent'} rounded-[7px]`}>
                        <Autocomplete
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
                                        {/* <span className='text-[red]'>*</span> */}
                                    </h1>}
                                    variant="outlined"
                                    onFocus={() => setSelectedFieldOutline("profession")}
                                    onBlur={() => setSelectedFieldOutline("")}
                                />
                            )}
                        />
                    </div>


                    <div className={`mt-4 personalInfo border ${selectedFieldOutline === 'economicSituation' ? 'border-secondary-blue-50' : 'border-transparent'} rounded-[7px]`}>
                        <Autocomplete
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
                                    // error={formik.touched.economicSituation && Boolean(formik.errors.economicSituation)}
                                    // helperText={formik.touched.economicSituation && formik.errors.economicSituation}

                                    label={<h1 className='comboBoxLabel'>Economic Situation
                                        {/* <span className='text-[red]'>*</span> */}
                                    </h1>}
                                    variant="outlined"
                                    onFocus={() => setSelectedFieldOutline("economicSituation")}
                                    onBlur={() => setSelectedFieldOutline("")}
                                />
                            )}
                        />
                    </div>
                </div>

                <div className={`mt-4 personalInfo border ${selectedFieldOutline === 'education' ? 'border-secondary-blue-50' : 'border-transparent'} rounded-[7px]`}>
                    <Autocomplete
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
                                onFocus={() => setSelectedFieldOutline("education")}
                                onBlur={() => setSelectedFieldOutline("")}
                            />
                        )}
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

                <div className={`mt-4 personalInfo border ${selectedFieldOutline === 'recordingArea' ? 'border-secondary-blue-50' : 'border-transparent'} rounded-[7px]`}>
                    <Autocomplete
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
                                // error={formik.touched.recordingArea && Boolean(formik.errors.recordingArea)}
                                // helperText={formik.touched.recordingArea && formik.errors.recordingArea}

                                label={<h1 className='comboBoxLabel'>Recording Area
                                    {/* <span className='text-[red]'>*</span> */}
                                </h1>}
                                variant="outlined"
                                onFocus={() => setSelectedFieldOutline("recordingArea")}
                                onBlur={() => setSelectedFieldOutline("")}
                            />
                        )}
                    />
                </div>

                <div className={`mt-4 personalInfo border ${selectedFieldOutline === 'recordingDistance' ? 'border-secondary-blue-50' : 'border-transparent'} rounded-[7px]`}>
                    <Autocomplete
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
                                // error={formik.touched.recordingDistance && Boolean(formik.errors.recordingDistance)}
                                // helperText={formik.touched.recordingDistance && formik.errors.recordingDistance}

                                label={<h1 className='comboBoxLabel'>Recording Distance/ Mode
                                    {/* <span className='text-[red]'>*</span> */}
                                </h1>}
                                variant="outlined"
                                onFocus={() => setSelectedFieldOutline("recordingDistance")}
                                onBlur={() => setSelectedFieldOutline("")}
                            />
                        )}
                    />
                </div>

            </div>
        </div>
    );
};

export default SpeakerInformation;