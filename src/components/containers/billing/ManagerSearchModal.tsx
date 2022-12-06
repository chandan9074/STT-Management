import React, {useState} from 'react';
import {CloseOutlined} from "@ant-design/icons";
import {Select} from "antd";
import managerImage from '../../../assets/Icons/manager.png';
import militaryImg from '../../../assets/Icons/military_tech.png';
import homeImg from '../../../assets/Icons/home.png';
import powerRoundedImg from '../../../assets/Icons/power_rounded.png';
import deleteIcon from '../../../assets/Icons/delete_icon.png';
import {isEmpty} from "../../../helpers/Utils";

const {Option} = Select;

const ManagerSearchModal = ({setShowModal}: { setShowModal: any }) => {

    const [manager, setManager] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(false);

    const managerData: any = [
        {
            id: '1',
            name: 'Maksuda Alam',
            role: 'Manager',
            contact: '01738463449',
            city: 'Dhaka',
            image: managerImage
        },
        {
            id: '2',
            name: 'Rahim',
            role: 'Manager',
            contact: '01938463449',
            city: 'Cumilla',
            image: managerImage
        },
        {
            id: '3',
            name: 'Karim',
            role: 'Manager',
            contact: '016738463449',
            city: 'Khulna',
            image: managerImage
        },
        {
            id: '4',
            name: 'Zobbar',
            role: 'Manager',
            contact: '01898463449',
            city: 'Barishal',
            image: managerImage
        }
    ]

    const handleMangerChange = (id: any) => {
        getManagerById(id);
    }

    //TODO: getManagerById api call
    const getManagerById = (id: any) => {

        try {
            setLoading(true);
            const _data = managerData.filter((m: any) => m.id === id)
            setManager(_data[0]);
            setLoading(false);

        } catch (error) {
            setLoading(false);
            // const message = getErrorMessage(error)
            // Toast("error", "Error", "Can not upload image ! " + message);
        }
    }



    console.log('manager', isEmpty(manager));

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl w-[800px]">
                    {/*content*/}
                    <div
                        className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className='bg-ct-blue-05 h-[200px] p-5'>
                            <div className="flex items-start justify-between  ">
                                <h3 className="text-3xl font-semibold">
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

                            <div className='bg-white px-6 py-8 mt-4 rounded-[10px]'>
                                <Select
                                    showSearch
                                    placeholder="Search to Select"
                                    className='w-full'
                                    onChange={(value) => handleMangerChange(value)}
                                    disabled={!isEmpty(manager)}
                                >
                                    {
                                        managerData.map((m: any) => (
                                            <Option key={m.name} value={m.id}>{m.name}</Option>
                                        ))
                                    }
                                </Select>

                            </div>
                        </div>

                        {/*body*/}
                        {
                            !isEmpty(manager) ?
                            <div className="relative p-6 ">
                                <div className='border-[2px] px-3 py-4 border-light-blue flex justify-between '>
                                    <div className='flex items-center gap-x-4'>
                                        <div className='flex gap-x-2'>
                                            <img className='h-[20px] w-[20px]' src={manager.image} alt=""/>
                                            <h1 className='nameParagraph1'>
                                                {manager.name}
                                            </h1>
                                        </div>
                                        <div className='flex items-center gap-x-2'>
                                            <img className='h-4 w-4' src={militaryImg} alt=""/>
                                            <h1 className='titleParagraph'>{manager.role}</h1>
                                        </div>
                                        <div className='flex items-center gap-x-2'>
                                            <img className='h-4 w-4' src={powerRoundedImg} alt=""/>
                                            <h1 className='titleParagraph'>{manager.contact}</h1>
                                        </div>
                                        <div className='flex items-center gap-x-2'>
                                            <img className='h-4 w-4' src={homeImg} alt=""/>
                                            <h1 className='titleParagraph'>{manager.city}</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <img className='deleteIcon' src={deleteIcon} alt=""/>
                                    </div>
                                </div>
                            </div> :
                                <div className='p-6'>No data</div>
                        }

                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
};

export default ManagerSearchModal;