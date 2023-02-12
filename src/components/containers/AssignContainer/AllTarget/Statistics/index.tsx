import React, { useState } from 'react';
import Icons from '../../../../../assets/Icons';
import { assignStatisticsDT } from '../../../../../types/assignTypes';
import AudioStatus from './AudioStatus';
import EmptyState from './EmptyState';
import OverTheTime from './OverTheTime';

const Statistics = ({ data }: { data: assignStatisticsDT }) => {
    const [dataShow, setDataShow] = useState<boolean>(false);

    return (
        <div>
            <div className='flex items-center'>
                <div className='border-t-[1px] w-full border-dashed border-border-light-blue relative z-[90]' >
                    <button
                        onClick={() => setDataShow(!dataShow)}
                        className={`border-[1px] bg-white border-ct-blue-20 rounded-[20px] py-[6px] px-[14px] absolute z-[100] right-0  ${dataShow ? 'top-[13px]' : '-bottom-[9px]'} duration-1000`}
                    >
                        <img src={dataShow ? Icons.DoubleArroDownDark : Icons.DoubleDarkICon} alt="" className="w-[7px] h-[8px] " />
                    </button>
                </div>


            </div>

            {
                dataShow ?
                    <div className='mt-3 flex items-center gap-x-[9px] duration-700'>
                        <img className='w-5 h-[17px]' src={Icons.Vector2} alt="" />
                        <h1 className='text-ct-blue-60 text-base font-medium'>Statistics</h1>
                    </div>
                    :
                    <>
                        {data ?
                            <div className='grid grid-cols-12 gap-x-16 mt-5'>
                                <div className='col-span-5'><AudioStatus data={data} /></div>
                                <div className='col-span-7'><OverTheTime data={data.overTheTimeData} /></div>
                            </div>
                            :
                            <EmptyState />
                        }
                    </>
            }
        </div>
    );
};

export default Statistics;