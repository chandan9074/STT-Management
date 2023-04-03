import Table from "../../../../components/Table"
import { collectValSenData } from "../../../../data/audioManagement/AudioManagementData"

const PhonemeLevelUploadVal = () => {
  return (
    <Table.Type22 data={collectValSenData} />
  )
}

export default PhonemeLevelUploadVal