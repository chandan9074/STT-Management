import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import * as PATH from '../../helpers/Slug';


const Sixth = ({ children }: { children: any }) => {
    const location = useLocation();

    return (
        <div>
            <Navbar.Secondary />
            <Sidebar.Primary />
            <div className={`relative pl-[72px] pb-6 h-[100%] bg-default pt-[60px]`}>
                {children}
            </div>
        </div>
    );
};

export default Sixth;