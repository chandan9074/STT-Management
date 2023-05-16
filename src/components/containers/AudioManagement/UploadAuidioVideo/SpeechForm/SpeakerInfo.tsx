import { Checkbox, FormControlLabel, FormGroup, Grid, TextField } from '@mui/material';
import { FormikValues } from 'formik';
import React from 'react';
import { gender, homeDistrict } from '../../../../../data/userManagement/UserManagementData';
import Icons from '../../../../../assets/Icons';
import { audioManAgeRange } from '../../../../../data/audioManagement/AudioManagementData';
import HomeDistrictSelect from '../../../../Form/HomeDistrictSelect';

const SpeakerInfo = ({ formik }: { formik: FormikValues }) => {

    const onAgeRangeChange = (e: React.ChangeEvent<HTMLInputElement>, value: string) => {
        const isChecked = e.target.checked;
        const currentValue = value;

        let updatedValues;
        if (isChecked) {
            updatedValues = [...formik.values.ageRange, currentValue];
        } else {
            updatedValues = formik.values.ageRange.filter((v: string) => v !== currentValue);
        }

        formik.setFieldValue("ageRange", updatedValues);
    }
    return (
        <div>
            <div className='flex mb-7'>
                <h4 className='text-ct-blue-60 whitespace-nowrap text-small font-semibold'>Speaker Info </h4>
                <div className='border-b-[1px] border-ct-blue-20 w-full' />
            </div>
            <div>
                <Grid container spacing={5}>
                    <Grid item xs={6}>
                        <TextField
                            type='number'
                            id="speakerNumber"
                            name="speakerNumber"
                            label={<h1 className='comboBoxLabel'>Number of Speaker <span className='text-[red]'></span></h1>}
                            value={formik.values.speakerNumber}
                            onChange={formik.handleChange}
                            // error={formik.touched.speakerNumber && Boolean(formik.errors.speakerNumber)}
                            // helperText={formik.touched.speakerNumber && formik.errors.speakerNumber}
                            style={{
                                width: '100%'
                            }}
                            InputProps={{
                                style: {
                                    color: '#464E5F',
                                    fontWeight: '600',
                                    fontSize: '15px',
                                }
                            }}

                            variant="outlined" />
                    </Grid>
                </Grid>
            </div>

            <div className='flex gap-x-[16px] items-center h-[48px] mt-6'>
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

            <div className='mt-6'>

                <h4 className='text-blue-gray-80 font-medium text-small'>Age Range</h4>

                <FormGroup row>
                    {
                        audioManAgeRange.map((value, i) => (
                            <div key={i} className={'mr-[34px]'}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name={value}
                                            checked={formik.values.ageRange.includes(value)}
                                            onChange={(e) => {
                                                onAgeRangeChange(e, value)
                                            }}

                                        />
                                    }
                                    label={<h1 className='comboBoxLabel'>{value}</h1>}
                                />
                            </div>
                        ))
                    }
                </FormGroup>
            </div>

            <div className='mt-[26px]'>
                <Grid container spacing={5}>
                    {/* Home District */}
                    <Grid item xs={6}>
                        <div className=''>
                            {/* <HomeDistrictSelect
                                required={true}
                                formikValues={formik.values.homeDistrict}
                                data={homeDistrict}
                                formikError={formik.errors.homeDistrict}
                                formikTouched={formik.touched.homeDistrict}
                                formik={formik}
                                name={'homeDistrict'}
                                fieldLabel='Home District'
                            />
                             */}
                            <HomeDistrictSelect
                                required={false}
                                formikValues={formik.values.homeDistrict}
                                data={homeDistrict}
                                formikError={formik.errors.homeDistrict}
                                formikTouched={formik.touched.homeDistrict}
                                formik={formik}
                                name={'homeDistrict'}
                                fieldLabel='Select Division/ District'
                                align='top'
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default SpeakerInfo;