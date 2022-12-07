import React, {useEffect, useState} from 'react';
import {CloseOutlined} from "@ant-design/icons";
import {Form, Select} from "antd";
import militaryImg from '../../../assets/Icons/military_tech.png';
import homeImg from '../../../assets/Icons/home.png';
import powerRoundedImg from '../../../assets/Icons/power_rounded.png';
import deleteIcon from '../../../assets/Icons/delete_icon.png';
import {isEmpty} from "../../../helpers/Utils";
import faceImage from '../../../assets/Icons/face.png';

const {Option} = Select;

const ManagerSearchModal = ({setShowModal, managerContext}: { setShowModal: any, managerContext: any }) => {

    const [form] = Form.useForm();

    const [loading, setLoading] = useState<boolean>(false);
    const {managerDatas, singleManager} = managerContext;
    // const [singleManager, setSingleManager] = useState<any>({});


    // setManagerDatas,
    //     managerDatas

    useEffect(() => {
        managerContext.getManager();
    }, [])


    const handleMangerChange = (id: any, p:any) => {
        // setSingleManager(p);
        console.log('p', p)
        managerContext.getManagerById(p.key);
        form.resetFields();
    }

    const deleteManager = (id: any) => {
        // managerContext.getManager();
        managerContext.setSingleManager({});
        form.resetFields();
        // form.setFieldsValue({profileFront: url})
    }


    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative my-6 mx-auto max-w-3xl w-[640px] h-[377px]">
                    {/*content*/}
                    <div
                        className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className='bg-ct-blue-05 h-[200px] p-5'>
                            <div className="flex items-start justify-between items-center ">
                                <h3 className="titleParagraphMedium">
                                    Search Manager
                                </h3>
                                <button
                                    className='bg-white rounded-[50%]'
                                    onClick={() => setShowModal(false)}
                                >
                                    <CloseOutlined
                                        className='m-[10px] text-ct-blue-30'
                                    />
                                </button>
                            </div>

                            <div className='bg-white px-6 py-8 mt-4 rounded-[4px] h-[100px]'>
                                <div>
                                    <Form
                                        layout='vertical'
                                        name="basic"
                                        form={form}
                                    >
                                        <Form.Item
                                            name="managerId"
                                        >
                                            {/*<Select*/}
                                            {/*    allowClear*/}
                                            {/*    showSearch*/}
                                            {/*    filterOption={(inputValue:any, option:any) =>*/}
                                            {/*        option.value.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0 ||*/}
                                            {/*        option.value.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0*/}
                                            {/*    }*/}
                                            {/*>*/}
                                            {/*    {managerDatas.map((option: any)=> (*/}
                                            {/*        <Option key={option.name} >{option.name}</Option>*/}
                                            {/*    ))}*/}
                                            {/*</Select>*/}

                                            <Select
                                                showSearch
                                                placeholder="Select Manager by Login ID/ Name"
                                                className='w-full'
                                                // style={{height: '44px', borderRadius: '40px'}}
                                                onChange={(value, p) => handleMangerChange(value, p)}
                                                disabled={!isEmpty(singleManager)}
                                                filterOption={(inputValue:any, option:any) =>
                                                    option.value.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0 ||
                                                    option.contact.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0
                                                }

                                            >
                                                {
                                                    managerDatas.map((m: any) => (
                                                        <Option key={m.id} value={m.name} contact={m.contact}>
                                                            <div className='flex gap-x-4'>
                                                                <img className='h-[18px] w-[18px]' src={m.image} alt=""/>
                                                                <h1 className='text-blue-gray-90 text-[14px]'>{m.contact} - {m.name}</h1>
                                                            </div>
                                                        </Option>
                                                    ))
                                                }
                                            </Select>
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
                                                <img className='h-[20px] w-[20px]' src={singleManager.image} alt=""/>
                                                <h1 className='nameParagraph1'>
                                                    {singleManager.name}
                                                </h1>
                                            </div>
                                            <div className='flex items-center gap-x-2'>
                                                <img className='h-4 w-4' src={militaryImg} alt=""/>
                                                <h1 className='titleParagraph'>{singleManager.role}</h1>
                                            </div>
                                            <div className='flex items-center gap-x-2'>
                                                <img className='h-4 w-4' src={powerRoundedImg} alt=""/>
                                                <h1 className='titleParagraph'>{singleManager.contact}</h1>
                                            </div>
                                            <div className='flex items-center gap-x-2'>
                                                <img className='h-4 w-4' src={homeImg} alt=""/>
                                                <h1 className='titleParagraph'>{singleManager.city}</h1>
                                            </div>
                                        </div>
                                        <button onClick={(id) => deleteManager(singleManager.id)}>
                                            <img className='deleteIcon' src={deleteIcon} alt=""/>
                                        </button>
                                    </div>
                                </div> :
                                <div className='p-6 h-[195px] flex flex-col justify-center items-center'>
                                    <div
                                        className='h-[40px] w-[40px] rounded-[50%] bg-blue-gray-05 flex items-center justify-center'>
                                        <img className='w-[18px] h-[18px]' src={faceImage} alt=""/>
                                    </div>
                                    <h1 className='text-ct-blue-45 text-[13px] mt-[8px]'>By adding, Manager will be
                                        shown here</h1>
                                </div>
                        }

                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
};

export default ManagerSearchModal;