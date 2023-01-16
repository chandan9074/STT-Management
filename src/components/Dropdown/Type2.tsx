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
        <div className="-mt-[14px] relative">
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                {
                    open ? <MoreOutlined
                        style={{
                            background: "gray",
                            borderRadius: "50%",
                            padding: "5px",
                            color: "white"
                        }} /> : <MoreOutlined
                        style={{
                            background: "inherit",
                            borderRadius: "50%",
                            padding: "5px",

                        }}
                    />
                }

            </IconButton>


            {/* <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuList>
                    <MenuItem>
                        <ListItemIcon>
                            <img src={Icons.BorderAll} alt=""/>
                        </ListItemIcon>
                        <ListItemText>Download as Excel</ListItemText>

                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <img src={Icons.BrokenImg} alt=""/>
                        </ListItemIcon>
                        <ListItemText>Download as Jpeg</ListItemText>

                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <img src={Icons.PictureAsPdf} alt=""/>
                        </ListItemIcon>
                        <ListItemText>Download as PDF</ListItemText>

                    </MenuItem>
                    <Divider/>
                    <MenuItem>
                        <ListItemIcon>
                            <img src={Icons.Print} alt=""/>
                        </ListItemIcon>
                        <ListItemText>Download as PDF</ListItemText>
                    </MenuItem>
                </MenuList>
            </Menu> */}

            {
                open ? <div>
                    <div
                        className='fixed top-0 left-0 w-full h-screen z-[80]'
                        onClick={handleClose}
                    />
                    <div
                        style={{ boxShadow: "0px 4px 24px rgba(31, 56, 76, 0.12)" }}
                        className='w-[196px] absolute z-[99999] -left-[135px] bg-white rounded-[8px]'>
                        <div className='px-4 py-3 flex flex-col gap-3'>
                            <div className='flex gap-3'>
                                <img
                                    src={Icons.BorderAll}
                                    alt=""
                                    className='h-[24px] w-[24px]'
                                />
                                <p className='text-small font-medium text-blue-gray-80'>Download as Excel</p>
                            </div>

                            <div className='flex gap-3'>
                                <img
                                    src={Icons.BrokenImg}
                                    alt=""
                                    className='h-[24px] w-[24px]'
                                />
                                <p className='text-small font-medium text-blue-gray-80'>Download as Jpeg</p>
                            </div>

                            <div className='flex gap-3'>
                                <img
                                    src={Icons.PictureAsPdf}
                                    alt=""
                                    className='h-[24px] w-[24px]'
                                />
                                <p className='text-small font-medium text-blue-gray-80'>Download as PDF</p>
                            </div>

                        </div>
                        <hr />
                        <div
                            className='flex gap-3 px-4 py-3'
                        >
                            <img
                                src={Icons.Print}
                                alt=""
                                className='h-[24px] w-[24px]'
                            />

                            <p className='text-small font-medium text-blue-gray-80'>Print</p>
                        </div>
                    </div>
                </div> : ""
            }

        </div>
    );
};

export default Type2;