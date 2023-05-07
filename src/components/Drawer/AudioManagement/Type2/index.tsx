import { Drawer } from 'antd';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { historyDT, historyRemarkDT, othersUploadAudioDT, speakerUploadAudioDT, speechInfo } from '../../../../types/audioManagementTypes';
import RoleImage from '../../../Image/RoleImage';
import Buttons from '../../../Buttons';
import SpeechInfo from './SpeechInfo';
import Others from './Others';
import SpeakerDetails from './SpeakerDetails';
import EditHistory from '../CheckingStatus/EditHistory';

type Props = {
    isDrawerOpen: boolean,
    setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
    id: string;
    speaker: speakerUploadAudioDT;
    others: othersUploadAudioDT;
    speechInfo: speechInfo;
    isEditHistory: boolean;
    deadline?: string;
    submission?: string;
    history?: historyDT[];
    remark?: historyRemarkDT[];
}

const Type2 = ({ id, isDrawerOpen, setIsDrawerOpen: setOpen, speaker, others, speechInfo, isEditHistory, deadline, submission, history, remark }: Props) => {

    console.log('************', remark);

    const [activePanel, setActivePanel] = useState<string>("Speech Info");
    // const [isMetaData, setIsMetaData] = useState<boolean>(false);
    const [isSpeaker, setIsSpeaker] = useState<boolean>(false);

    // const [gender, setIsGender] = useState<any>({ isMale: false, isFemale: false })
    const [isMale, setIsMale] = useState<boolean>(false);
    const [isFemale, setIsFemale] = useState<boolean>(false);

    const onClose = () => {
        // drawerClose();
        setOpen(false);

        speaker.gender.map((item: string) => {
            if (item.toLowerCase() === 'male'.toLowerCase()) {
                setIsMale(true);
            }
            if (item.toLowerCase() === 'female'.toLowerCase()) {
                setIsFemale(true);
            }
            return item;
        });

    };

    useEffect(() => {
        setActivePanel('Speech Info');

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                (isDrawerOpen) ?
                    <div>
                        {
                            isSpeaker ?
                                <div>
                                    <SpeakerDetails setIsSpeaker={setIsSpeaker} data={speaker} />
                                </div>
                                :
                                <div className='animate-fadeIn'>

                                    {/* Header */}
                                    <div className='border-b-[1px] border-ct-blue-20 bg-ct-blue-05 px-6 pt-6 pb-11 flex justify-between items-center relative'>
                                        <div>
                                            <h1 className='text-ct-blue-95 text-[18px] font-medium'>Details</h1>
                                            <div className='flex items-center gap-x-3'>
                                                <div className='flex'>
                                                    <h1 className='text-ct-blue-90-70% text-xs'>Task ID: </h1>
                                                    <h1 className='pl-1 text-ct-blue-90-70% font-bold text-xs'>{id?.slice(0, 25)}</h1>
                                                </div>
                                                {
                                                    deadline ?
                                                        <div className='flex'>
                                                            <h1 className='text-ct-blue-90-70% text-xs'>Deadline: </h1>
                                                            <h1 className='pl-1 text-ct-blue-90-70% font-bold text-xs'>{deadline}</h1>
                                                        </div> :
                                                        submission ?
                                                            <div className='flex'>
                                                                <h1 className='text-ct-blue-90-70% text-xs'>Submission: </h1>
                                                                <h1 className='pl-1 text-ct-blue-90-70% font-bold text-xs'>{submission}</h1>
                                                            </div>
                                                            :
                                                            null
                                                }

                                            </div>
                                        </div>


                                        {

                                            <div
                                                onClick={() => setIsSpeaker(true)}
                                                className={`flex items-center py-[3px] pl-[11px] ${speaker.gender.length > 1 ? 'pr-[18px]' : 'pr-1'} bg-white rounded-[32px] gap-x-[5px] cursor-pointer`}
                                            >
                                                <p className='text-ct-blue-45 text-xxs font-medium'>Speaker</p>
                                                <div className='relative flex items-center'>
                                                    <RoleImage height='h-6' width='w-6' role={isMale ? 'speaker' : 'speakerFemale'} />
                                                    {
                                                        speaker.gender.length > 1 &&
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
                                                        tabLabel={["Speech Info", "Others", "Edit History"]}
                                                        setActiveData={setActivePanel}
                                                    />
                                                    :
                                                    <Buttons.TabButton.Primary
                                                        size='small'
                                                        tabLabel={["Speech Info", "Others"]}
                                                        setActiveData={setActivePanel}
                                                    />
                                            }

                                        </div>
                                    </div>


                                    {/* body */}
                                    <div className='px-5 pt-[46px]'>
                                        {
                                            activePanel.includes("Speech Info") ?
                                                <SpeechInfo data={speechInfo} />
                                                :
                                                activePanel.includes("Others") ?
                                                    <>
                                                        {
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
                    <div>Data not found</div>
            }

        </Drawer>
    );
};

export default Type2;