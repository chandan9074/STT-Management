import React, { useEffect } from 'react'
import { divisionDT, filterSelectsDT, targetFilterDT, targetFilterListDT } from '../../types/assignTypes';
import Icons from '../../assets/Icons';
import RoleImage from '../Image/RoleImage';

type Props = {
    data: targetFilterDT;
    isParent?: string | undefined;
    filterList: targetFilterListDT;
    placeHolder?: string;
    handleFilterList: (key: string, value: string) => void;
};

const Type10 = ({
    data,
    isParent,
    filterList,
    handleFilterList,
    placeHolder
}: Props) => {
    const [open, setOpen] = React.useState(false);
    const [openPanel, setOpenPanel] = React.useState<number[]>([]);

    return (
        <div className="relative w-80">
            <div className="pt-3 px-3 pb-2 border border-blue-gray-10 rounded-[7px] bg-white inline-flex">
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
                </div>
                <button className="p-0.5" onClick={() => setOpen(!open)}>
                    <img
                        src={Icons.arrow_drop_down_blue_gray}
                        alt=""
                        className={`ml-2 ${open ? "rotate-180" : "rotate-0"} duration-200`}
                    />
                </button>
            </div>
            <div className={`bg-transparent ${open ? "block" : "hidden"} z-40 w-full h-full fixed top-0 left-0`} onClick={()=> setOpen(!open)} />
            <div
                className={`absolute z-50 animate-fadeIn py-1.5 bg-white w-full rounded-[8px] shadow-bottom-light-blue-20 top-14 max-h-72 overflow-y-auto ${open ? "block" : "hidden"
                    }`}
            >
                {data.divisions && data.divisions.map((item: divisionDT, index: number) => (
                    <>
                        <button onClick={() => openPanel.includes(index) ? setOpenPanel(openPanel.filter((item) => item !== index)) : setOpenPanel([...openPanel, index])} className='bg-blue-gray-05 w-full flex items-center justify-between px-4 py-1.5'>
                            <span className='text-blue-gray-60 text-xxs'>{item.division}</span>
                            {openPanel.includes(index) ? (<img
                                src={Icons.dark_right_arrow}
                                alt=""
                                className="animate-fadeIn p-0.5 rounded-full border border-transparent hover:bg-white transition-all duration-300 ease-out active:bg-blue-gray-A10"
                            />
                            ) : (
                                <img
                                    src={Icons.dark_up_arrow}
                                    alt=""
                                    className="animate-fadeIn p-0.5 rounded-full border border-transparent hover:bg-white transition-all duration-300 ease-out active:bg-blue-gray-A10"
                                />
                            )}
                        </button>
                        <div className={`overflow-hidden ${openPanel.includes(index) ? "h-0" : "h-full"}`}>
                            {item.district.map((singleItem, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleFilterList(data.key, singleItem)}
                                    className={`flex items-center justify-between py-3 px-4 w-full ${filterList[data.key].includes(singleItem)
                                        ? "bg-blue-10 hover:bg-blue-20 active:bg-blue-30"
                                        : "hover:bg-ct-blue-05 active:bg-ct-blue-10"
                                        }`}
                                >
                                    <span className="text-xs font-medium text-blue-gray-80">
                                        {singleItem}
                                    </span>
                                    {filterList[data.key].includes(singleItem) && (
                                        <img src={Icons.CorrectIcon} alt="" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default Type10;