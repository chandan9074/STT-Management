import { useState } from "react";
import Icons from "../../assets/Icons";
import { targetFilterDT, targetFilterListDT } from "../../types/assignTypes";
import Buttons from "../Buttons";
import Dropdown from "../Dropdown";
import type { DatePickerProps } from 'antd';
import CustomCalenderInpField from "../calender/CustomCalenderInpField";

type Props = {
    filterData: targetFilterDT[];
    align?: "center" | "left" | "right";
    // current: string;
    // filterList: targetFilterDT;
    count: number;
    // handleClear: () => void;
    // handleFilter: (value: string, sector: string) => void;
    popupClassName?: string;
    filterList: targetFilterListDT;
    handleReset: (key: string, type: "single" | "all") => void;
    handleFilterList: (key: string, value: string) => void;
    handleSubmitFilter: () => void;
}

const Type2 = ({ filterData, align, count, filterList, handleReset, handleFilterList, handleSubmitFilter, popupClassName }: Props) => {
    const [open, setOpen] = useState(false);
    const [currentState, setCurrentState] = useState<string>(filterData[0]?.key);
    console.log("filterList", filterList)

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <div className={`relative flex ${align === "left" ? `justify-start` : align === "center" ? "justify-center" : "justify-end"}`}>
            <div className="relative z-[90]">
                <Buttons.Filter label="Filter" count={count} onClick={() => setOpen(!open)} />
            </div>
            {open && (
                <div
                    onClick={() => setOpen(!open)}
                    className="bg-transparent fixed top-0 left-0 w-full h-full z-[80] animate-fadeIn"
                />
            )}
            {open && (
                <div className="border border-blue-gray-30 rounded-[8px] shadow-light-blue-2 absolute z-[80] top-10 bg-white min-w-[472px] max-w-[500px] animate-fadeIn">
                    <div className="pt-4 pb-2 px-5 w-full flex justify-between items-center">
                        <h3 className="text-base font-medium text-ct-blue-90-68% mb-0">
                            Filter
                        </h3>
                        <div className="flex gap-x-2 animate-fadeIn">
                            {count > 0 && (<><Buttons.LabelButton.Primary onClick={() => { handleSubmitFilter(); setOpen(!open) }} label="Apply" size="xSmall" variant="CT-Blue" />
                                <Buttons.LabelButton.Tertiary label="Clear" size="xSmall" variant="CT-Blue" onClick={() => handleReset("", "all")} /></>)}
                            <button onClick={() => setOpen(!open)}>
                                <img src={Icons.CloseIconButton} alt="" />
                            </button>
                        </div>
                    </div>
                    {filterData.map((item, dataIndex) => (
                        <div
                            key={dataIndex}
                            className={`px-5 duration-200 ${currentState === item.key ? "bg-blue-gray-05" : "bg-white"} ${dataIndex === filterData.length - 1 && "mb-3"}`}
                        >
                            <div className="flex items-center justify-between py-2 w-full">
                                <button
                                    onClick={() => currentState === item.key ? setCurrentState("") : setCurrentState(item.key)}
                                    className="flex items-center w-full mr-5"
                                >
                                    {currentState === item.key ? (
                                        <img
                                            src={Icons.dark_up_arrow}
                                            alt=""
                                            className="animate-fadeIn"
                                        />
                                    ) : (
                                        <img
                                            src={Icons.dark_right_arrow}
                                            alt=""
                                            className="animate-fadeIn"
                                        />
                                    )}
                                    <h6 className="text-small text-blue-gray-80 font-medium mb-0 ml-2 flex items-center">
                                        <span className="whitespace-nowrap">{item.title}</span>
                                        {filterList[item.key]?.length > 0 &&
                                            currentState !==
                                            item.key && (
                                                <h6 className="flex text-left w-72 selected-items">
                                                    {filterList[item.key].map((singleItem, index) => (
                                                        <span
                                                            key={index}
                                                            className={`animate-fadeIn text-xs font-medium text-ct-blue-60 whitespace-nowrap ${index === 0 ? "ml-3" : "ml-1"
                                                                }`}
                                                        >
                                                            {singleItem}
                                                            {filterList[item.key].length -
                                                                1 !==
                                                                index && ","}
                                                        </span>
                                                    ))}
                                                </h6>
                                            )}
                                    </h6>
                                </button>
                                {currentState ===
                                    item.key && (
                                        <button onClick={() => handleReset(item.key, "single")} className="text-xxs font-medium text-ct-blue-60 animate-fadeIn">
                                            Reset
                                        </button>
                                    )}
                            </div>
                            {item.type === "check" ? <div className={`flex flex-wrap items-center gap-2 pb-5 pt-3 animate-fadeIn ${currentState === item.key ? "block" : "hidden"}`}>
                                {item.child && item.child.map((singleItem: string, index: number) => (
                                    <button
                                        key={index}
                                        onClick={() => handleFilterList(item.key, singleItem)}
                                        className={`py-1.5 px-3 whitespace-nowrap flex items-center border rounded-full duration-200 mb-0 text-small font-medium text-blue-gray-75 ${filterList[item.key].includes(singleItem)
                                            ? "bg-secondary-blue-50 bg-opacity-[0.12] border-secondary-blue-50"
                                            : "border-white bg-white"
                                            }`}
                                    >
                                        {filterList[item.key].includes(singleItem) && (
                                            <img src={Icons.CorrectIcon} alt="" className="w-[14px] h-[14px] mr-1.5 animate-fadeIn" />
                                        )}
                                        {singleItem}
                                    </button>
                                ))}
                            </div>
                                : item.type === "select" ?
                                    <div
                                        className={`pt-3 pb-5  animate-fadeIn ${currentState === item.key
                                            ? "block"
                                            : "hidden"
                                            }`}
                                    >
                                        <Dropdown.Type5
                                            data={item}
                                            isParent={item.isParent}
                                            filterList={filterList}
                                            handleFilterList={handleFilterList}
                                        // subdomainData={filterData["subDomain"]}
                                        />
                                    </div> : item.type === "date" ?
                                        <div className={`${currentState === item.key ? "block" : "hidden"}`}>
                                            <CustomCalenderInpField
                                                data={item}
                                                isParent={item.isParent}
                                                filterList={filterList}
                                                handleFilterList={handleFilterList}
                                                popupClassName={popupClassName}
                                            />
                                        </div> : null}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Type2