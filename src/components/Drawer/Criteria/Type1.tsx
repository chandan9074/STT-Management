import { Drawer } from 'antd';
import { useContext, useState } from 'react';
import Icons from '../../../assets/Icons';
import { AssignContext } from '../../../context/AssignProvider';
import Buttons from '../../Buttons';
import { CustomModal } from '../../common/CustomModal';
import TargetDetails from '../../containers/AssignContainer/CreateTarget/CreateCriteria/TargetDetails';


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
        sumTarget,
        setEmptySingleCriteria,
        setEmptyEditId,
        emptyCriteria
    } = AssignContexts;

    const [lengthClick, setLengthClick] = useState<boolean>(false);
    const [isConfirmCancelModal, setIsConfirmCancelModal] = useState<boolean>(false);

    const onCancelModalOpen = () => {
        setIsConfirmCancelModal(true);
    };

    const onDrawerClose = () => {
        drawerClose();
        setIsConfirmCancelModal(false);
        emptyCriteria();
    }

    const onLengthClick = () => {
        setLengthClick(true);
    }

    const onLengthClickClose = () => {
        setLengthClick(false);
    }

    const handleBackButton = () => {
        setLengthClick(false);
        setEmptySingleCriteria();
        setEmptyEditId();
    }

    console.log('*************', isConfirmCancelModal);
    

    return (
        <div>

            {
                !lengthClick ?
                    <Drawer
                        closeIcon={false}
                        placement="right"
                        // onClose={() => onCancelModalOpen()}
                        open={isDrawerOpen}
                        width='715px'
                        maskClosable={false}
                        zIndex={100}
                    >
                        <div className='flex items-center justify-between py-[24px] px-[23px] bg-white'>
                            <div className='gap-x-[28px] flex items-center'>
                                <Buttons.IconButton.Circle
                                    size='medium'
                                    variant="CT-Blue"
                                    icon={<img src={Icons.CloseIconButton} alt="" />}
                                    border='border'
                                    background="white"
                                    onClick={() => onCancelModalOpen()}
                                />
                                <h1 className='text-ct-blue-95 text-[18px] font-medium'>{title}</h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='text-small text-primary-ct-magenta-60 flex'>
                                    <h1 className='pr-[4px]'>Total Target: </h1>
                                    {
                                        sumTarget === 0 ?
                                            <span className='text-[#B8BFCC]'>--</span>
                                            :
                                            <h1 className='text-small text-primary-ct-magenta-60 font-medium '> {sumTarget}</h1>
                                    }
                                </div>

                                {
                                    criterias?.length > 0 &&
                                    <button
                                        onClick={() => onLengthClick()}
                                        className='bg-secondary-orange-50 flex items-center py-[4px] px-[12px] rounded-[36px] gap-x-[5px]'
                                    >
                                        <h1 className='text-white'>{criterias?.length
                                        }</h1>
                                        <img className='w-[10px] h-[7px]' src={Icons.ArrowRightAltWhite} alt="" />
                                    </button>
                                }
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
                        // onClose={onCancelModalOpen}
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
                                        onClick={() => handleBackButton()}
                                    />
                                    <h1 className='text-ct-blue-95 text-[18px] font-medium'>Details</h1>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className='text-small text-primary-ct-magenta-60 flex'>
                                        <h1 className='pr-[4px]'>Total target- </h1>

                                        <h1 className='text-small text-primary-ct-magenta-60 font-medium '> {sumTarget}</h1>
                                    </div>
                                </div>
                            </div>

                            <TargetDetails onLengthClickClose={onLengthClickClose} />
                        </div>

                    </Drawer>
            }

            {
                (isConfirmCancelModal) &&
                <CustomModal.Type3
                    open={isConfirmCancelModal}
                    setOpen={setIsConfirmCancelModal}
                    onSave={onDrawerClose}
                    title='Do you want to cancel to create criteria?'
                    cancelText='No'
                    saveText='Yes'
                    icon={Icons.CloseIconButton}
                    iconHeight='h-5'
                    iconWidth='w-5'
                />
            }
        </div>
    );
};

export default Type1;