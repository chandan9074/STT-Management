import React, { Dispatch, SetStateAction, useContext, useEffect, useRef, useState } from 'react';
import Buttons from '../../../../Buttons';
import { annotatedFilesDT } from '../../../../../types/audioManagementTypes';
import TableHeading from '../../../../common/TableHeading';
import { CustomModal } from '../../../../common/CustomModal';
import Icons from '../../../../../assets/Icons';
import { SearchBox } from '../../../../SearchBox';
import { Filter } from '../../../../Filter';
import { targetFilterListDT } from '../../../../../types/assignTypes';
import { AudioManagementContext } from '../../../../../context/AudioManagementProvider';
import { collectedAudioAnnotationAnnotatedFilterData } from '../../../../../data/audioManagement/AudioManagementData';
import { callingToast } from '../../../../../helpers/Utils';

type Props = {
    setActiveTab: Dispatch<SetStateAction<string>>;
    selectedScript: annotatedFilesDT[];
    setSelectedScript: React.Dispatch<React.SetStateAction<annotatedFilesDT[]>>;
    selectedRowsData: annotatedFilesDT[],
    setIsConfirmCancelModal: Dispatch<SetStateAction<boolean>>,
    isConfirmCancelModal: boolean
}

const Header = ({ setActiveTab, selectedScript, setSelectedScript, selectedRowsData, setIsConfirmCancelModal, isConfirmCancelModal }: Props) => {

    // const [isClaimModal, setIsClaimModal] = useState<boolean>(false);

    const [count, setCount] = useState<number>(0);
    const [filterList, setFilterList] = useState<targetFilterListDT>({
        script: [],
        annotator: [],
        annotator_district: [],
        annotator_details: [],
        audioChecker: [],
        audioChecker_district: [],
        audioChecker_details: [],
        collector: [],
        collector_district: [],
        collector_details: [],
        speaker: [],
        speaker_gender: [],
        speaker_age: [],
        speaker_district: [],
        speaker_details: [],
        audioSubmissionPeriod: [],
        status: [],
    })

    const { scriptList, getScriptList, collectorList, getCollectorList, getSpeakerList, speakerList, audioCheckerList, getAudioCheckerList, annotatorList, getAnnotatorList, postReassignAudios } = useContext(AudioManagementContext);

    const prevScriptFilterRef = useRef(scriptList);
    const prevCollectedAudioCollectorRef = useRef(collectorList);
    const prevCollectedAudioSpeakersRef = useRef(speakerList);
    const prevCollectedAudioCheckerRef = useRef(audioCheckerList);
    const preCollectedAudioAnnotatorRef = useRef(annotatorList);


    useEffect(() => {
        let count = 0;
        for (const key in filterList) {
            if (filterList[key].length > 0) {
                if (key === "script" || key === "collector" || key === "speaker" || key === "audioUploadPeriod" || key === "status" || key === "audioChecker" || key === "annotator") {
                    count += 1
                }
            }
        }
        setCount(count)
    }, [filterList]);

    useEffect(() => {
        getScriptList("collectedAudioAnnotationAnnotated");
        getCollectorList("collectedAudioAnnotationAnnotated");
        getSpeakerList("collectedAudioAnnotationAnnotated");
        getAudioCheckerList("collectedAudioAnnotationAnnotated");
        getAnnotatorList("collectedAudioAnnotationAnnotated");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {

        if (scriptList !== prevScriptFilterRef.current) {
            const collectorDetailsObject = collectedAudioAnnotationAnnotatedFilterData.find(obj => obj.key === "script");
            if (collectorDetailsObject) {
                collectorDetailsObject.child = scriptList;
            }
        }
        if (collectorList !== prevCollectedAudioCollectorRef.current) {
            const collectorObject = collectedAudioAnnotationAnnotatedFilterData.find(obj => obj.key === "collector");
            if (collectorObject && collectorObject.selects) {
                // collectorDetailsObject.child = collectorList;
                const collectorDetailsObject = collectorObject.selects.find(obj => obj.key === "collector_details");
                if (collectorDetailsObject) {
                    collectorDetailsObject.child = collectorList;
                }
            }
        }
        if (audioCheckerList !== prevCollectedAudioCheckerRef.current) {
            const checkerObject = collectedAudioAnnotationAnnotatedFilterData.find(obj => obj.key === "audioChecker");
            if (checkerObject && checkerObject.selects) {
                // collectorDetailsObject.child = audioCheckerList;
                const checkerDetailsObject = checkerObject.selects.find(obj => obj.key === "audioChecker_details");
                if (checkerDetailsObject) {
                    checkerDetailsObject.child = audioCheckerList;
                }
            }
        }
        if (speakerList !== prevCollectedAudioSpeakersRef.current) {
            const speakerObject = collectedAudioAnnotationAnnotatedFilterData.find(obj => obj.key === "speaker");
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
        if (annotatorList !== preCollectedAudioAnnotatorRef.current) {
            const annotatorObject = collectedAudioAnnotationAnnotatedFilterData.find(obj => obj.key === "annotator");
            if (annotatorObject && annotatorObject.selects) {
                const annotatorDetailsObject = annotatorObject.selects.find(obj => obj.key === "annotator_details");
                if (annotatorDetailsObject) {
                    annotatorDetailsObject.child = annotatorList;
                }
            }
        }

        prevScriptFilterRef.current = scriptList;
        prevCollectedAudioCollectorRef.current = collectorList;
        prevCollectedAudioSpeakersRef.current = speakerList;
        prevCollectedAudioCheckerRef.current = audioCheckerList;
        preCollectedAudioAnnotatorRef.current = annotatorList;

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scriptList, collectorList, speakerList, audioCheckerList, annotatorList]);


    const handleFilterList = (key: string, value: string) => {
        if (filterList[key].includes(value)) {
            if (key === "collector_district" || key === "collector_details") {
                setFilterList({
                    ...filterList,
                    [key]: filterList[key].filter((item) => item !== value),
                    collector: filterList.collector.filter((item) => item !== value),
                });
            }
            else if (key === "annotator_district" || key === "annotator_details") {
                setFilterList({
                    ...filterList,
                    [key]: filterList[key].filter((item) => item !== value),
                    annotator: filterList.annotator.filter((item) => item !== value),
                });
            }
            else if (key === "audioChecker_district" || key === "audioChecker_details") {
                setFilterList({
                    ...filterList,
                    [key]: filterList[key].filter((item) => item !== value),
                    audioChecker: filterList.audioChecker.filter((item) => item !== value),
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
            else if (key === "annotator_district" || key === "annotator_details") {
                setFilterList({
                    ...filterList,
                    [key]: [...filterList[key], value],
                    annotator: [...filterList.annotator, value],
                });
            }
            else if (key === "audioChecker_district" || key === "audioChecker_details") {
                setFilterList({
                    ...filterList,
                    [key]: [...filterList[key], value],
                    audioChecker: [...filterList.audioChecker, value],
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
                annotator: [],
                annotator_district: [],
                annotator_details: [],
                audioChecker: [],
                audioChecker_district: [],
                audioChecker_details: [],
                collector: [],
                collector_district: [],
                collector_details: [],
                speaker: [],
                speaker_gender: [],
                speaker_age: [],
                speaker_district: [],
                speaker_details: [],
                audioSubmissionPeriod: [],
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

    const onDrawerClose = () => {
        const selectedIds = selectedRowsData.map(item => item.id)
        setIsConfirmCancelModal(false)

        postReassignAudios(selectedIds)

        callingToast(selectedIds.length > 1 ? `${selectedIds[selectedIds.length - 1]} & ${selectedIds.length - 1} others have been reassigned.` : `${selectedIds[selectedIds.length - 1]} has been reassigned`)

    }

    return (
        <div>
            <div className='flex justify-between mr-4'>
                <div>
                    <TableHeading title='Annotated Files' />
                </div>
                <div className='flex items-center gap-x-3'>


                    {
                        (selectedRowsData.length > 0) && <div className="flex items-center gap-x-3">
                            <Buttons.BgHoverBtn
                                title="Re-Assign"
                                paddingY="py-2"
                                paddingX="px-4"
                                borderRadius="rounded-[6px]"
                                textColor="text-secondary-blue-50"
                                fontSize="text-small"
                                fontWeight="font-medium"
                                duration="duration-300"
                                hoverBgColor="hover:bg-white"
                                onClick={() => setIsConfirmCancelModal(!isConfirmCancelModal)}
                            />

                            {
                                (isConfirmCancelModal) &&
                                <CustomModal.Type3
                                    open={isConfirmCancelModal}
                                    setOpen={setIsConfirmCancelModal}
                                    onSave={onDrawerClose}
                                    title='Do you want to re-assign this and make available to other annotator?'
                                    cancelText='No'
                                    saveText='Yes'
                                    icon={Icons.AssignmentReturn}
                                    iconHeight='h-9'
                                    iconWidth='w-9'
                                />
                            }

                        </div>
                    }
                    <div className='flex items-center gap-x-3'>

                        <div className='flex items-center gap-x-3'>
                            <SearchBox.Type1 inputWidth="w-44" placeholder="Search" bgColor="bg-blue-gray-A10" textColor="text-ct-blue-90-70%" />
                            <Filter.Type2 popupClassName='audio_submission_date_picker' handleSubmitFilter={handleSubmitFilter} filterData={collectedAudioAnnotationAnnotatedFilterData} count={count} filterList={filterList} handleReset={handleReset} handleFilterList={handleFilterList} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between'>
                <div>
                    {/* <p className='text-heading-6 font-medium text-ct-blue-95 pb-[11px]'>Annotated Files</p> */}
                    <Buttons.TabButton.Secondary size='large' setActiveData={setActiveTab} tabLabel={['Sentence', "Word", "Phoneme"]} />
                </div>
            </div>

            {/* <CustomModal.Type3
                open={isConfirmModal}
                setOpen={setIsConfirmModal}
                onSave={onSave}
                title='Do you want to re-assign this and make available to other annotator?'
                cancelText='No'
                saveText='Yes'
                icon={Icons.AssignmentReturn}
                iconHeight='h-9'
                iconWidth='w-9'
            /> */}

            {/* <CustomModal.Primary
                setOpen={setIsClaimModal}
                open={isClaimModal}
                width="658px"
            >
                <ClaimApplicationModal />
            </CustomModal.Primary> */}
        </div>
    );
};

export default Header;