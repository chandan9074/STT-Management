import React, { useContext, useEffect, useState, useRef } from 'react'
import Table from '../../../../components/Table'
import { AudioManagementContext } from '../../../../context/AudioManagementProvider'
import { CustomModal } from '../../../../components/common/CustomModal'
import Icons from '../../../../assets/Icons'
import Buttons from '../../../../components/Buttons'
import { Filter } from '../../../../components/Filter'
import { SearchBox } from '../../../../components/SearchBox'
import TableHeading from '../../../../components/common/TableHeading'
import { uploadAudioAnnotationValidatedFilterData } from '../../../../data/audioManagement/AudioManagementData'
import { annotatedFilesUploadDT } from '../../../../types/audioManagementTypes'
import { targetFilterListDT } from '../../../../types/assignTypes'
import { CategoryMap } from '../../../../components/containers/dashboard/DataContainer/CollectData'

const ValidatedFilesUpload = () => {
  const [activeTab, setActiveTab] = useState<string>("Sentence");
  const [selectedSpeech, setSelectedSpeech] = useState<annotatedFilesUploadDT[]>([] as annotatedFilesUploadDT[]);

  const { getValidatedFilesUploadData, validatedFilesUploadData } = useContext(AudioManagementContext)

  useEffect(() => {
    getValidatedFilesUploadData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  const allTergetMenu = (key: string) => {
    const Category: CategoryMap = {
      "Sentence": <><Table.Type35 data={validatedFilesUploadData.data} /></>,
      "Word": <></>,
      "Phoneme": <></>
    };
    return Category[key];
  };

  return (
    <div>
      <Header setActiveTab={setActiveTab} selectedSpeech={selectedSpeech} setSelectedSpeech={setSelectedSpeech} />
      {/* <Table.Type35 data={validatedFilesUploadData} /> */}
      <div>
        {allTergetMenu(activeTab)}
      </div>
    </div>
  )
}

export default ValidatedFilesUpload;


type Props = {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  selectedSpeech: annotatedFilesUploadDT[];
  setSelectedSpeech: React.Dispatch<React.SetStateAction<annotatedFilesUploadDT[]>>;
}


const Header = ({ setActiveTab, selectedSpeech, setSelectedSpeech }: Props) => {

  const [isConfirmModal, setIsConfirmModal] = useState<boolean>(false);
  // const [isClaimModal, setIsClaimModal] = useState<boolean>(false);

  const [count, setCount] = useState<number>(0);
  const [filterList, setFilterList] = useState<targetFilterListDT>({
    validator: [],
    validator_district: [],
    validator_details: [],
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

  const { validatorList, getValidatorList, collectorList, getCollectorList, getSpeakerList, speakerList, audioCheckerList, getAudioCheckerList, annotatorList, getAnnotatorList } = useContext(AudioManagementContext);

  const prevCollectorRef = useRef(collectorList);
  const prevSpeakersRef = useRef(speakerList);
  const prevCheckerRef = useRef(audioCheckerList);
  const preAnnotatorRef = useRef(annotatorList);
  const prevValidatorRef = useRef(validatorList);


  useEffect(() => {
    let count = 0;
    for (const key in filterList) {
      if (filterList[key].length > 0) {
        if (key === "validator" || key === "collector" || key === "speaker" || key === "audioUploadPeriod" || key === "status" || key === "audioChecker" || key === "annotator") {
          count += 1
        }
      }
    }
    setCount(count)
  }, [filterList]);

  useEffect(() => {
    getCollectorList("uploadAudioAnnotationValidatedCollector");
    getSpeakerList("uploadAudioAnnotationValidatedSpeaker");
    getAudioCheckerList("uploadAudioAnnotationValidatedChecker");
    getAnnotatorList("uploadAudioAnnotationValidatedAnnotator");
    getValidatorList("uploadAudioAnnotationValidatedValidator");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (validatorList !== prevValidatorRef.current) {
      const validatorObject = uploadAudioAnnotationValidatedFilterData.find(obj => obj.key === "validator");
      if (validatorObject && validatorObject.selects) {
        // validatorDetailsObject.child = validatorList;
        const validatorDetailsObject = validatorObject.selects.find(obj => obj.key === "validator_details");
        if (validatorDetailsObject) {
          validatorDetailsObject.child = validatorList;
        }
      }
    }
    if (collectorList !== prevCollectorRef.current) {
      const collectorObject = uploadAudioAnnotationValidatedFilterData.find(obj => obj.key === "collector");
      if (collectorObject && collectorObject.selects) {
        // collectorDetailsObject.child = collectorList;
        const collectorDetailsObject = collectorObject.selects.find(obj => obj.key === "collector_details");
        if (collectorDetailsObject) {
          collectorDetailsObject.child = collectorList;
        }
      }
    }
    if (audioCheckerList !== prevCheckerRef.current) {
      const checkerObject = uploadAudioAnnotationValidatedFilterData.find(obj => obj.key === "audioChecker");
      if (checkerObject && checkerObject.selects) {
        // collectorDetailsObject.child = audioCheckerList;
        const checkerDetailsObject = checkerObject.selects.find(obj => obj.key === "audioChecker_details");
        if (checkerDetailsObject) {
          checkerDetailsObject.child = audioCheckerList;
        }
      }
    }
    if (speakerList !== prevSpeakersRef.current) {
      const speakerObject = uploadAudioAnnotationValidatedFilterData.find(obj => obj.key === "speaker");
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
    if (annotatorList !== preAnnotatorRef.current) {
      const annotatorObject = uploadAudioAnnotationValidatedFilterData.find(obj => obj.key === "annotator");
      if (annotatorObject && annotatorObject.selects) {
        const annotatorDetailsObject = annotatorObject.selects.find(obj => obj.key === "annotator_details");
        if (annotatorDetailsObject) {
          annotatorDetailsObject.child = annotatorList;
        }
      }
    }

    prevCollectorRef.current = collectorList;
    prevSpeakersRef.current = speakerList;
    prevCheckerRef.current = audioCheckerList;
    preAnnotatorRef.current = annotatorList;
    prevValidatorRef.current = validatorList;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectorList, speakerList, audioCheckerList, annotatorList, validatorList]);


  const handleFilterList = (key: string, value: string) => {
    if (filterList[key].includes(value)) {
      if (key === "collector_district" || key === "collector_details") {
        setFilterList({
          ...filterList,
          [key]: filterList[key].filter((item) => item !== value),
          collector: filterList.collector.filter((item) => item !== value),
        });
      }
      else if (key === "validator_district" || key === "validator_details") {
        setFilterList({
          ...filterList,
          [key]: filterList[key].filter((item) => item !== value),
          validator: filterList.validator.filter((item) => item !== value),
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
      else if (key === "validator_district" || key === "validator_details") {
        setFilterList({
          ...filterList,
          [key]: [...filterList[key], value],
          validator: [...filterList.validator, value],
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
        validator: [],
        validator_district: [],
        validator_details: [],
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

  const onSave = () => {
    setIsConfirmModal(false);
  }

  return (
    <div className="pl-[26px] mb-4 pr-4">
      <div className='flex justify-between'>
        <div>
          <TableHeading title='Validated Files' />
        </div>
        <div className='flex items-center'>
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
            onClick={() => setIsConfirmModal(true)}
          // marginX="mx-2"
          />
          <SearchBox.Type1 inputWidth="w-44" placeholder="Search" bgColor="bg-blue-gray-A10" textColor="text-ct-blue-90-70%" />
          <Filter.Type2 popupClassName='audio_submission_date_picker' handleSubmitFilter={handleSubmitFilter} filterData={uploadAudioAnnotationValidatedFilterData} count={count} filterList={filterList} handleReset={handleReset} handleFilterList={handleFilterList} />
        </div>
      </div>
      <div className='flex justify-between'>
        <div>
          {/* <p className='text-heading-6 font-medium text-ct-blue-95 pb-[11px]'>Annotated Files</p> */}
          <Buttons.TabButton.Secondary setActiveData={setActiveTab} tabLabel={['Sentence', "Word", "Phoneme"]} />
        </div>
      </div>

      <CustomModal.Type3
        open={isConfirmModal}
        setOpen={setIsConfirmModal}
        onSave={onSave}
        title='Do you want to re-assign this and make available to other annotator?'
        cancelText='No'
        saveText='Yes'
        icon={Icons.AssignmentReturn}
        iconHeight='h-9'
        iconWidth='w-9'
      />

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

