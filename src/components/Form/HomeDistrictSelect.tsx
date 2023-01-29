import { TextField } from '@mui/material';
import React, { useState } from 'react';
import Icons from '../../assets/Icons';
import { homeDistrict } from '../../data/userManagement/UserManagementData';
import { homeDistrictSearch } from '../../helpers/Utils';
import Buttons from '../Buttons';

type homeDistrict = {
    division: string,
    district: string[]
}

const HomeDistrictSelect = ({ formikValues, formik, data, formikError, formikTouched, name }: { formikValues: any, formik: any, data: homeDistrict[], formikError: any, formikTouched: any, name: string }) => {

    // const HomeDistrictSelect = ({ formik, filteredDistrict, onHomeDistrictValue }: { formik: any, filteredDistrict: homeDistrict[], onHomeDistrictValue: (value: string) => void }) => {
    const [collapsed, setCollapsed] = useState<any>({});

    const [onTextField, setOnTextField] = useState<string>(formikValues)

    const [isHomeDistrict, setIsHomeDistrict] = useState<boolean>(false);

    const [filteredDistrict, setFilteredDistrict] = useState<homeDistrict[]>(data);

    const handleArrowClick = (division: any) => {
        setCollapsed({
            ...collapsed,
            [division]: !collapsed[division],
        });
    }

    const handleDistrictClick = (district: string) => {
        formik.setFieldValue(name, district);
        onHomeDistrictValue(district);
    }


    const onHomeDistrictFocus = () => {
        setIsHomeDistrict(true)
    }

    const onHomeDistrictValue = (value: string) => {
        setOnTextField(value);
    }

    const handleSearch = (event: any) => {
        const _data = homeDistrictSearch(event.target.value, homeDistrict);
        setFilteredDistrict(_data)
    }






    return (
        <div className='relative z-[100]'>

            <div className={`${!isHomeDistrict && 'hidden'} bg-transparent fixed top-0 left-0 h-full w-full z-[90]`} onClick={() => setIsHomeDistrict(false)}></div>

            <TextField
                onMouseDown={onHomeDistrictFocus}
                id={name}
                name={name}
                label={<div>Home District <span className='text-[red]'>*</span></div>}
                value={onTextField || ''}
                onChange={(e) => {
                    handleSearch(e);
                    setOnTextField(e.target.value);
                }}

                error={formikTouched && Boolean(formikError)}
                helperText={formikTouched && formikError}

                style={{ width: '100%' }}
                InputProps={{
                    style: {
                        color: '#464E5F',
                        fontWeight: '600',
                        fontSize: '15px'
                    }
                }}
                variant="outlined"
            />

            {
                isHomeDistrict &&
                <div className='absolute w-full h-[482px] bg-white rounded-[8px] py-[6px] animate-fadeIn z-[100]'>
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
                                                formikValues === name &&
                                                <img className='h-[12px] w-[16px]' src={Icons.CorrectIcon} alt="" />
                                            }
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            }


        </div>
    );
};

export default HomeDistrictSelect;