import Table from "../../../../components/Table"
import { allCheckedAudiosData } from "../../../../data/audioManagement/AudioManagementData"

const AllCheckedAudios = () => {
  return (
    <div>
        <Table.Type18 data={allCheckedAudiosData} />
    </div>
  )
}

export default AllCheckedAudios