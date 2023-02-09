import React, { Dispatch, SetStateAction } from 'react';
import Icons from '../../../assets/Icons';
import { MetaData } from '../MetaData';

interface Props {
    setMetaDataOpen: Dispatch<SetStateAction<boolean>>;
    drawerData:any
}
const ScriptMetaData = ({ setMetaDataOpen,drawerData }: Props) => {
    
    return (
        <div className='animate-fadeIn p-5 '>
            <div className='flex gap-4 items-center mb-5'>
                <img
                    className='w-[30px] h-[30px] px-1 rounded-full animate-fadeIn cursor-pointer hover:bg-slate-100'
                    onClick={() => setMetaDataOpen(false)}
                    src={Icons.arrow_back}
                    alt=""
                />
                <p className='text-heading-6 font-medium text-ct-blue-95'>Script Metadata</p>
            </div>

            <div className=''>
                <MetaData.Type1 metaData={drawerData} />
            </div>

        </div>
    );
};

export default ScriptMetaData;
