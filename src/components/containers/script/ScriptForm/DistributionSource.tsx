import React, { useContext, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Checkbox, FormGroup } from '@mui/material';
import { distributionList } from '../../../../data/Script/Domain';
import Icons from '../../../../assets/Icons';
import { CustomModal } from '../../../common/CustomModal';
import { ScriptContext } from '../../../../context/ScriptProvider';
import { FormikValues } from 'formik';
import { scriptResDT } from '../../../../types/script';
import { useNavigate } from 'react-router-dom';
import Buttons from '../../../Buttons';


const DistributionSource = ({ formik, data }: { formik: FormikValues, data: scriptResDT | undefined }) => {

    const scriptContext = useContext(ScriptContext);
    const { scriptModule } = scriptContext;

    const navigate = useNavigate();


    const [open, setOpen] = useState<boolean>(false);

    const onModule = () => {
        setOpen(true);
    }

    return (
        <div className='mb-[33px]'>
            <div className='flex justify-between'>
                <div className='mb-[33px] flex gap-x-3 items-center'>
                    <h1 className='text-ct-blue-95 text-[18px] font-medium'>{data ? 'Edit Script' : 'Create Script'} </h1>
                    <button onClick={(e) => {
                        e.preventDefault();
                        onModule();
                    }} className='flex items-center gap-x-3 py-[7px] px-3 bg-blue-gray-A10 rounded-[8px]'>
                        <h1 className='text-xs text-ct-blue-90-70% font-medium'>{formik.values.module}</h1>
                        <img src={Icons.Write} className='h-[13px] w-[13px]' alt="" />
                    </button>
                </div>

                <Buttons.IconButton.Circle
                    size='medium'
                    variant="CT-Blue"
                    icon={<img src={Icons.CloseIconButton} alt="" />}
                    border='border'
                    background="white"
                    onClick={(e) => {
                        navigate(-1);
                        e.preventDefault();
                    }}
                />
            </div>

            {
                scriptModule === "STT" &&
                <div className='flex'>
                    <div className='w-[580px]'>
                        <h1 className='text-small font-medium text-blue-gray-75'>Distribution Source <span className='text-[red]'>*</span></h1>

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
                                    name="distributionSource"
                                    value={formik.values.distributionSource}
                                    onChange={formik.handleChange}
                                    onBlur={() => formik.setFieldTouched("distributionSource", true)}
                                // defaultValue='Read'
                                >
                                    {
                                        distributionList?.map((value, i) => (
                                            <FormControlLabel
                                                style={{
                                                    color: `${formik.values.distributionSource === value ? '#136EE5' : '#5F6B7D'} `,
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
                                {formik.touched.distributionSource && formik.errors.distributionSource ? (
                                    <div className='text-red-600 text-xxs'>{formik.errors.distributionSource}</div>
                                ) : null}
                            </FormControl>
                        </div>
                    </div>
                    <div>
                        <FormGroup>
                            <h1 className='text-small font-medium text-blue-gray-75 '>Age</h1>


                            <FormControlLabel

                                control={
                                    <Checkbox
                                        name="isAge"
                                        checked={formik.values.isAge}
                                        onChange={(event) => formik.setFieldValue('isAge', event.target.checked)}
                                    />
                                }
                                label={<h1 className='text-small font-medium text-blue-gray-75'>Child</h1>} />

                        </FormGroup>
                    </div>
                </div>
            }
            {
                <CustomModal.Type1
                    open={open}
                    setOpen={setOpen}
                />
            }
        </div>
    );
};

export default DistributionSource;