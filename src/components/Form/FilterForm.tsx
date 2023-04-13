import React from 'react'
import { targetFilterDT, targetFilterListDT } from '../../types/assignTypes'
import { Checkbox } from '@mui/material';
import Icons from '../../assets/Icons';
import Dropdown from '../Dropdown';

type Props = {
    data: targetFilterDT;
    filterList: targetFilterListDT;
    handleFilterList: (key: string, value: string) => void;
}

const FilterForm = ({ data, filterList, handleFilterList }: Props) => {
    return (
        <div>
            {data.formData && data.formData.map((item, index) => (
                <>
                    {item.type === "checkbox" ?
                        <div className='flex items-center'>
                            <h3 className='text-xs font-medium text-blue-gray-75 mr-3 mb-0'>{item.title}</h3>
                            {item.child && item.child.map((singleChild, index) => (
                                <div className='flex items-center'>
                                    <Checkbox size="small" checked={item.key && filterList[item.key].includes(singleChild) ? true : false} onChange={() => item.key && handleFilterList(item.key, singleChild)} />
                                    <h5 className={`text-xs ${item.key && filterList[item.key].includes(singleChild) ? "text-ct-blue-60" : "text-blue-gray-75"} mb-0`}>{singleChild}</h5>
                                </div>
                            ))}
                        </div> : item.type === "check" ?
                            <div className='mt-2.5'>
                                <h3 className='text-xs font-medium text-blue-gray-75 mr-3 mb-0'>{item.title}</h3>
                                <div className='flex flex-wrap gap-2 mt-2'>
                                    {item.child && item.child.map((singleItem: string, index: number) => (
                                        <button
                                            key={index}
                                            onClick={() => item.key && handleFilterList(item.key, singleItem)}
                                            className={`py-1.5 px-3 whitespace-nowrap flex items-center border rounded-full duration-200 mb-0 text-small font-medium text-blue-gray-75 ${item.key && filterList[item.key].includes(singleItem)
                                                ? "bg-secondary-blue-50 bg-opacity-[0.12] border-secondary-blue-50"
                                                : "border-white bg-white"
                                                }`}
                                        >
                                            {item.key && filterList[item.key].includes(singleItem) && (
                                                <img src={Icons.CorrectIcon} alt="" className="w-[14px] h-[14px] mr-1.5 animate-fadeIn" />
                                            )}
                                            {singleItem}
                                        </button>
                                    ))}
                                </div>
                            </div> : item.type === "multiple-select" ? <div
                                className={`mt-5`}
                            >
                                {item.selects && item.selects.map((singleItem, index) => (
                                    <div key={index} className='mb-3' >
                                        {singleItem.type === "select" ? <Dropdown.Type5
                                            data={singleItem}
                                            filterList={filterList}
                                            handleFilterList={handleFilterList}
                                            placeHolder="Present District"
                                        /> :
                                            singleItem.type === "select-with-roleImg" ? <Dropdown.Type7
                                                data={singleItem}
                                                filterList={filterList}
                                                handleFilterList={handleFilterList}
                                                placeHolder="Search Collector by Login ID or Name"
                                            /> : null}
                                    </div>
                                ))}
                            </div> : null}
                </>
            ))}
        </div>
    )
}

export default FilterForm