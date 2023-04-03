import Table from '../../../../components/Table'
import { checkingStatusUploadData } from '../../../../data/audioManagement/UploadAudiosData'

const CheckingStatusUpload = () => {
  return (
    <div>
      <Table.Type24 data={checkingStatusUploadData}/>
    </div>
  )
}

export default CheckingStatusUpload