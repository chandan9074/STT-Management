import Table from '../../../../components/Table'
import { collectValSenData } from '../../../../data/audioManagement/AudioManagementData'

const WordLevelValidation = () => {
  return (
    <div>
        <Table.Type22 data={collectValSenData} />
    </div>
  )
}

export default WordLevelValidation