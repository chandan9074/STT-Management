import { customSingleCriteriaDT, targetDT } from '../../../types/assignTypes';

type Props = {
    data?: targetDT
}

const Others = ({ data }: Props) => {
    const singleValue2: customSingleCriteriaDT[] = [
        {
            title: 'Reminder',
            value: data?.target?.reminder.join() || "-"
        },
        {
            title: 'Note',
            value: data?.target?.remark || '-'
        },
    ]

    return (
        <div>
            {singleValue2?.map((item: customSingleCriteriaDT, i: number) => (
                <div className={` grid grid-cols-12`} key={i}>

                    <div className={`${(i === 0) && 'rounded-t-[5px]'} ${(i === (singleValue2.length - 1)) && 'rounded-b-[5px] pb-[10px]'} col-span-4 bg-ct-blue-05 pt-3  pl-3`}>
                        <h1 className="text-blue-gray-75 font-medium text-xxs  leading-15px">
                            {item?.title}
                        </h1>
                    </div>

                    <div className="col-span-8 pt-3 pr-2 pl-3">
                        <h1 className="text-blue-gray-80 font-medium text-small leading-15px">
                            {item?.value}
                        </h1>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Others;