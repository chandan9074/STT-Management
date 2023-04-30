import React, { useState } from 'react';
import Icons from '../../../../../assets/Icons';
import { assignStatisticsDT } from '../../../../../types/assignTypes';
import AudioStatus from './AudioStatus';
import EmptyState from './EmptyState';
import OverTheTime from './OverTheTime';

const Statistics = ({ data }: { data: assignStatisticsDT }) => {
    const [dataShow, setDataShow] = useState<boolean>(false);

    return (
        <div className={` duration-300 ${dataShow ? "h-9" : "h-[310px]"}`}>
            <div className='flex items-center'>
                <div className='border-t-[1px] w-full border-dashed border-border-light-blue relative ' >
                    <button
                        onClick={() => setDataShow(!dataShow)}
                        className={`border-[1px] bg-white border-ct-blue-20 rounded-[20px] py-[6px] px-[14px] absolute z-[80] right-0  ${dataShow ? 'top-[13px]' : '-bottom-[9px]'} duration-1000`}
                    >
                        <img src={dataShow ? Icons.DoubleArroDownDark : Icons.DoubleDarkICon} alt="" className="w-[7px] h-[8px] " />
                    </button>
                </div>
            </div>
            <div className={`${dataShow ? "block" : "hidden"} mt-3 flex items-center gap-x-[9px] animate-fadeIn`}>
                <img className='w-6 h-6' src={Icons.statistics} alt="" />
                <h1 className='text-ct-blue-60 text-base font-medium'>Statistics</h1>
            </div>
            <div className={`${dataShow ? "hidden" : "block"} animate-fadeIn`}>
                {data ?
                    <div className='grid grid-cols-12 gap-x-16 mt-5 pb-7'>
                        <div className='col-span-5'><AudioStatus data={data} /></div>
                        <div className='col-span-7'><OverTheTime data={data.overTheTimeData} /></div>
                    </div>
                    :
                    <EmptyState />
                }
            </div>
        </div>
    );
};

export default Statistics;