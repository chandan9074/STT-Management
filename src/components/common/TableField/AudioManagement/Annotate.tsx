import { annotateInfoDT } from "../../../../types/audioManagementTypes"
import RoleImage from "../../../Image/RoleImage"

type Props = {
    data: annotateInfoDT
}
const Annotate = ({data}: Props) => {
  return (
    <div>
        <div className='flex items-center gap-x-[6px]'>
            <div className={`w-1.5 h-1.5 ${data.status==="Annotating" ? "bg-primary-ct-magenta-60" : "bg-secondary-blue-50"} rounded-full`}></div>
            <h1 className={`${data.status==="Annotating" ? "text-primary-ct-magenta-60" : "text-secondary-blue-50"} text-xs font-medium`}>{data.status}...</h1>
        </div>
        <div className='flex'>
                <RoleImage role='audio checker' height='h-4' width='w-4' />
                <h1 className='ml-1.5 text-blue-gray-80 font-medium text-xxs'>{data.roleName},</h1>
                <p className='text-blue-gray-75 text-xxs font-normal'>{data.locality}</p>
            </div>
    </div>
  )
}

export default Annotate