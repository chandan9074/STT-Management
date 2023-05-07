import { useContext, useEffect } from 'react';
import BackButtonTitle from '../../../../common/BackButtonTitle';
import Layouts from '../../../../Layouts';
import Table from '../../../../Table';
import SpeechHeader from './SpeechHeader';
import { AssignContext } from '../../../../../context/AssignProvider';
import { useParams } from 'react-router-dom';

const EditSpeeches = () => {

    const { id } = useParams();

    const assignContext = useContext(AssignContext);

    const param = {
        id: id ? id : '',
        page: 1,
        pageSize: 10
    }

    useEffect(() => {
        assignContext.getResSingleTargetSpeechesAssign(param);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <Layouts.Default>
                <BackButtonTitle
                    title='Speech Upload'
                />

                <div className='mt-[9px] shadow-light-gray-4'>
                    {
                        assignContext.singleTargetSpeechesAssign &&
                        <SpeechHeader data={assignContext.singleTargetSpeechesAssign.otherInfo} />
                    }
                </div>

                {
                    assignContext.singleTargetSpeechesAssign &&
                    <Table.Type11 data={assignContext.singleTargetSpeechesAssign} />
                }

            </Layouts.Default>
        </div>
    );
};

export default EditSpeeches;