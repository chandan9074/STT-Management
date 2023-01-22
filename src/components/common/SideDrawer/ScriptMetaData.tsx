import React, { Dispatch, SetStateAction } from 'react';
import Icons from '../../../assets/Icons';

interface Props {
    setMetaDataOpen: Dispatch<SetStateAction<boolean>>;
}
const ScriptMetaData = ({ setMetaDataOpen }: Props) => {
    return (
        <div className='animate-fadeIn p-5'>
            <div className='flex gap-4 items-center'>
                <img
                    className='w-[30px] h-[30px] px-1 rounded-full animate-fadeIn cursor-pointer hover:bg-slate-100'
                    onClick={() => setMetaDataOpen(false)}
                    src={Icons.arrow_back}
                    alt=""
                />
                <p className='text-heading-6 font-medium text-ct-blue-95'>Script Metadata</p>
            </div>

            {/* body */}

            <div className='pt-5'>
                <div className='flex'>
                    <div className='bg-[#F4F7FA] rounded-t-[5px] w-[125px]'>
                        <p className='text-xxs font-medium text-blue-gray-75 px-3 py-3'>Script ID</p>
                    </div>
                    <div className='w-[296px]'>
                        <p className='text-small font-medium text-blue-gray-80 px-3 py-3'>226</p>
                    </div>
                </div>

                <div className='flex'>
                    <div className='bg-[#F4F7FA] w-[125px]'>
                        <p className='text-xxs font-medium text-blue-gray-75 px-3 pb-3'>Age</p>
                    </div>
                    <div className='w-[296px]'>
                        <p className='text-small font-medium text-blue-gray-80 px-3 pb-3'>--</p>
                    </div>
                </div>

                <div className='flex'>
                    <div className='bg-[#F4F7FA] w-[125px]'>
                        <p className='text-xxs font-medium text-blue-gray-75 px-3 pb-3'>Data Sorce</p>
                    </div>
                    <div className='w-[296px]'>
                        <p className='text-small font-medium text-blue-gray-80 px-3 pb-3'>Lecture</p>
                    </div>
                </div>

                <div className='flex'>
                    <div className='bg-[#F4F7FA] w-[125px]'>
                        <p className='text-xxs font-medium text-blue-gray-75 px-3 pb-3'>Domain</p>
                    </div>
                    <div className='w-[296px]'>
                        <p className='text-small font-medium text-blue-gray-80 px-3 pb-3'>Natural and Pure Science</p>
                    </div>
                </div>

                <div className='flex'>
                    <div className='bg-[#F4F7FA] w-[125px]'>
                        <p className='text-xxs font-medium text-blue-gray-75 px-3 pb-3'>Sub Domain </p>
                    </div>
                    <div className='w-[296px]'>
                        <p className='text-small font-medium text-blue-gray-80 px-3 pb-3'>Environment</p>
                    </div>
                </div>

                <div className='flex'>
                    <div className='bg-[#F4F7FA] w-[125px] rounded-b-[5px] '>
                        <p className='text-xxs font-medium text-blue-gray-75 px-3 pb-3'>Source Reference</p>
                    </div>
                    <div className='w-[296px] px-3'>
                        <p className='text-small font-medium text-blue-gray-80 pb-3'>BBC</p>
                        <a
                            className='text-small font-medium text-[#136EE5]'
                            href="https://www.bbc.com/bengali/news-62449191"
                        >https://www.bbc.com/bengali/news-62449191</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ScriptMetaData;
{/* <p className='text-xxs font-medium text-blue-gray-75 px-3'>Age</p>
                    <p className='text-xxs font-medium text-blue-gray-75 px-3'>Data Sorce</p>
                    <p className='text-xxs font-medium text-blue-gray-75 px-3'>Domain</p>
                    <p className='text-xxs font-medium text-blue-gray-75 px-3'>Sub Domain </p>
                    <p className='text-xxs font-medium text-blue-gray-75 px-3'>Source Reference </p> */}

{/* <p className='text-small font-medium text-blue-gray-80 px-3'>--</p>
                    <p className='text-small font-medium text-blue-gray-80 px-3'>Lecture</p>
                    <p className='text-small font-medium text-blue-gray-80 px-3'>Natural and Pure Science</p>
                    <p className='text-small font-medium text-blue-gray-80 px-3'>Environment</p>
                    <div>
                        <p className='text-small font-medium text-blue-gray-80 px-3'>BBC</p>
                        <a
                            className='text-small font-medium text-[#136EE5] px-3'
                            href="https://www.bbc.com/bengali/news-62449191"
                        >https://www.bbc.com/bengali/news-62449191</a>
                    </div> */}