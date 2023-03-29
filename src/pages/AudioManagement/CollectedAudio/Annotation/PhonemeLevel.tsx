import Table from '../../../../components/Table'
import { collectAnnSenData } from '../../../../data/audioManagement/AudioManagementData'

const PhonemeLevel = () => {
  return (
    <div>
        <Table.Type20 data={collectAnnSenData} />
    </div>
  )
}

export default PhonemeLevel