import React from 'react';
import Icons from '../../../../assets/Icons';
import Buttons from '../../../Buttons';
import { Link } from 'react-router-dom';
import { ADD_SPEECH_PATH } from '../../../../helpers/Slug';
import TitleSubTitleAudioManagement from '../../../common/TitleSubTitleAudioManagement';

const Header = () => {
    return (
        <div className='flex justify-between mb-[23px] pl-[26px] pr-[15px]'>
            <div>
                <TitleSubTitleAudioManagement
                    title='Uploaded Speech'
                    subTitle='List of collected media'
                />
            </div>
            <div>
                <Link to={ADD_SPEECH_PATH}>
                    <Buttons.IconWithTextButton.Primary
                        label="Add Speech"
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