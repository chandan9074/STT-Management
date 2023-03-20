import SpeechHeader from '../../components/containers/userManagement/Speeches/SpeechHeader'
import SpeechTable from '../../components/containers/userManagement/Speeches/SpeechTable'
import Layouts from '../../components/Layouts'
import { targetSpeechData } from '../../data/assign/AssignData'

const Speech = () => {
    return (
        <Layouts.Forth>
            <div className="min-h-[calc(100vh-9.5vh)]">
                <SpeechHeader />
                <SpeechTable data={targetSpeechData}/>
            </div>
        </Layouts.Forth>
    )
}

export default Speech