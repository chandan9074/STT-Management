import { useContext, useEffect } from 'react';
import Table from '../../../../components/Table';
import { AudioManagementContext } from '../../../../context/AudioManagementProvider';

const WordLevelValidation = () => {

  const {getCollectValWordData,collectValWordData} = useContext(AudioManagementContext);

  useEffect(()=>{
    getCollectValWordData()
       // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div>
        <Table.Type22 data={collectValWordData} />
    </div>
  )
}

export default WordLevelValidation