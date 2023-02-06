import React, {useState} from 'react';
import {Button} from "@mui/material";
import DrawerTargetElement from "../../../../Drawer/DrawerTargetElement";
import TargetElement from "../../AssssigForm/ScripForm";
import TargetBox from "../../TargetBox";
import DrawerTarget from "../../../../Drawer/DrawerTarget";
import Layouts from "../../../../Layouts";
import UserForm from "../../../userManagement/UserForm";

const CreateCriteria = () => {


    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    const drawerClose = () => {
        setDrawerOpen(false)
    }
    const openDrawer = () => {
        setDrawerOpen(true);
    }
    return (
            <div>
                {
                    <div className='bg-white w-[376px] h-[332px] flex justify-center items-center rounded-t-[6px]'>
                        <TargetBox
                            targetTitle={'Create Criteria'}
                            onClick={openDrawer}
                        />
                    </div>

                }

                <div>
                    {/* Use this for create target */}
                    <DrawerTargetElement
                        isDrawerOpen={drawerOpen}
                        drawerClose={drawerClose}
                        title='Create Critaria'
                    >
                        <TargetElement />
                    </DrawerTargetElement>
                </div>
            </div>
        // <div>
        //     {
        //         <div className='bg-white w-[376px] h-[332px] flex justify-center items-center rounded-t-[6px]'>
        //             <TargetBox
        //                 targetTitle={'Create Criteria'}
        //                 onClick={openDrawer}
        //             />
        //         </div>
        //
        //     }
        //
        //     <div>
        //         {/* Use this for create target */}
        //         <DrawerTargetElement
        //             isDrawerOpen={drawerOpen}
        //             drawerClose={drawerClose}
        //             title='Create Critaria'
        //         >
        //             <TargetElement />
        //         </DrawerTargetElement>
        //     </div>
        // </div>
    );
};

export default CreateCriteria;