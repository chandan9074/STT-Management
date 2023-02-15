import React from 'react';
import {Link} from "react-router-dom";
import {CREATE_TARGET_PATH} from "../../../../helpers/Slug";
import Buttons from "../../../Buttons";
import Icons from "../../../../assets/Icons";

const Header = () => {
    return (
        <div className='flex justify-between items-center mb-[23px]'>
            <div>
                <h1 className='text-blue-95 text-[18px] font-medium'>All Targets</h1>
                <h2 className='text-ct-blue-90 text-small'>List of Target, Target Creation and Assignment</h2>
            </div>
            <div>
                <Link to={CREATE_TARGET_PATH}>
                    <Buttons.IconWithTextButton.Primary
                        label="Create Target"
                        size="small"
                        variant="Megenta"
                        icon={<img src={Icons.Add} alt="add" />}
                        // onClick={() => scriptContext.setModalOpen(true)}
                    /></Link>
            </div>
        </div>
    );
};

export default Header;