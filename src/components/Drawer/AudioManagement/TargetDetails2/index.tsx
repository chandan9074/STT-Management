import { Dispatch, SetStateAction, useState } from 'react';
import { Drawer } from 'antd';
import Buttons from '../../../Buttons';
import Script from '../../Target/Script';
import MetaData from '../../Target/MetaData';
import { historyDT, historyRemarkDT, othersDT, speakerLocalityDT2 } from '../../../../types/audioManagementTypes';
import { scriptResDT } from '../../../../types/script';
import SpeakerInformation from '../CheckingStatus/SpeakerInformation';
import Others from '../CheckingStatus/Others';
import EditHistory from '../CheckingStatus/EditHistory';
import SpeechStatus from '../../../common/SpeechStatus';

type Props = {
    isDrawerOpen: boolean,
    setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
    isEditHistory: boolean
    speaker: speakerLocalityDT2;
    remark: historyRemarkDT[];
    script: scriptResDT;
    others: othersDT;
    id: string;
    history?: historyDT[];
    prevSpeaker?: boolean;
    activePanelProp?: string;
    deadline?: string;
    submissionDate?: string;
    targetTitle?: boolean;
    status?: string;
}

const TargetDetails2 = ({ status, targetTitle, isDrawerOpen, setIsDrawerOpen: setOpen, isEditHistory, speaker, remark, script, others, id, history, prevSpeaker, activePanelProp, deadline, submissionDate }: Props) => {
    // const [isSpeaker, setIsSpeaker] = useState<boolean>(prevSpeaker ? true : false);
    const [activePanel, setActivePanel] = useState<string>(activePanelProp ? activePanelProp : "Speaker");
    const [isMetaData, setIsMetaData] = useState<boolean>(false);

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
                (isDrawerOpen && !isMetaData) ?
                    <div>
                        {
                            // isSpeaker ?
                            //     <div>
                            //         <SpeakerInformation data={speaker} setIsSpeaker={setIsSpeaker} />
                            //     </div>
                            //     :
                            <div className='animate-fadeIn'>

                                {/* Header */}
                                <div className='border-b-[1px] border-ct-blue-20 bg-ct-blue-05 px-6 pt-6 pb-11 flex justify-between items-center relative'>
                                    <div>
                                        <h1 className='text-ct-blue-95 text-[18px] font-medium'>Details</h1>
                                        <div className='flex gap-x-3'>
                                            <div className='flex'>
                                                <h1 className='text-ct-blue-90-70% text-xs'>Target ID: </h1>
                                                <h1 className='pl-1 text-ct-blue-90-70% font-semibold text-xs'>{id?.slice(0, 25)}</h1>
                                            </div>
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

                                    <SpeechStatus data={status ? status : ''} />


                                    <div className='absolute -bottom-[20px] flex justify-center w-full left-0'>
                                        <Buttons.TabButton.Primary
                                            size='small'
                                            tabLabel={["Speaker", "Script", "Others"]}
                                            setActiveData={setActivePanel}
                                        />
                                    </div>
                                </div>


                                {/* body */}
                                <div className={`px-5 ${activePanel.includes("Speaker") ? 'pt-[20px]' : 'pt-[46px]'}`}>
                                    {
                                        activePanel.includes("Speaker") ?
                                            <SpeakerInformation data={speaker} isHeader={false} />
                                            :
                                            activePanel.includes("Script") ?
                                                <Script data={script} setIsMetaData={setIsMetaData} isMetaData={isMetaData} />
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

export default TargetDetails2;