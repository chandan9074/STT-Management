import { CaretDownOutlined } from '@ant-design/icons';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { useState } from 'react';
import Icons from '../../assets/Icons';
import { homeDistrict } from '../../data/userManagement/UserManagementData';
import { homeDistrictSearch } from '../../helpers/Utils';
import { homeDistrictTypes } from '../../types/userManagementTypes';
import Buttons from '../Buttons';
import './HomeDistrictSelect.css';

type Prop =
    {
        formikValues?: any,
        formik?: any,
        data: homeDistrictTypes[],
        formikError?: any,
        formikTouched?: any,
        name: string,
        fieldLabel: string
    }

const HomeDistrictSelect = ({ formikValues, formik, data, formikError, formikTouched, name, fieldLabel }: Prop) => {

    const [collapsed, setCollapsed] = useState<any>({});

    const [onTextField, setOnTextField] = useState<string>(formikValues)

    const [isHomeDistrict, setIsHomeDistrict] = useState<boolean>(false);

    const [filteredDistrict, setFilteredDistrict] = useState<homeDistrictTypes[]>(data);

    const handleArrowClick = (division: any) => {
        setCollapsed({
            ...collapsed,
            [division]: !collapsed[division],
        });
    }

    const handleDistrictClick = (district: string) => {
        formik.setFieldValue(name, district);
        onHomeDistrictValue(district);
        setIsHomeDistrict(false)
    }


    const onHomeDistrictFocus = () => {
        setIsHomeDistrict(true)
    }

    const onHomeDistrictValue = (value: string) => {
        setOnTextField(value);
    }

    const handleSearch = (event: any) => {
        const _data = homeDistrictSearch(event.target.value, homeDistrict);
        setFilteredDistrict(_data);
    }

    const clickOutsideField = () => {
        setIsHomeDistrict(false);
        setOnTextField(formikValues);
        setFilteredDistrict(data);
    }

    return (
        <div className='relative z-[100] homeDistrictSelect'>

            <div className={`${!isHomeDistrict && 'hidden'} bg-transparent fixed top-0 left-0 h-full w-full z-[90]`} onClick={() => clickOutsideField()}></div>

            <FormControl sx={{ width: '100%' }} variant="outlined">
                <InputLabel htmlFor={name}>{<h1 className='comboBoxLabel'>{fieldLabel} <span className='text-[red]'>*</span></h1>}</InputLabel>
                <OutlinedInput
                    id={name}
                    autoComplete='off'
                    type='text'
                    onMouseDown={onHomeDistrictFocus}
                    name={name}
                    label={<h1 className='comboBoxLabel'>{fieldLabel} <span className='text-[red]'>*</span></h1>}
                    value={onTextField || ''}
                    onChange={(e) => {
                        handleSearch(e);
                        setOnTextField(e.target.value);
                    }}
                    endAdornment={
                        <InputAdornment position="end">
                            {/* <IconButton
                                aria-label="toggle password visibility"
                                edge="end"
                            > */}
                            <CaretDownOutlined />
                            {/* </IconButton> */}
                        </InputAdornment>
                    }
                    style={{
                        height: '44px'
                    }}
                />
            </FormControl>
            {
                isHomeDistrict &&
                <div className='absolute w-full h-[482px] bg-white rounded-[8px] py-[6px] animate-fadeIn z-[100] overflow-auto'>
                    {filteredDistrict.map(({ division, district }) => (
                        <div key={division}>
                            <div className='bg-blue-gray-05 text-xxs text-blue-gray-60 pl-[16px] flex justify-between items-center pr-[9px]'>
                                <h2>{division}</h2>
                                <div onClick={() => handleArrowClick(division)}>
                                    <Buttons.IconButton.Circle
                                        size='xSmall'
                                        variant='Gray'
                                        border='none'
                                        icon={collapsed[division] ? <img src={Icons.Up} alt='' /> : <img src={Icons.dark_right_arrow} alt='' />}
                                    />
                                </div>
                            </div>
                            {!collapsed[division] && (
                                <div className='animate-fadeIn'>
                                    {district.map((name, i) => (
                                        <div
                                            key={i}
                                            onClick={() => handleDistrictClick(name)}
                                            className={`pl-[16px] ${formikValues === name ? 'bg-blue-10 hover:bg-blue-20 active:bg-blue-30' : 'hover:bg-ct-blue-05 active:bg-ct-blue-10'} `}>
                                            <div className='flex justify-between items-center cursor-pointer pr-[9px] py-[12px]'>
                                                <h3
                                                    className='text-blue-gray-90 text-small' key={name}>{name}</h3>

                                                {
                                                    formikValues === name &&
                                                    <img className='h-[12px] w-[16px]' src={Icons.CorrectIcon} alt="" />
                                                }
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            }



            {formikTouched && formikError ? (
                <div className='text-red-600 text-xxs pl-[12px]'>{formikError}</div>
            ) : null}
        </div>
    );
};

export default HomeDistrictSelect;