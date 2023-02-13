import { Drawer } from 'antd';
import React, { Dispatch, SetStateAction, useState } from 'react';
import Icons from '../../../assets/Icons';
import ScriptMetaData from './ScriptMetaData';
import { SideDrawerDetails } from './SideDrawerDetails';
import './type1DrawerStyle.css'

interface Props {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    drawerData: any
}

const Type1 = ({ open, setOpen, drawerData }: Props) => {

    const onClose = () => {
        setOpen(false);
        setMetaDataOpen(false)
    };
    const [metaDataOpen, setMetaDataOpen] = useState<boolean>(false)

    console.log("Drawar data", drawerData)
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

                {
                    metaDataOpen ?
                        <ScriptMetaData
                            setMetaDataOpen={setMetaDataOpen}
                            drawerData={drawerData}
                        />
                        : <SideDrawerDetails.ScriptsDetails
                            drawerData={drawerData}
                            setMetaDataOpen={setMetaDataOpen}
                        />
                }

            </Drawer>
        </div>
    );
};

export default Type1;