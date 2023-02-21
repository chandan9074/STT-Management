import { Drawer } from 'antd';
import React, { Children, Dispatch, SetStateAction, useState } from 'react';
import Icons from '../../../assets/Icons';
import Buttons from '../../Buttons';
import Others from './Others';
import Script  from './Script';
import SpeakerCriteria from './SpeakerCriteria';

type Props = {
    isDrawerOpen: boolean,
    setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;

}

const Type1 = ({ isDrawerOpen, setIsDrawerOpen: setOpen }: Props) => {
    const [activePanel, setActivePanel] = useState<string>("Script")

    const onClose = () => {
        // drawerClose();
        setOpen(false);
    };

    return (
        <Drawer
            closeIcon={false}
            placement="right"
            onClose={onClose}
            open={isDrawerOpen}
            width={"477px"}
            style={{ zIndex: 999, transition: "0.3s" }}
        >
            {
                isDrawerOpen &&
                <div className='animate-fadeIn'>

                    {/* Header */}
                    <div className='border-b-[1px] border-ct-blue-20 bg-ct-blue-05 px-6 pt-6 pb-11 flex justify-between relative'>
                        <div>
                            <h1 className='text-ct-blue-95 text-[18px] font-medium'>Details</h1>
                            <div className='flex'>
                                <h1 className='text-ct-blue-90-70% text-small'>Target ID: </h1>
                                <h1 className='pl-1 text-ct-blue-90-70% font-bold text-small'>10-227a</h1>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center'>
                                <h1 className='text-blue-gray-75 text-xxs'>No of Target: </h1>
                                <h1 className='pl-1 text-ct-blue-90-74% font-medium text-base'>1000</h1>
                            </div>
                            <div className='flex items-center'>
                                <h1 className='text-blue-gray-75 text-xxs'>Deadline: </h1>
                                <h1 className='pl-1 text-ct-blue-90-74% font-medium text-base'>30/01/2022</h1>
                            </div>
                        </div>


                        <div className='absolute -bottom-[20px] left-[45px]'>
                            <Buttons.TabButton.Primary
                                size='small'
                                tabLabel={["Script", "Speaker Criteria", "Others"]}
                                setActiveData={setActivePanel}
                            />
                        </div>
                    </div>


                    {/* body */}
                    <div className='px-5 pt-[46px]'>
                        {
                            activePanel.includes("Script") ?
                            <Script />
                            :
                            activePanel.includes("Speaker Criteria")?
                            <SpeakerCriteria /> :
                            <Others />
                        }
                    </div>
                </div>
            }
        </Drawer>
    );
};

export default Type1;