import React from "react";
import Icons from "../../assets/Icons";
import { targetFilterListDT } from "../../types/assignTypes";
import { targetFilterDT } from "../../types/assignTypes";

// type filterListDT = {
//     dataType: string[];
//     distributionSource: string[];
//     domain: string[];
//     subdomain: string[];
// };

type Props = {
    data: targetFilterDT;
    isParent?: string | undefined;
    filterList: targetFilterListDT;
    placeHolder?: string;
    handleFilterList: (key: string, value: string) => void;
};

const Type5 = ({
    data,
    isParent,
    filterList,
    handleFilterList,
    placeHolder
}: Props) => {
    const [open, setOpen] = React.useState(false);
    // console.log("singledata....", data)
    return (
        <div className="relative w-80">
            <div className={`pt-2 px-2 pb-1.5 border ${open ? "border-secondary-blue-50" : "border-blue-gray-10"} rounded-[7px] bg-white inline-flex`}>
                <div className="w-72 pb-1 overflow-x-auto custom-scrollBar custom-scrollBar-height-5 flex items-center">
                    {filterList[data.key].length === 0 ? (
                        <button
                            onClick={() => setOpen(!open)}
                            className="text-xs text-blue-gray-60 mb-0 py-0.5 w-full text-left"
                        >
                            {placeHolder ? placeHolder : "Select One"}
                        </button>
                    ) : (
                        <>
                            {filterList[data.key].map((item: string, index: number) => (
                                <div key={index} className="flex items-center py-1 px-2 rounded-[4px] bg-ct-blue-20 mr-2 animate-fadeIn">
                                    <h5 className="text-xs text-blue-gray-80 font-medium mb-0 mr-1 whitespace-nowrap">
                                        {item}
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
                    {/* ) : (
                        <>
                            {filterList[data.key].length === 0 ? (
                                <button
                                    onClick={() => setOpen(!open)}
                                    className="text-xs text-blue-gray-60 mb-0 py-0.5 w-full text-left"
                                >
                                    Select One
                                </button>
                            ) : (
                                <>
                                    {filterList[data.key].map((item: any, index: number) => (
                                        <div key={index} className="flex items-center py-1 px-2 rounded-[4px] bg-ct-blue-20 mr-2 animate-fadeIn">
                                            <h5 className="text-xs text-blue-gray-80 font-medium mb-0 mr-1 whitespace-nowrap">
                                                {item}
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
                        </>
                    )} */}
                    {/* <h5 className="text-xs text-blue-gray-60 mb-0">Select One</h5> */}
                </div>
                <button className="p-0.5" onClick={() => setOpen(!open)}>
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
                                onClick={() => handleFilterList(data.key, item)}
                                className={`flex items-center justify-between py-3 px-4 w-full ${filterList[data.key].includes(item)
                                    ? "bg-blue-10 hover:bg-blue-20 active:bg-blue-30"
                                    : "hover:bg-ct-blue-05 active:bg-ct-blue-10"
                                    }`}
                            >
                                <span className="text-xs font-medium text-blue-gray-80">
                                    {item}
                                </span>
                                {filterList[data.key].includes(item) && (
                                    <img src={Icons.CorrectIcon} alt="" />
                                )}
                            </button>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default Type5;
