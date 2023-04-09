import { useContext, useEffect } from 'react';
import Buttons from '../../../../components/Buttons';
import { SearchBox } from '../../../../components/SearchBox';
import Table from '../../../../components/Table';
import { AudioManagementContext } from '../../../../context/AudioManagementProvider';

const PhonemeLevel = () => {

  const {getCollectAnnPhonemeData,collectAnnPhonemeData} = useContext(AudioManagementContext);

  useEffect(()=>{
    getCollectAnnPhonemeData()
       // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div>
      <Header />
      <Table.Type20 data={collectAnnPhonemeData} />
    </div>
  )
}

export default PhonemeLevel;

const Header = () => {
  return (
    <div className='ml-6 mr-4 mb-5 flex items-center justify-between'>
      <div>
        <h1 className='text-heading-6 font-semibold text-ct-blue-95 leading-6'>Phoneme Annotation</h1>
        <p className='text-small text-ct-blue-90-70% mt-1.5'>List of audios that is needed to word annotation</p>
      </div>
      <div className='flex items-center gap-x-6'>
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
        <div>
          <SearchBox.Type1 inputWidth="w-44" placeholder="Search" bgColor="bg-blue-gray-A10" textColor="text-ct-blue-90-70%" />
        </div>
      </div>
    </div>
  )
}