import Table from "../../../components/Table"
import { uploadAudioData } from "../../../data/audioManagement/UploadAudiosData"



const UploadAudio = () => {
  return (
    <div>
      <Table.Type23 data={uploadAudioData} />
    </div>
  )
}

export default UploadAudio