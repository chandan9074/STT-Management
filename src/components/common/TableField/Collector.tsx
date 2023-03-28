import { collectorDT } from '../../../types/assignTypes';
import RoleImage from '../../Image/RoleImage';

const Collector = ({ data }: { data: collectorDT }) => {
    return (
        <div>
            <div className='flex items-center gap-x-2'>
                <RoleImage height='h-4' width='w-4' role={data?.role} />
                <div>
                    <h1 className='text-blue-gray-80 text-xs font-medium'>{data?.name}</h1>
                    <h1 className='text-blue-gray-75 text-xxs'>{data?.address}</h1>
                </div>
            </div>
        </div>
    );
};

export default Collector;