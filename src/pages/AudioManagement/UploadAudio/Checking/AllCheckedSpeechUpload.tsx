import Table from "../../../../components/Table"
import { allCheckedSpeechData } from "../../../../data/audioManagement/UploadAudiosData"

const AllCheckedAudiosUpload = () => {
  return (
    <div>
      <Table.Type25 data={allCheckedSpeechData} />
    </div>
  )
}

export default AllCheckedAudiosUpload