import React, { useEffect } from "react";
import Icons from "../../assets/Icons";
import { filterSelectsDT, targetFilterListDT } from "../../types/assignTypes";
import RoleImage from "../Image/RoleImage";

// type filterListDT = {
//     dataType: string[];
//     distributionSource: string[];
//     domain: string[];
//     subdomain: string[];
// };

type Props = {
    data: filterSelectsDT;
    isParent?: string;
    filterList: targetFilterListDT;
    placeHolder?: string;
    handleFilterList: (key: string, value: string) => void;
    handleDropdownAPICall?: (key: string) => void;
};

const Type7 = ({
    data,
    isParent,
    filterList,
    handleFilterList,
    handleDropdownAPICall,
    placeHolder
}: Props) => {
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if (handleDropdownAPICall && data.isFromAPI) {
            handleDropdownAPICall(data.key)
        }
    }, [data.isFromAPI, handleDropdownAPICall, data.key])

    return (
        <div className="relative w-80">
            <div className={`pt-2 px-2 pb-1.5 border ${open ? "border-secondary-blue-50" : "border-blue-gray-10"} rounded-[7px] bg-white inline-flex ${data.isParent && filterList[data.isParent].length === 0 ? "cursor-not-allowed" : ""}`}>
                <div className="w-72 pb-1 overflow-x-auto custom-scrollBar custom-scrollBar-height-5 flex items-center">
                    {filterList[data.key].length === 0 ? (
                        <button
                            onClick={() => data.isParent ? filterList[data.isParent].length > 0 && setOpen(!open) : setOpen(!open)}
                            className={`text-xs text-blue-gray-60 mb-0 py-0.5 w-full text-left ${data.isParent && filterList[data.isParent].length === 0 ? "cursor-not-allowed" : ""}`}
                        >
                            {placeHolder ? placeHolder : `Select one`}
                        </button>
                    ) : (
                        <>
                            {filterList[data.key].map((item: string, index: number) => (
                                <div key={index} className="flex items-center py-1 px-2 rounded-[4px] bg-ct-blue-20 mr-2 animate-fadeIn">
                                    <h5 className="text-xs text-blue-gray-80 font-medium mb-0 mr-1 whitespace-nowrap">
                                        {data.role && data.role === "speaker" ? (data.child && data.child.filter((single) => single === item).map((single) => single.split("-")[0] + " - " + single.split("-")[1])) : (data.child && data.child.filter((single) => single.split("-")[1] === item)[0])}
                                    </h5>
                                    <button
                                        onClick={() => handleFilterList(data.key, item)}
                                        className="p-0.5 bg-white rounded-[3px] w-3 h-3 hover:bg-ct-blue-10 active:bg-ct-blue-30"
                                    >
                                        <img src={Icons.CloseIconButton} alt="" className="" />
                                    </button>
                                </div>
                            ))}
                        </>
                    )}
                </div>
                <button className={`p-0.5 ${data.isParent && filterList[data.isParent].length === 0 ? "cursor-not-allowed" : ""}`} onClick={() => data.isParent ? filterList[data.isParent].length > 0 && setOpen(!open) : setOpen(!open)}>
                    <img
                        src={Icons.arrow_drop_down_blue_gray}
                        alt=""
                        className={`ml-2 ${open ? "rotate-180" : "rotate-0"} duration-200`}
                    />
                </button>
            </div>
            <div className={`bg-transparent ${open ? "block" : "hidden"} z-40 w-full h-full fixed top-0 left-0`} onClick={() => setOpen(!open)} />
            <div
                className={`absolute z-50 animate-fadeIn py-1.5 bg-white w-full rounded-[8px] shadow-bottom-light-blue-20 top-14 max-h-72 overflow-y-auto ${open ? "block" : "hidden"
                    }`}
            >
                {isParent ? (
                    <>
                        {filterList[isParent]?.length > 0
                            ? filterList[isParent].map((parentName, index) => (
                                <div key={index} className="flex flex-col">
                                    <h5 className="mb-0 text-xxs text-blue-gray-60 py-3 px-4">
                                        {parentName}
                                    </h5>
                                    {data.children &&
                                        data.children.filter((item) => item.title === parentName)[0]
                                            .child.map((childrenItem, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => handleFilterList(data.key, childrenItem)}
                                                    className={`flex items-center justify-between py-3 pl-8 pr-4 w-full ${filterList[data.key].includes(childrenItem)
                                                        ? "bg-blue-10 hover:bg-blue-20 active:bg-blue-30"
                                                        : "hover:bg-ct-blue-05 active:bg-ct-blue-10"
                                                        }`}
                                                >
                                                    <span className="text-xs font-medium text-blue-gray-80">
                                                        {childrenItem}
                                                    </span>
                                                    {filterList[data.key].includes(childrenItem) && (
                                                        <img src={Icons.CorrectIcon} alt="" />
                                                    )}
                                                </button>
                                            ))}
                                </div>
                            ))
                            : isParent === "none" ?
                                <>
                                    {data.children && data.children.map((item, index: number) => (
                                        <div key={index} className="flex flex-col">
                                            <h5 className="mb-0 text-xxs text-blue-gray-60 py-3 px-4">
                                                {item.title}
                                            </h5>
                                            {item.child.map((childrenItem, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => handleFilterList(data.key, childrenItem)}
                                                    className={`flex items-center justify-between py-3 pl-8 pr-4 w-full ${filterList[data.key].includes(childrenItem)
                                                        ? "bg-blue-10 hover:bg-blue-20 active:bg-blue-30"
                                                        : "hover:bg-ct-blue-05 active:bg-ct-blue-10"
                                                        }`}
                                                >
                                                    <span className="text-xs font-medium text-blue-gray-80">
                                                        {childrenItem}
                                                    </span>
                                                    {filterList[data.key].includes(childrenItem) && (
                                                        <img src={Icons.CorrectIcon} alt="" />
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    ))}
                                </> : null}
                    </>
                ) : (
                    <>
                        {data.child && data.child.map((item: string, index: number) => (
                            <button
                                key={index}
                                onClick={() => handleFilterList(data.key, data.role && data.role === "speaker" ? item : item.split("-")[1])}
                                className={`flex items-center justify-start py-3 px-4 w-full ${filterList[data.key].filter((singleItem) => item === singleItem).length > 0
                                    ? "bg-blue-10 hover:bg-blue-20 active:bg-blue-30"
                                    : "hover:bg-ct-blue-05 active:bg-ct-blue-10"
                                    }`}
                            >
                                {data.role && (data.role === "speaker" ? <RoleImage role={item.split(" - ")[2] === "male" ? "speaker" : "speakerFemale"} height="h-4" width="w-4" /> : <RoleImage role={data.role} height="h-4" width="w-4" />)}
                                <span className="text-small text-left font-medium text-blue-gray-80 ml-1.5">
                                    {/* {item.split("-")[0]} */}
                                    {data.role && (data.role === "speaker" ? item.split("-")[0] + "-" + item.split("-")[1] : item)}
                                </span>
                                {/* {filterList[data.key].includes(item) && (
                                    <img src={Icons.CorrectIcon} alt="" />
                                )} */}
                            </button>
                        ))}
                    </>
                )}
            </div>
        </div >
    );
};

export default Type7;
