import React, { Dispatch, SetStateAction } from 'react';
import Icons from '../../../assets/Icons';
import Buttons from '../../Buttons';

type Props = {
    setIsMetaData: Dispatch<SetStateAction<boolean>>
}

const MetaData = ({ setIsMetaData }: Props) => {
    return (
        <div className='px-[26px] py-[30px] animate-fadeIn'>
            <div className='gap-x-[28px] flex items-center'>
                <Buttons.IconButton.Circle
                    size='medium'
                    variant="CT-Blue"
                    icon={<img src={Icons.arrow_back} alt="" />}
                    border='border'
                    background="white"
                    onClick={() => setIsMetaData(false)}
                />
                <h1 className='text-ct-blue-95 text-[18px] font-medium'>Script Metadata</h1>
            </div>
        </div>
    );
};

export default MetaData;