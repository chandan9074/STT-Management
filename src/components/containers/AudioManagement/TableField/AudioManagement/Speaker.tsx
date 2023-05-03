import { singleSpeakerDT, speakerLocalityDT } from "../../../../../types/audioManagementTypes"
import RoleImage from "../../../../Image/RoleImage"

type Props = {
    data: speakerLocalityDT;
    isLocality: boolean;
}

const Speaker = ({ data, isLocality }: Props) => {
    return (
        <div className='flex justify-between items-center cursor-default'>
            <div>
                <div className="flex flex-col gap-y-1">
                    {
                        data?.speakers?.map((item: singleSpeakerDT, i: number) => (
                            <div key={i}>
                                <div className='flex items-center gap-x-2'>
                                    <RoleImage role={item.gender === "male" ? "speaker" : "speakerFemale"} height="w-4" width="h-4" />
                                    <h1 className='text-blue-gray-80 text-xs font-medium'>{item.name}</h1>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {
                    isLocality &&
                    <h2 className="text-xxs font-normal text-blue-gray-75 pl-6">{data.locality}</h2>
                }
            </div>
        </div>
    )
}

export default Speaker