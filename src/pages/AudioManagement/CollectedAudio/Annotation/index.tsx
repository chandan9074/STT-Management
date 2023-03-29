import Table from "../../../../components/Table"
import { annotationData } from "../../../../data/audioManagement/AudioManagementData"

const Annotation = () => {
  return (
    <div>
        <Table.Type19 data={annotationData} />
    </div>
  )
}

export default Annotation