import Table from "../../../../components/Table"
import { annotationUploadData } from "../../../../data/audioManagement/UploadAudiosData"

const AnnotationUpload = () => {
  return (
    <div>
        <Table.Type26 data={annotationUploadData} />
    </div>
  )
}

export default AnnotationUpload