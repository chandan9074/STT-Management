import React from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Third = ({ children }: { children: any }) => {
    return (
        <div>
            <Navbar.Secondary />
            <Sidebar.Primary />
            <Sidebar.SideDrawer />
            <div className=" relative pr-3 pb-6 pl-[400px] pt-[90px]">
                {children}
            </div>
        </div>
    );
};

export default Third;