import { useContext, useEffect } from "react";
import Table from "../../../../components/Table";
import { AudioManagementContext } from "../../../../context/AudioManagementProvider";

const AllCheckedAudiosUpload = () => {

  const {getAllCheckedAudiosUploadData,allCheckedAudiosUploadData} = useContext(AudioManagementContext);

    useEffect(() => {
        getAllCheckedAudiosUploadData()
       // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]) 

  return (
    <div>
      <Table.Type25 data={allCheckedAudiosUploadData} />
    </div>
  )
}

export default AllCheckedAudiosUpload