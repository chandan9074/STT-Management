import { SearchBox } from '../../../components/SearchBox';
import Table from '../../../components/Table';
import { collectedAudio } from '../../../data/audioManagement/AudioManagementData';


const CollectedAudio = () => {
    return (
        // <Layouts.Third>
        <div>
            <Header />
            <Table.Type16 data={collectedAudio} />
            {/* <Outlet /> */}
        </div>
        // </Layouts.Third>
    );
};

export default CollectedAudio;


const Header = () => {
    return (
        <div className='ml-6 mr-4 mb-5 flex items-center justify-between'>
            <div>
                <h1 className='text-heading-6 font-semibold text-ct-blue-95 leading-6'>List of Raw Audio</h1>
                <p className='text-small text-ct-blue-90-70% mt-1.5'>List of raw audios that is not being picked yet</p>
            </div>
            <div>
                <SearchBox.Type1 inputWidth="w-44" placeholder="Search" paddingX="px-3" paddingY="py-2" bgColor="bg-blue-gray-A10" textColor="text-ct-blue-90-70%" />
            </div>
        </div>
    )
}