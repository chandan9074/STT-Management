import { assignSpeechData } from '../../../../../data/assign/AssignData';
import BackButtonTitle from '../../../../common/BackButtonTitle';
import Layouts from '../../../../Layouts';
import Table from '../../../../Table';
import SpeechHeader from './SpeechHeader';




const EditSpeeches = () => {
    return (
        <div>
            <Layouts.Default>
                <BackButtonTitle
                    title='Speech Upload'
                />

                <div className='mt-[9px] shadow-light-gray-4'>
                    <SpeechHeader data={assignSpeechData?.otherInfo} />
                </div>

               
                    <Table.Type11 data={assignSpeechData} />
            </Layouts.Default>
        </div>
    );
};

export default EditSpeeches;