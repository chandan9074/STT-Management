import { useContext, useEffect, useState } from 'react';
import Table from '../../../../components/Table';
import { AudioManagementContext } from '../../../../context/AudioManagementProvider';
import { targetFilterListDT } from '../../../../types/assignTypes';
import { SearchBox } from '../../../../components/SearchBox';
import { Filter } from '../../../../components/Filter';
import { uploadAudioCheckingFilterData } from '../../../../data/audioManagement/AudioManagementData';

const CheckingStatusUpload = () => {

  const { getCheckingStatusUploadData, checkingStatusUploadData } = useContext(AudioManagementContext);

  useEffect(() => {
    getCheckingStatusUploadData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Header />
      <Table.Type24 data={checkingStatusUploadData.data} />
    </div>
  )
}

export default CheckingStatusUpload


const Header = () => {

  const [count, setCount] = useState<number>(0);
  const [filterList, setFilterList] = useState<targetFilterListDT>({
    status: [],
  })

  useEffect(() => {
    let count = 0;
    for (const key in filterList) {
      if (filterList[key].length > 0) {
        if (key === "status") {
          count += 1
        }
      }
    }
    setCount(count)
  }, [filterList]);


  const handleFilterList = (key: string, value: string) => {
    if (filterList[key].includes(value)) {
      setFilterList({
        ...filterList,
        [key]: filterList[key].filter((item) => item !== value),
      });
    } else {
      setFilterList({
        ...filterList,
        [key]: [...filterList[key], value],
      });
    }
  }
  const handleReset = (key: string, type: "single" | "all") => {
    if (type === "all") {
      setFilterList({
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
        <h1 className='text-heading-6 font-medium text-ct-blue-95 leading-6'>Collected Speech</h1>
        <p className='text-small text-ct-blue-90-70% mt-1.5'>List of unprocessed speech to be checked</p>
      </div>
      <div className='flex items-center gap-x-6'>
        <div className='flex items-center gap-x-3'>
          <SearchBox.Type1 inputWidth="w-28" placeholder="Search" bgColor="bg-blue-gray-A10" textColor="text-ct-blue-90-70%" />
          <Filter.Type2 popupClassName='audio_submission_date_picker' handleSubmitFilter={handleSubmitFilter} filterData={uploadAudioCheckingFilterData} count={count} filterList={filterList} handleReset={handleReset} handleFilterList={handleFilterList} />
        </div>
      </div>
    </div>
  )
}