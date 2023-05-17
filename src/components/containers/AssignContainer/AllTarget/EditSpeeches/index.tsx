import { useContext, useEffect, useState } from 'react';
import Layouts from '../../../../Layouts';
import Table from '../../../../Table';
import SpeechHeader from './SpeechHeader';
import { AssignContext } from '../../../../../context/AssignProvider';
import { useParams } from 'react-router-dom';
import * as PATH from '../../../../../helpers/Slug';
import { Navigator } from '../../../../Navigator';

const EditSpeeches = () => {

    const { id } = useParams();

    const assignContext = useContext(AssignContext);

    const [param, setParams] = useState({
        id: id ? id : '',
        page: 1,
        pageSize: 10
    })

    useEffect(() => {
        assignContext.getResSingleTargetSpeechesAssign(param);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [param]);

    const onsubmitSpeech = async (values: FormData) => {
        const res = await assignContext.postSingleTargetSpeechesAssign(values);
        if (res === 200) {
            assignContext.getResSingleTargetSpeechesAssign(param);
        }
    }

    const handlePageChange = (page: number) => {
        setParams({
            ...param,
            page: page
        })
    }

    return (
        <div>
            <Layouts.Default>
                <Navigator.Back path={`${PATH.ASSIGN_PATH}/${PATH.ALL_TARGET_PTAH}`} title={`Speech Upload, Id: ${id?.substring(0, 7)}`} />

                <div className='mt-[9px] shadow-light-gray-4'>
                    {
                        assignContext.singleTargetSpeechesAssign &&
                        <SpeechHeader data={assignContext.singleTargetSpeechesAssign.otherInfo} />
                    }
                </div>

                {
                    assignContext.singleTargetSpeechesAssign &&
                    <Table.Type11 data={assignContext.singleTargetSpeechesAssign} onsubmitSpeech={onsubmitSpeech} handlePageChange={handlePageChange} />
                }

            </Layouts.Default>
        </div>
    );
};

export default EditSpeeches;