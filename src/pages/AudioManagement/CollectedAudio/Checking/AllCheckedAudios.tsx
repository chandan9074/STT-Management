import { useContext, useEffect } from "react"
import Buttons from "../../../../components/Buttons"
import { SearchBox } from "../../../../components/SearchBox"
import Table from "../../../../components/Table"
import { AudioManagementContext } from "../../../../context/AudioManagementProvider"

const AllCheckedAudios = () => {

  const {getAllCheckedAudiosData,allCheckedAudiosData} = useContext(AudioManagementContext)

  useEffect(()=>{
    getAllCheckedAudiosData()
       // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div>
      <Header />
      <Table.Type18 data={allCheckedAudiosData} />
    </div>
  )
}

export default AllCheckedAudios

const Header = () => {
  return (
    <div className='ml-6 mr-4 mb-5 flex items-center justify-between'>
      <div>
        <h1 className='text-heading-6 font-semibold text-ct-blue-95 leading-6'>All checked Audios</h1>
        <p className='text-small text-ct-blue-60 mt-1.5 font-medium'>01 Selected</p>
      </div>
      <div className='flex items-center gap-x-6'>
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
        <div>
          <SearchBox.Type1 inputWidth="w-44" placeholder="Search" bgColor="bg-blue-gray-A10" textColor="text-ct-blue-90-70%" />
        </div>
      </div>
    </div>
  )
}