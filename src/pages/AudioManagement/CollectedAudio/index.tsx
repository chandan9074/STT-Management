import { useContext, useEffect, useRef, useState } from 'react';
import { Filter } from '../../../components/Filter';
import { SearchBox } from '../../../components/SearchBox';
import Table from '../../../components/Table';
import { collectedAudioFilterData } from '../../../data/audioManagement/AudioManagementData';
import { targetFilterListDT } from '../../../types/assignTypes';
import { AudioManagementContext } from '../../../context/AudioManagementProvider';



const CollectedAudio = () => {

    const { getCollectedAudioData, collectedAudio } = useContext(AudioManagementContext);

    useEffect(() => {
        getCollectedAudioData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        // <Layouts.Third>
        <div>
            <Header />
            <Table.Type16 data={collectedAudio.data} />
            {/* <Outlet /> */}
        </div>
        // </Layouts.Third>
    );
};

export default CollectedAudio;


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
        audioSubmissionPeriod: [],
    })

    const { scriptList, getScriptList, collectorList, getCollectorList, getSpeakerList, speakerList } = useContext(AudioManagementContext);

    const prevScriptFilterRef = useRef(scriptList);
    const prevCollectedAudioCollectorRef = useRef(collectorList);
    const prevCollectedAudioSpeakersRef = useRef(speakerList);


    useEffect(() => {
        let count = 0;
        for (const key in filterList) {
            if (filterList[key].length > 0) {
                if (key === "script" || key === "collector" || key === "speaker" || key === "audioSubmissionPeriod") {
                    count += 1
                }
            }
        }
        setCount(count)
    }, [filterList]);

    useEffect(() => {
        getScriptList("collectedAudio");
        getCollectorList("collectedAudio");
        getSpeakerList("collectedAudio");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {

        if (scriptList !== prevScriptFilterRef.current) {
            const collectorDetailsObject = collectedAudioFilterData.find(obj => obj.key === "script");
            if (collectorDetailsObject) {
                collectorDetailsObject.child = scriptList;
            }
        }
        if (collectorList !== prevCollectedAudioCollectorRef.current) {
            const collectorObject = collectedAudioFilterData.find(obj => obj.key === "collector");
            if (collectorObject && collectorObject.selects) {
                // collectorDetailsObject.child = collectorList;
                const collectorDetailsObject = collectorObject.selects.find(obj => obj.key === "collector_details");
                if (collectorDetailsObject) {
                    collectorDetailsObject.child = collectorList;
                }
            }
        }
        if (speakerList !== prevCollectedAudioSpeakersRef.current) {
            const speakerObject = collectedAudioFilterData.find(obj => obj.key === "speaker");
            if (speakerObject) {
                // collectorDetailsObject.child = collectorList;
                const selectObject = speakerObject.formData && speakerObject.formData.find(obj => obj.type === "multiple-select");
                if (selectObject && selectObject.selects) {
                    const speakers = selectObject.selects.find(obj => obj.key === "speaker_details");
                    if (speakers) {
                        speakers.child = speakerList;
                    }
                }
            }
        }

        prevScriptFilterRef.current = scriptList;
        prevCollectedAudioCollectorRef.current = collectorList;
        prevCollectedAudioSpeakersRef.current = speakerList;

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scriptList, collectorList, speakerList]);


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
                audioSubmissionPeriod: [],
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
                <h1 className='text-heading-6 font-medium text-ct-blue-95 leading-6'>List of Raw Audio</h1>
                <p className='text-small text-ct-blue-90-70% mt-1.5'>List of raw audios that is not being picked yet</p>
            </div>
            <div className='flex items-center gap-x-3'>
                <SearchBox.Type1 inputWidth="w-28" placeholder="Search" bgColor="bg-blue-gray-A10" textColor="text-ct-blue-90-70%" />
                <Filter.Type2 popupClassName='audio_submission_date_picker' handleSubmitFilter={handleSubmitFilter} filterData={collectedAudioFilterData} count={count} filterList={filterList} handleReset={handleReset} handleFilterList={handleFilterList} />
            </div>
        </div>
    )
}