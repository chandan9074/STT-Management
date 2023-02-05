import React, { useState } from 'react';
import {
    Divider,
    IconButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    MenuList,
} from "@mui/material";
import './dropDown.css'
import { MoreOutlined } from "@ant-design/icons";
import Icons from "../../assets/Icons";
import Buttons from '../Buttons';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { PDF } from '../PDF';
import { Excel } from '../Excel';
import { TTSMODULE } from '../../helpers/ConditionVariable';

interface Props {
    data: any;
    headerType: string,
    module: string
}
const Type2 = ({ data, headerType, module }: Props) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [pdf, setPdf] = useState<boolean>(false)
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const createData = [
        {
            name: "Distribution Source-wise",
            data: data.distributionSourceWise
        },
        {
            name: "Domain-wise",
            data: data.domainWise
        },
        {
            name: "Gender-wise",
            data: data.genderWise
        },
        {
            name: "Age-wise",
            data: data.ageWise
        },
        {
            name: "Locality-wise",
            data: data.localityWise
        },
        {
            name: "Economic Situation-wise",
            data: data.economicSituationWise
        },
        {
            name: "Education-wise",
            data: data.educationWise
        },
        {
            name: "Profession-wise",
            data: data.professionWise
        },
        {
            name: "Recording Area",
            data: data.recordingArea
        },
        {
            name: "Recording Distance",
            data: data.recordingDistance
        },
    ]
    const collectData = [
        {
            name: "Distribution Source-wise",
            data: data.distributionSourceWise
        },
        {
            name: "Domain-wise",
            data: data.domainWise
        },
        {
            name: "Gender-wise",
            data: data.genderWise
        },
        {
            name: "Age-wise",
            data: data.ageWise
        },
        {
            name: "Locality-wise",
            data: data.localityWise
        },
    ]
    const ttsDataCollection = [
        {
            name: "Distribution Source-wise",
            data: data.distributionSourceWise
        },
        {
            name: "Domain-wise",
            data: data.domainWise
        },
        {
            name: "Gender-wise",
            data: data.genderWise
        },
    ]
    return (
        <div className="-mt-[10px] relative -mr-[10px]">
            <Buttons.IconButton.Circle
                size='medium'
                icon={open ? <MoreOutlined
                    style={{
                        background: "#B8BFCC",
                        borderRadius: "50%",
                        height: "100%",
                        width: "100%",
                        color: "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }} /> : <MoreOutlined
                    style={{
                        background: "inherit",
                        borderRadius: "50%",
                    }}
                />}
                variant="CT-Blue"
                onClick={handleClick}

            />



            {
                open ? <div>
                    <div
                        className='fixed top-0 left-0 w-full h-screen z-[80]'
                        onClick={handleClose}
                    />
                    <div
                        style={{ boxShadow: "0px 4px 24px rgba(31, 56, 76, 0.12)" }}
                        className='w-[196px] absolute z-[99999] -left-[165px] bg-white rounded-[8px] mt-[1px]'>
                        <div className='px-4 py-3 flex flex-col gap-3'>
                            <div className='flex gap-3 hover:bg-blue-gray-05 '>
                                <img
                                    src={Icons.BorderAll}
                                    alt=""
                                    className='h-[24px] w-[24px]'
                                />
                                <Excel.Type2
                                    data={module === TTSMODULE ? ttsDataCollection : headerType === "Create" ? createData : collectData}
                                    type={headerType}
                                    module={module}
                                />


                            </div>

                            <div className='flex gap-3 hover:bg-blue-gray-05 '>
                                <img
                                    src={Icons.BrokenImg}
                                    alt=""
                                    className='h-[24px] w-[24px]'
                                />
                                <p className='text-small font-medium text-blue-gray-80 hover:text-ct-blue-60'>Download as Jpeg</p>
                            </div>

                            <div className='flex gap-3 hover:bg-blue-gray-05 '

                                onClick={() => setPdf(true)}
                            >
                                <img
                                    src={Icons.PictureAsPdf}
                                    alt=""
                                    className='h-[24px] w-[24px]'
                                />
                                {/* <p className='text-small font-medium text-blue-gray-80 hover:text-ct-blue-60'>Download as PDF</p> */}

                                <PDFDownloadLink document={<PDF.Type1 module={module} data={data} type={headerType} />} fileName="DashboardData.pdf">
                                    {/* @ts-ignore */}
                                    {({ blob, url, loading, error }) => (loading ? 'Loading document...'
                                        : <p className='text-small font-medium text-blue-gray-80 hover:text-ct-blue-60'>Download as PDF</p>)}
                                </PDFDownloadLink>
                            </div>

                        </div>
                        <hr />
                        <div
                            className='flex gap-3 px-4 py-3 hover:bg-blue-gray-05 '
                        >
                            <img
                                src={Icons.Print}
                                alt=""
                                className='h-[24px] w-[24px]'
                            />

                            <p className='text-small font-medium text-blue-gray-80 hover:text-ct-blue-60'>Print</p>
                        </div>
                    </div>
                </div> : ""
            }




        </div>
    );
};

export default Type2;