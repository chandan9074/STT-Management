import React, { Dispatch, SetStateAction } from 'react';
import Icons from '../../../assets/Icons';
import { MetaData } from '../MetaData';

interface Props {
    setMetaDataOpen: Dispatch<SetStateAction<boolean>>;
}
const ScriptMetaData = ({ setMetaDataOpen }: Props) => {
    const metaData = [
        {
            keyName: "Script ID",
            value: "226"
        },
        {
            keyName: "Age",
            value: ""
        },
        {
            keyName: "Data Sorce",
            value: "Lecture"
        },
        {
            keyName: "Domain",
            value: "Natural and Pure Science"
        },
        {
            keyName: "Sub Domain",
            value: "Environment"
        },


    ]
    return (
        <div className='animate-fadeIn p-5'>
            <div className='flex gap-4 items-center'>
                <img
                    className='w-[30px] h-[30px] px-1 rounded-full animate-fadeIn cursor-pointer hover:bg-slate-100'
                    onClick={() => setMetaDataOpen(false)}
                    src={Icons.arrow_back}
                    alt=""
                />
                <p className='text-heading-6 font-medium text-ct-blue-95'>Script Metadata</p>
            </div>

            <MetaData.Type1 metaData={metaData} />

        </div>
    );
};

export default ScriptMetaData;
