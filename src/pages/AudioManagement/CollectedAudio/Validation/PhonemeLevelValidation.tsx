import { useContext, useEffect, useRef, useState } from "react";
import Table from "../../../../components/Table";
import { AudioManagementContext } from "../../../../context/AudioManagementProvider";
import { SearchBox } from "../../../../components/SearchBox";
import { Filter } from "../../../../components/Filter";
import { targetFilterListDT } from "../../../../types/assignTypes";
import { collectedAudioValidationSentenceFilterData } from "../../../../data/audioManagement/AudioManagementData";
import { collectValSenDataDT } from "../../../../types/audioManagementTypes";
import { PDF } from "../../../../components/PDF";

const PhonemeLevelValidation = () => {

  const { getCollectValPhonemeData, collectValPhonemeData } = useContext(AudioManagementContext);
  const [selectedRowsData, setSelectedRowSData] = useState<collectValSenDataDT[]>([]);
  const query = {
    page: 1,
    pageSize: 20,
    dateRange: "",
    annotator: "",
    speaker: "",
    audioChecker: "",
  }

  useEffect(() => {
    getCollectValPhonemeData(query)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Header selectedRowsData={selectedRowsData} />
      <Table.Type22 data={collectValPhonemeData.data} setSelectedRowSData={setSelectedRowSData} />
    </div>
  )
}

export default PhonemeLevelValidation;

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

  const { audioCheckerList, annotatorList, getAnnotatorList, getAudioCheckerList, getScriptList, speakerList, } = useContext(AudioManagementContext);

  const prevCollectedAudioSpeakersRef = useRef(speakerList);
  const prevCollectedAudioCheckerRef = useRef(audioCheckerList);
  const prevCollectedAudioAnnotatorRef = useRef(annotatorList);



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
    getAudioCheckerList("collectedAudioValidationPhoneme");
    getScriptList("collectedAudioValidationPhoneme");
    getAnnotatorList("collectedAudioValidationPhoneme");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {

    if (speakerList !== prevCollectedAudioSpeakersRef.current) {
      const speakerObject = collectedAudioValidationSentenceFilterData.find(obj => obj.key === "speaker");
      if (speakerObject) {
        const selectObject = speakerObject.formData && speakerObject.formData.find(obj => obj.type === "multiple-select");
        if (selectObject && selectObject.selects) {
          const speakers = selectObject.selects.find(obj => obj.key === "speaker_details");
          if (speakers) {
            speakers.child = speakerList;
          }
        }
      }
    }
    if (audioCheckerList !== prevCollectedAudioCheckerRef.current) {
      const checkerObject = collectedAudioValidationSentenceFilterData.find(obj => obj.key === "audioChecker");
      if (checkerObject && checkerObject.selects) {
        const checkerDetailsObject = checkerObject.selects.find(obj => obj.key === "audioChecker_details");
        if (checkerDetailsObject) {
          checkerDetailsObject.child = audioCheckerList;
        }
      }
    }
    if (annotatorList !== prevCollectedAudioAnnotatorRef.current) {
      const annotatorObject = collectedAudioValidationSentenceFilterData.find(obj => obj.key === "annotator");
      if (annotatorObject && annotatorObject.selects) {
        const annotatorDetailsObject = annotatorObject.selects.find(obj => obj.key === "annotator_details");
        if (annotatorDetailsObject) {
          annotatorDetailsObject.child = annotatorList;
        }
      }
    }

    prevCollectedAudioSpeakersRef.current = speakerList;
    prevCollectedAudioCheckerRef.current = audioCheckerList;
    prevCollectedAudioAnnotatorRef.current = annotatorList;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speakerList, audioCheckerList, annotatorList]);


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
        <h1 className='text-heading-6 font-medium text-ct-blue-95 leading-6'>Phoneme Validation</h1>
        <p className='text-small text-ct-blue-90-70% mt-1.5'>List of audios that is needed to phoneme validation</p>
      </div>
      <div className='flex items-center gap-x-6'>
        {
          (selectedRowsData.length === 1) &&
          <PDF.Type2 data={selectedRowsData[0].script} />
        }
        <div className='flex items-center gap-x-3'>
          <SearchBox.Type1 inputWidth="w-28" placeholder="Search" bgColor="bg-blue-gray-A10" textColor="text-ct-blue-90-70%" />
          <Filter.Type2 popupClassName='audio_submission_date_picker' handleSubmitFilter={handleSubmitFilter} filterData={collectedAudioValidationSentenceFilterData} count={count} filterList={filterList} handleReset={handleReset} handleFilterList={handleFilterList} />
        </div>
      </div>
    </div>
  )
}