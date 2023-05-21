import { useContext, useEffect, useRef, useState } from "react";
import { SearchBox } from "../../../../components/SearchBox";
import Table from "../../../../components/Table"
import { AudioManagementContext } from "../../../../context/AudioManagementProvider";
import { Filter } from "../../../../components/Filter";
import { targetFilterListDT } from "../../../../types/assignTypes";
import { collectedAudioAnnotationTypeFilterData } from "../../../../data/audioManagement/AudioManagementData";

const Annotation = () => {

  const { getAnnotationData, annotationData } = useContext(AudioManagementContext)

  useEffect(() => {
    getAnnotationData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Header />
      <Table.Type19 data={annotationData} />
    </div>
  )
}

export default Annotation;

const Header = () => {

  const [count, setCount] = useState<number>(0);
  const [filterList, setFilterList] = useState<targetFilterListDT>({
    script: [],
    speaker: [],
    speaker_gender: [],
    speaker_age: [],
    speaker_district: [],
    speaker_details: [],
  })

  const { scriptList, getScriptList, getSpeakerList, speakerList, } = useContext(AudioManagementContext);

  const prevScriptFilterRef = useRef(scriptList);
  const prevCollectedAudioSpeakersRef = useRef(speakerList);


  useEffect(() => {
    let count = 0;
    for (const key in filterList) {
      if (filterList[key].length > 0) {
        if (key === "script" || key === "speaker") {
          count += 1
        }
      }
    }
    setCount(count)
  }, [filterList]);

  useEffect(() => {
    getScriptList("collectedAudioAnnotationType");
    getSpeakerList("collectedAudioAnnotationType");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {

    if (scriptList !== prevScriptFilterRef.current) {
      const collectorDetailsObject = collectedAudioAnnotationTypeFilterData.find(obj => obj.key === "script");
      if (collectorDetailsObject) {
        collectorDetailsObject.child = scriptList;
      }
    }
    if (speakerList !== prevCollectedAudioSpeakersRef.current) {
      const speakerObject = collectedAudioAnnotationTypeFilterData.find(obj => obj.key === "speaker");
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

    prevScriptFilterRef.current = scriptList;
    prevCollectedAudioSpeakersRef.current = speakerList;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scriptList, speakerList]);


  const handleFilterList = (key: string, value: string) => {
    if (filterList[key].includes(value)) {
      if (key === "speaker_gender" || key === "speaker_age" || key === "speaker_district" || key === "speaker_details") {
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
      if (key === "speaker_gender" || key === "speaker_age" || key === "speaker_district" || key === "speaker_details") {
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
        <h1 className='text-heading-6 font-semibold text-ct-blue-95 leading-6'>Assign Audio to Annotation Type</h1>
        <p className='text-small text-ct-blue-90-70% mt-1.5'>Assign Audio in types of Anntation</p>
      </div>
      <div className='flex items-center gap-x-3'>
        <SearchBox.Type1 inputWidth="w-44" placeholder="Search" bgColor="bg-blue-gray-A10" textColor="text-ct-blue-90-70%" />
        <Filter.Type2 popupClassName='audio_submission_date_picker' handleSubmitFilter={handleSubmitFilter} filterData={collectedAudioAnnotationTypeFilterData} count={count} filterList={filterList} handleReset={handleReset} handleFilterList={handleFilterList} />
      </div>
    </div>
  )
}