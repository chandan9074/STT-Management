import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import * as PATH from '../../helpers/Slug';

const Third = ({ children }: { children: any }) => {

    const location = useLocation();

    return (
        <div>
            <Navbar.Secondary isSideDrawer={true}/>
            <Sidebar.Primary />
            <Sidebar.SideDrawer />
            <div className={`relative pl-[17rem] pb-6 h-[100%] bg-default ${(location.pathname === `${PATH.ASSIGN_PATH}/${PATH.ALL_TARGET_PTAH}` || location.pathname === `${PATH.ASSIGN_PATH}/${PATH.ALL_TARGET_PTAH}/${PATH.CREATE_TARGET_PATH}`) ? '' : ' pt-[110px]'}`}>
                {children}
            </div>
        </div>
    );
};

export default Third;