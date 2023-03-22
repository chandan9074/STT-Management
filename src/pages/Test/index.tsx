import React from 'react'
import { Outlet } from 'react-router-dom';
import Layouts from '../../components/Layouts';

export const Test = () => {
    return (
        <Layouts.Third>
            <Outlet></Outlet>
        </Layouts.Third>
    )
}

export default Test;
