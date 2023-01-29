import { Drawer } from 'antd';
import React, { Dispatch, SetStateAction, useState } from 'react';
import Icons from '../../../assets/Icons';
import Buttons from '../../Buttons';
import ScriptMetaData from './ScriptMetaData';
import './type1DrawerStyle.css'

interface Props {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    drawerData: any
}
const Type2 = ({ open, setOpen, drawerData }: Props) => {
    const onClose = () => {
        setOpen(false);
        setMetaDataOpen(false)
    };
    const [metaDataOpen, setMetaDataOpen] = useState<boolean>(false)
    const [activePanle, setActivePanel] = useState<string>("Personal Info")

    const reportingData: any = [
        {
            name: "Jahida Ferdous Mim",
            designation: "Team Leader"
        },
        {
            name: "Jahida Ferdous Mim",
            designation: "Manager"
        },
        {
            name: "Jahida Ferdous Mim",
            designation: "Admin"
        },
        {
            name: "Jahida Ferdous Mim",
            designation: "Team Leader"
        },
    ]


    // function camelizeWithUnderScore(text: string) {
    // let newStr = text.split(/(?=[A-Z])|[^a-zA-Z0-9]+/).join(" ");

    //     const a = newStr.toLowerCase()
    //         .replace(/[-_\s.]+(.)?/g, (_, c) => c ? ` ${c.toUpperCase()}` : '');
    //     return a.substring(0, 1).toUpperCase() + a.substring(1);
    // }


    return (
        <div>
            <Drawer
                title={null}
                placement="right"
                onClose={onClose}
                open={open}
                closeIcon={null}
                width={477}
            >



                <div className='animate-fadeIn relative'>
                    <div className='p-5 bg-ct-blue-05 border-b-ct-blue-20'>
                        <div className="flex w-full justify-between items-center">
                            <div className='flex items-start gap-3'>
                                <img
                                    src={Icons.speakerMale}
                                    className=" w-7 h-7 mt-[2px]"
                                    alt="" />
                                <div>
                                    <p className='text-heading-6 font-semibold text-ct-blue-95 '>Jacob Jones</p>
                                    <p className="text-xs font-normal text-ct-blue-90-70%">Script Title</p>

                                </div>
                            </div>
                            <div>
                                {/* <button
                                    className='px-4 py-2 text-small font-medium text-ct-blue-60 rounded-md hover:bg-white'
                                >
                                    Edit
                                </button> */}
                                <Buttons.LabelButton.Tertiary label='Edit' size='xSmall' variant='Blue' />
                            </div>

                        </div>

                        <div className='flex justify-between my-4 w-full items-center bg-white pl-3 pr-4 py-2 rounded'>

                            <p><span>User Id:</span> miraz2710@gmail.com, <span>Password:</span> 123Xpoi </p>

                            <img
                                className='w-[18px] h-[18px] cursor-pointer'
                                src={Icons.contentCopy}
                                alt=""
                            />
                        </div>

                    </div>
                    {/* body */}
                    <div className='absolute top-[145px] left-[30%]'>
                        <Buttons.TabButton.Primary
                            tabLabel={["Personal Info", "Reporting"]}
                            setActiveData={setActivePanel}
                        />
                    </div>

                    <div className='px-5 pt-10'>

                        {activePanle === "Personal Info" ?
                            <div className='duration-300'>
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
                            :
                            // reporting..............
                            <div className='duration-300'>
                                <p className='text-xxs font-normal text-blue-gray-75'>Reporting to</p>

                                <div className='w-[210px] px-4 py-3 border border-blue-gray-30 rounded mt-3 '>
                                    <div className='flex gap-[10px]'>
                                        <img src={Icons.speakerFemale} className="h-6 w-6" alt="" />

                                        <div>
                                            <p className='text-xxs font-medium text-blue-gray-80'>Jahida Ferdous Mim</p>
                                            <p className='text-xxs font-normal text-blue-gray-75'>Team Leader</p>
                                        </div>
                                    </div>
                                </div>

                                <p className='text-xxs font-normal text-blue-gray-75 mt-9 '>Reporting Channel</p>
                                <div className='w-[210px] px-4 py-3 border border-blue-gray-30 rounded mt-3 mb-4'>
                                    {
                                        reportingData.map((data: any, index: number) =>
                                            <>
                                                <div className='flex gap-[10px] mt-2' key={index}>
                                                    <img src={Icons.speakerFemale} className="h-6 w-6" alt="" />

                                                    <div>
                                                        <p className='text-xxs font-medium text-blue-gray-80'>{data.name}</p>
                                                        <p className='text-xxs font-normal text-blue-gray-75'>{data.designation}</p>
                                                    </div>

                                                </div>

                                                {
                                                    (index + 1 < reportingData.length) ?
                                                        <img src={Icons.DottedDownArrow} className='h-7 mx-auto' alt="" />
                                                        : ""
                                                }
                                            </>
                                        )
                                    }
                                </div>
                            </div>

                        }
                    </div>
                </div>

            </Drawer>
        </div>
    );
};

export default Type2;