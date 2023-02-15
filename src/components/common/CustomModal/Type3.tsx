import React, { Dispatch, SetStateAction } from 'react';
import { CustomModal } from '.';
import Icons from '../../../assets/Icons';
import Buttons from '../../Buttons';
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
const Type3 = ({ open, setOpen , onSave, saveText, cancelText, title, icon, iconWidth, iconHeight}: Props) => {
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
                    <Buttons.LabelButton.Secondary
                        label={cancelText}
                        variant="Blue"
                        size='small'
                        onClick={() => setOpen(false)}
                    />
                    <Buttons.LabelButton.Primary
                        label={saveText}
                        variant="CT-Blue"
                        size="small"
                        onClick={() => onSave()}
                    />
                </div>
            </div>
        </CustomModal.Primary>
    );
};

export default Type3;