import { DeviceDataDT } from "../../../../types/organizerTypes"
import DeviceImage from "../../../Image/DeviceImage"

type Props = {
    data: DeviceDataDT
}

const SideDrawerContent = ({ data }: Props) => {
    return (
        <div className="w-full flex flex-col justify-center px-6">
            <div className='w-full h-[64px] bg-blue-gray-05 border-blue-gray-A20 border-dashed border-[1px] flex items-center mt-[25px]'>
                <div className="bg-blue-gray-05 border-blue-gray-A20 border-dashed border-r-[1px] px-[16.25px] py-3">
                    <DeviceImage device={data.device} width="w-9" height="h-9" />
                </div>
                <div className="flex flex-col gap-y-[2px] pl-[23.5px]">
                    <p className=" text-base font-medium text-blue-gray-80">{data.brand}</p>
                    <p className=" text-[15px] font-normal text-blue-gray-75">{data.model}</p>
                </div>
            </div>
            <div className="flex-col gap-6">
                <div className="mt-[35px] flex-col gap-[3px]">
                    <h1 className="text-xxs text-blue-gray-75">Date of Creation</h1>
                    <p className="text-small font-medium text-blue-gray-80">{data.createdAt}</p>
                </div>
                <div className="mt-[35px] flex-col gap-[3px]">
                    <h1 className="text-xxs text-blue-gray-75">Date of Modification</h1>
                    <p className="text-small font-medium text-blue-gray-80">{data.lastDate}</p>
                </div>
            </div>
        </div>
    )
}

export default SideDrawerContent