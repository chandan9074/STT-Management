import { validateDT } from "../../../../types/audioManagementTypes"
import RoleImage from "../../../Image/RoleImage"

type Props = {
    data: validateDT
  }
const ValidateCol = ({ data }: Props) => {
  return (
    <>
        {
          ((data.status === '') && (data.locality === '')) ? <div>--</div>
            :
            data.status ?
              <div>
                <div className='flex items-center gap-x-[7px] pl-[2px]'>
                  <div className={`w-1.5 h-1.5 ${data.status === "Validating" ? "bg-primary-ct-magenta-60" : "bg-secondary-blue-50"} rounded-full`}></div>
                  <h1 className={`${data.status === "Validating" ? "text-primary-ct-magenta-60" : "text-secondary-blue-50"} text-xs font-medium`}>{data.status}...</h1>
                </div>
                <div className='flex'>
                  <RoleImage role={data.validators.role} height='h-4' width='w-4' />
                  <h1 className='ml-1.5 text-blue-gray-80 font-medium text-xxs'>{data.validators.name},</h1>
                  <p className='text-blue-gray-75 text-xxs font-normal pl-1 truncate'>{data.locality}</p>
                </div>
              </div> :
              <div >
                <div className='flex'>
                  <RoleImage role={data.validators.role} height='h-4' width='w-4' />
                  <h1 className='ml-1.5 text-blue-gray-80 font-medium text-xxs'>{data.validators.name}</h1>
                </div>
                <p className='text-blue-gray-75 text-xxs font-normal pl-[22px] truncate'>{data.locality}</p>
              </div>
        }

      </>
  )
}

export default ValidateCol