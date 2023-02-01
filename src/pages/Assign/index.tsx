import React from 'react';
import { Outlet } from 'react-router-dom';
import Layouts from '../../components/Layouts';

const Assign = () => {
    return (
        <Layouts.Third>
            
            <Outlet></Outlet>
        </Layouts.Third>

    );
};

export default Assign;