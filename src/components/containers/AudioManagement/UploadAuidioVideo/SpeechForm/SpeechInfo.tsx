import React from 'react';
import { statusType } from '../../../../../data/audioManagement/AudioManagementData';
import { FormikValues } from 'formik';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

type Props = {
    formik: FormikValues,
}

const SpeechInfo = ({formik}: Props) => {
    return (
        <div>
            <div className='flex'>
                <h4 className='text-ct-blue-60 whitespace-nowrap text-small font-semibold'>Speech Info</h4>
                <div className='border-b-[1px] border-ct-blue-20 w-full' />
            </div>

            <div className='mt-7'>
                <h4 className='text-blue-gray-80 font-medium text-small'>Data Type</h4>
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
                        name="dataType"
                        value={formik.values.dataType || ''}
                        onChange={formik.handleChange}
                        onBlur={() => formik.setFieldTouched("dataType", true)}
                    // defaultValue='Read'
                    >
                        {
                            statusType?.map((value, i) => (
                                <FormControlLabel
                                    style={{
                                        color: `${formik.values.dataType === value ? '#136EE5' : '#323640'} `,
                                        fontSize: '14px',
                                    }}
                                    key={i}
                                    value={value}
                                    control={<Radio
                                    />}
                                    label={value.includes('STT') ? 'STT (Speech-to-Text)' : 'TTS (Text-to-Speech)'} />
                            ))
                        }
                    </RadioGroup>
                    {formik.touched.dataType && formik.errors.dataType ? (
                        <div className='text-red-600 text-xxs'>{formik.errors.dataType}</div>
                    ) : null}
                </FormControl>
            </div>
        </div>
    );
};

export default SpeechInfo;