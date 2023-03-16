import { Drawer } from 'antd';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { targetDT } from '../../../types/assignTypes';
import Buttons from '../../Buttons';
import MetaData from './MetaData';
import Others from './Others';
import Script from './Script';
import SpeakerCriteria from './SpeakerCriteria';

type Props = {
    isDrawerOpen: boolean,
    setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
    data?: targetDT;

}

const Type1 = ({ isDrawerOpen, setIsDrawerOpen: setOpen, data }: Props) => {
    const [activePanel, setActivePanel] = useState<string>("Script");
    const [isMetaData, setIsMetaData] = useState<boolean>(false);

    const onClose = () => {
        // drawerClose();
        setOpen(false);
    };

    useEffect(() => {
        setActivePanel('Script');
    }, [])




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
                (isDrawerOpen && !isMetaData) ?
                    <div className='animate-fadeIn'>

                        {/* Header */}
                        <div className='border-b-[1px] border-ct-blue-20 bg-ct-blue-05 px-6 pt-6 pb-11 flex justify-between relative'>
                            <div>
                                <h1 className='text-ct-blue-95 text-[18px] font-medium'>Details</h1>
                                <div className='flex'>
                                    <h1 className='text-ct-blue-90-70% text-small'>Target ID: </h1>
                                    <h1 className='pl-1 text-ct-blue-90-70% font-bold text-small'>{data?.id?.slice(0, 25)}</h1>
                                </div>
                            </div>
                            <div>
                                <div className='flex items-center'>
                                    <h1 className='text-blue-gray-75 text-xxs'>No of Target: </h1>
                                    <h1 className='pl-1 text-ct-blue-90-74% font-medium text-base'>{data?.target?.target}</h1>
                                </div>
                                <div className='flex items-center'>
                                    <h1 className='text-blue-gray-75 text-xxs'>Deadline: </h1>
                                    {/* <h1 className='pl-1 text-ct-blue-90-74% font-medium text-base'>30/01/2022</h1> */}
                                    <h1 className='pl-1 text-ct-blue-90-74% font-medium text-base'>{data?.target?.deadline}</h1>

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
                                    <Script data={data} setIsMetaData={setIsMetaData} isMetaData={isMetaData} />
                                    :
                                    activePanel.includes("Speaker Criteria") ?
                                        <SpeakerCriteria data={data} /> :
                                        <Others data={data} />
                            }
                        </div>
                    </div> :
                    <MetaData setIsMetaData={setIsMetaData} />
            }
        </Drawer>
    );
};

export default Type1;