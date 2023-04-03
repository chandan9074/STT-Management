import Table from "../../../../components/Table"
import { collectValSenData } from "../../../../data/audioManagement/AudioManagementData"

const WordLevelUploadVal = () => {
  return (
    <Table.Type22 data={collectValSenData} />
  )
}

export default WordLevelUploadVal