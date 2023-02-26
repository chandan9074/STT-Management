import React from 'react';
import BackButtonTitle from '../../../../common/BackButtonTitle';
import Layouts from '../../../../Layouts';
import Table from '../../../../Table';

const EditSpeeches = () => {
    return (
        <div>
            <Layouts.Default>
                <BackButtonTitle
                    title='Speech Upload'
                />

                <div className='mt-[9px]'>
                    <div className='bg-blue-gray-05 pr-9 pt-7 pl-6 pb-4 rounded-t-[8px]'>
                        <h1 className='text-small text-ct-blue-90 font-medium'>Assigned to</h1>
                    </div>
                </div>
               <Table.Type11 />
            </Layouts.Default>
        </div>
    );
};

export default EditSpeeches;