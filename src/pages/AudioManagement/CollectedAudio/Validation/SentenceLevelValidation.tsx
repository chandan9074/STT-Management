import { useContext, useEffect } from 'react';
import Table from '../../../../components/Table'
import { AudioManagementContext } from '../../../../context/AudioManagementProvider';

const SentenceLevelValidation = () => {

  const {getCollectValSenData,collectValSenData} = useContext(AudioManagementContext);

  useEffect(()=>{
    getCollectValSenData()
       // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div>
      <Table.Type22 data={collectValSenData} />
    </div>
  )
}

export default SentenceLevelValidation