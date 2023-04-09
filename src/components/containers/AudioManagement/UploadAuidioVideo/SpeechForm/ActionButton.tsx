import { useNavigate } from 'react-router-dom';
import Buttons from '../../../../Buttons';

const ActionButton = () => {
    const navigate = useNavigate();
    return (
        <div className='flex justify-end px-5 py-[28px] bg-white'>
            <div className='flex gap-x-[16px] '>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        navigate(-1);
                    }}
                    className='duration-700 border-[1px] border-white text-ct-blue-60 hover:border-ct-blue-30 rounded-[6px] py-[12px] px-[32px]'>
                    Cancel
                </button>
                <Buttons.IconWithTextButton.Primary
                    label={'Create'}
                    size='medium'
                    variant='CT-Blue'
                    type='submit'

                />
            </div>
        </div>
    );
};

export default ActionButton;