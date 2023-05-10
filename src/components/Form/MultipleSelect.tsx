import { CaretDownOutlined } from '@ant-design/icons';
import { FormControl, OutlinedInput } from '@mui/material';
import { useContext, useState } from 'react';
import Icons from '../../assets/Icons';
import { homeDistrict } from '../../data/userManagement/UserManagementData';
import { homeDistrictSearch } from '../../helpers/Utils';
import { homeDistrictTypes } from '../../types/userManagementTypes';
import Buttons from '../Buttons';
import './HomeDistrictSelect.css';
import { UserManagementContext } from '../../context/UserManagement';

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



const MultipleSelect = ({ formikValues, formik, data, formikError, formikTouched, name, fieldLabel }: Prop) => {

    const [isDistrictOpen, setIsDistrictOpen] = useState<boolean>(false);

    const { selectedFieldOutline, setSelectedFieldOutline } = useContext(UserManagementContext);

    const [collapsed, setCollapsed] = useState<any>({});

    // const [onTextField, setOnTextField] = useState<string>(formikValues)

    const [isHomeDistrict, setIsHomeDistrict] = useState<boolean>(false);

    const [filteredDistrict, setFilteredDistrict] = useState<homeDistrictTypes[]>(data);

    const handleArrowClick = (division: string) => {
        setCollapsed({
            ...collapsed,
            [division]: !collapsed[division],
        });
    }

    const handleDistrictClick = (district: string) => {
        formik.setFieldValue(name, [...formikValues, district]);
        onHomeDistrictValue(district);
    }

    const onHomeDistrictFocus = () => {
        setIsHomeDistrict(true)
    }

    const onHomeDistrictValue = (value: string) => {
        // setOnTextField(value);
    }

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const _data = homeDistrictSearch(event.target.value, homeDistrict);
        setFilteredDistrict(_data);
    }

    const clickOutsideField = () => {
        setIsHomeDistrict(false);
        // setOnTextField(formikValues);
        setFilteredDistrict(data);
        setIsDistrictOpen(false);
    }

    const onItemRemove = (value: string) => {
        const _data = formikValues?.filter((m: string, index: number) => m !== value)

        formik.setFieldValue(name, _data);
    }

    // formik.setFieldValue("reminder", [...formik.values.reminder, dateString]);
    return (
        <div className='relative z-[100] homeDistrictSelect'>

            <div className={`${!isHomeDistrict && 'hidden'} bg-transparent fixed top-0 left-0 h-full w-full z-[90]`} onClick={() => clickOutsideField()}></div>
            <div className={`border ${selectedFieldOutline === name ? 'border-secondary-blue-50' : 'border-transparent'} rounded-[7px]`}>
                <FormControl sx={{ width: '100%' }} variant="outlined">
                    {/* <InputLabel htmlFor={name}>{<div className='comboBoxLabel'>{fieldLabel} <span className='text-[red]'>*</span></div>}</InputLabel> */}
                    <div
                        // className={`${formikValues.length === 0 && 'h-[44px]'} flex justify-between px-2 border-[1px] border-blue-gray-A20 rounded-[7px] multiple-select`}>
                        className={`relative flex px-2 border-[1px] rounded-[7px] multiple-select w-full flex-wrap`}
                        onClick={() => setIsDistrictOpen(true)}
                    >
                        <button
                            // onClick={() => setIsHomeDistrict(true)}
                            onClick={(event) => {
                                event.preventDefault();
                                setIsHomeDistrict(true);
                            }}
                            className='absolute right-[11px] bottom-[14px]'>
                            <CaretDownOutlined style={{ color: '#5F6B7D' }} />
                        </button>

                        {
                            formikValues.length !== 0 &&
                            // <div className='flex items-center overflow-x-auto gap-x-[4px] w-[320px]'>
                            // <div className='flex items-center gap-x-[4px] '>
                            <div className='flex gap-x-1 py-[12px] flex-wrap'>
                                {

                                    formikValues?.map((value: string, i: number) => (
                                        <div key={i} className='bg-ct-blue-20 rounded-[4px] flex justify-center items-center px-[8px] gap-x-[4px] h-6 flex-wrap mx-[] ]'>
                                            <h1 className='text-xs text-blue-gray-80 font-medium whitespace-nowrap'>
                                                {value}
                                            </h1>
                                            <div onClick={() => onItemRemove(value)} className='cursor-pointer w-[14px] p-[3px] bg-white rounded-[3px]'>
                                                <img
                                                    className='h-[8px] w-[8px]'
                                                    src={Icons.CloseIconButton}
                                                    alt=""

                                                />
                                            </div>
                                        </div>
                                    ))
                                }
                                <div />
                            </div>
                        }

                        {
                            <div className={` ${(isDistrictOpen || formik.values.district.length !== 0) ? ' px-[4px] absolute -top-[13px] bg-white' : 'my-[10px]'}  `}>
                                <h1 className={`${isDistrictOpen ? 'text-[11px] font-medium text-blue-gray-75' : 'comboBoxLabel'} `}>District<span className='text-[red]'>*</span></h1>
                            </div>
                        }


                        <div onClick={() => setIsDistrictOpen(true)} className='-ml-[10px]'>
                            {
                                (formik.values.district.length !== 0 || isDistrictOpen) &&
                                <OutlinedInput
                                    placeholder='Choose District'
                                    className={`h-[44px] w-full inline`}
                                    id={name}
                                    autoComplete='off'
                                    autoFocus
                                    type='text'
                                    onMouseDown={onHomeDistrictFocus}
                                    name={name}
                                    onChange={(e) => {
                                        handleSearch(e);
                                        // setOnTextField(e.target.value);
                                    }}
                                    // endAdornment={
                                    //     <InputAdornment position="end">

                                    //         <CaretDownOutlined />
                                    //     </InputAdornment>
                                    // }
                                    onFocus={() => setSelectedFieldOutline(name)}
                                    onBlur={() => setSelectedFieldOutline("")}
                                />
                            }
                        </div>
                    </div>
                </FormControl>
            </div>

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
                                            onClick={() => formikValues.includes(name) ? onItemRemove(name) : handleDistrictClick(name)}
                                            className={`pl-[16px] ${formikValues.includes(name) ? 'mt-[2px] bg-blue-10 hover:bg-blue-20 active:bg-blue-30' : 'hover:bg-ct-blue-05 active:bg-ct-blue-10'} `}>
                                            <div className='flex justify-between items-center cursor-pointer pr-[9px] py-[12px]'>
                                                <h3
                                                    className='text-blue-gray-90 text-small' key={name}>{name}</h3>

                                                {
                                                    formikValues.includes(name) &&
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


export default MultipleSelect;