import React from 'react';
import Layouts from '../components/Layouts';
import { Outlet } from 'react-router-dom';

const Test = () => {
    return (
        <Layouts.Third>
            {/* <div className='h-full'>
                this is third
            </div> */}
            {/* {children} */}
            <Outlet />
        </Layouts.Third>
    );
};

export default Test;