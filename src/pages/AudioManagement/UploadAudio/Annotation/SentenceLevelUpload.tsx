import { useContext, useEffect } from "react"
import Table from "../../../../components/Table"
import { AudioManagementContext } from "../../../../context/AudioManagementProvider"

const SentenceLevelUpload = () => {

  const { getSentenceLevelUploadData, sentenceLevelUploadData } = useContext(AudioManagementContext)

  useEffect(()=> {
    getSentenceLevelUploadData();
       // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  return (
    <div>
      <Table.Type27 data={sentenceLevelUploadData} />
    </div>
  )
}

export default SentenceLevelUpload