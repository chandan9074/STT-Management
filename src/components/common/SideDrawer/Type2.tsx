import { Drawer } from 'antd';
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import Icons from '../../../assets/Icons';
import Buttons from '../../Buttons';
import './type1DrawerStyle.css';
import { callingToast } from '../../../helpers/Utils';
import { userManagementTableDT } from '../../../types/userManagementTypes';
import RoleImage from '../../Image/RoleImage';
import { EDIT_USER_PATH } from '../../../helpers/Slug';
import { Link } from 'react-router-dom';

interface Props {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    drawerData: userManagementTableDT
}
const Type2 = ({ open, setOpen, drawerData }: Props) => {
    const onClose = () => {
        setOpen(false);
        // setMetaDataOpen(false)
    };

    // const [metaDataOpen, setMetaDataOpen] = useState<boolean>(false)
    const [activePanle, setActivePanel] = useState<string>("Personal Info")

    // const reportingData: any = [
    //     {
    //         name: "Jahida Ferdous Mim",
    //         designation: "Team Leader"
    //     },
    //     {
    //         name: "Jahida Ferdous Mim",
    //         designation: "Manager"
    //     },
    //     {
    //         name: "Jahida Ferdous Mim",
    //         designation: "Admin"
    //     },
    //     {
    //         name: "Jahida Ferdous Mim",
    //         designation: "Team Leader"
    //     },
    // ]

    const textRef = useRef<HTMLParagraphElement>(null);
    // const [open, setOpen] = useState<boolean>(false);

    function copyToClipboard(text: string) {
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    const handleCopyClick = () => {
        if (textRef.current) {
            // navigator.clipboard.writeText(textRef.current.innerText);
            copyToClipboard(textRef.current.innerText);
            callingToast("Copied")
        }
    };


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
                                {/* <img
                                    src={Icons.speakerMale}
                                    className=" w-7 h-7 mt-[2px]"
                                    alt="" /> */}
                                <RoleImage role={drawerData.primaryRole} width='w-7' height='h-7' />
                                <div>
                                    <p className='text-heading-6 font-semibold text-ct-blue-95 '>{drawerData.name}</p>
                                    <p className="text-xs font-normal text-ct-blue-90-70%">{drawerData.role && drawerData.role.join(", ")}</p>

                                </div>
                            </div>
                            <div>
                                {/* <button
                                    className='px-4 py-2 text-small font-medium text-ct-blue-60 rounded-md hover:bg-white'
                                >
                                    Edit
                                </button> */}
                                <Link to={`${EDIT_USER_PATH}/${drawerData?.id}`}>
                                    <Buttons.LabelButton.Tertiary label='Edit' size='xSmall' variant='Blue' />
                                </Link>
                            </div>

                        </div>

                        <div className='flex justify-between my-4 w-full items-center bg-white px-4 py-2 rounded'>

                            <p ref={textRef} className='text-small font-normal text-blue-gray-80'><span className='font-medium'>User Id:</span> {drawerData.userId}, <span className='font-medium'>Password:</span> {drawerData.password} </p>

                            <img
                                className='w-[18px] h-[18px] cursor-pointer'
                                src={Icons.contentCopy}
                                alt=""
                                onClick={handleCopyClick}

                            />
                        </div>

                    </div>
                    {/* body */}
                    <div className='absolute top-[133px] left-[114px]'>
                        <Buttons.TabButton.Primary
                            size='small'
                            tabLabel={["Personal Info", "Reporting"]}
                            setActiveData={setActivePanel}
                        />
                    </div>

                    <div className='px-6 pt-11'>

                        {activePanle === "Personal Info" ?
                            <div className='duration-300'>
                                <div className='flex'>
                                    <div className='bg-[#F4F7FA] rounded-t-[5px] w-[125px]'>
                                        <p className='text-xxs font-medium text-blue-gray-75 px-3 py-3'>Email Address</p>
                                    </div>
                                    <div className='w-[296px]'>
                                        <p className='text-small font-medium text-blue-gray-80 px-5 py-3'>{drawerData.email}</p>
                                    </div>
                                </div>

                                <div className='flex'>
                                    <div className='bg-[#F4F7FA] w-[125px]'>
                                        <p className='text-xxs font-medium text-blue-gray-75 px-3 pb-3'>Mobile Number</p>
                                    </div>
                                    <div className='w-[296px]'>
                                        <p className='text-small font-medium text-blue-gray-80 px-5 pb-3'>{drawerData.mobileNumber}</p>
                                    </div>
                                </div>

                                <div className='flex'>
                                    <div className='bg-[#F4F7FA] w-[125px]'>
                                        <p className='text-xxs font-medium text-blue-gray-75 px-3 pb-3'>Home District</p>
                                    </div>
                                    <div className='w-[296px]'>
                                        <p className='text-small font-medium text-blue-gray-80 px-5 pb-3'>{drawerData.homeDistrict}</p>
                                    </div>
                                </div>

                                <div className='flex'>
                                    <div className='bg-[#F4F7FA] w-[125px]'>
                                        <p className='text-xxs font-medium text-blue-gray-75 px-3 pb-3'>Present District</p>
                                    </div>
                                    <div className='w-[296px]'>
                                        <p className='text-small font-medium text-blue-gray-80 px-5 pb-3'>{drawerData.presentDistrict}</p>
                                    </div>
                                </div>

                                <div className='flex'>
                                    <div className='bg-[#F4F7FA] w-[125px]'>
                                        <p className='text-xxs font-medium text-blue-gray-75 px-3 pb-3'>Education </p>
                                    </div>
                                    <div className='w-[296px]'>
                                        <p className='text-small font-medium text-blue-gray-80 px-5 pb-3'>{drawerData.education}</p>
                                    </div>
                                </div>

                                {/* <div className='flex'>
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
                                </div> */}
                            </div>
                            :
                            // reporting..............
                            <div className='duration-300'>
                                <p className='text-xxs font-normal text-blue-gray-75'>Reporting to</p>

                                {drawerData.reportingTo ? (
                                    <div className='w-[210px] px-4 py-3 border border-blue-gray-30 rounded mt-3 '>
                                        <div className='flex gap-[10px]'>
                                            {/* <img src={Icons.speakerFemale} className="h-6 w-6" alt="" /> */}
                                            <RoleImage role={drawerData.reportingTo.role} height='h-6' width='w-6' />

                                            <div>
                                                <p className='text-xxs font-medium text-blue-gray-80'>{drawerData.reportingTo.name}</p>
                                                <p className='text-xxs font-normal text-blue-gray-75'>{drawerData.reportingTo.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : <div className='ml-2 text-blue-gray-75'>--</div>}

                                <p className='text-xxs font-normal text-blue-gray-75 mt-9 '>Reporting Channel</p>
                                <div className='w-[210px] px-4 py-3 border border-blue-gray-30 rounded mt-3 mb-4'>
                                    {
                                        drawerData.reportingChannel.map((data: any, index: number) =>
                                            <>
                                                <div className='flex gap-[10px] mt-2' key={index}>
                                                    {/* <img src={Icons.speakerFemale} className="h-6 w-6" alt="" /> */}
                                                    <RoleImage role={data.role} height='h-6' width='w-6' />
                                                    <div>
                                                        <p className='text-xxs font-medium text-blue-gray-80'>{data.name}</p>
                                                        <p className='text-xxs font-normal text-blue-gray-75'>{data.role}</p>
                                                    </div>

                                                </div>

                                                {
                                                    (index + 1 < drawerData.reportingChannel.length) ?
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