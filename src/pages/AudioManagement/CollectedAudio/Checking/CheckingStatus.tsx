import Buttons from '../../../../components/Buttons';
import { SearchBox } from '../../../../components/SearchBox';
import Table from '../../../../components/Table';
import { checkingStatusData } from '../../../../data/audioManagement/AudioManagementData';

const CheckingStatus = () => {
    return (
        <div>
            <Header />
            <Table.Type17 data={checkingStatusData} />
        </div>

    );
};

export default CheckingStatus;

const Header = () => {
    return (
        <div className='ml-6 mr-4 mb-5 flex items-center justify-between'>
            <div>
                <h1 className='text-heading-6 font-semibold text-ct-blue-95 leading-6'>Raw Audio</h1>
                <p className='text-small text-ct-blue-90-70% mt-1.5'>List of unprocessed audio to be checked</p>
            </div>
            <div className='flex items-center gap-x-6'>
                <Buttons.BgHoverBtn
                    title="Download Script"
                    paddingY="py-2"
                    paddingX="px-4"
                    borderRadius="rounded-[6px]"
                    textColor="text-secondary-blue-50"
                    fontSize="text-small"
                    fontWeight="font-medium"
                    duration="duration-300"
                    hoverBgColor="hover:bg-white"
                />
                <div>
                    <SearchBox.Type1 inputWidth="w-44" placeholder="Search" paddingX="px-3" paddingY="py-2" bgColor="bg-blue-gray-A10" textColor="text-ct-blue-90-70%" />
                </div>
            </div>
        </div>
    )
}