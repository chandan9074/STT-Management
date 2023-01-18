import React, { useContext, useEffect, useState } from "react";
import RoleSearchModal from "./RoleSearchModal";
import { RoleInContext } from "../../../../context/RoleProvider";
import "./TimeWiseDisbursement.css";
import {
    timeWiseDisbursementParamsDT,
    timeWiseYearDT,
} from "../../../../types/billingTypes";
import {
    DateDT,
} from "../../../calender/CustomRangeCalender";
import BillingListIndex from "../BillingList";
import { getYearMonthDate } from "../../../../helpers/Utils";
import { LoadingSkeleton } from "../../../../assets/loadingSkeleton";
import Buttons from "../../../Buttons";
import { CommonContext } from "../../../../context/CommonProvider";
import GraphHeader from "./GraphHeader";
import TotalDisbursed from "../../dashboard/DataContainer/Graphs/RecordingDistance/TotalDisbursed";
import Graph from "./Graph";


const TimeWiseDisbursements = () => {
    const maxDim = 70;
    const minDim = 35;

    const managerContext = useContext(RoleInContext);
    const { disbursementData, totalDisbursed, loading } = managerContext;

    const [dateValue, setDateValue] = useState<DateDT>({ start: "", end: "" });


    const [open, setOpen] = useState<boolean>(false);

    const [dimensionValue, setDimensionValue] = useState<number[]>([]);
    const [isStt, setIsStt] = useState(true);
    const [isTts, setIsTts] = useState(false);

    const [isSttRoles, setIsSttRoles] = useState("Manager");
    const [isTtsRoles, setIsTtsRoles] = useState("Speaker");

    const [showToggle, setShowToggle] = useState(false);

    const commonContext = useContext(CommonContext);

    const onOpenModal = () => {
        setShowModal(true);
    }

    const handleType = (value: string) => {
        commonContext.handleModuleType(value);
        if (value === "STT") {

            setIsStt(true);
            setIsTts(false);
            setSearch({ ...search, role: isSttRoles, module: "stt" });
        }
        else {

            setIsStt(false);
            setIsTts(true);
            setSearch({ ...search, role: isTtsRoles, module: "tts" });
        }
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 250) {
                // setShadow(true);
                setShowToggle(true);
            } else {
                // setShadow(false);
                setShowToggle(false);
            }
        };
        window.addEventListener("scroll", handleShadow);
    });

    const initialData = {
        role: "Manager",
        module: "stt",
        start: "",
        end: "",
    };

    const [search, setSearch] =
        useState<timeWiseDisbursementParamsDT>(initialData);

    useEffect(() => {
        managerContext.getManagerDisbursement(search);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    useEffect(() => {
        if (dateValue?.start && dateValue?.end) {

            const _start = getYearMonthDate(dateValue?.start);
            const _end = getYearMonthDate(dateValue?.end);

            setSearch({ ...search, start: _start, end: _end });
        }
    }, [dateValue]);

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
        if (disbursementData) {
            if (disbursementData.length > 0) {
                // getDimensionValue();
                getNewDimension();
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [disbursementData]);

    const handleModal = (value: boolean) => {
        setShowModal(value);
    };

    const onHandleStt = () => {
        setIsStt(true);
        setIsTts(false);
        setSearch({ ...search, role: isSttRoles, module: "stt" });
    };

    const onHandleTts = () => {
        setIsStt(false);
        setIsTts(true);
        setSearch({ ...search, role: isTtsRoles, module: "tts" });
    };

    const getNewDimension = () => {
        let _data = disbursementData?.map((m: timeWiseYearDT) => {
            return m.totalAmount;
        });

        if (_data) {
            const min = Math.min(..._data);
            const max = Math.max(..._data);

            const minValue = min;
            const maxValue = max;

            const ratio = (maxDim - minDim + 1) / (maxValue - minValue);

            const finalDimension = disbursementData?.map((m: timeWiseYearDT) => {
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

            if (finalDimension) {
                setDimensionValue(finalDimension);
            }
        }
    };

    const handleSttRole = (value: string) => {
        if (value === "Manager") {
            setIsSttRoles(value);
            setSearch({ ...search, role: value, module: "stt" });
        }
        if (value === "Team Leader") {
            setIsSttRoles(value);
            setSearch({ ...search, role: value, module: "stt" });
        }
        if (value === "Collector") {
            setIsSttRoles(value);
            setSearch({ ...search, role: value, module: "stt" });
        }
        if (value === "Speaker") {
            setIsSttRoles(value);
            setSearch({ ...search, role: value, module: "stt" });
        }
        if (value === "Audio Checker") {
            setIsSttRoles(value);
            setSearch({ ...search, role: value, module: "stt" });
        }
        if (value === "Validator") {
            setIsSttRoles(value);
            setSearch({ ...search, role: value, module: "stt" });
        }
        if (value === "Annotator") {
            setIsSttRoles(value);
            setSearch({ ...search, role: value, module: "stt" });
        }
    };

    const handleTtsRole = (value: string) => {
        if (value === "Speaker") {
            setIsTtsRoles(value);
            setSearch({ ...search, role: value, module: "tts" });
        }
        if (value === "Audio Checker") {
            setIsTtsRoles(value);
            setSearch({ ...search, role: value, module: "tts" });
        }
        if (value === "Validator") {
            setIsTtsRoles(value);
            setSearch({ ...search, role: value, module: "tts" });
        }
        if (value === "Annotator") {
            setIsTtsRoles(value);
            setSearch({ ...search, role: value, module: "tts" });
        }
    };

    const onDateSearch = () => {
        setOpen(!open);
    };

    const onDateClose = () => {
        setDateValue({ start: '', end: '' });
        setSearch({ ...search, start: '', end: '' });
    }

    return (

        <div className="pb-2">

            <div className="h-[120px] relative ">
                {/*TTS STT Tab*/}
                <div className={`flex flex-col justify-center items-center -mt-6 ${showToggle ? "hidden" : "block"}`}>

                    <Buttons.ToggleRounded
                        first="STT"
                        second="TTS"
                        active={commonContext.type}
                        handleType={handleType}
                    />

                </div>
                <GraphHeader
                    isStt={isStt}
                    sttRoles={sttRoles}
                    handleSttRole={handleSttRole}
                    isSttRoles={isSttRoles}
                    isTts={isTts}
                    ttsRoles={ttsRoles}
                    handleTtsRole={handleTtsRole}
                    isTtsRoles={isTtsRoles}
                />
            </div>

            {
                loading ?
                    <div className="">
                        <img className="w-full" src={LoadingSkeleton.timeWiseDisbursement} alt="" />
                    </div> : <div className="p-10 bg-white shadow-md rounded-[8px] ">
                        <div className="grid grid-cols-4 gap-x-14">

                            <Graph
                                dateValue={dateValue}
                                onDateClose={onDateClose}
                                onDateSearch={onDateSearch}
                                disbursementData={disbursementData}
                                open={open}
                                setOpen={setOpen}
                                setDateValue={setDateValue}
                                dimensionValue={dimensionValue}
                            />

                            <TotalDisbursed
                                onOpenModal={onOpenModal}
                                search={search}
                                totalDisbursed={totalDisbursed}
                            />


                        </div>

                        <hr className="my-10 mt-20" />

                        <div className="w-[100%]">
                            <BillingListIndex twDisbursement={search} />
                        </div>
                    </div>
            }



            {showModal ? (
                <RoleSearchModal
                    // setShowModal={setShowModal}
                    handleModal={handleModal}
                    role={search?.role}
                    type={search?.module}
                />
            ) : null}
        </div>
    );
};

export default TimeWiseDisbursements;