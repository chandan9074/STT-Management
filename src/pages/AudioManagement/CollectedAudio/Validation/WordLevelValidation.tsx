import { useContext, useEffect, useRef, useState } from 'react';
import Table from '../../../../components/Table';
import { AudioManagementContext } from '../../../../context/AudioManagementProvider';
import { SearchBox } from '../../../../components/SearchBox';
import { Filter } from '../../../../components/Filter';
import { targetFilterListDT } from '../../../../types/assignTypes';
import { collectedAudioValidationSentenceFilterData } from '../../../../data/audioManagement/AudioManagementData';
import { collectValSenDataDT } from '../../../../types/audioManagementTypes';
import { PDF } from '../../../../components/PDF';

const WordLevelValidation = () => {

  const { getCollectValWordData, collectValWordData } = useContext(AudioManagementContext);
  const [selectedRowsData, setSelectedRowSData] = useState<collectValSenDataDT[]>([]);

  useEffect(() => {
    getCollectValWordData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Header selectedRowsData={selectedRowsData} />
      <Table.Type22 data={collectValWordData} setSelectedRowSData={setSelectedRowSData} />
    </div >
  )
}

export default WordLevelValidation

const Header = ({ selectedRowsData }: { selectedRowsData: collectValSenDataDT[] }) => {

  const [count, setCount] = useState<number>(0);
  const [filterList, setFilterList] = useState<targetFilterListDT>({
    audioChecker: [],
    audioChecker_district: [],
    audioChecker_details: [],
    dateRange: [],
    speaker: [],
    speaker_gender: [],
    speaker_age: [],
    speaker_district: [],
    speaker_details: [],
    annotator: [],
    annotator_district: [],
    annotator_details: [],
  })

  const { collectedAudioValidationWordChecker, collectedAudioValidationWordAnnotator, getCollectedAudioValidationWordAnnotator, getCollectedAudioValidationWordChecker, getCollectedAudioValidationWordSpeakers, collectedAudioValidationWordSpeaker, } = useContext(AudioManagementContext);

  const prevCollectedAudioSpeakersRef = useRef(collectedAudioValidationWordSpeaker);
  const prevCollectedAudioCheckerRef = useRef(collectedAudioValidationWordChecker);
  const prevCollectedAudioAnnotatorRef = useRef(collectedAudioValidationWordAnnotator);



  useEffect(() => {
    let count = 0;
    for (const key in filterList) {
      if (filterList[key].length > 0) {
        if (key === "audioChecker" || key === "speaker" || key === "dateRange" || key === "annotator") {
          count += 1
        }
      }
    }
    setCount(count)
  }, [filterList]);

  useEffect(() => {
    getCollectedAudioValidationWordChecker();
    getCollectedAudioValidationWordSpeakers();
    getCollectedAudioValidationWordAnnotator();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {

    if (collectedAudioValidationWordSpeaker !== prevCollectedAudioSpeakersRef.current) {
      const speakerObject = collectedAudioValidationSentenceFilterData.find(obj => obj.key === "speaker");
      if (speakerObject) {
        const selectObject = speakerObject.formData && speakerObject.formData.find(obj => obj.type === "multiple-select");
        if (selectObject && selectObject.selects) {
          const speakers = selectObject.selects.find(obj => obj.key === "speaker_details");
          if (speakers) {
            speakers.child = collectedAudioValidationWordSpeaker;
          }
        }
      }
    }
    if (collectedAudioValidationWordChecker !== prevCollectedAudioCheckerRef.current) {
      const checkerObject = collectedAudioValidationSentenceFilterData.find(obj => obj.key === "audioChecker");
      if (checkerObject && checkerObject.selects) {
        const checkerDetailsObject = checkerObject.selects.find(obj => obj.key === "audioChecker_details");
        if (checkerDetailsObject) {
          checkerDetailsObject.child = collectedAudioValidationWordChecker;
        }
      }
    }
    if (collectedAudioValidationWordAnnotator !== prevCollectedAudioAnnotatorRef.current) {
      const annotatorObject = collectedAudioValidationSentenceFilterData.find(obj => obj.key === "annotator");
      if (annotatorObject && annotatorObject.selects) {
        const annotatorDetailsObject = annotatorObject.selects.find(obj => obj.key === "annotator_details");
        if (annotatorDetailsObject) {
          annotatorDetailsObject.child = collectedAudioValidationWordAnnotator;
        }
      }
    }

    prevCollectedAudioSpeakersRef.current = collectedAudioValidationWordSpeaker;
    prevCollectedAudioCheckerRef.current = collectedAudioValidationWordChecker;
    prevCollectedAudioAnnotatorRef.current = collectedAudioValidationWordAnnotator;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectedAudioValidationWordSpeaker, collectedAudioValidationWordChecker, collectedAudioValidationWordAnnotator]);


  const handleFilterList = (key: string, value: string) => {
    if (filterList[key].includes(value)) {

      if (key === "speaker_gender" || key === "speaker_age" || key === "speaker_district" || key === "speaker_details") {
        setFilterList({
          ...filterList,
          [key]: filterList[key].filter((item) => item !== value),
          speaker: filterList.speaker.filter((item) => item !== value),
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
      else {
        setFilterList({
          ...filterList,
          [key]: filterList[key].filter((item) => item !== value),
        });
      }
    } else {
      if (key === "speaker_gender" || key === "speaker_age" || key === "speaker_district" || key === "speaker_details") {
        setFilterList({
          ...filterList,
          [key]: [...filterList[key], value],
          speaker: [...filterList.speaker, value],
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
        audioChecker: [],
        audioChecker_district: [],
        audioChecker_details: [],
        dateRange: [],
        speaker: [],
        speaker_gender: [],
        speaker_age: [],
        speaker_district: [],
        speaker_details: [],
        annotator: [],
        annotator_district: [],
        annotator_details: [],
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
        <h1 className='text-heading-6 font-semibold text-ct-blue-95 leading-6'>Word Validation</h1>
        <p className='text-small text-ct-blue-90-70% mt-1.5'>List of audios that is needed to word validation</p>
      </div>
      <div className='flex items-center gap-x-6'>
        {/* <Buttons.BgHoverBtn
          title="Download Script"
          paddingY="py-2"
          paddingX="px-4"
          borderRadius="rounded-[6px]"
          textColor="text-secondary-blue-50"
          fontSize="text-small"
          fontWeight="font-medium"
          duration="duration-300"
          hoverBgColor="hover:bg-white"
        /> */}
        {
          (selectedRowsData.length === 1) &&
          <PDF.Type2 data={selectedRowsData[0].script} />
        }
        <div className='flex items-center gap-x-3'>
          <SearchBox.Type1 inputWidth="w-44" placeholder="Search" bgColor="bg-blue-gray-A10" textColor="text-ct-blue-90-70%" />
          <Filter.Type2 popupClassName='audio_submission_date_picker' handleSubmitFilter={handleSubmitFilter} filterData={collectedAudioValidationSentenceFilterData} count={count} filterList={filterList} handleReset={handleReset} handleFilterList={handleFilterList} />
        </div>
      </div>
    </div>
  )
}