import { useContext, useEffect, useRef, useState } from 'react';
import { Filter } from '../../../../components/Filter';
import { SearchBox } from '../../../../components/SearchBox';
import Table from '../../../../components/Table';
import { AudioManagementContext } from '../../../../context/AudioManagementProvider';
import { collectedAudioCheckingStatusFilterData } from '../../../../data/audioManagement/AudioManagementData';
import { targetFilterListDT } from '../../../../types/assignTypes';
import Buttons from '../../../../components/Buttons';

const CheckingStatus = () => {

    const { getCheckingStatusData, checkingStatusData } = useContext(AudioManagementContext);

    useEffect(() => {
        getCheckingStatusData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <Header />
            <Table.Type17 data={checkingStatusData} />
        </div>

    );
};

export default CheckingStatus;

const Header = () => {

    const [count, setCount] = useState<number>(0);
    const [filterList, setFilterList] = useState<targetFilterListDT>({
        script: [],
        collector: [],
        collector_district: [],
        collector_details: [],
        speaker: [],
        speaker_gender: [],
        speaker_age: [],
        speaker_district: [],
        speaker_details: [],
        audioUploadPeriod: [],
        status: [],
    })

    const { collectedAudioCheckingStatusScript, getCollectedAudioCheckingStatusScript, collectedAudioCheckingStatusCollector, getCollectedAudioCheckingStatusCollector, getCollectedAudioCheckingStatusSpeakers, collectedAudioCheckingStatusSpeaker, } = useContext(AudioManagementContext);

    const prevScriptFilterRef = useRef(collectedAudioCheckingStatusScript);
    const prevCollectedAudioCollectorRef = useRef(collectedAudioCheckingStatusCollector);
    const prevCollectedAudioSpeakersRef = useRef(collectedAudioCheckingStatusSpeaker);


    useEffect(() => {
        let count = 0;
        for (const key in filterList) {
            if (filterList[key].length > 0) {
                if (key === "script" || key === "collector" || key === "speaker" || key === "audioUploadPeriod" || key === "status") {
                    count += 1
                }
            }
        }
        setCount(count)
    }, [filterList]);

    useEffect(() => {
        getCollectedAudioCheckingStatusScript();
        getCollectedAudioCheckingStatusCollector();
        getCollectedAudioCheckingStatusSpeakers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {

        if (collectedAudioCheckingStatusScript !== prevScriptFilterRef.current) {
            const collectorDetailsObject = collectedAudioCheckingStatusFilterData.find(obj => obj.key === "script");
            if (collectorDetailsObject) {
                collectorDetailsObject.child = collectedAudioCheckingStatusScript;
            }
        }
        if (collectedAudioCheckingStatusCollector !== prevCollectedAudioCollectorRef.current) {
            const collectorObject = collectedAudioCheckingStatusFilterData.find(obj => obj.key === "collector");
            if (collectorObject && collectorObject.selects) {
                // collectorDetailsObject.child = collectedAudioCheckingStatusCollector;
                const collectorDetailsObject = collectorObject.selects.find(obj => obj.key === "collector_details");
                if (collectorDetailsObject) {
                    collectorDetailsObject.child = collectedAudioCheckingStatusCollector;
                }
            }
        }
        if (collectedAudioCheckingStatusSpeaker !== prevCollectedAudioSpeakersRef.current) {
            const speakerObject = collectedAudioCheckingStatusFilterData.find(obj => obj.key === "speaker");
            if (speakerObject) {
                // collectorDetailsObject.child = collectedAudioCheckingStatusCollector;
                const selectObject = speakerObject.formData && speakerObject.formData.find(obj => obj.type === "multiple-select");
                if (selectObject && selectObject.selects) {
                    const speakers = selectObject.selects.find(obj => obj.key === "speaker_details");
                    if (speakers) {
                        speakers.child = collectedAudioCheckingStatusSpeaker;
                    }
                }
            }
        }

        prevScriptFilterRef.current = collectedAudioCheckingStatusScript;
        prevCollectedAudioCollectorRef.current = collectedAudioCheckingStatusCollector;
        prevCollectedAudioSpeakersRef.current = collectedAudioCheckingStatusSpeaker;

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [collectedAudioCheckingStatusScript, collectedAudioCheckingStatusCollector, collectedAudioCheckingStatusSpeaker]);


    const handleFilterList = (key: string, value: string) => {
        if (filterList[key].includes(value)) {
            if (key === "collector_district" || key === "collector_details") {
                setFilterList({
                    ...filterList,
                    [key]: filterList[key].filter((item) => item !== value),
                    collector: filterList.collector.filter((item) => item !== value),
                });
            }
            else if (key === "speaker_gender" || key === "speaker_age" || key === "speaker_district" || key === "speaker_details") {
                setFilterList({
                    ...filterList,
                    [key]: filterList[key].filter((item) => item !== value),
                    speaker: filterList.speaker.filter((item) => item !== value),
                });
            }
            else {
                setFilterList({
                    ...filterList,
                    [key]: filterList[key].filter((item) => item !== value),
                });
            }
        } else {
            if (key === "collector_district" || key === "collector_details") {
                setFilterList({
                    ...filterList,
                    [key]: [...filterList[key], value],
                    collector: [...filterList.collector, value],
                });
            }
            else if (key === "speaker_gender" || key === "speaker_age" || key === "speaker_district" || key === "speaker_details") {
                setFilterList({
                    ...filterList,
                    [key]: [...filterList[key], value],
                    speaker: [...filterList.speaker, value],
                });
            }
            else {
                setFilterList({
                    ...filterList,
                    [key]: [...filterList[key], value],
                });
            }
        }
    }
    const handleReset = (key: string, type: "single" | "all") => {
        if (type === "all") {
            setFilterList({
                script: [],
                collector: [],
                collector_district: [],
                collector_details: [],
                speaker: [],
                speaker_gender: [],
                speaker_age: [],
                speaker_district: [],
                speaker_details: [],
                audioUploadPeriod: [],
                status: [],
            })
        }
        else {
            setFilterList({
                ...filterList,
                [key]: [],
            });
        }
    }

    const handleSubmitFilter = () => {
    }

    return (
        <div className='ml-6 mr-4 mb-5 flex items-center justify-between'>
            <div>
                <h1 className='text-heading-6 font-semibold text-ct-blue-95 leading-6'>Raw Audio</h1>
                <p className='text-small text-ct-blue-90-70% mt-1.5'>List of unprocessed audio to be checked</p>
            </div>
            <div className='flex items-center gap-x-6'>
                <Buttons.BgHoverBtn
                    title="Download Script"
                    paddingY="py-2"
                    paddingX="px-4"
                    borderRadius="rounded-[6px]"
                    textColor="text-secondary-blue-50"
                    fontSize="text-small"
                    fontWeight="font-medium"
                    duration="duration-300"
                    hoverBgColor="hover:bg-white"
                />
                <div className='flex items-center gap-x-3'>
                    <SearchBox.Type1 inputWidth="w-44" placeholder="Search" bgColor="bg-blue-gray-A10" textColor="text-ct-blue-90-70%" />
                    <Filter.Type2 popupClassName='audio_submission_date_picker' handleSubmitFilter={handleSubmitFilter} filterData={collectedAudioCheckingStatusFilterData} count={count} filterList={filterList} handleReset={handleReset} handleFilterList={handleFilterList} />
                </div>
            </div>
        </div>
    )
}