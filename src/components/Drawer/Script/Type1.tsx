import { Drawer } from 'antd';
import React from 'react';
import Icons from '../../../assets/Icons';
import { filterData } from '../../../data/script/filter';
import Buttons from '../../Buttons';
import { Filter } from '../../Filter';
import { SearchBox } from '../../SearchBox';
import Table from '../../Table';

type Props = {
    isDrawerOpen: boolean,
    drawerClose: () => void,
    title: string,
}

const Type1 = ({ isDrawerOpen, drawerClose, title }: Props) => {

    const onClose = () => {
        drawerClose();
    };

    return (
        <Drawer
            closeIcon={false}
            placement="right"
            onClose={onClose}
            open={isDrawerOpen}
            width='555px'
        >
            <div className='bg-ct-blue-05'>
                <div className='p-6'>
                    <div className='flex items-center gap-x-7 mb-6'>
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
                    <div className='inline-flex items-center'>
                        <SearchBox.Type1 inputWidth='w-[172px]' placeholder='Search' bgColor='bg-blue-gray-A10' paddingX='px-3' paddingY='py-2' textColor='text-blue-gray-80' />
                        <Filter.Type1 filterData={filterData} align="center" />
                    </div>
                </div>
                <Table.Type9 />
            </div>

        </Drawer>
    );
};

export default Type1;