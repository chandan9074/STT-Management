import { roleDT } from '../../../types/billingTypes';
import RoleImage from '../../Image/RoleImage';

const Speaker = ({data}: {data: roleDT[]}) => {
    return (
        <div>
            {
                data?.map((item: roleDT, i: number) => (
                    <div key={i} className='gap-y-[6px]'>
                        <div className='flex items-center gap-x-2'>
                            {/* <img className='h-4 w-4' src={item.gender === 'male' ? Icons.speakerMale : Icons.SpeakerFemale} alt="" /> */}
                            <RoleImage role={item.gender === "male" ? "speaker" : "speakerFemale"} height="w-4" width="h-4" />
                            <h1 className='text-blue-gray-80 text-xs font-medium'>{item?.name}</h1>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Speaker;