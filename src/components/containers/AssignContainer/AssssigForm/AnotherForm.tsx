import { Button } from '@mui/material';
import React, { useState } from 'react';
import DrawerTargetElement from '../../../Drawer/DrawerTargetElement';
import TargetElementForm from './TargetElementForm';

const AnotherForm = () => {
    const [dataShow, setDataShow] = useState<boolean>(false);

    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    const drawerClose = () => {
        setDrawerOpen(false)
    }

    const openDrawer = () => {
        setDrawerOpen(true);
    }
    return (
        <div>
            <Button onClick={() => setDrawerOpen(true)}>
                Open
            </Button>

            <DrawerTargetElement
                isDrawerOpen={drawerOpen}
                drawerClose={drawerClose}
                title='Create Critaria'
            >
                <TargetElementForm />
            </DrawerTargetElement>
        </div>
    );
};

export default AnotherForm;