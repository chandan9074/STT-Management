import { useContext, useEffect } from 'react';
import Table from '../../../../components/Table';
import { AudioManagementContext } from '../../../../context/AudioManagementProvider';

const CheckingStatusUpload = () => {

  const {getCheckingStatusUploadData,checkingStatusUploadData} = useContext(AudioManagementContext);

    useEffect(() => {
        getCheckingStatusUploadData()
       // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]) 

  return (
    <div>
      <Table.Type24 data={checkingStatusUploadData}/>
    </div>
  )
}

export default CheckingStatusUpload