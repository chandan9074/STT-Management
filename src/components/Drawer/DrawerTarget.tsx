import { Button, Drawer } from 'antd';
import React, { Children, useState } from 'react';
import Icons from '../../assets/Icons';
import Buttons from '../Buttons';

type Props = {
    children: any,
    isDrawerOpen: boolean,
    drawerClose: () => void,
    title: string
}

const DrawerTarget = ({ children, isDrawerOpen, drawerClose, title }: Props) => {

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
                width='555px'
            >
                <div className='flex items-center gap-x-[28px] py-[24px] px-[23px] bg-ct-blue-05'>
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
                {
                    children
                }
            </Drawer>
        </div>
    );
};

export default DrawerTarget;