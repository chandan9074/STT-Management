import { Dispatch, SetStateAction } from 'react';
import Icons from '../../../assets/Icons';
import { scriptResDT } from '../../../types/script';

type Props = {
    isMetaData: boolean,
    setIsMetaData: Dispatch<SetStateAction<boolean>>
    data?: scriptResDT
    downloadable: boolean
}

const Script = ({ isMetaData, setIsMetaData, data, downloadable }: Props) => {

    return (
        <div>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-xxs text-blue-gray-75'>Script ID</h1>
                    <h1 className='text-[#780595] text-small font-medium'>{data?.id?.slice(0, 12)}</h1>
                </div>

                <div>
                    <h1 className='text-xxs text-blue-gray-75'>Data Source</h1>
                    <h1 className='text-green-90 text-small font-medium'>Mono</h1>
                </div>

                <div>
                    <h1 className='text-xxs text-blue-gray-75'>Script Domain</h1>
                    <h1 className='text-orange-70 text-small font-medium'>{data?.domain}</h1>
                </div>

                <button
                    className='w-9 h-9 flex items-center justify-center rounded-full transition ease-out duration-300 hover:bg-blue-gray-20  active:bg-blue-gray-A20'
                    onClick={() => setIsMetaData(true)}>
                    <img src={Icons.moreIcon} alt="" />
                </button>
            </div>

            <div className='border-t-[2px] border-blue-gray-20 border-dashed mt-7 mb-[21px]' />

            {
                downloadable && <div className='flex w-full items-center justify-between'>
                    <h1>{data?.title}</h1>

                    <div className='flex gap-4 items-center'>
                        <div className='flex gap-2 items-center animate-fadeIn px-2 py-2 cursor-pointer border border-white hover:border-gray-300 rounded-[4px]'>
                            <img
                                className='w-[13px] h-[13px]'
                                src={Icons.fileDownload}
                                alt="" />
                            <p className='text-xxs font-medium text-[#136EE5]'>Download Script</p>
                        </div>
                    </div>
                </div>
            }
            {/* content */}
            <div className='pt-5'>
                {/* <div className='custom-script-body'> */}
                <div style={{ height: 'calc(100vh - 320px)' }} className='overflow-y-auto'>
                    <p className='mr-3 text-base font-normal text-ct-blue-90'>
                        {data?.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Script;