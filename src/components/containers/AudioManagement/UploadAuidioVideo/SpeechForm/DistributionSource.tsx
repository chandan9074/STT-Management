import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { FormikValues } from 'formik';
import React from 'react';
import { audionManDistributionSource } from '../../../../../data/audioManagement/AudioManagementData';

const DistributionSource = ({ formik }: { formik: FormikValues })=> {
    return (
             <div >
                <h4 className='text-blue-gray-80 font-medium text-small'>Distribution Source<span className='text-[red]'> *</span></h4>
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
                        name="distributionSource"
                        value={formik.values.distributionSource || ''}
                        onChange={formik.handleChange}
                        onBlur={() => formik.setFieldTouched("distributionSource", true)}
                    // defaultValue='Read'
                    >
                        {
                            audionManDistributionSource?.map((value, i) => (
                                <FormControlLabel
                                    style={{
                                        color: `${formik.values.distributionSource === value ? '#136EE5' : '#323640'} `,
                                        fontSize: '14px',
                                    }}
                                    key={i}
                                    value={value}
                                    control={<Radio
                                    />}
                                    // label={value} 
                                    label={
                                        <h2
                                            style={
                                                {
                                                    fontWeight: formik.values.dataType === value ? '500' : '',
                                                    fontSize: '14px',
                                                }}
                                        >
                                            {
                                                value
                                            }
                                        </h2>
                                    } 
                                    />
                            ))
                        }
                    </RadioGroup>
                    {formik.touched.distributionSource && formik.errors.distributionSource ? (
                        <div className='text-red-600 text-xxs'>{formik.errors.distributionSource}</div>
                    ) : null}
                </FormControl>
            </div>
    );
};

export default DistributionSource;