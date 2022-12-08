import React, {useContext, useEffect, useState} from 'react';
import managerImage from '../../../assets/Icons/manager.png'
import {Input} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import ManagerSearchModal from "./ManagerSearchModal";
import {ManagerContext} from "../../../context/ManagerProvider";
import './TimeWiseDisbursement.css';

const TimeWiseDisbursements = () => {

    const managerContext = useContext(ManagerContext);
    const {managerDisbursementData, singleManager} = managerContext;

    const [dimensionValue, setDimensionValue] = useState<any>([]);


    const [isStt, setIsStt] = useState(true);
    const [isTts, setIsTts] = useState(false);

    const [isSttRoles, setIsSttRoles] = useState('Manager');
    const [isTtsRoles, setIsTtsRoles] = useState('Speaker');

    // const isSttRoles = [
    //     isSttManager, isSttTamLeader, isSttCollector, isSttSpeaker, isSttAudioChecker, isSttAnnotator, isSttValidator
    // ]

    const [minValue, setMinValue] = useState<number>()

    useEffect(() => {
        managerContext.getManagerDisbursement();
    }, []);


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
        getChart();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [managerDisbursementData]);

    const onHandleStt = () => {
        setIsStt(true);
        setIsTts(false);
    }

    const onHandleTtt = () => {
        setIsStt(false);
        setIsTts(true);
    }

    const getChart = () => {
        let _data = managerDisbursementData.map((m: any) => {
            // setTotalAmounts([...totalAMounts, m.totalAmounts]);

            return m.totalAmounts
        })


        const min = Math.min(..._data);
        const max = Math.max(..._data);

        const firstDim = min;
        const maxDim = 70;
        const firstValue = min;
        const lastValue = max;
        // .1 = 1px
        const startPoint = .1;

        let findPercent = managerDisbursementData.map((m: any) => {
            const percent = ((100 * m.totalAmounts) / lastValue);
            const dimension = (maxDim * percent) / 100;
            return dimension;

        });
        console.log('fin', findPercent)

        setDimensionValue(findPercent);

        // const firstDim = 30;
        // const lastDim = 70;
        // // .1 = 1px
        // const startPoint = .1;
        //
        // let findPercent = managerDisbursementData.map((m: any) => {
        //     const percent = ((100 * m.totalAmounts) / 100);
        //     const newPercent = percent - 100;
        //     const dimension = (startPoint * newPercent) + firstDim;
        //     let finalData ;
        //     if (dimension > lastDim) {
        //         finalData = lastDim;
        //     } else {
        //         finalData = dimension;
        //     }
        //
        //     // finalData = dimension;
        //
        //     return finalData;
        // });
        //
        // setDimensionValue(findPercent);

        setMinValue(min);
    }


    const handleSttRole = (value: string) => {
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

    const handleTtsRole = (value: string) => {
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
                                <img className='w-4 h-4' src={managerImage} alt="manager"/>
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
                                <img className='w-4 h-4' src={managerImage} alt="manager"/>
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
                        managerDisbursementData.length !== 0 &&
                        managerDisbursementData.map((m: any, i: any) => (
                            <div key={m.id}>
                                <div className="flex items-center duration-300">
                                    <div
                                        className={`h-[2px] border border-dashed flex-1 rounded-tl-md rounded-bl-md bg-[#D1D3D6]`}
                                    />
                                    <div
                                        // className={`text-sm font-medium px-2.5 py-1 bg-red-400 rounded-full`}
                                        // className={`text-sm font-medium ${0 === i ? `h-[${dimensionValue[0]}px] w-[${dimensionValue[0]}px]` : 'h-[30px] w-[30px]'}  py-1 bg-[#CCDDFE] rounded-full flex justify-center items-center`}
                                        className={`text-sm font-medium 'h-[70px] w-[70px]'}  py-1 bg-[#CCDDFE] rounded-full flex justify-center items-center`}
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
                <div className='w-[273px]'>
                    <div className='input'>
                        <Input

                            size="large"
                            // onClick={showModal}
                            className='h-[32px] border-none bg-blue-gray-10 hover:bg-blue-gray-60'
                            // className='h-[32px] border-none bg-blue-gray-10 '
                            onClick={() => setShowModal(true)}
                            placeholder="Search Manager by Id or Name"
                            // prefix={<SearchOutlined style={{color: '#5F707F'}}/>}
                        />
                    </div>

                    {/*Box*/}
                    <div
                        className='relative mt-[15px] w-full py-2 px-2 h-[140px] border-[1px] border-border-light-blue rounded-[4px]'>
                        <h1 className='text-ct-blue-45 text-[13px] font-medium'>Total Amount Disbursed </h1>
                        <div className='flex'>
                            <h1 className='mt-[9px] text-ct-blue-90-70% text-[14px] mr-[4px]'>BDT</h1>
                            <h1 className="text-[32px] bg-gradient-to-r from-[#F405FE] via-[#136EE5] to-[#EAA678] text-transparent bg-clip-text">
                                55,000
                            </h1>
                        </div>

                        <div className="absolute flex w-full h-[110px] top-6 left-2 justify-center items-start">
                            <div
                                className="w-[2px] h-[92px] rotate-[18deg] bg-gradient-to-r from-border-light via-green-10 to-border-light"/>
                        </div>

                        <div className='absolute bottom-[2px] right-2 gap-y-0'>
                            <h1 className='text-ct-blue-90-70% text-[14px] '>
                                Total Valid
                            </h1>
                            <span
                                className="text-[32px] bg-gradient-to-r from-[#F405FE] via-[#136EE5] to-[#EAA678] text-transparent bg-clip-text">
                                9,400hr
                            </span>
                        </div>

                    </div>


                </div>
            </div>

            {showModal ? (
                <ManagerSearchModal
                    setShowModal={setShowModal}
                    managerContext={managerContext}
                />
            ) : null}

        </div>
    );
};

export default TimeWiseDisbursements;