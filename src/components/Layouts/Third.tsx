import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Third = ({ children }: { children: any }) => {

    const location = useLocation();

    console.log('-----', location.pathname);
    
    return (
        <div>
            <Navbar.Secondary />
            <Sidebar.Primary />
            <Sidebar.SideDrawer />
            <div className={`relative pr-3 pb-6 bg-default  ${location.pathname === '/assign/all-target' ? '' : 'pl-[325px] pt-[110px]'}`}>
                {children}
            </div>
        </div>
    );
};

export default Third;