import { FormControl, TextField } from '@mui/material';
import React, { useState } from 'react';
import { organizeRole } from '../../data/organize/OrganizerData';
import Icons from '../../assets/Icons';
import RoleImage from '../Image/RoleImage';


type Prop =
    {
        formikValues?: any,
        formik?: any,
        data: string[],
        formikError?: any,
        formikTouched?: any,
        name: string,
        fieldLabel: string
    }

const RoleSelect = ({ formikValues, formik, data, formikError, formikTouched, name, fieldLabel }: Prop) => {

    const [onTextField, setOnTextField] = useState<string>(formikValues)

    const [isRole, setIsRole] = useState<boolean>(false);

    const [filteredDistrict, setFilteredDistrict] = useState<string[]>(data);

    const [focus, setFocus] = useState("")



    // const { selectedFieldOutline, setSelectedFieldOutline } = useContext(UserManagementContext);

    const onRoleFocus = () => {
        setIsRole(true)
    }

    const onRoleValue = (value: string) => {
        setOnTextField(value);
    }

    const clickOutsideField = () => {
        setIsRole(false);
        setOnTextField(formikValues);
        setFilteredDistrict(data);
    }

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const matchedRoles = organizeRole.filter((role: string) => role.toLowerCase().includes(event.target.value.toLowerCase()));

        setFilteredDistrict(matchedRoles);
    }

    const onSelect = (value: string) => {
        formik.setFieldValue(name, value);
        onRoleValue(value);
        setIsRole(false)
    }

    // const handleRoleInputClick = () => {
    //     setClicked(!clicked)
    // }

    return (
        <div className='relative z-[9999]'>

            <div className={`${!isRole && 'hidden'} bg-transparent fixed top-0 left-0 h-full w-full z-[90]`} onClick={() => clickOutsideField()}></div>
            <FormControl sx={{ width: '100%' }} variant="outlined">
                <TextField
                    id={name}
                    type='text'
                    onMouseDown={onRoleFocus}
                    name={name}
                    variant="outlined"
                    size='small'
                    sx={{
                        '&:hover fieldset': {
                            borderColor: 'rgb(19, 110, 229) !important',
                        },
                    }}
                    label={<div className={`${(focus === name || onTextField !== "") ? "" : "mt-[3px]"}`} ><span className={`${(focus === name || onTextField !== "") ? "font-medium" : "text-[14px] font-semibold"}`}>{fieldLabel} </span><span className='text-[red]'>*</span></div>}
                    onFocus={() => setFocus(name)}
                    onBlur={() => setFocus("")}
                    value={onTextField || ''}
                    onChange={(e) => {
                        handleSearch(e);
                        setOnTextField(e.target.value);
                    }}

                    InputProps={{
                        style: {
                            color: '#464E5F',
                            fontWeight: '600',
                            fontSize: '14px',
                            caretColor: '#136EE5',
                            // border: selectedFieldOutline === 'deviceName' ? '1px solid #136EE5' : '1px solid transparent'
                        },
                        endAdornment: (
                            < img className='w-[8.41px] h-[5.37px]' src={Icons.arrow_drop_down_blue_gray_45} alt="" />
                        )
                    }}
                />
            </FormControl>
            {/* </div> */}
            {
                isRole &&
                <div className='absolute z-[100] bg-white mt-2 rounded-lg w-[380px] flex flex-col justify-between shadow-bottom-light-blue-20 cursor-pointer'>

                    {
                        filteredDistrict.map((item: string, i: number) => (
                            <div
                                key={i}
                                onClick={() => onSelect(item)}
                                className={`w-full justify-between flex item-center pl-4 py-[11.5px] pr-2 rounded-lg ${formik.values.role === item ? 'activeColor' : 'deactiveColor'}`}>
                                <div
                                    key={i} className={`flex items-center gap-x-3 cursor-pointer`}>
                                    {
                                        !(item === 'Speaker-Female' || item === 'Speaker-Male') ?
                                            <RoleImage role={item} height='h-5' width='w-5' />
                                            :
                                            <RoleImage role={item.includes('Speaker-Male') ? 'speaker' : 'speakerfemale'} height='h-5' width='w-5' />
                                    }
                                    <p className='text-blue-gray-80 font-medium text-small'>{item}</p>
                                </div>
                                {
                                    formik.values.role === item &&
                                    <img className='w-6 h-6' src={Icons.check_blue} alt="" />
                                }
                            </div>
                        ))
                    }
                </div>
            }

            {formikTouched && formikError ? (
                <div className='text-red-600 text-xxs pl-[12px]'>{formikError}</div>
            ) : null}
        </div>
    );
};

export default RoleSelect;