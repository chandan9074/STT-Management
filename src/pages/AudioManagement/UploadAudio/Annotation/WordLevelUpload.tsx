import Table from "../../../../components/Table"
import { sentenceLevelUploadData } from "../../../../data/audioManagement/UploadAudiosData"

const WordLevelUpload = () => {
  return (
    <div>
      <Table.Type27 data={sentenceLevelUploadData} />
    </div>
  )
}

export default WordLevelUpload