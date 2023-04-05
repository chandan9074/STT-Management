import Table from "../../../components/Table"
import Header from "../../../components/containers/AudioManagement/UploadAuidioVideo/Header"
import { uploadAudioData } from "../../../data/audioManagement/UploadAudiosData"



const UploadAudio = () => {
  return (
    <div>
      <Header />
      <Table.Type23 data={uploadAudioData} />
    </div>
  )
}

export default UploadAudio