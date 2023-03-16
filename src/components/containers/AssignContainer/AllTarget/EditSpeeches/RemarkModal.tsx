import { TextField } from '@mui/material';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Icons from '../../../../../assets/Icons';
import { predefined } from '../../../../../data/assign/AssignData';
import { assignSpeechDT, speechDt } from '../../../../../types/assignTypes';
import Buttons from '../../../../Buttons';
import { CustomModal } from '../../../../common/CustomModal';

type Props = {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    remarkId: string,
    speechData: speechDt[],
    setSpeechData: Dispatch<SetStateAction<speechDt[]>>,
    setRemarkId: Dispatch<SetStateAction<string>>,
    tempRemark: string
}

const RemarkModal = ({ open, setOpen, remarkId, speechData, setSpeechData, setRemarkId, tempRemark }: Props) => {

    const [remark, setRemark] = useState<string>(tempRemark);

    useEffect(() => {
        setRemark(tempRemark)
    }, [tempRemark]);

    const [isRemark, setIsRemark] = useState<boolean>(false);

    const onRemarkSubmit = () => {
        const index = speechData.findIndex((item: speechDt) => item?.id === remarkId);
        if (index === -1) {
            return;
        }
        const newData = [...speechData];
        newData[index] = {
            ...newData[index],
            remark: remark
        };
        setSpeechData(newData);
        setRemarkId('');
        setOpen(false);
    }


    const onPredefinedValueClick = (value: string) => {
        setRemark(value);
        setIsRemark(false);
    }

    return (
        <div>
            <CustomModal.Primary open={open} setOpen={setOpen} width='658px' >
                <div className='h-[269px] rounded-[12px] px-10 pt-6 pb-5 bg-blue-gray-05'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-[16px] text-ct-blue-90 font-medium'>Remark</h1>
                        <div className='relative'>
                            <Buttons.IconWithTextButton.Tertiary
                                label='Predefined Remark'
                                size='xSmall'
                                variant='CT-Blue'
                                icon={<img className='w-2 h-2' src={Icons.AddBlue} alt='' />}
                                iconAlign="start"
                                onClick={() => setIsRemark(true)}
                                disabled={remark !== ''}
                            />

                            {
                                isRemark &&

                                <div>
                                    <div className="fixed top-0 left-0 opacity-50 bg-transparent w-full h-screen z-40" onClick={() => setIsRemark(false)} />

                                    <div className='w-[408px] pt-5 pl-5 pr-3 bg-white z-50 rounded-[6px] absolute -bottom-[358px] left-4'>

                                        {
                                            predefined?.map((item: string, i: number) => (
                                                <h1 onClick={() => onPredefinedValueClick(item)} key={i} className='text-blue-gray-80 text text-small font-medium mb-[22px] cursor-pointer'>{item}</h1>
                                            ))
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                    <div className='mt-[14px]'>
                        <TextField
                            type='number'
                            id="target"
                            name="target"
                            // label={<h1 className='comboBoxLabel'>Target <span className='text-[red]'></span></h1>}
                            value={remark}
                            // onChange={formik.handleChange}
                            // error={formik.touched.target && Boolean(formik.errors.target)}
                            // helperText={formik.touched.target && formik.errors.target}
                            onChange={(event) => setRemark(event.target.value)}
                            style={{
                                width: '100%'
                            }}
                            InputProps={{
                                style: {
                                    fontWeight: '400',
                                    border: '1px solid #136EE5',
                                    borderRadius: '7px'
                                }
                            }}

                            multiline
                            rows={3}

                            variant="outlined"
                        />
                    </div>
                    <div className='mt-7 flex items-center gap-x-6'>
                        <Buttons.LabelButton.Primary
                            label='Submit'
                            size='medium'
                            variant='CT-Blue'
                            onClick={() => onRemarkSubmit()}
                        />

                        <Buttons.LabelButton.Secondary
                            label='Cancel'
                            size='medium'
                            variant='Blue'
                            onClick={() => setOpen(false)}
                        />
                    </div>
                </div>
            </CustomModal.Primary>
        </div>
    );
};

export default RemarkModal;