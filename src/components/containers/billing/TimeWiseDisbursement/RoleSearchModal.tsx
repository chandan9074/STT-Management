import React, { useContext, useEffect, useState } from 'react';
import { CloseOutlined, StepBackwardOutlined } from "@ant-design/icons";
import { Form, Select } from "antd";
import militaryImg from '../../../../assets/Icons/military_tech.png';
import homeImg from '../../../../assets/Icons/home.png';
import powerRoundedImg from '../../../../assets/Icons/power_rounded.png';
import deleteIcon from '../../../../assets/Icons/delete_icon.png';
import { isEmpty } from "../../../../helpers/Utils";
import faceImage from '../../../../assets/Icons/face.png';
import './RoleSearchModal.css';
import managerImage from "../../../../assets/Icons/manager.png";
import { RoleInContext } from "../../../../context/RoleProvider";
import { roleDT } from "../../../../types/billingTypes";
import { Link } from 'react-router-dom';
import { BILLING_PAYMENT_HISTORY_PATH } from '../../../../helpers/Slug';

const { Option } = Select;

const RoleSearchModal = ({
    handleModal,
    role,
    type
}: {
    handleModal: (value: boolean) => void,
    role: string,
    type: string
}) => {

    const [form] = Form.useForm();

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
        type: type
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
        console.log('ppppppp', p)
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
                    <div className='bg-ct-blue-05 h-[186px] p-5'>
                        <div className="flex justify-between items-center ">
                            <h3 className="titleParagraphMedium">
                                Search {role}
                            </h3>
                            <button
                                className='bg-white rounded-[50%]'
                                onClick={() => onClose()}
                            >
                                <CloseOutlined
                                    className='m-[10px] text-blue-gray-700'
                                />
                            </button>
                        </div>

                        <div className='rounded-md bg-white px-6 py-7 mt-4 h-[100px]'>
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
                                                                <img className='h-[18px] w-[18px]' src={managerImage}
                                                                    alt="" />
                                                                <h1 className='text-blue-gray-90 text-[14px]'>{m.contact} - {m.name}</h1>
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
                                            <p className='text-blue-gray-80 font-bold text-[12px]'>{role}</p>
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
                                            <img className='h-[20px] w-[20px]' src={managerImage} alt="" />
                                            <h1 className='nameParagraph1'>
                                                {singleManager?.name}
                                            </h1>
                                        </div>
                                        <div className='flex items-center gap-x-2'>
                                            <img className='h-4 w-4' src={militaryImg} alt="" />
                                            <h1 className='titleParagraph'>{singleManager?.role}</h1>
                                        </div>
                                        <div className='flex items-center gap-x-2'>
                                            <img className='h-4 w-4' src={powerRoundedImg} alt="" />
                                            <h1 className='titleParagraph'>{singleManager?.contact}</h1>
                                        </div>
                                        <div className='flex items-center gap-x-2'>
                                            <img className='h-4 w-4' src={homeImg} alt="" />
                                            <h1 className='titleParagraph'>{singleManager?.address}</h1>
                                        </div>
                                    </div>
                                    <button onClick={(id) => deleteManager(singleManager?.id)}>
                                        <img className='deleteIcon' src={deleteIcon} alt="" />
                                    </button>
                                </div>
                                <div className='w-full flex justify-center items-center mt-[25px]'>
                                    <Link to={`${BILLING_PAYMENT_HISTORY_PATH}/${singleManager?.id}`}>
                                        <button
                                            className='w-[237px] h-[44px] text-white text-[16px] bg-primary-ct-blue-60 rounded-[6px]'>
                                            Search Payment History
                                        </button>
                                    </Link>
                                </div>
                            </div> :
                            <div className='p-6 h-[195px] flex flex-col justify-center items-center'>
                                <div
                                    className='h-[40px] w-[40px] rounded-[50%] bg-blue-gray-05 flex items-center justify-center'>
                                    <img className='w-[18px] h-[18px]' src={faceImage} alt="" />
                                </div>
                                <h1 className='text-ct-blue-45 text-[13px] mt-[8px]'>By adding, {role} will be
                                    shown here</h1>
                            </div>
                    }

                </div>

            </div>
        </div>
    );
};

export default RoleSearchModal;