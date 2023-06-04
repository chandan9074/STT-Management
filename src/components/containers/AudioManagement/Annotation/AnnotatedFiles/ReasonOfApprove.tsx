import { Dispatch, SetStateAction, useState } from 'react';
import Buttons from '../../../../Buttons';
import { TextField } from '@mui/material';
import Icons from '../../../../../assets/Icons';
import { predefined } from '../../../../../data/assign/AssignData';

type Props = {
    handleSubmit: (remark: string) => void;
    handleClose: () => void;
}

const ReasonOfApprove = ({ handleClose, handleSubmit }: Props) => {
    const [isRemark, setIsRemark] = useState<boolean>(false);
    const [remark, setRemark] = useState<string>('');

    const onPredefinedValueClick = (value: string) => {
        setRemark(value);
        setIsRemark(false);
    }

    const onRemarkSubmit = () => {
        console.log('remark...', remark);
        handleSubmit(remark);
    }

    const onClose = () => {
        setRemark('');
        setIsRemark(false);
        handleClose();
    }

    return (
        <div className='w-[578px]'>

            <div className='mt-[14px] relative'>
                <TextField
                    type='number'
                    id="target"
                    name="target"
                    value={remark}
                    onChange={(event) => setRemark(event.target.value)}
                    style={{
                        width: '100%'
                    }}
                    InputProps={{
                        style: {
                            fontWeight: '400',
                            border: '1px solid #136EE5',
                            borderRadius: '7px',
                            paddingTop: '30px'
                        }
                    }}

                    multiline
                    rows={3}

                    variant="outlined"
                />


                <div className='flex items-center justify-between absolute top-1 right-1'>
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
                                <div className="fixed top-0 left-0 opacity-50 bg-transparent w-full h-screen z-[999]" onClick={() => setIsRemark(false)} />

                                <div className='w-[408px] pt-5 pl-5 pr-3 bg-white z-[9999] rounded-[6px] absolute left-4 h-[181px] overflow-y-auto'>

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
            </div>

            <div className='mt-7 flex items-center gap-x-6'>
                <Buttons.LabelButton.Secondary
                    label='Submit'
                    size='medium'
                    variant='CT-Blue'
                    onClick={() => onRemarkSubmit()}
                />

                <Buttons.BgHoverBtn
                    title="Cancel"
                    paddingY="py-3"
                    paddingX="px-5"
                    borderRadius="rounded-[6px]"
                    textColor="text-secondary-blue-50"
                    fontSize="medium"
                    fontWeight="font-medium"
                    duration="duration-300"
                    hoverBgColor="hover:bg-white"
                    onClick={onClose}
                />
            </div>
        </div>
    );
};

export default ReasonOfApprove;