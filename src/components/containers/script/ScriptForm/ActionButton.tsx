import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Icons from '../../../../assets/Icons';
import { ScriptContext } from '../../../../context/ScriptProvider';
import Buttons from '../../../Buttons';

const ActionButton = () => {
    const scriptContext = useContext(ScriptContext);
    const { loading } = scriptContext;
    const navigate = useNavigate();
    return (
        <div className='flex gap-x-[16px] '>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    navigate(-1);
                }}
                className='duration-700 border-[1px] border-white text-ct-blue-60 hover:border-ct-blue-30 rounded-[6px] py-[12px] px-[32px]'>
                Cancel
            </button>
            {/* <button type='submit' className='duration-300 bg-primary-ct-blue-60 text-white rounded-[6px] py-[12px] px-[32px]'>
                Create
            </button> */}

            {
                loading ?
                    <Buttons.IconWithTextButton.Primary
                        label='loading...'
                        size='medium'
                        variant='CT-Blue'
                        onClick={(e) => e.preventDefault()}
                        icon={<img src={Icons.Loading} alt='' />
                        }
                    /> :
                    <Buttons.IconWithTextButton.Primary
                        label='Create'
                        size='medium'
                        variant='CT-Blue'
                        type='submit'

                    />
            }
        </div>
    );
};

export default ActionButton;