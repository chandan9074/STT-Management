import Table from '../../../../components/Table'
import { collectAnnSenData } from '../../../../data/audioManagement/AudioManagementData'

const SentenceLevel = () => {
  return (
    <div>
        <Table.Type20 data={collectAnnSenData} />
    </div>
  )
}

export default SentenceLevel