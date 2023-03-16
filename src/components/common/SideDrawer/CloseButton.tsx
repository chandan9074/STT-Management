import React, { Dispatch, SetStateAction } from 'react';
import Icons from '../../../assets/Icons';
import Buttons from '../../Buttons';

type Props = {
    setOpen: Dispatch<SetStateAction<boolean>>
}

const CloseButton = ({ setOpen }: Props) => {
    return (
        <div>
            <Buttons.IconButton.Circle
                size='medium'
                variant="CT-Blue"
                icon={<img src={Icons.CloseIconButton} alt="" />}
                border='border'
                background="white"
                onClick={() => setOpen(false)}
            />
        </div>
    );
};

export default CloseButton;