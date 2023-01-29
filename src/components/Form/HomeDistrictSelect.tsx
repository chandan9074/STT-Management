import React, { useState } from 'react';
import Icons from '../../assets/Icons';
import { homeDistrict } from '../../data/userManagement/UserManagementData';
import Buttons from '../Buttons';

type homeDistrict = {
    division: string,
    district: string[]
}

const HomeDistrictSelect = ({ formik, filteredDistrict }: { formik: any, filteredDistrict: homeDistrict[] }) => {
    const [collapsed, setCollapsed] = useState<any>({});

    const handleArrowClick = (division: any) => {
        setCollapsed({
            ...collapsed,
            [division]: !collapsed[division],
        });
    }

    const handleDistrictClick = (district: string) => {
        formik.setFieldValue('homeDistrict', district);
    }    

    return (
        <div className='w-full h-[482px] bg-white rounded-[8px] py-[6px]'>
            {filteredDistrict.map(({ division, district }) => (
                <div key={division}>
                    <div className='bg-blue-gray-05 text-[12px] text-blue-gray-60 pl-[16px] flex justify-between items-center pr-[9px]'>
                        <h2>{division}</h2>
                        <div onClick={() => handleArrowClick(division)}>
                            <Buttons.IconButton.Circle
                                size='xSmall'
                                variant='Gray'
                                border='none'
                                icon={collapsed[division] ? <img src={Icons.Up} /> : <img src={Icons.dark_right_arrow} />}
                            />
                        </div>
                    </div>
                    {!collapsed[division] && (
                        <div className='pl-[16px]'>
                            {district.map((name, i) => (
                                <div
                                    key={i}
                                    onClick={() => handleDistrictClick(name)}
                                    className='flex justify-between items-center cursor-pointer pr-[9px] py-[12px]'>
                                    <h3
                                        className='text-blue-gray-90 text-[14px]' key={name}>{name}</h3>

                                    {
                                        formik.values.homeDistrict === name &&
                                        <img className='h-[12px] w-[16px]' src={Icons.CorrectIcon} alt="" />
                                    }
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default HomeDistrictSelect;