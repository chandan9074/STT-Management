import React from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Third = ({ children }: { children: any }) => {
    return (
        <div>
            <Navbar.Secondary />
            <Sidebar.Primary />
            <Sidebar.SideDrawer />
            <div className=" relative h-[100vh] pr-3 pb-6 pl-[325px] pt-[110px] bg-default">
                {children}
            </div>
        </div>
    );
};

export default Third;