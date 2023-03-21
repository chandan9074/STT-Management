import React from 'react'
import { useParams } from 'react-router-dom'
import SpeechHeader from '../../components/containers/userManagement/Speeches/SpeechHeader'
import SpeechTable from '../../components/containers/userManagement/Speeches/SpeechTable'
import Layouts from '../../components/Layouts'
import { targetSpeechData } from '../../data/assign/AssignData'
import { Navigator } from '../../components/Navigator'
import * as PATH from '../../helpers/Slug'

const Speech = () => {
    const { id, sId } = useParams<{ id: string, sId: string }>();
    return (
        <Layouts.Forth>
            <div className="min-h-[calc(100vh-9.5vh)]">
                <Navigator.Back path={`${PATH.ACTIVE_USER_PATH}/${id}`} title={`Speech Upload, Id: ${sId?.substring(0, 7)}`} />
                <div className='mt-1 bg-white w-full py-7 px-6 rounded-[8px]'>
                    <SpeechHeader />
                    <SpeechTable data={targetSpeechData} />
                </div>
            </div>
        </Layouts.Forth>
    )
}

export default Speech