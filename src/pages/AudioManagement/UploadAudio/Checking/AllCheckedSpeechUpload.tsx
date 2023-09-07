import { useContext, useEffect, useRef, useState } from "react";
import Table from "../../../../components/Table";
import { AudioManagementContext } from "../../../../context/AudioManagementProvider";
import Buttons from "../../../../components/Buttons";
import { SearchBox } from "../../../../components/SearchBox";
import { Filter } from "../../../../components/Filter";
import { targetFilterListDT } from "../../../../types/assignTypes";
import { uploadAudioAllCheckingFilterData } from "../../../../data/audioManagement/AudioManagementData";
import { allCheckedSpeechDT } from "../../../../types/audioManagementTypes";

const AllCheckedAudiosUpload = () => {

  const { getAllCheckedAudiosUploadData, allCheckedAudiosUploadData } = useContext(AudioManagementContext);

  const [selectedRowsData, setSelectedRowsData] = useState<allCheckedSpeechDT[]>([])
  const query ={
    page: 1,
    pageSize: 20,
    audioChecker: "",
    status: "",
    audioSubmissionPeriod: "",
  }

  useEffect(() => {
    getAllCheckedAudiosUploadData(query)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Header selectedRowsData={selectedRowsData} />
      <Table.Type25 data={allCheckedAudiosUploadData.data} setSelectedRowsData={setSelectedRowsData} />
    </div>
  )
}

export default AllCheckedAudiosUpload

const Header = ({ selectedRowsData }: { selectedRowsData: allCheckedSpeechDT[] }) => {

  const [count, setCount] = useState<number>(0);
  const [filterList, setFilterList] = useState<targetFilterListDT>({
    audioChecker: [],
    audioChecker_district: [],
    audioChecker_details: [],
    audioSubmissionPeriod: [],
    status: [],
  })

  const { getAudioCheckerList, audioCheckerList } = useContext(AudioManagementContext);

  const prevCollectedAudioCheckerRef = useRef(audioCheckerList);

  useEffect(() => {
    let count = 0;
    for (const key in filterList) {
      if (filterList[key].length > 0) {
        if (key === "audioSubmissionPeriod" || key === "status" || key === "audioChecker") {
          count += 1
        }
      }
    }
    setCount(count)
  }, [filterList]);

  useEffect(() => {
    getAudioCheckerList("uploadAudioCheckingAudioChecker");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {

    if (audioCheckerList !== prevCollectedAudioCheckerRef.current) {
      const checkerObject = uploadAudioAllCheckingFilterData.find(obj => obj.key === "audioChecker");
      if (checkerObject && checkerObject.selects) {
        // collectorDetailsObject.child = audioCheckerList;
        const checkerDetailsObject = checkerObject.selects.find(obj => obj.key === "audioChecker_details");
        if (checkerDetailsObject) {
          checkerDetailsObject.child = audioCheckerList;
        }
      }
    }
    prevCollectedAudioCheckerRef.current = audioCheckerList;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioCheckerList]);


  const handleFilterList = (key: string, value: string) => {
    if (filterList[key].includes(value)) {
      if (key === "audioChecker_district" || key === "audioChecker_details") {
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
      if (key === "audioChecker_district" || key === "audioChecker_details") {
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

  return (
    <div className='ml-6 mr-4 mb-5 flex items-center justify-between'>
      <div>
        <h1 className='text-heading-6 font-medium text-ct-blue-95 leading-6'>All checked Speech</h1>
        <p className='text-small text-ct-blue-60 mt-1.5 font-medium'>{((selectedRowsData.length < 10) && selectedRowsData.length !== 0) ? `0` + selectedRowsData.length : selectedRowsData.length} Selected</p>
      </div>
      <div className='flex items-center gap-x-6'>
        {
          (selectedRowsData.length === 1) &&
          <div className="flex items-center gap-x-3">
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
            />
          </div>
        }
        <div className='flex items-center gap-x-3'>
          <SearchBox.Type1 inputWidth="w-28" placeholder="Search" bgColor="bg-blue-gray-A10" textColor="text-ct-blue-90-70%" />
          <Filter.Type2 popupClassName='audio_submission_date_picker' handleSubmitFilter={handleSubmitFilter} filterData={uploadAudioAllCheckingFilterData} count={count} filterList={filterList} handleReset={handleReset} handleFilterList={handleFilterList} />
        </div>
      </div>
    </div>
  )
}