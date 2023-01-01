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
import {MoreOutlined} from "@ant-design/icons";
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
        <div className="-mt-[14px]">
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
                        }}/> : <MoreOutlined
                        style={{
                            background: "inherit",
                            borderRadius: "50%",
                            padding: "5px",

                        }}
                    />
                }

            </IconButton>


            <Menu
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
            </Menu>

        </div>
    );
};

export default Type2;