import { RoleDataDT } from "../../../../types/organizerTypes"
import RoleImage from "../../../Image/RoleImage"

type Props = {
  data: RoleDataDT[]
}

const SideDrawerContent = ({ data }: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-6">
      <div className='w-full h-[146px] bg-blue-gray-05 rounded-full flex flex-col justify-center items-center mt-[25px]'>
        <RoleImage role={data[0].role} width="w-12" height="h-12" />
        <p className="mt-2 text-small font-medium text-blue-gray-75">{data[0].roleName}</p>
      </div>
      <div className="flex-col gap-6">
        <div className="mt-[35px] flex-col gap-[3px]">
          <h1 className="text-xxs text-blue-gray-75">Description</h1>
          <p className="text-small font-medium text-blue-gray-80">Almost before we knew it, we had left the ground. we knew it, we had left the ground.</p>
        </div>
        <div className="mt-[35px] flex-col gap-[3px]">
          <h1 className="text-xxs text-blue-gray-75">Date of creation</h1>
          <p className="text-small font-medium text-blue-gray-80">01/01/2022, 3:30 PM</p>
        </div>
        <div className="mt-[35px] flex-col gap-[3px]">
          <h1 className="text-xxs text-blue-gray-75">Date of Modification</h1>
          <p className="text-small font-medium text-blue-gray-80">01/01/2022, 3:30 PM</p>
        </div>
      </div>
    </div>
  )
}

export default SideDrawerContent