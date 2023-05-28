import { TagDataDT } from "../../../../types/organizerTypes"

type Props = {
  data: TagDataDT
}

const SideDrawerContent = ({ data }: Props) => {
  return (
    <div className="w-full flex flex-col items-start justify-center px-6">
      <div className='w-full h-[64px] bg-blue-gray-05 rounded-full flex items-center  mt-[25px]'>
        <p className="text-blue-gray-80 text-heading-4 font-semibold pl-[18.5px]">{data.shortCut}</p>
        <div className="h-[26px] w-0 border border-ct-blue-30 border-r-[1px] ml-[14.5px]" />
        <p className="text-blue-gray-80 text-heading-6 font-semibold pl-[27px]">{data.tagName}</p>
      </div>
      <div className="flex-col gap-6">
        <div className="mt-[35px] flex-col gap-[3px]">
          <h1 className="text-xxs text-blue-gray-75">Description</h1>
          <p className="text-[15px] font-semibold text-blue-gray-80">{data.description}</p>
        </div>
        <div className="mt-[35px] flex-col gap-[3px]">
          <h1 className="text-xxs text-blue-gray-75">Date of creation</h1>
          <p className="text-small font-medium text-blue-gray-80">{data.createdAt}</p>
        </div>
        <div className="mt-[35px] flex-col gap-[3px]">
          <h1 className="text-xxs text-blue-gray-75">Last date of Modification</h1>
          <p className="text-small font-medium text-blue-gray-80">{data.lastDate}</p>
        </div>
      </div>
    </div>
  )
}

export default SideDrawerContent