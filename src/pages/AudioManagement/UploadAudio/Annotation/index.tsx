import { useContext, useEffect, useState } from "react"
import Table from "../../../../components/Table"
import { AudioManagementContext } from "../../../../context/AudioManagementProvider"
import { targetFilterListDT } from "../../../../types/assignTypes"
import { uploadAudioAnnotationTypeFilterData } from "../../../../data/audioManagement/AudioManagementData"
import { SearchBox } from "../../../../components/SearchBox"
import { Filter } from "../../../../components/Filter"

const AnnotationUpload = () => {
  const { getAnnotationUploadData, annotationUploadData } = useContext(AudioManagementContext)

  const query = {
    page: 1,
    pageSize: 20,
    speaker: ""
  }

  useEffect(() => {
    getAnnotationUploadData(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Header />
      <Table.Type26 data={annotationUploadData.data} />
    </div>
  )
}

export default AnnotationUpload;

const Header = () => {

  const [count, setCount] = useState<number>(0);
  const [filterList, setFilterList] = useState<targetFilterListDT>({
    speaker: [],
    speaker_gender: [],
    speaker_age: [],
    speaker_district: [],
  })

  useEffect(() => {
    let count = 0;
    for (const key in filterList) {
      if (filterList[key].length > 0) {
        if (key === "speaker") {
          count += 1
        }
      }
    }
    setCount(count)
  }, [filterList]);

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
        speaker: [],
        speaker_gender: [],
        speaker_age: [],
        speaker_district: [],
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
        <h1 className='text-heading-6 font-medium text-ct-blue-95 leading-6'>Assign Audio to Annotation Type</h1>
        <p className='text-small text-ct-blue-90-70% text-opacity-70 mt-1.5 font-normal'>Assign Audio in types of Anntation</p>
      </div>
      <div className='flex items-center gap-x-6'>
        <div className="flex items-center gap-x-3">
          {/* <Buttons.BgHoverBtn
            title="Re-Assign"
            paddingY="py-2"
            paddingX="px-4"
            borderRadius="rounded-[6px]"
            textColor="text-secondary-blue-50"
            fontSize="text-small"
            fontWeight="font-medium"
            duration="duration-300"
            hoverBgColor="hover:bg-white"
          /> */}
        </div>
        <div className='flex items-center gap-x-3'>
          <SearchBox.Type1 inputWidth="w-28" placeholder="Search" bgColor="bg-blue-gray-A10" textColor="text-ct-blue-90-70%" />
          <Filter.Type2 popupClassName='audio_submission_date_picker' handleSubmitFilter={handleSubmitFilter} filterData={uploadAudioAnnotationTypeFilterData} count={count} filterList={filterList} handleReset={handleReset} handleFilterList={handleFilterList} />
        </div>
      </div>
    </div>
  )
}