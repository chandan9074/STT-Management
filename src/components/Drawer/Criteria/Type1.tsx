import { Drawer } from 'antd';
import React from 'react';
import Icons from '../../../assets/Icons';
import Buttons from '../../Buttons';


type Props = {
    children: any,
    isDrawerOpen: boolean,
    drawerClose: () => void,
    title: string
}

const Type1 = ({ children, isDrawerOpen, drawerClose, title }: Props) => {
    const onClose = () => {
        drawerClose();
    };

    return (
        <div>

            <Drawer
                closeIcon={false}
                placement="right"
                onClose={onClose}
                open={isDrawerOpen}
                width='715px'
            >
                <div className='flex items-center justify-between py-[24px] px-[23px] bg-white'>
                    <div className='gap-x-[28px] flex items-center'>
                        <Buttons.IconButton.Circle
                            size='medium'
                            variant="CT-Blue"
                            icon={<img src={Icons.CloseIconButton} alt="" />}
                            border='border'
                            background="white"
                            onClick={() => onClose()}
                        />
                        <h1 className='text-ct-blue-95 text-[18px] font-medium'>{title}</h1>
                    </div>
                    <div>
                        <span className='text-[14px] text-primary-ct-magenta-60'>All Target: <span className='text-[#B8BFCC]'>--</span></span>
                         
                    </div>
                </div>
                {
                    children
                }
            </Drawer>
        </div>
    );
};

export default Type1;