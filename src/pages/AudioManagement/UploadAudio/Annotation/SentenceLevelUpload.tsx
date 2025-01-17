import { useContext, useEffect, useState, useRef } from "react"
import Table from "../../../../components/Table"
import { AudioManagementContext } from "../../../../context/AudioManagementProvider"
import { Filter } from "../../../../components/Filter"
import { SearchBox } from "../../../../components/SearchBox"
import Buttons from "../../../../components/Buttons"
import { targetFilterListDT } from "../../../../types/assignTypes"
import { collectedAudioAnnotationSentenceFilterData } from "../../../../data/audioManagement/AudioManagementData"
import { sentenceLevelUploadDT } from "../../../../types/audioManagementTypes"

const SentenceLevelUpload = () => {

  const { getSentenceLevelUploadData, sentenceLevelUploadData } = useContext(AudioManagementContext)

  const [selectedRowsData, setSelectedRowsData] = useState<sentenceLevelUploadDT[]>([])
  const query = {
    page: 1,
    pageSize: 20,
    dateRange: "",
    speaker: "",
    audioChecker: "",
  }

  useEffect(() => {
    getSentenceLevelUploadData(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Header selectedRowsData={selectedRowsData} />
      <Table.Type27 data={sentenceLevelUploadData.data} setSelectedRowsData={setSelectedRowsData} />
    </div>
  )
}

export default SentenceLevelUpload


const Header = ({ selectedRowsData }: { selectedRowsData: sentenceLevelUploadDT[] }) => {

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
  })

  const { getAudioCheckerList, audioCheckerList, getSpeakerList, speakerList, } = useContext(AudioManagementContext);

  const prevSpeakersRef = useRef(speakerList);
  const prevCheckerRef = useRef(audioCheckerList);


  useEffect(() => {
    let count = 0;
    for (const key in filterList) {
      if (filterList[key].length > 0) {
        if (key === "audioChecker" || key === "speaker" || key === "dateRange") {
          count += 1
        }
      }
    }
    setCount(count)
  }, [filterList]);

  useEffect(() => {
    getAudioCheckerList("uploadAudioAnnotationSentenceChecker");
    getSpeakerList("uploadAudioAnnotationSentenceSpeaker");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {

    if (speakerList !== prevSpeakersRef.current) {
      const speakerObject = collectedAudioAnnotationSentenceFilterData.find(obj => obj.key === "speaker");
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
    if (audioCheckerList !== prevCheckerRef.current) {
      const checkerObject = collectedAudioAnnotationSentenceFilterData.find(obj => obj.key === "audioChecker");
      if (checkerObject && checkerObject.selects) {
        const checkerDetailsObject = checkerObject.selects.find(obj => obj.key === "audioChecker_details");
        if (checkerDetailsObject) {
          checkerDetailsObject.child = audioCheckerList;
        }
      }
    }

    prevSpeakersRef.current = speakerList;
    prevCheckerRef.current = audioCheckerList;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speakerList, audioCheckerList]);


  const handleFilterList = (key: string, value: string) => {
    if (filterList[key].includes(value)) {

      if (key === "speaker_gender" || key === "speaker_age" || key === "speaker_district" || key === "speaker_details") {
        setFilterList({
          ...filterList,
          [key]: filterList[key].filter((item) => item !== value),
          speaker: filterList.speaker.filter((item) => item !== value),
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
        <h1 className='titleAudioManagement'>Sentence Annotation</h1>
        <p className='text-small text-ct-blue-90-70% mt-1.5'>List of audios that is needed to sentence annotation</p>
      </div>
      <div className='flex items-center gap-x-6'>
        {
          (selectedRowsData.length === 1) &&
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
        }
        <div className='flex items-center gap-x-3'>
          <SearchBox.Type1 inputWidth="w-28" placeholder="Search" bgColor="bg-blue-gray-A10" textColor="text-ct-blue-90-70%" />
          <Filter.Type2 popupClassName='audio_submission_date_picker' handleSubmitFilter={handleSubmitFilter} filterData={collectedAudioAnnotationSentenceFilterData} count={count} filterList={filterList} handleReset={handleReset} handleFilterList={handleFilterList} />
        </div>
      </div>
    </div>
  )
}