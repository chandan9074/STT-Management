import React, {useEffect, useState} from 'react';
import manager from '../../../assets/Icons/manager.png'
import {Input, Modal} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import ManagerSearchModal from "./ManagerSearchModal";

const TimeWiseDisbursements = ({data}) => {

    const [isStt, setIsStt] = useState(true);
    const [isTts, setIsTts] = useState(false);

    const [isSttRoles, setIsSttRoles] = useState('Manager')
    const [isTtsRoles, setIsTtsRoles] = useState('Speaker')

    // const isSttRoles = [
    //     isSttManager, isSttTamLeader, isSttCollector, isSttSpeaker, isSttAudioChecker, isSttAnnotator, isSttValidator
    // ]

    const [minValue, setMinValue] = useState([])


    const [showModal, setShowModal] = React.useState(false);


    const sttRoles = [
        {
            title: 'Manager'
        },
        {
            title: 'Team Leader'
        },
        {
            title: 'Collector'
        },
        {
            title: 'Speaker'
        },
        {
            title: 'Audio Checker'
        },
        {
            title: 'Annotator'
        },
        {
            title: 'Validator'
        }
    ]

    const ttsRoles = [
        {
            title: 'Speaker'
        },
        {
            title: 'Audio Checker'
        },
        {
            title: 'Annotator'
        },
        {
            title: 'Validator'
        }
    ]

    useEffect(() => {
        getDataRatio();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onHandleStt = () => {
        setIsStt(true);
        setIsTts(false);
    }

    const onHandleTtt = () => {
        setIsStt(false);
        setIsTts(true);
    }

    const getDataRatio = () => {
        Array.prototype.min = function () {
            return Math.min.apply(null, this);
        }

        let _data = data.map(m => {
            // setTotalAmounts([...totalAMounts, m.totalAmounts]);

            return m.totalAmounts
        })

        const min = _data.min();

        const _ratioData = data.map(m => {
            return m.totalAmounts / min;
        });

        setMinValue(_data.min());
    }

    const handleSttRole = (value) => {
        if (value === 'Manager') {
            setIsSttRoles(value);
        }
        if (value === 'Team Leader') {
            setIsSttRoles(value);
        }
        if (value === 'Collector') {
            setIsSttRoles(value);
        }
        if (value === 'Speaker') {
            setIsSttRoles(value);
        }
        if (value === 'Audio Checker') {
            setIsSttRoles(value);
        }
        if (value === 'Validator') {
            setIsSttRoles(value);
        }
        if (value === 'Annotator') {
            setIsSttRoles(value);
        }
    }

    const handleTtsRole = (value) => {
        if (value === 'Speaker') {
            setIsTtsRoles(value);
        }
        if (value === 'Audio Checker') {
            setIsTtsRoles(value);
        }
        if (value === 'Validator') {
            setIsTtsRoles(value);
        }
        if (value === 'Annotator') {
            setIsTtsRoles(value);
        }
    }

    return (
        <div>
            <div className='h-[153px] bg-[#F4F7FA] pt-6 relative'>
                {/*TTS STT Tab*/}
                <div className='flex flex-col justify-center items-center'>
                    <div className='h-[36px] w-[197px] rounded-[150px] bg-white flex justify-center items-center'>
                        <button
                            className={`flex justify-center items-center w-[96px] h-[32px] ${isStt ? 'bg-[#2C79BE] text-white' : 'bg-white text-[#2C79BE] hover:bg-gray-300'} rounded-[24px]`}
                            onClick={onHandleStt}>
                            STT
                        </button>
                        <button
                            className={`flex justify-center items-center w-[96px] h-[32px] ${isTts ? 'bg-[#851F58] text-white' : 'bg-white text-[#851F58] hover:bg-gray-300'} rounded-[24px]`}
                            onClick={onHandleTtt}>
                            TTS
                        </button>
                    </div>
                </div>

                <div className={`absolute bottom-0 w-[100%] grid ${isStt ? 'grid-cols-7' : 'grid-cols-4'}`}>
                    {
                        isStt &&
                        sttRoles.map(m => (
                            <div key={m.title} onClick={() => handleSttRole(m.title)}
                                 className={` ${isSttRoles === m.title ? 'bg-white text-[#2C79BE] font-bold' : 'text-[#5F7180] font-semibold'} h-[41px] text-[16px] rounded-t-[15px] flex justify-center items-center gap-x-4`}>
                                <img className='w-4 h-4' src={manager} alt="manager"/>
                                <button>
                                    {m.title}
                                </button>
                            </div>
                        ))
                    }

                    {
                        isTts &&
                        ttsRoles.map(m => (
                            <div key={m.title} onClick={() => handleTtsRole(m.title)}
                                 className={` ${isTtsRoles === m.title ? 'bg-white text-[#2C79BE] font-bold' : 'text-[#5F7180] font-semibold'} h-[41px] text-[16px] rounded-t-[15px] flex justify-center items-center gap-x-4`}>
                                <img className='w-4 h-4' src={manager} alt="manager"/>
                                <button>
                                    {m.title}
                                </button>
                            </div>
                        ))
                    }

                </div>
                {/*Roles Tab*/}

            </div>

            <div className='p-10 grid grid-cols-4 gap-x-10'>
                <div className='col-span-3 grid grid-cols-12 '>
                    {
                        data.map(m => (
                            <div key={m.id}>
                                <div className="flex items-center duration-300">
                                    <div
                                        className={`h-[2px] border border-dashed flex-1 rounded-tl-md rounded-bl-md bg-[#D1D3D6]`}
                                    />
                                    <div
                                        // className={`text-sm font-medium px-2.5 py-1 bg-red-400 rounded-full`}
                                        className={`text-sm font-medium h-[60px] w-[60px] py-1 bg-[#CCDDFE] rounded-full flex justify-center items-center`}
                                    >
                                        {m.totalAmounts}
                                    </div>
                                    <div
                                        className={`h-[2px] border border-dashed flex-1 rounded-tr-md rounded-br-md bg-[#D1D3D6]`}
                                    />
                                </div>
                                <div className='flex justify-center items-center mt-5'>
                                    {m.month.slice(0, 3)}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <div>
                        <Input
                            size="large"
                            // onClick={showModal}
                            onClick={() => setShowModal(true)}
                            placeholder="Search Manager by Id or Name"
                            prefix={<SearchOutlined/>}
                        />
                    </div>
                    <div>
                        <h1 className='text-ct-blue-45 text-[13px] font-semibold'>Total Amount Disbursed </h1>
                    </div>


                </div>
            </div>

            {showModal ? (
                <ManagerSearchModal
                    setShowModal={setShowModal}
                />
            ) : null}

        </div>
    );
};

export default TimeWiseDisbursements;