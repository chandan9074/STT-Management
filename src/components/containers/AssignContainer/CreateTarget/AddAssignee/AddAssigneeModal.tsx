import { StepBackwardOutlined } from '@ant-design/icons';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { Form, Select } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Icons from '../../../../../assets/Icons';
import { RoleInContext } from '../../../../../context/RoleProvider';
import { BILLING_PAYMENT_HISTORY_PATH } from '../../../../../helpers/Slug';
import { isEmpty } from '../../../../../helpers/Utils';
import { roleDT } from '../../../../../types/billingTypes';

const { Option } = Select;

const roleData = [
    {
        title: "Manager",
    },
    {
        title: "Team Leader",
    },
    {
        title: "Collector",
    }
];

const AddAssigneeModal = ({
    handleModal,
    // type
}: {
    handleModal: (value: boolean) => void,
}) => {

    const [form] = Form.useForm();

    const [role, setRole] = useState<string>('Manager');
    // const [type, setType] = useState<>

    const managerContext = useContext(RoleInContext);
    const { roleDatas } = managerContext;

    const [singleManager, setSingleManger] = useState<roleDT | undefined>();

    const [isDropDownVisible, setIsDropDownVisible] = useState<boolean>(false);
    const [dropDownCount, setDropDownCount] = useState<number>(0);
    const [isDropDownSelect, setIsDropDownSelect] = useState<boolean>(false);
    const [isDropItemClick, setIsDropItemClick] = useState<boolean>(false);

    const managerParams = {
        id: '',
        role: role,
        // type: type
    }


    useEffect(() => {
        managerContext.getManager(managerParams);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!isDropDownVisible) {
            setIsDropItemClick(false);
        }
    }, [isDropDownVisible]);

    useEffect(() => {
        if (dropDownCount === 2) {
            setIsDropDownVisible(false);
            setDropDownCount(0);
        }
    }, [dropDownCount]);


    const handleRoleChange = (id: string, p: any) => {
        const _data = roleDatas?.filter((m: roleDT) => m.id === p.key)
        if (_data) {
            setSingleManger(_data[0]);
        }
    }


    const deleteManager = (id: string | undefined) => {
        // managerContext.setSingleManager({});
        setSingleManger(undefined)
        setIsDropDownSelect(false);
        form.resetFields();
    }


    const onDropDownVisible = (e: any) => {
        setIsDropDownVisible(true);
        setDropDownCount(dropDownCount + 1);
        setIsDropItemClick(true);
    }


    const onInputKeyDown = () => {
    }

    const onSelect = () => {

        setIsDropDownSelect(true);
    }

    const onClose = () => {
        setSingleManger(undefined)
        handleModal(false)
    }

    const onDropDownClick = () => {
        setIsDropItemClick(true);
    }

    const outsideModalClick = () => {
        handleModal(false);
        setSingleManger(undefined)
    }



    return (
        <div className='fixed top-0 left-0 flex justify-center items-center w-full h-screen z-40 animate-fadeIn2 '>
            <div className="fixed top-0 left-0 opacity-50 bg-black w-full h-screen z-40"
                onClick={() => outsideModalClick()} />
            <div className="relative z-50">

                <div
                    className="border-0 overflow-hidden rounded-lg shadow-lg relative flex flex-col w-[700px] bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className='bg-ct-blue-05  p-5'>


                        <div>
                        </div>

                        <div className="flex justify-between items-center ">
                            <h3 className="titleParagraphMedium">
                                Search {role}
                            </h3>
                            <button
                                className='bg-white rounded-[50%]'
                                onClick={() => onClose()}
                            >

                                <img className='m-[10px] w-[11px] h-[11px]' src={Icons.CloseIconButton} alt="" />
                            </button>
                        </div>

                        <div className='rounded-md bg-white px-6 py-7 mt-4'>


                            <div className='flex items-center gap-x-6 mb-[21px]'>
                                <h1 className='text-[#5F6B7D] font-semibold text-small'> Select Role</h1>
                                <FormControl>
                                   
                                    <RadioGroup
                                        row
                                        name="reportingTo"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                    >
                                        {
                                            roleData?.map((value, i) => (
                                                <FormControlLabel
                                                    style={{
                                                        color: `${role === value.title ? '#136EE5' : '#5F6B7D'} `,
                                                        fontSize: '14px',
                                                        marginRight: '22px'
                                                    }}
                                                    className={`${role === value.title && 'ml-[4px] pr-[12px] bg-blue-50 rounded-[30px] border-[1px] border-[#136EE5]'}`}
                                                    key={i}
                                                    value={value.title}
                                                    control={<Radio
                                                    />}
                                                    label={value.title}
                                                />
                                            ))
                                        }
                                    </RadioGroup>
                                </FormControl>
                            </div>


                            <div>
                                <Form
                                    layout='vertical'
                                    name="basic"
                                    form={form}
                                >
                                    <Form.Item
                                        name="managerId"
                                    >

                                        <div
                                            // className={`relative ${!isEmpty(singleManager) && 'bg-blue-gray-20'} border-[1px] ${isDropDownVisible ? 'border-secondary-blue-50' : 'border-blue-gray-20'} rounded-[7px] h-[44px] flex justify-center items-center ${(isDropDownSelect)  && 'searchByRoleSelect'}`}>
                                            className={`relative ${!isEmpty(singleManager) && 'bg-blue-gray-20'} border-[1px] ${isDropDownVisible ? 'border-secondary-blue-50' : 'border-blue-gray-20'} rounded-[7px] h-[44px] flex justify-center items-center ${isDropItemClick ? '' : isDropDownSelect ? 'searchByRoleSelect' : ''} ${(!isDropDownVisible) ? 'select-icon' : ''}`}>

                                            <Select

                                                // open={isDropItemClick ? true : isDropDownOpen}
                                                // mode='multiple'
                                                suffixIcon={<StepBackwardOutlined style={{ display: 'none' }} />}
                                                onClick={onDropDownClick}
                                                onDropdownVisibleChange={onDropDownVisible}
                                                onInputKeyDown={onInputKeyDown}
                                                onSelect={onSelect}
                                                showSearch
                                                placeholder={`Select ${role} by Login ID/ Name`}
                                                style={{ border: 'none' }}
                                                onChange={(value, p) => handleRoleChange(value, p)}
                                                filterOption={(inputValue: string, option: any) =>
                                                    option.value.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0 ||
                                                    option.contact.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0
                                                }

                                            >
                                                {
                                                    roleDatas?.map((m: roleDT) => (
                                                        <Option key={m.id} value={m.name} contact={m.contact}>
                                                            <div className='flex gap-x-4'>
                                                                <img className='h-[18px] w-[18px]' src={Icons.manager}
                                                                    alt="" />
                                                                <h1 className='text-blue-gray-90 text-small'>{m.contact} - {m.name}</h1>
                                                            </div>
                                                        </Option>
                                                    ))
                                                }
                                            </Select>
                                            <div
                                                // className={(!isDropDownVisible) ? 'bg-whitelock h-[24px] w-[24px] flex justify-center items-center pr-[15px]' : 'hidden'}>
                                                className={(!isDropDownVisible) ? 'select-icon' : 'hidden'}>
                                                {/*<img onClick={dropDownArrowClick} className='' src={arrowDropDownIcon} alt=""/>*/}
                                            </div>
                                        </div>


                                        <div
                                            className={isDropDownVisible ? 'bg-white px-[6px] block w-[fit-content] absolute bottom-[34px] left-[12px]' : 'hidden'}>
                                            <p className='text-blue-gray-80 font-bold text-xxs'>{role}</p>
                                        </div>
                                    </Form.Item>
                                </Form>
                            </div>

                        </div>
                    </div>

                    {/*body*/}

                    {

                        !isEmpty(singleManager) ?
                            <div className="relative p-6 ">
                                <div className='border-[1px] px-3 py-4 border-blue-gray-20 flex justify-between '>
                                    <div className='flex items-center gap-x-4'>
                                        <div className='flex gap-x-2'>
                                            <img className='h-[20px] w-[20px]' src={Icons.manager} alt="" />
                                            <h1 className='nameParagraph1'>
                                                {singleManager?.name}
                                            </h1>
                                        </div>
                                        <div className='flex items-center gap-x-2'>
                                            {/* <img className='h-4 w-4' src={militaryImg} alt="" /> */}
                                            <h1 className='titleParagraph'>{singleManager?.role}</h1>
                                        </div>
                                        <div className='flex items-center gap-x-2'>
                                            {/* <img className='h-4 w-4' src={powerRoundedImg} alt="" /> */}
                                            <h1 className='titleParagraph'>{singleManager?.contact}</h1>
                                        </div>
                                        <div className='flex items-center gap-x-2'>
                                            {/* <img className='h-4 w-4' src={homeImg} alt="" /> */}
                                            <h1 className='titleParagraph'>{singleManager?.address}</h1>
                                        </div>
                                    </div>
                                    <button onClick={(id) => deleteManager(singleManager?.id)}>
                                        {/* <img className='deleteIcon' src={deleteIcon} alt="" /> */}
                                    </button>
                                </div>
                                <div className='w-full flex justify-center items-center mt-[25px]'>
                                    <Link to={`${BILLING_PAYMENT_HISTORY_PATH}/${singleManager?.id}`}>
                                        <button
                                            className='w-[237px] h-[44px] text-white text-base bg-primary-ct-blue-60 rounded-[6px]'>
                                            Search Payment History
                                        </button>
                                    </Link>
                                </div>
                            </div> :
                            <div className='p-6 h-[195px] flex flex-col justify-center items-center'>
                                <div
                                    className='h-[40px] w-[40px] rounded-[50%] bg-blue-gray-05 flex items-center justify-center'>
                                    {/* <img className='w-[18px] h-[18px]' src={faceImage} alt="" /> */}
                                </div>
                                <h1 className='text-ct-blue-45 text-xs mt-[8px]'>By adding, {role} will be
                                    shown here</h1>
                            </div>
                    }

                </div>

            </div>
        </div>
    );
};

export default AddAssigneeModal;