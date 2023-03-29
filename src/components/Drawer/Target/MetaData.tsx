import { Dispatch, SetStateAction } from 'react';
import Icons from '../../../assets/Icons';
import { customSingleCriteriaDT } from '../../../types/assignTypes';
import { allScriptResDT } from '../../../types/script';
import BackButtonTitle from '../../common/BackButtonTitle';

type Props = {
    setIsMetaData: Dispatch<SetStateAction<boolean>>;
    data: allScriptResDT | undefined;
}

const MetaData = ({ setIsMetaData, data }: Props) => {    

    const singleValue1: customSingleCriteriaDT[] = [
        {
            title: 'Script Id',
            value: data?.id || '-'
        },
        {
            title: 'Age',
            value: data?.isAge ? 'Child' : '--'
        },
        {
            title: 'Data Source',
            value: data?.distributionSource || '-'
        },
        {
            title: 'Domain',
            value: data?.domain || '-'
        },
        {
            title: 'Sub Domain',
            value: data?.subdomain || '-'
        },
        {
            title: 'Source Reference',
            value: data?.sourceFile || '-'
        },


    ]

    return (
        <div className='px-[26px] py-[30px] animate-fadeIn'>
            <BackButtonTitle
                setIsData={setIsMetaData}
                title='Script Metadata'
            />

            <div className='mt-4'>
                {singleValue1?.map((item: customSingleCriteriaDT, i: number) => (
                    <div className={` grid grid-cols-12`} key={i}>

                        <div className={`${(i === 0) && 'rounded-t-[5px]'} ${(i === (singleValue1.length - 1)) && 'rounded-b-[5px] pb-[10px]'} col-span-4 bg-ct-blue-05 pt-3 pr-2 pl-3`}>
                            <h1 className="text-blue-gray-75 font-medium text-xxs leading-15px whitespace-nowrap">
                                {item?.title}
                            </h1>
                        </div>

                        <div className="col-span-8 pt-3 pr-2 pl-3">
                            {item?.title === "Source Reference" ? (
                                <div>
                                    <div className='gap-x-2 flex items-center'>
                                        <img className='w-6 h-6' src={Icons.PhotoGallery} alt="" />
                                        <h1 className="text-blue-gray-80 font-medium text-small leading-15px">
                                            {String(item.value)}
                                        </h1>
                                    </div>
                                    <div className='mt-3 w-[119px] h-[119px] relative'>
                                        <img className='w-full h-full' src={String(item.value)} alt="" />
                                        <img className='w-10 h-10 absolute left-[35%] top-[35%] ' src={Icons.PhotoGallery} alt="" />
                                    </div>
                                </div>
                            ) : (
                                <h1 className="text-blue-gray-80 font-medium text-small leading-15px">
                                    {String(item.value)}
                                </h1>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MetaData;