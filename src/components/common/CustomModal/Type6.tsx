import React, { Dispatch, SetStateAction } from 'react';
import { CustomModal } from '.';
import Icons from '../../../assets/Icons';
import Buttons from '../../Buttons';
import { useNavigate } from 'react-router-dom';

interface Props {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    onSave: () => void;
    saveText: string;
    cancelText: string;
    title: string;
    icon: string;
    iconWidth: string;
    iconHeight: string;
}

const Type6 = ({ open, setOpen, onSave, saveText, cancelText, title, icon, iconWidth, iconHeight }: Props) => {
    const navigate = useNavigate();
    return (
        <CustomModal.Primary
            open={open}
            setOpen={setOpen}
            width="462px"
            overlayZIndex={120}
            modalZIndex={130}
        >
            <div
                style={{
                    background: `url(${Icons.Shadow_bg})`
                }}
                className='px-10 pt-9 pb-[30px]'>
                <img src={icon} className={`${iconWidth} ${iconHeight} p-1 mb-[18px] cursor-pointer`} alt="" onClick={() => setOpen(false)} />
                <p className='text-base font-medium text-ct-blue-90 mb-[106px]'>{title}</p>
                <div className='flex gap-3 justify-start'>

                    <button
                        onClick={() => navigate(-1)}
                        className='py-3 px-[32px] border-[1px] border-secondary-red-50 text-secondary-red-50 text-base font-medium rounded-[6px]'
                    >
                        No
                    </button>
                    <Buttons.LabelButton.Secondary
                        label={saveText}
                        variant="Blue"
                        size='medium'
                        onClick={() => {
                            setOpen(false)
                        }}
                    />
                </div>
            </div>
        </CustomModal.Primary>
    );
}

export default Type6;