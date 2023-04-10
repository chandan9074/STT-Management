import { useContext, useEffect } from "react";
import Table from "../../../../components/Table"
import { AudioManagementContext } from "../../../../context/AudioManagementProvider";

const PhonemeLevelValidation = () => {

  const {getCollectValPhonemeData,collectValPhonemeData} = useContext(AudioManagementContext);

  useEffect(()=>{
    getCollectValPhonemeData()
       // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div>
        <Table.Type22 data={collectValPhonemeData} />
        
    </div>
  )
}

export default PhonemeLevelValidation