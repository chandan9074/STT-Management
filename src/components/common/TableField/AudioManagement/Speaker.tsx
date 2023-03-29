import { singleSpeakerDT, speakerLocalityDT } from "../../../../types/audioManagementTypes"
import RoleImage from "../../../Image/RoleImage"

type Props = {
    data: speakerLocalityDT
}

const Speaker = ({data}: Props) => {
    return (
                <div className='flex justify-between items-center cursor-pointer'>
                    <div>
                        <div className="flex flex-wrap items-center gap-x-3">
                            {
                                data?.speakers?.map((item: singleSpeakerDT, i: number) => (
                                    <div key={i} className='gap-y-[6px]'>
                                        <div className='flex items-center gap-x-2'>
                                            <RoleImage role={item.gender === "male" ? "speaker" : "speakerFemale"} height="w-4" width="h-4" />
                                            <h1 className='text-blue-gray-80 text-xs font-medium'>{item.name}</h1>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <h2 className="text-xxs font-normal text-blue-gray-75 pl-6">{data.locality}</h2>
                    </div>


                </div>    )
}

export default Speaker