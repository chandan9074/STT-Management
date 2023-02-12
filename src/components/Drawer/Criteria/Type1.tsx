import { Drawer } from 'antd';
import { useContext, useState } from 'react';
import Icons from '../../../assets/Icons';
import { AssignContext } from '../../../context/AssignProvider';
import Buttons from '../../Buttons';
import TargetDetails from './TargetDetails';


type Props = {
    children: any,
    isDrawerOpen: boolean,
    drawerClose: () => void,
    title: string
}

const Type1 = ({ children, isDrawerOpen, drawerClose, title }: Props) => {

    const AssignContexts = useContext(AssignContext);
    const {
        criterias,
        sumTarget
    } = AssignContexts;

    const [lengthClick, setLengthClick] = useState<boolean>(false);

    const onClose = () => {
        drawerClose();
    };

    const onLengthClick = () => {
        setLengthClick(true);
    }

    return (
        <div>

            {
                !lengthClick ?
                    <Drawer
                        closeIcon={false}
                        placement="right"
                        onClose={onClose}
                        open={isDrawerOpen}
                        width='715px'
                    >
                        <div className='flex items-center justify-between py-[24px] px-[23px] bg-white'>
                            <div className='gap-x-[28px] flex items-center'>
                                <Buttons.IconButton.Circle
                                    size='medium'
                                    variant="CT-Blue"
                                    icon={<img src={Icons.CloseIconButton} alt="" />}
                                    border='border'
                                    background="white"
                                    onClick={() => onClose()}
                                />
                                <h1 className='text-ct-blue-95 text-[18px] font-medium'>{title}</h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='text-[14px] text-primary-ct-magenta-60 flex'>
                                    <h1 className='pr-[4px]'>Total Target: </h1>
                                    {
                                        sumTarget === 0 ?
                                            <span className='text-[#B8BFCC]'>--</span>
                                            :
                                            <h1 className='text-[14px] text-primary-ct-magenta-60 font-medium '> {sumTarget}</h1>
                                    }
                                </div>

                                <button
                                    onClick={() => onLengthClick()}
                                    className='bg-secondary-orange-50 flex items-center py-[4px] px-[12px] rounded-[36px] gap-x-[5px]'
                                >
                                    <h1 className='text-white'>{criterias?.length
                                    }</h1>
                                    <img className='w-[10px] h-[7px]' src={Icons.ArrowRightAltWhite} alt="" />
                                </button>
                            </div>
                        </div>
                        {
                            children
                        }
                    </Drawer>
                    :
                    <Drawer
                        closeIcon={false}
                        placement="right"
                        onClose={onClose}
                        open={isDrawerOpen}
                        width='477px'
                    >
                        <div className='py-[24px] pl-[24px] pr-[26px]'>
                            <div className='flex items-center justify-between  bg-white mb-[39px]'>
                                <div className='gap-x-[28px] flex items-center'>
                                    <Buttons.IconButton.Circle
                                        size='medium'
                                        variant="CT-Blue"
                                        icon={<img src={Icons.arrow_back} alt="" />}
                                        border='border'
                                        background="white"
                                        onClick={() => setLengthClick(false)}
                                    />
                                    <h1 className='text-ct-blue-95 text-[18px] font-medium'>Details</h1>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className='text-[14px] text-primary-ct-magenta-60 flex'>
                                        <h1 className='pr-[4px]'>Total target- </h1>

                                        <h1 className='text-[14px] text-primary-ct-magenta-60 font-medium '> {sumTarget}</h1>
                                    </div>


                                </div>
                            </div>

                            <TargetDetails />
                        </div>

                    </Drawer>
            }
        </div>
    );
};

export default Type1;