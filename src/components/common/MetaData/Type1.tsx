import { Link } from "react-router-dom";


interface Props {
    metaData: any
}
const Type1 = ({ metaData }: Props) => {
    
    return (
        <div className='py-1'>
            <div className='flex'>
                <div className={`bg-[#F4F7FA] w-[125px] rounded-t-[5px]`}>
                    <p className='text-xxs font-medium text-blue-gray-75 px-3 py-2'>
                        Script ID
                    </p>
                </div>
                <div className='w-[296px]'>
                    <p className='text-small font-medium text-blue-gray-80 px-3 py-2'>
                        {metaData.id}
                    </p>
                </div>
            </div>
            <div className='flex'>
                <div className={`bg-[#F4F7FA] w-[125px]`}>
                    <p className='text-xxs font-medium text-blue-gray-75 px-3 py-2'>
                        Age
                    </p>
                </div>
                <div className='w-[296px]'>
                    <p className='text-small font-medium text-blue-gray-80 px-3 py-2'>
                    {metaData?.isAge ? 'Child' : '--'}
                    </p>
                </div>
            </div>
            <div className='flex'>
                <div className={`bg-[#F4F7FA] w-[125px]`}>
                    <p className='text-xxs font-medium text-blue-gray-75 px-3 py-2'>
                        Data Sorce
                    </p>
                </div>
                <div className='w-[296px]'>
                    <p className='text-small font-medium text-blue-gray-80 px-3 py-2'>
                        {
                            metaData.distributionSource
                        }
                    </p>
                </div>
            </div>
            <div className='flex'>
                <div className={`bg-[#F4F7FA] w-[125px]`}>
                    <p className='text-xxs font-medium text-blue-gray-75 px-3 py-2'>
                        Domain
                    </p>
                </div>
                <div className='w-[296px]'>
                    <p className='text-small font-medium text-blue-gray-80 px-3 py-2'>
                        {
                            metaData?.domain
                        }
                    </p>
                </div>
            </div>
            <div className='flex'>
                <div className={`bg-[#F4F7FA] w-[125px]`}>
                    <p className='text-xxs font-medium text-blue-gray-75 px-3 py-2'>
                        Sub Domain
                    </p>
                </div>
                <div className='w-[296px]'>
                    <p className='text-small font-medium text-blue-gray-80 px-3 py-2'>
                        {
                            metaData?.subdomain
                        }
                    </p>
                </div>
            </div>
            <div className='flex'>
                <div className={`bg-[#F4F7FA] w-[125px] rounded-b-[5px]`}>
                    <p className='text-xxs font-medium text-blue-gray-75 px-3 py-2'>
                        Source Reference
                    </p>
                </div>
                <div className='w-[296px] '>
                    <p className='text-small font-medium text-blue-gray-80 px-3 py-2'>
                        {metaData.sourceType}
                    </p>
                    <Link to={metaData.sourceurl}>
                        <p className='text-small font-medium text-secondary-blue-50 px-3 py-2'>
                            {metaData.sourceurl}
                        </p>
                    </Link>

                </div>
            </div>

        </div>
    );
};

export default Type1;