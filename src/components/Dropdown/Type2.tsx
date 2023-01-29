import React from 'react';
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


const Type2 = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="-mt-[10px] relative -mr-[10px]">
            <Buttons.IconButton.Circle
                size='medium'
                icon={open ? <MoreOutlined
                    style={{
                        background: "#B8BFCC",
                        borderRadius: "50%",
                        height:"100%",
                        width:"100%",
                        color: "white",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center"
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
                                <p className='text-small font-medium text-blue-gray-80 hover:text-ct-blue-60'>Download as Excel</p>
                            </div>

                            <div className='flex gap-3 hover:bg-blue-gray-05 '>
                                <img
                                    src={Icons.BrokenImg}
                                    alt=""
                                    className='h-[24px] w-[24px]'
                                />
                                <p className='text-small font-medium text-blue-gray-80 hover:text-ct-blue-60'>Download as Jpeg</p>
                            </div>

                            <div className='flex gap-3 hover:bg-blue-gray-05 '>
                                <img
                                    src={Icons.PictureAsPdf}
                                    alt=""
                                    className='h-[24px] w-[24px]'
                                />
                                <p className='text-small font-medium text-blue-gray-80 hover:text-ct-blue-60'>Download as PDF</p>
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