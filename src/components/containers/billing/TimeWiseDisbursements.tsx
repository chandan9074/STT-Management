import React, { useContext, useEffect, useState } from "react";
import managerImage from "../../../assets/Icons/manager.png";
import { SearchOutlined } from "@ant-design/icons";
import ManagerSearchModal from "./ManagerSearchModal";
import { ManagerContext } from "../../../context/ManagerProvider";
import "./TimeWiseDisbursement.css";
import BillingListIndex from "./BillingList/BillingListIndex";

const circleColor: string[] = [
  "#FFD3D3",
  "#FFF5CC",
  "#E2FBD7",
  "#CCF8FE",
  "#CCDDFE",
];

const monthName: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const TimeWiseDisbursements = () => {

  const maxDim = 70;
  const minDim = 35;
  const [minDigit, setMinDigit] = useState<Number>();

  const [randomElement, setRandomElement] = useState<any>([]);
  const [newCircleColor, setNewCircleColor] = useState<any>([]);

  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

  const managerContext = useContext(ManagerContext);
  const { disbursementData, singleManager, totalDisbursed } = managerContext;

  const [dimensionValue, setDimensionValue] = useState<any>([]);
  const [isStt, setIsStt] = useState(true);
  const [isTts, setIsTts] = useState(false);

  const [isSttRoles, setIsSttRoles] = useState("Manager");
  const [isTtsRoles, setIsTtsRoles] = useState("Speaker");

  const initialData = {
    year: 2022,
    role: "Manager",
    type: "stt",
  };

  const [search, setSearch] = useState<any>(initialData);
  // const isSttRoles = [
  //     isSttManager, isSttTamLeader, isSttCollector, isSttSpeaker, isSttAudioChecker, isSttAnnotator, isSttValidator
  // ]

  const [minValue, setMinValue] = useState<number>();

  useEffect(() => {
    managerContext.getManagerDisbursement(search);
  }, [search]);

  const getRandomColor = () => {
    for (let i = circleColor.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [circleColor[i], circleColor[j]] = [circleColor[j], circleColor[i]];
    }

    return circleColor;
  };

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
    if (disbursementData?.yearData?.length > 0) {
      // getDimensionValue();
      getNewDimension();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disbursementData?.yearData]);

  console.log('........', minDigit)


  const onHandleStt = () => {
    setIsStt(true);
    setIsTts(false);
    setSearch({ ...search, role: "Manager", type: "stt" });
  };

  const onHandleTts = () => {
    setIsStt(false);
    setIsTts(true);
    setSearch({ ...search, role: "Speaker", type: "tts" });
  };

  const getNewDimension = () => {
    let _data = disbursementData?.yearData?.map((m: any) => {
      return m.amount;
    });

    const min = Math.min(..._data);
    const max = Math.max(..._data);



    const minValue = min;
    const maxValue = max;
    setMinDigit(min.toString().length)


    const ratio = (maxDim - minDim + 1) / (maxValue - minValue);

    const finalDimension = disbursementData?.yearData?.map((m: any) => {
      let dimension;

      if (m.amount === maxValue) {
        dimension = maxDim;
      }
      if (m.amount === minValue) {
        dimension = minDim;
      } else {
        dimension = (m.amount - minValue) * ratio + minDim;
      }
      return dimension / 16;
    });

    setDimensionValue(finalDimension);
  };

  const getDimensionValue = () => {
    let _data = disbursementData?.yearData?.map((m: any) => {
      return m.amount;
    });

    const min = Math.min(..._data);
    const max = Math.max(..._data);

    const firstDim = min;
    const maxDim = 70;
    const minDim = 35;
    const firstValue = min;
    const lastValue = max;
    // .1 = 1px
    const startPoint = 0.12;

    let findPercent = disbursementData?.yearData?.map((m: any) => {
      let finalDimension: any;

      // Solution 1
      // const percent = ((100 * m.amount) / lastValue);
      // if (percent <= minDim) {
      //     finalDimension = minDim;
      // } else {
      //     finalDimension = (maxDim * percent) / 100;
      // }

      // Solution 2
      if (m.amount === max) {
        finalDimension = maxDim;
      }
      if (m.amount === min) {
        finalDimension = minDim;
      }
      if ((m.amount < max && m.amount) >= max / 2) {
        const percent = (100 * m.amount) / lastValue;
        finalDimension = (maxDim * percent) / 100;
      }
      if (m.amount < max / 2 && min < m.amount) {
        const percent = (100 * m.amount) / lastValue;
        let dimension = (maxDim * percent) / 100;

        const _dimension = startPoint * dimension + minDim;
        finalDimension = _dimension;
      }

      return finalDimension / 16;
    });

    setDimensionValue(findPercent);
  };

  const handleSttRole = (value: string) => {
    if (value === "Manager") {
      setIsSttRoles(value);
      setSearch({ ...search, role: value, type: "stt" });
    }
    if (value === "Team Leader") {
      setIsSttRoles(value);
      setSearch({ ...search, role: value, type: "stt" });
    }
    if (value === "Collector") {
      setIsSttRoles(value);
      setSearch({ ...search, role: value, type: "stt" });
    }
    if (value === "Speaker") {
      setIsSttRoles(value);
      setSearch({ ...search, role: value, type: "stt" });
    }
    if (value === "Audio Checker") {
      setIsSttRoles(value);
      setSearch({ ...search, role: value, type: "stt" });
    }
    if (value === "Validator") {
      setIsSttRoles(value);
      setSearch({ ...search, role: value, type: "stt" });
    }
    if (value === "Annotator") {
      setIsSttRoles(value);
      setSearch({ ...search, role: value, type: "stt" });
    }
  };

  const handleTtsRole = (value: string) => {
    if (value === "Speaker") {
      setIsTtsRoles(value);
      setSearch({ ...search, role: value, type: "tts" });
    }
    if (value === "Audio Checker") {
      setIsTtsRoles(value);
      setSearch({ ...search, role: value, type: "tts" });
    }
    if (value === "Validator") {
      setIsTtsRoles(value);
      setSearch({ ...search, role: value, type: "tts" });
    }
    if (value === "Annotator") {
      setIsTtsRoles(value);
      setSearch({ ...search, role: value, type: "tts" });
    }
  };

  // const circleMouseOver = () => {
  //     console.log('on mouse over')
  // }
  //
  // const circleMouseleave = () => {
  //     console.log('on mouse leave')
  // }

  return (
    <div className='pb-[50px]'>
      <div className="h-[153px] relative ">
        {/*TTS STT Tab*/}
        <div className="flex flex-col justify-center items-center">
          <div className="h-[36px] w-[197px] rounded-[150px] bg-white flex justify-center items-center mt-[-17px] shadow-md">
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
                <img className="w-4 h-4" src={managerImage} alt="manager" />
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
                <img className="w-4 h-4" src={managerImage} alt="manager" />
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
            <h1 className="text-4 text-ct-blue-45 font-semibold mb-[25px]">
              Time wise disbursement
            </h1>
            {/*<div className={`grid grid-cols-12`}>*/}
            <div className="relative">
              <div className="flex justify-between w-full relative">
                {disbursementData?.yearData?.map((m: any, i: any) => (
                    <div key={m.id} className={`flex flex-col justify-center items-center mt-8 ${i===0 ? "pl-10":disbursementData.yearData.length -1 === i ? "pr-10":""}`}>
                    {/*<div key={m.id} className=" flex flex-col justify-center items-center ">*/}
                      <div className="flex items-center duration-300 absolute ">
                      {/*<div className="flex items-center duration-300">*/}
                        <div
                            className={`h-[2px] border border-dashed flex-1 rounded-tl-md rounded-bl-md bg-[#D1D3D6]`}
                        />
                        <div
                            // onMouseOver={() => setIsMouseOver(true)}
                            // onMouseLeave={() => setIsMouseOver(false)}

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
                            className={`relative z-20 text-sm font-medium  py-1 bg-[#CCDDFE] rounded-full flex justify-center items-center`}
                        >
                          {
                            // dimensionValue[i] - (30/16) >= (5/16) &&
                            !(m.amount.toString().length >= 3 && dimensionValue[i] < (40/16)) ?
                                <h1 className="text-[#453C38] text-[11px]">
                                  {m.amount}
                                </h1> : <h1></h1>
                          }
                        </div>
                        <div
                            className={`h-[2px] border border-dashed flex-1 rounded-tr-md rounded-br-md bg-[#D1D3D6]`}
                        />
                      </div>

                      <div key={m.id} className='absolute top-20 flex flex-col justify-center items-center h-[30px] mt-10'>
                        <div className='w-[1px] h-[4px] bg-blue-gray-A30'></div>
                        <h1>{m.month.slice(0, 3)}</h1>
                      </div>

                    </div>
                ))}
              </div>
              <div
                  className={`absolute top-[35px] z-10 h-[2px] border border-dashed w-full rounded-tr-md rounded-br-md bg-[#D1D3D6]`}
              />
            </div>


            {/*<div className='grid grid-cols-12 mt-8'>*/}
            {/*<div className='flex justify-between w-full mt-8 h-[30px] pl-8 pr-8'>*/}
            {/*    {*/}
            {/*        disbursementData?.yearData?.length !== 0 &&*/}
            {/*        disbursementData?.yearData?.map((m: any, i: any) => (*/}
            {/*                <div key={m.id} className='flex flex-col justify-center items-center '>*/}
            {/*                    <div className='w-[1px] h-[4px] bg-blue-gray-A30'></div>*/}
            {/*                    <h1>{m.month.slice(0, 3)}</h1>*/}
            {/*                </div>*/}
            {/*            )*/}
            {/*        )*/}
            {/*    }*/}
            {/*</div>*/}
          </div>

          <div className="w-[273px]">
            <div
                className="px-2 flex items-center h-[32px] border-none bg-blue-gray-10 hover:bg-blue-gray-40 rounded-[6px] gap-x-2"
                onClick={() => setShowModal(true)}
            >
              <SearchOutlined style={{ color: "#5F707F" }} />
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
            <div className="relative mt-[15px] w-full py-2 px-2 h-[140px] border-[1px] border-border-light-blue rounded-[4px]">
              <h1 className="text-ct-blue-45 text-[13px] font-medium">
                Total Amount Disbursed{" "}
              </h1>
              <div className="flex">
                <h1 className="mt-[9px] text-ct-blue-90-70% text-[14px] mr-[4px]">
                  BDT
                </h1>
                <h1 className="text-[32px] bg-gradient-to-r from-[#F405FE] via-[#136EE5] to-[#EAA678] text-transparent bg-clip-text">
                  {totalDisbursed.totalAmountsDisbursed}
                </h1>
              </div>

              <div className="absolute flex w-full h-[110px] top-6 left-2 justify-center items-start">
                <div className="w-[2px] h-[92px] rotate-[18deg] bg-gradient-to-r from-border-light via-green-10 to-border-light" />
              </div>

              <div className="absolute bottom-[2px] right-2 gap-y-0">
                <h1 className="text-ct-blue-90-70% text-[14px] ">Total Valid</h1>
                <span className="text-[32px] bg-gradient-to-r from-[#F405FE] via-[#136EE5] to-[#EAA678] text-transparent bg-clip-text">
                {totalDisbursed.totalValid}hr
              </span>
              </div>
            </div>
          </div>
        </div>

          <hr className="my-10 mt-20"/>

        <div className='w-[100%]'>
          <BillingListIndex />
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
