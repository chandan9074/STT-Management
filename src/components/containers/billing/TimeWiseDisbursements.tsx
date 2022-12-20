import React, {useContext, useEffect, useState} from "react";
import managerImage from "../../../assets/Icons/manager.png";
import {SearchOutlined} from "@ant-design/icons";
import ManagerSearchModal from "./ManagerSearchModal";
import {ManagerContext} from "../../../context/ManagerProvider";
import "./TimeWiseDisbursement.css";
import BillingListIndex from "./BillingList/BillingListIndex";
import Icons from "../../../assets/Icons";
import arrowDropDownIcon from '../../../assets/Icons/arrow_drop_down.png';

const TimeWiseDisbursements = () => {

    const barHeight = 125;

    const maxDim = 70;
    const minDim = 35;

    const managerContext = useContext(ManagerContext);
    const {disbursementData, singleManager, totalDisbursed} = managerContext;

    const [dimensionValue, setDimensionValue] = useState<any>([]);
    const [isStt, setIsStt] = useState(true);
    const [isTts, setIsTts] = useState(false);

    const [isSttRoles, setIsSttRoles] = useState("Manager");
    const [isTtsRoles, setIsTtsRoles] = useState("Speaker");

    const initialData = {
        role: "Manager",
        type: "stt",
        // start: '01-12-2021',
        // end: '20-01-2022'
    };

    const [search, setSearch] = useState<any>(initialData);


    useEffect(() => {
        managerContext.getManagerDisbursement(search);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    const [showModal, setShowModal] = React.useState(false);

    const sttRoles = [
        {
            title: "Manager",
        },
        {
            title: "Team Leader",
        },
        {
            title: "Collector",
        },
        {
            title: "Speaker",
        },
        {
            title: "Audio Checker",
        },
        {
            title: "Annotator",
        },
        {
            title: "Validator",
        },
    ];

    const ttsRoles = [
        {
            title: "Speaker",
        },
        {
            title: "Audio Checker",
        },
        {
            title: "Annotator",
        },
        {
            title: "Validator",
        },
    ];


    useEffect(() => {
        // getChart();
        if (disbursementData.length > 0) {
            // getDimensionValue();
            getNewDimension();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [disbursementData]);


    const onHandleStt = () => {
        setIsStt(true);
        setIsTts(false);
        setSearch({...search, role: "Manager", type: "stt"});
    };

    const onHandleTts = () => {
        setIsStt(false);
        setIsTts(true);
        setSearch({...search, role: "Speaker", type: "tts"});
    };

    const getNewDimension = () => {
        let _data = disbursementData.map((m: any) => {
            return m.totalAmount;
        });

        const min = Math.min(..._data);
        const max = Math.max(..._data);

        const minValue = min;
        const maxValue = max;

        const ratio = (maxDim - minDim + 1) / (maxValue - minValue);

        const finalDimension = disbursementData.map((m: any) => {
            let dimension;

            if (m.totalAmount === maxValue) {
                dimension = maxDim;
            }
            if (m.totalAmount === minValue) {
                dimension = minDim;
            } else {
                dimension = (m.totalAmount - minValue) * ratio + minDim;
            }
            return dimension / 16;
        });

        setDimensionValue(finalDimension);
    };

    console.log('dimesion value', dimensionValue)

    const handleSttRole = (value: string) => {
        if (value === "Manager") {
            setIsSttRoles(value);
            setSearch({...search, role: value, type: "stt"});
        }
        if (value === "Team Leader") {
            setIsSttRoles(value);
            setSearch({...search, role: value, type: "stt"});
        }
        if (value === "Collector") {
            setIsSttRoles(value);
            setSearch({...search, role: value, type: "stt"});
        }
        if (value === "Speaker") {
            setIsSttRoles(value);
            setSearch({...search, role: value, type: "stt"});
        }
        if (value === "Audio Checker") {
            setIsSttRoles(value);
            setSearch({...search, role: value, type: "stt"});
        }
        if (value === "Validator") {
            setIsSttRoles(value);
            setSearch({...search, role: value, type: "stt"});
        }
        if (value === "Annotator") {
            setIsSttRoles(value);
            setSearch({...search, role: value, type: "stt"});
        }
    };

    const handleTtsRole = (value: string) => {
        if (value === "Speaker") {
            setIsTtsRoles(value);
            setSearch({...search, role: value, type: "tts"});
        }
        if (value === "Audio Checker") {
            setIsTtsRoles(value);
            setSearch({...search, role: value, type: "tts"});
        }
        if (value === "Validator") {
            setIsTtsRoles(value);
            setSearch({...search, role: value, type: "tts"});
        }
        if (value === "Annotator") {
            setIsTtsRoles(value);
            setSearch({...search, role: value, type: "tts"});
        }
    };

    const onDateSearch = () => {
        console.log('date search')
    }


    return (
        <div className='pb-[50px]'>
            <div className="h-[153px] relative ">
                {/*TTS STT Tab*/}
                <div className="flex flex-col justify-center items-center">
                    <div
                        className="h-[36px] w-[197px] rounded-[150px] bg-white flex justify-center items-center mt-[-17px] shadow-md">
                        <button
                            className={`flex justify-center items-center w-[96px] h-[32px] ${
                                isStt
                                    ? "bg-[#2C79BE] text-white"
                                    : "bg-white text-[#2C79BE] hover:bg-gray-300"
                            } rounded-[24px]`}
                            onClick={onHandleStt}
                        >
                            STT
                        </button>
                        <button
                            className={`flex justify-center items-center w-[96px] h-[32px] ${
                                isTts
                                    ? "bg-[#851F58] text-white"
                                    : "bg-white text-[#851F58] hover:bg-gray-300"
                            } rounded-[24px]`}
                            onClick={onHandleTts}
                        >
                            TTS
                        </button>
                    </div>
                </div>

                <div
                    className={`absolute bottom-0 w-[100%] grid ${
                        isStt ? "grid-cols-7" : "grid-cols-4"
                    }`}
                >
                    {isStt &&
                        sttRoles.map((m) => (
                            <div
                                key={m.title}
                                onClick={() => handleSttRole(m.title)}
                                className={` ${
                                    isSttRoles === m.title
                                        ? "bg-white text-[#2C79BE] font-bold"
                                        : "text-[#5F7180] font-semibold"
                                } h-[41px] text-[16px] rounded-t-[15px] flex justify-center items-center gap-x-4`}
                            >
                                <img className="w-4 h-4" src={managerImage} alt="manager"/>
                                <button>{m.title}</button>
                            </div>
                        ))}

                    {isTts &&
                        ttsRoles.map((m) => (
                            <div
                                key={m.title}
                                onClick={() => handleTtsRole(m.title)}
                                className={` ${
                                    isTtsRoles === m.title
                                        ? "bg-white text-[#2C79BE] font-bold"
                                        : "text-[#5F7180] font-semibold"
                                } h-[41px] text-[16px] rounded-t-[15px] flex justify-center items-center gap-x-4`}
                            >
                                <img className="w-4 h-4" src={managerImage} alt="manager"/>
                                <button>{m.title}</button>
                            </div>
                        ))}
                </div>

                {/*Roles Tab*/}
            </div>

            <div className="p-10 bg-white shadow-md rounded-[8px]">
                {/*<div className='col-span-3 h-[140px]'>*/}
                <div className='grid grid-cols-4 gap-x-14'>
                    <div className="col-span-3 h-[140px]">
                        <div className='flex justify-between'>
                            <h1 className="text-4 text-ct-blue-45 font-semibold mb-[25px]">
                                Time wise disbursement
                            </h1>

                            <button onClick={onDateSearch} className='rounded-[6px] flex px-4 items-center gap-x-3 bg-default h-8'>
                                <h1 className='text-ct-blue-90 text-[13px]'>2022</h1>
                                <div className='h-[4px] w-[6px]'>
                                    <img src={arrowDropDownIcon} alt=""/>
                                </div>
                            </button>

                        </div>
                        {/*<div className={`grid grid-cols-12`}>*/}
                        <div className="relative">
                            <div className="flex justify-between w-full relative px-10">
                                {disbursementData.map((m: any, i: any) => (
                                    <div
                                        className={`relative flex ${disbursementData.length === 12 ? i < 2 ? "justify-start" : "justify-center" : disbursementData.length > 12 ? i < Math.round((2 * disbursementData.length) / 12) ? "justify-start" : "justify-center" : disbursementData.length < 12 ? i === 0 ? "justify-start" : "justify-center" : ""} group`}>
                                        {/*<div className="absolute  bottom-20 text-white bg-black h-10">hello </div>*/}
                                        <div
                                            style={{bottom: `${(163 / 16) + (dimensionValue[i] / 2)}rem`}}
                                            className={`absolute z-40 w-[350px]  group-hover:block hidden

                         bg-[#59C1BD] ${disbursementData.length === 12 ? i < 2 ? "-left-10" : "" : disbursementData.length > 12 ? i < Math.round((2 * disbursementData.length) / 12) ? "-left-10" : "" : disbursementData.length < 12 ? i === 0 ? "-left-10" : "" : ""}`}>
                                            <div className='rounded-[12px] px-5 py-4 bg-[#212121] absolute'>
                                                <div className="flex items-center">
                                                    <h1 className="text-base text-white mb-0 flex mr-4">
                                                        Disbursed:
                                                        <span className="font-bold flex ml-2">
                            <span className="mr-1.5">BDT</span>{" "}
                                                            {/*{item.totalDisbursed}*/}
                                                            {m?.totalAmount}
                          </span>
                                                    </h1>
                                                    <h1 className="text-base text-white mb-0 flex">
                                                        Valid:
                                                        <span className="font-bold flex ml-2">
                            {/*{item.validHours}hr*/}
                                                            {m?.totalHours}
                          </span>
                                                    </h1>
                                                </div>


                                                <div
                                                    className="mt-4 flex justify-between w-[300px] bg-winter-wizard bg-opacity-25 py-1.5 px-2 rounded-[4px]">
                                                    <h3 className="flex items-center text-winter-wizard text-base font-medium mb-0">
                          <span className="mr-1">
                            {/*{item.monthlyDisbursed[0].day}*/}
                              {m?.disbursed[0]?.day ? m?.disbursed[0]?.day : '00'}
                          </span>
                                                        <span>
                              {/*jan*/}
                                                            {/*{item.month}*/}
                            </span>
                                                    </h3>
                                                    <h3 className="flex items-center text-winter-wizard text-base font-medium mb-0">
                          <span className="mr-1">
                            {/*{item.monthlyDisbursed[0].hours}*/}
                              {m?.disbursed[0]?.hours ? m?.disbursed[0]?.hours : '0'}
                          </span>
                                                        hr
                                                    </h3>
                                                    <h3 className="flex items-center text-winter-wizard text-base font-medium mb-0">
                                                        {/*{item.monthlyDisbursed[0].amount}/-*/}
                                                        {m?.disbursed[0]?.amount ? m?.disbursed[0]?.amount : '0'} / -
                                                    </h3>
                                                </div>


                                                <div
                                                    className="mt-0.5 flex justify-between w-[300px] bg-blue-gray-85 py-1.5 px-2 rounded-[4px]">
                                                    <h3 className="flex items-center text-winter-wizard text-base font-medium mb-0">
                          <span className="mr-1">
                              {m?.disbursed[1]?.day ? m?.disbursed[1]?.day : '00'}
                          </span>
                                                        {/*<span>{item.month}</span>*/}
                                                        {/*feb*/}
                                                    </h3>
                                                    <h3 className="flex items-center text-winter-wizard text-base font-medium mb-0">
                          <span className="mr-1">
                            {m?.disbursed[1]?.hours ? m?.disbursed[1]?.hours : '0'}
                          </span>
                                                        hr
                                                    </h3>
                                                    <h3 className="flex items-center text-winter-wizard text-base font-medium mb-0">
                                                        {m?.disbursed[1]?.amount ? m?.disbursed[1]?.amount : '0'} / -
                                                    </h3>
                                                </div>


                                            </div>

                                            <img
                                                src={Icons.blackDropArrow}
                                                alt=""
                                                className={`w-10 h-6 absolute top-[8.5rem] ${disbursementData.length === 12 ? i < 2 ? "left-5" : "left-1/2 transform -translate-x-1/2" : disbursementData.length > 12 ? i < Math.round((2 * disbursementData.length) / 12) ? "left-5" : "left-1/2 transform -translate-x-1/2" : disbursementData.length < 12 ? i === 0 ? "left-5" : "left-1/2 transform -translate-x-1/2" : ""}`}
                                            />

                                        </div>


                                        <div key={m.id} className={`flex flex-col justify-center items-center mt-8`}>
                                            {/*<div key={m.id} className=" flex flex-col justify-center items-center ">*/}
                                            <div className="flex items-center duration-300 absolute ">
                                                {/*<div className="flex items-center duration-300">*/}
                                                <div
                                                    className={`h-[2px] border border-dashed flex-1 rounded-tl-md rounded-bl-md bg-[#D1D3D6]`}
                                                />
                                                <div
                                                    style={{
                                                        height: `${dimensionValue[i]}rem`,
                                                        width: `${dimensionValue[i]}rem`,
                                                        backgroundColor: `${
                                                            i % 3 === 0
                                                                ? "#FFD3D3"
                                                                : i % 4 === 0
                                                                    ? "#FFF5CC"
                                                                    : i % 5 === 0
                                                                        ? "#E2FBD7"
                                                                        : i % 2 === 0
                                                                            ? "#CCF8FE"
                                                                            : "#CCDDFE"
                                                        }`,
                                                    }}
                                                    className={`relative z-20 text-sm font-medium  py-1 bg-[#CCDDFE] rounded-full flex justify-center items-center ring-2 ${i % 3 === 0 ? 'ring-[#E5BEBE] hover:shadow-light-tomato' : (i % 4 === 0) ? 'ring-[#E8DFBA] hover:shadow-light-periwinkle' :  (i % 5 === 0) ? 'ring-[#D1E8C7] hover:shadow-light-onahau ' :  i % 2 === 0
                                                        ? "ring-[#BAE3E8] hover:shadow-light-onahau"
                                                        : "ring-[#BACAE8] hover:shadow-light-yellow" } hover:ring-offset-2 `}
                                                >
                                                    {
                                                        // dimensionValue[i] - (30/16) >= (5/16) &&
                                                        !(m.totalAmount.toString().length > 3 && dimensionValue[i] < (45 / 16)) ?
                                                            <h1 className="text-[#453C38] text-[11px]">
                                                                {m.totalAmount}
                                                            </h1> : <h1>{}</h1>
                                                    }
                                                </div
                                                >
                                                <div
                                                    className={`h-[2px] border border-dashed flex-1 rounded-tr-md rounded-br-md bg-[#D1D3D6]`}
                                                />
                                            </div>

                                            <div key={m.id}
                                                 className='absolute top-20 flex flex-col justify-center items-center h-[30px] mt-10'>
                                                <div className='w-[1px] h-[4px] bg-blue-gray-A30'></div>
                                                <h1>{m.month.slice(0, 3)}</h1>
                                            </div>


                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div
                                className={`absolute top-[33px] z-10 h-[2px] border border-dashed w-full rounded-tr-md rounded-br-md bg-[#D1D3D6]`}
                            />
                        </div>


                    </div>

                    <div className="w-[273px]">
                        <div
                            className="px-2 flex items-center h-[32px] border-none bg-blue-gray-10 hover:bg-blue-gray-40 rounded-[6px] gap-x-2"
                            onClick={() => setShowModal(true)}
                        >
                            <SearchOutlined style={{color: "#5F707F"}}/>
                            <h1 className="text-[14px] text-ct-blue-90">
                                Search {search.role} by Id or Name
                            </h1>
                        </div>

                        {/*<div className='input'>*/}
                        {/*<Input*/}
                        {/*    disabled={true}*/}
                        {/*    size="large"*/}
                        {/*    // onClick={showModal}*/}
                        {/*    className='h-[32px] border-none bg-blue-gray-10 hover:bg-blue-gray-60'*/}
                        {/*    // className='h-[32px] border-none bg-blue-gray-10 '*/}
                        {/*    onClick={() => setShowModal(true)}*/}
                        {/*    placeholder="Search Manager by Id or Name"*/}
                        {/*    // prefix={<SearchOutlined style={{color: '#5F707F'}}/>}*/}
                        {/*/>*/}
                        {/*</div>*/}

                        {/*Box*/}
                        <div
                            className="relative mt-[15px] w-full py-2 px-2 h-[140px] border-[1px] border-border-light-blue rounded-[4px]">
                            <h1 className="text-ct-blue-45 text-[13px] font-medium">
                                Total Amount Disbursed{" "}
                            </h1>
                            <div className="flex">
                                <h1 className="mt-[9px] text-ct-blue-90-70% text-[14px] mr-[4px]">
                                    BDT
                                </h1>
                                <h1 className="text-[32px] bg-gradient-to-r from-[#F405FE] via-[#136EE5] to-[#EAA678] text-transparent bg-clip-text">
                                    {totalDisbursed.totalDisbursedAmount}
                                </h1>
                            </div>

                            <div className="absolute flex w-full h-[110px] top-6 left-2 justify-center items-start">
                                <div
                                    className="w-[2px] h-[92px] rotate-[18deg] bg-gradient-to-r from-border-light via-green-10 to-border-light"/>
                            </div>

                            <div className="absolute bottom-[2px] right-2 gap-y-0">
                                <h1 className="text-ct-blue-90-70% text-[14px] ">Total Valid</h1>
                                <span
                                    className="text-[32px] bg-gradient-to-r from-[#F405FE] via-[#136EE5] to-[#EAA678] text-transparent bg-clip-text">
                {totalDisbursed.totalValidHours}hr
              </span>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-10 mt-20"/>

                <div className='w-[100%]'>
                    <BillingListIndex/>
                </div>

            </div>


            {showModal ? (
                <ManagerSearchModal
                    setShowModal={setShowModal}
                    managerContext={managerContext}
                    role={search?.role}
                />
            ) : null}
        </div>
    );
};

export default TimeWiseDisbursements;
