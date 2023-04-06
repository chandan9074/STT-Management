import React from 'react';
import Icons from '../../../../assets/Icons';
import Buttons from '../../../Buttons';
import { Link } from 'react-router-dom';
import { ADD_SPEECH_PATH } from '../../../../helpers/Slug';

const Header = () => {
    return (
        <div className='flex justify-between mb-[23px] pl-[26px] pr-[15px]'>
            <div>
            </div>
            <div>
                <Link to={ADD_SPEECH_PATH}>
                    <Buttons.IconWithTextButton.Primary
                        label="Create Script"
                        size="small"
                        variant="Megenta"
                        icon={<img src={Icons.Add} alt="add" />}
                    />
                </Link>
            </div>
        </div>
    );
};

export default Header;