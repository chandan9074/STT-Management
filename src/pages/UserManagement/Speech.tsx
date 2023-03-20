import React from 'react'
import SpeechHeader from '../../components/containers/userManagement/Speeches/SpeechHeader'
import Layouts from '../../components/Layouts'

const Speech = () => {
    return (
        <Layouts.Forth>
            <div className="min-h-[calc(100vh-9.5vh)]">
                <SpeechHeader />
            </div>
        </Layouts.Forth>
    )
}

export default Speech