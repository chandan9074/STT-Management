import { TextField } from '@mui/material';
import React, { Dispatch, SetStateAction, useState } from 'react';
import Icons from '../../../../../assets/Icons';
import { predefined } from '../../../../../data/assign/AssignData';
import Buttons from '../../../../Buttons';
import { CustomModal } from '../../../../common/CustomModal';

type Props = {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    remarkId: number,
    speechData: any,
    setSpeechData: Dispatch<SetStateAction<any>>,
    setRemarkId: Dispatch<SetStateAction<number>>,
    // onRemarkSubmit: (value: string) => void
}

const RemarkModal = ({ open, setOpen, remarkId, speechData, setSpeechData, setRemarkId }: Props) => {

    const [remark, setRamark] = useState<string>('');

    const onRemarkSubmit = () => {
        const index = speechData.findIndex((item: any) => item?.id === remarkId);
        if (index === -1) {
            return;
        }
        const newData = [...speechData];
        newData[index] = {
            ...newData[index],
            remark: remark
        };
        setSpeechData(newData);
        setRemarkId(NaN);
        setOpen(false);
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
                            />
                            <div className='w-[408px] pt-5 pl-5 pr-3 pb-3 absolute bg-white z-50 rounded-[6px] '>
                                {
                                    predefined?.map((item: string, i: number) => (
                                        <h1 key={i} className='text-blue-gray-80 text text-small font-medium mb-[22px]'>{item}</h1>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className='mt-[14px]'>
                        <TextField
                            type='number'
                            id="target"
                            name="target"
                            // label={<h1 className='comboBoxLabel'>Target <span className='text-[red]'></span></h1>}
                            // value={formik.values.target}
                            // onChange={formik.handleChange}
                            // error={formik.touched.target && Boolean(formik.errors.target)}
                            // helperText={formik.touched.target && formik.errors.target}
                            onChange={(event) => setRamark(event.target.value)}
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