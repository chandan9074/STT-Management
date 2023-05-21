import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Drawer } from 'antd';
import Buttons from '../../../Buttons';
import Script from '../../Target/Script';
import MetaData from '../../Target/MetaData';
import { historyDT, historyRemarkDT, othersDT, singleSpeakerDT2, speakerLocalityDT2 } from '../../../../types/audioManagementTypes';
import Others from './Others';
import RoleImage from '../../../Image/RoleImage';
import SpeakerInformation from './SpeakerInformation';
import { scriptResDT } from '../../../../types/script';
import EditHistory from './EditHistory';

type Props = {
    isDrawerOpen: boolean,
    setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
    isEditHistory: boolean
    speaker: speakerLocalityDT2;
    remark: historyRemarkDT[];
    script: scriptResDT;
    others: othersDT;
    id?: string;
    history?: historyDT[];
    prevSpeaker?: boolean;
    activePanelProp?: string;
    deadline?: string;
    submissionDate?: string;
    targetTitle?: boolean;
}

const CheckingStatus = ({ targetTitle, isDrawerOpen, setIsDrawerOpen: setOpen, isEditHistory, speaker, remark, script, others, id, history, prevSpeaker, activePanelProp, deadline, submissionDate }: Props) => {
    const [activePanel, setActivePanel] = useState<string>(activePanelProp ? activePanelProp : "Script");
    const [isMetaData, setIsMetaData] = useState<boolean>(false);
    const [isSpeaker, setIsSpeaker] = useState<boolean>(prevSpeaker ? true : false);

    // const [gender, setIsGender] = useState<any>({ isMale: false, isFemale: false })
    const [isMale, setIsMale] = useState<boolean>(false);
    const [isFemale, setIsFemale] = useState<boolean>(false);

    const onClose = () => {
        // drawerClose();
        setOpen(false);
    };

    useEffect(() => {
        // if (activePanelProp) {
        //     setActivePanel(activePanelProp);
        // }

        speaker.speakers.map((item: singleSpeakerDT2) => {
            if (item.gender.toLowerCase() === 'male'.toLowerCase()) {
                setIsMale(true);
            }
            if (item.gender.toLowerCase() === 'female'.toLowerCase()) {
                setIsFemale(true);
            }
            return item;

        });
        console.log(activePanel);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activePanelProp]);

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
                    <div>
                        {
                            isSpeaker ?
                                <div>
                                    <SpeakerInformation data={speaker} setIsSpeaker={setIsSpeaker} />
                                </div>
                                :
                                <div className='animate-fadeIn'>

                                    {/* Header */}
                                    <div className='border-b-[1px] border-ct-blue-20 bg-ct-blue-05 px-6 pt-6 pb-11 flex justify-between items-center relative'>
                                        <div>
                                            <h1 className='text-ct-blue-95 text-[18px] font-medium'>Details</h1>
                                            <div className='flex gap-x-3'>
                                                {
                                                    id && <div className='flex'>
                                                        <h1 className='text-ct-blue-90-70% text-xs'>{targetTitle ? "Target" : 'Task'} ID: </h1>
                                                        <h1 className='pl-1 text-ct-blue-90-70% font-semibold text-xs'>{id?.slice(0, 25)}</h1>
                                                    </div>
                                                }
                                                {deadline && <div className='flex'>
                                                    <h1 className='text-ct-blue-90-70% text-xs'>Deadline: </h1>
                                                    <h1 className='pl-1 text-ct-blue-90-70% font-semibold text-xs'>{deadline}</h1>
                                                </div>}
                                                {submissionDate && <div className='flex'>
                                                    <h1 className='text-ct-blue-90-70% text-xs'>Submission: </h1>
                                                    <h1 className='pl-1 text-ct-blue-90-70% font-semibold text-xs'>{submissionDate}</h1>
                                                </div>}
                                            </div>
                                        </div>


                                        {

                                            <div
                                                onClick={() => setIsSpeaker(true)}
                                                className={`flex items-center py-[3px] pl-[11px] ${speaker.speakers.length > 1 ? 'pr-[18px]' : 'pr-1'} bg-white rounded-[32px] gap-x-[5px] cursor-pointer`}
                                            >
                                                <p className='text-ct-blue-45 text-xxs font-medium'>Speaker</p>
                                                <div className='relative flex items-center'>
                                                    <RoleImage height='h-6' width='w-6' role={isMale ? 'speaker' : 'speakerFemale'} />
                                                    {
                                                        speaker.speakers.length > 1 &&
                                                        <div className='absolute left-[14px] w-full ring-2 ring-white rounded-full'>
                                                            <RoleImage height='h-6' width='w-6' role={isFemale ? 'speakerFemale' : 'speaker'} />
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        }


                                        <div className='absolute -bottom-[20px] flex justify-center w-full left-0'>
                                            {
                                                isEditHistory ?
                                                    <Buttons.TabButton.Primary
                                                        size='small'
                                                        tabLabel={["Script", "Others", "Edit History"]}
                                                        setActiveData={setActivePanel}
                                                    />
                                                    :
                                                    <Buttons.TabButton.Primary
                                                        size='small'
                                                        tabLabel={["Script", "Others"]}
                                                        setActiveData={setActivePanel}
                                                        activePanelProps={activePanel.includes("Script") ? 0 : 1}
                                                    />
                                            }

                                        </div>
                                    </div>


                                    {/* body */}
                                    <div className='px-5 pt-[46px]'>
                                        {
                                            activePanel.includes("Script") ?
                                                <Script data={script} setIsMetaData={setIsMetaData} isMetaData={isMetaData} downloadable={true} />
                                                :
                                                activePanel.includes("Others") ?
                                                    <>
                                                        {
                                                            (remark) &&
                                                            <Others data={others} remark={remark} />
                                                        }
                                                    </>
                                                    :
                                                    <EditHistory data={history} />
                                        }
                                    </div>
                                </div>
                        }
                    </div>
                    :
                    <MetaData data={script} setIsMetaData={setIsMetaData} />
            }

        </Drawer>
    );
};

export default CheckingStatus;