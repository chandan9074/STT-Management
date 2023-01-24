import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Checkbox } from '@mui/material';

const distributionList = [
    'Read',
    'Lecture',
    'Command',
    'Miscellaneous'
]


const DistributionSource = ({ formik }: { formik: any }) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(((event.target as HTMLInputElement).value));
    };
    return (
        <div className='mb-[33px]'>
            <div className='mb-[33px]'>
                <h1 className='text-ct-blue-95 text-[18px] font-medium'>Create Script</h1>
            </div>

            <div className='flex'>
                <div className='w-[580px]'>
                    <h1 className='text-[14px] font-medium text-blue-gray-75'>Distribution Source <span className='text-[red]'>*</span></h1>

                    <div>
                        <FormControl>
                            <FormLabel style={{
                                color: '#5F6B7D',
                                fontWeight: '600',
                                fontSize: '14px'
                            }}

                            >
                            </FormLabel>
                            <RadioGroup
                                row
                                // name="distribution-source-group"
                                // onChange={handleChange}
                                name="distributionSource"
                                value={formik.values.distributionSource}
                                onChange={formik.handleChange}
                                onBlur={() => formik.setFieldTouched("distributionSource", true)}
                            >
                                {
                                    distributionList?.map((value, i) => (
                                        <FormControlLabel
                                            key={i}
                                            value={value}
                                            control={<Radio
                                                // required={true}
                                            />}
                                            label={value} />
                                    ))
                                }
                            </RadioGroup>
                            {formik.touched.distributionSource && formik.errors.distributionSource ? (
                                <div className='text-red-600 text-[12px]'>{formik.errors.distributionSource}</div>
                            ) : null}
                        </FormControl>
                    </div>
                </div>
                <div>
                    <FormControl>
                        <h1 className='text-[14px] font-medium text-blue-gray-75 pl-[9px]'>Age</h1>

                        <Checkbox
                            name="isAgeChecked"
                            checked={formik.values.isAgeChecked}
                            onChange={() => formik.setFieldValue("isAgeChecked", !formik.values.isAgeChecked)}
                        />
                    </FormControl>
                </div>
            </div>
        </div>
    );
};

export default DistributionSource;