import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SpeechHeader from '../../components/containers/userManagement/Speeches/SpeechHeader'
import SpeechTable from '../../components/containers/userManagement/Speeches/SpeechTable'
import Layouts from '../../components/Layouts'
import { Navigator } from '../../components/Navigator'
import * as PATH from '../../helpers/Slug'
import { UserManagementContext } from '../../context/UserManagement'

const Speech = () => {
    const { id, sId } = useParams<{ id: string, sId: string }>();
    const { getUserTargetPendingSpeeches, targetPendingSpeeches } = useContext(UserManagementContext);
    useEffect(() => {
        if (sId) {
            getUserTargetPendingSpeeches(sId);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sId])

    return (
        <Layouts.Forth>
            <div className="min-h-[calc(100vh-9.5vh)]">
                <Navigator.Back path={`${PATH.ACTIVE_USER_PATH}/${id}`} title={`Speech Upload, Id: ${sId?.substring(0, 7)}`} />
                <div className='mt-1 bg-white shadow-light-gray w-full py-7 px-6 rounded-[8px]'>
                    {targetPendingSpeeches.otherInfo && <SpeechHeader data={targetPendingSpeeches.otherInfo} />}
                    {targetPendingSpeeches.speechData && <SpeechTable data={targetPendingSpeeches} />}
                </div>
            </div>
        </Layouts.Forth>
    )
}

export default Speech