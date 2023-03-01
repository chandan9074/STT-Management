import React, { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import Icons from '../../assets/Icons';
import Buttons from '../Buttons';

const BackButtonTitle = ({title, setIsData}: {title: string, setIsData?: Dispatch<SetStateAction<boolean>>}) => {
    const navigate = useNavigate();
    return (
        <div className='gap-x-[28px] flex items-center'>
            <Buttons.IconButton.Circle
                size='medium'
                variant="CT-Blue"
                icon={<img src={Icons.arrow_back} alt="" />}
                border='border'
                background="white"
                onClick={() => setIsData ? setIsData(false) : navigate(-1)}
                // onClick={() => setIsMetaData(false)}
            />
            <h1 className='text-ct-blue-95 text-[18px] font-medium'>
                {title}
            </h1>
        </div>
    );
};

export default BackButtonTitle;