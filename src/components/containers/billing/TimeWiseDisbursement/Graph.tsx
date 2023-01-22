import React from 'react';
import { getDateWithMonthName } from "../../../../helpers/Utils";
import { CaretDownOutlined, CloseOutlined } from "@ant-design/icons";
import CustomRangeCalender, { DateDT } from "../../../calender/CustomRangeCalender";
import { timeWiseYearDT } from "../../../../types/billingTypes";
import Icons from "../../../../assets/Icons";
import './Graph.css';

interface Props {
    dateValue: DateDT;
    onDateClose: () => void;
    onDateSearch: () => void;
    disbursementData: timeWiseYearDT[] | undefined;
    open: boolean;
    dimensionValue: number[];
    setDateValue: React.Dispatch<
        React.SetStateAction<{
            start: string;
            end: string;
        }>
    >;

    setOpen: React.Dispatch<
        React.SetStateAction<boolean>
    >;
}
const Graph = ({ dateValue, onDateClose, onDateSearch, disbursementData, open, setOpen, setDateValue, dimensionValue }: Props) => {
    return (
        <div className="col-span-3 h-[140px]">
            <div className="flex justify-between">
                <h1 className="text-4 text-ct-blue-45 font-semibold mb-[25px]">
                    Time wise disbursement
                </h1>

                {
                    (dateValue?.start && dateValue?.end) ?
                        <button
                            className="duration-200 rounded-[6px] flex px-4 items-center gap-x-3 bg-ct-blue-20 h-8 hover:bg-ct-blue-30"
                        >
                            <h1 className="text-ct-blue-60 text-[13px] font-semibold">
                                {getDateWithMonthName(dateValue?.start)} - {getDateWithMonthName(dateValue?.end)}
                            </h1>
                            <div onClick={onDateClose}>
                                <CloseOutlined
                                    style={{ color: '#2C79BE', height: '10px', width: '10px' }}
                                />
                            </div>
                        </button>
                        :
                        <button
                            onClick={onDateSearch}
                            className="duration-200 rounded-[6px] focus:bg-ct-blue-20 hover:bg-ct-blue-10 flex px-4 items-center gap-x-3 bg-default h-8"
                        >
                            <h1 className="text-ct-blue-90 text-[13px]">
                                {/* 2022 */}
                                {disbursementData ? disbursementData[0]?.year : ""}
                            </h1>
                            <div className="">
                                <CaretDownOutlined
                                    style={{ color: `${open ? 'black' : '#9099A1'}`, width: '12px', height: '6px' }}
                                />
                            </div>
                        </button>
                }
            

            </div>
            <CustomRangeCalender trigger={open} setOpen={setOpen} setDateValue={setDateValue} />
            <div className="relative">
                <div className="flex justify-between w-full relative px-10">
                    {disbursementData?.map((m: timeWiseYearDT, i: number) => (
                        <div
                            key={m?.id}
                            className={`relative flex ${disbursementData?.length === 12
                                ? i < 2
                                    ? "justify-start"
                                    : "justify-center"
                                : disbursementData?.length > 12
                                    ? i < Math.round((2 * disbursementData?.length) / 12)
                                        ? "justify-start"
                                        : "justify-center"
                                    : disbursementData?.length < 12
                                        ? i === 0
                                            ? "justify-start"
                                            : "justify-center"
                                        : ""
                                } group`}
                        >
                            <div
                                style={{
                                    bottom: `${170 / 16 + dimensionValue[i] / 2}rem`,
                                }}
                                className={`absolute animate-fadeIn2 z-40 w-[350px] hidden  group-hover:block bg-[#59C1BD] ${disbursementData?.length === 12
                                    ? i < 2
                                        ? "-left-10"
                                        : ""
                                    : disbursementData?.length > 12
                                        ? i < Math.round((2 * disbursementData?.length) / 12)
                                            ? "-left-10"
                                            : ""
                                        : disbursementData?.length < 12
                                            ? i === 0
                                                ? "-left-10"
                                                : ""
                                            : ""
                                    }`}
                            >
                                <div className="rounded-[12px] px-5 py-4 bg-[#212121] absolute">
                                    <div className="flex items-center">
                                        <h1 className="text-base text-white mb-0 flex mr-4">
                                            Disbursed:
                                            <span className="font-bold flex ml-2">
                                                <span className="mr-1.5">BDT</span>{" "}
                                                {m?.totalAmount}
                                            </span>
                                        </h1>
                                        <h1 className="text-base text-white mb-0 flex">
                                            Valid:
                                            <span className="font-bold flex ml-2">
                                                {m?.totalHours}
                                            </span>
                                        </h1>
                                    </div>

                                    <div className="mt-4 flex justify-between w-[300px] bg-winter-wizard bg-opacity-25 py-1.5 px-2 rounded-[4px]">
                                        <h3 className="flex items-center text-winter-wizard text-base font-medium mb-0">
                                            <span className="mr-1">
                                                {m?.disbursed[0]?.day
                                                    ? m?.disbursed[0]?.day
                                                    : "00"}

                                            </span>
                                            {
                                                (dateValue?.start && dateValue?.end) &&
                                                <span className='mr-1'>
                                                    {m?.year}
                                                </span>
                                            }
                                            <span></span>
                                        </h3>
                                        <h3 className="flex items-center text-winter-wizard text-base font-medium mb-0">
                                            <span className="mr-1">
                                                {m?.disbursed[0]?.hours
                                                    ? m?.disbursed[0]?.hours
                                                    : "0"}
                                            </span>
                                            hr
                                        </h3>
                                        <h3 className="flex items-center text-winter-wizard text-base font-medium mb-0">
                                            {m?.disbursed[0]?.amount
                                                ? m?.disbursed[0]?.amount
                                                : "0"}{" "}
                                            / -
                                        </h3>
                                    </div>

                                    <div className="mt-0.5 flex justify-between w-[300px] bg-blue-gray-85 py-1.5 px-2 rounded-[4px]">
                                        <h3 className="flex items-center text-green-A10 text-base font-medium mb-0">
                                            <span className="mr-1">
                                                {m?.disbursed[1]?.day
                                                    ? m?.disbursed[1]?.day
                                                    : "00"}
                                            </span>
                                            {
                                                (dateValue?.start && dateValue?.end) &&
                                                <span className='mr-1'>
                                                    {m?.year}
                                                </span>
                                            }
                                        
                                        </h3>
                                        <h3 className="flex items-center text-green-A10  text-base font-medium mb-0">
                                            <span className="mr-1">
                                                {m?.disbursed[1]?.hours
                                                    ? m?.disbursed[1]?.hours
                                                    : "0"}
                                                s
                                            </span>
                                            hr
                                        </h3>
                                        <h3 className="flex items-center text-green-A10  text-base font-medium mb-0">
                                            {m?.disbursed[1]?.amount
                                                ? m?.disbursed[1]?.amount
                                                : "0"}{" "}
                                            / -
                                        </h3>
                                    </div>
                                </div>

                                <img
                                    src={Icons.blackDropArrow}
                                    alt=""
                                    className={`w-10 h-6 absolute top-[8.5rem] ${disbursementData?.length === 12
                                        ? i < 2
                                            ? "left-5"
                                            : "left-1/2 transform -translate-x-1/2"
                                        : disbursementData?.length > 12
                                            ? i <
                                                Math.round((2 * disbursementData?.length) / 12)
                                                ? "left-5"
                                                : "left-1/2 transform -translate-x-1/2"
                                            : disbursementData?.length < 12
                                                ? i === 0
                                                    ? "left-5"
                                                    : "left-1/2 transform -translate-x-1/2"
                                                : ""
                                        }`}
                                />
                            </div>

                            <div
                                key={m.id}
                                className={`flex flex-col justify-center items-center mt-8 `}
                            >
                                <div className="flex items-center duration-300 absolute ">
                                    <div
                                        className={`h-[2px] border border-dashed flex-1  rounded-tl-md rounded-bl-md bg-[#D1D3D6]`}
                                    />
                                    <div
                                        style={{
                                            height: `${dimensionValue[i]}rem`,
                                            width: `${dimensionValue[i]}rem`,
                                            backgroundColor: `${i % 3 === 0
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
                                  
                                        className={`relative z-20 text-sm font-medium  py-1 bg-[#CCDDFE] rounded-full flex justify-center items-center border-[2px]  ${i % 3 === 0
                                            ? "shadow-light-tomato-4 border-[#E5BEBE] hover:shadow-light-tomato"
                                            : i % 4 === 0
                                                ? "border-[#E8DFBA] hover:shadow-light-periwinkle shadow-light-periwinkle-4"
                                                : i % 5 === 0
                                                    ? "border-[#D1E8C7] hover:shadow-light-onahau shadow-light-onahau-4 "
                                                    : i % 2 === 0
                                                        ? "border-[#BAE3E8] hover:shadow-light-onahau shadow-light-onahau-4"
                                                        : "border-[#BACAE8] hover:shadow-light-yellow shadow-light-yellow-4"
                                            }  hover:border-[white] transition duration-4000 ease-out hover:ease-in`}
                                    >
                                        {
                                            !(
                                                m.totalAmount.toString().length > 3 &&
                                                dimensionValue[i] < 45 / 16
                                            ) ? (
                                                <h1 className="text-[#453C38] text-[11px]">
                                                    {m.totalAmount}
                                                </h1>
                                            ) : (
                                                <h1>{ }</h1>
                                            )
                                        }
                                    </div>
                                    <div
                                        className={`h-[2px] border border-dashed flex-1 rounded-tr-md rounded-br-md bg-[#D1D3D6]`}
                                    />
                                </div>

                                <div
                                    key={m.id}
                                    className="absolute top-20 flex flex-col justify-center items-center h-[30px] mt-10"
                                >
                                    <div className="w-[1px] h-[4px] bg-blue-gray-A30"></div>
                                    <h1 className='text-[13px] text-ct-blue-45'>{m.month.slice(0, 3)}</h1>
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

    );
};

export default Graph;