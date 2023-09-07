import Icons from '../../../assets/Icons';
import { TargetItemDT, targetDT } from '../../../types/assignTypes';
import RoleImage from '../../Image/RoleImage';

type Props = {
    data?: targetDT | TargetItemDT
}

type dataType = {
    title: string,
    value: string

}

const Others = ({ data }: Props) => {

    const singleValue2: dataType[] = [
        {
            title: 'Reminder',
            value: data?.target?.reminder.join() || "-"
        },
        {
            title: 'Note',
            value: (data?.target.remark &&  (typeof(data?.target?.remark) !== 'string') && data?.target?.remark.Des) || '-'
        },
        {
            title: 'Assignee',
            value: data?.assignee.id || '-'
        },
    ]

    return (
        <div>
            {singleValue2?.map((item: dataType, i: number) => (
                <div className={` grid grid-cols-12`} key={i}>

                    <div className={`${(i === 0) && 'rounded-t-[5px]'} ${(i === (singleValue2.length - 1)) && 'rounded-b-[5px] pb-[10px]'} col-span-4 bg-ct-blue-05 pt-3  pl-3`}>
                        <h1 className="text-blue-gray-75 font-medium text-xxs  leading-15px">
                            {item?.title}
                        </h1>
                    </div>

                    <div className="col-span-8 pt-3 pr-2 pl-3 flex flex-col gap-y-4">
                        {item?.title === "Reminder" ? item.value.split(",").map((singleItem, index) => (
                            <h1 key={index} className="text-blue-gray-80 font-medium text-small leading-15px">
                                {singleItem}
                            </h1>
                        )) : item.title === "Assignee" ? <div>
                            <div>
                                {data?.assignee.role &&
                                    <div className='flex flex-col gap-y-3'>
                                        <div className='flex items-center gap-x-2'>
                                            <RoleImage role={data?.assignee.role} height='h-4' width='w-4' />
                                            <h3 className='text-small font-medium text-ct-blue-95'>{data.assignee.name}</h3>
                                        </div>
                                        <div className='flex items-center gap-x-2'>
                                            <img src={Icons.military_tech} alt=''/>
                                            <h3 className='text-small text-blue-gray-80'>{data.assignee.role}</h3>
                                        </div>
                                        <div className='flex items-center gap-x-2'>
                                            <img src={Icons.mail} alt=''/>
                                            <h3 className='text-small text-blue-gray-80'>{data.assignee.email}</h3>
                                        </div>
                                        <div className='flex items-center gap-x-2'>
                                            <img src={Icons.call} alt=''/>
                                            <h3 className='text-small text-blue-gray-80'>{data.assignee.contact}</h3>
                                        </div>
                                        <div className='flex items-center gap-x-2'>
                                            <img src={Icons.home} alt=''/>
                                            <h3 className='text-small text-blue-gray-80'>{data.assignee.address}</h3>
                                        </div>
                                    </div>
                                }
                            </div>

                        </div> :
                            <h1 className="text-blue-gray-80 font-medium text-small leading-15px">
                                {item.value}
                            </h1>}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Others;