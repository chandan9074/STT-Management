import React from 'react';
import { Outlet } from 'react-router-dom';
import Layouts from '../../components/Layouts';

const CollectingAudio = () => {
    return (
        // <Layouts.Third>
            <div className=''>
                <Outlet />
            </div>
        // </Layouts.Third>
    );
};

export default CollectingAudio;