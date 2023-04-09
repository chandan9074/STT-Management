import { useContext, useEffect } from "react"
import Table from "../../../../components/Table"
import { AudioManagementContext } from "../../../../context/AudioManagementProvider"

const WordLevelUpload = () => {

  const { getWordLevelUploadData, wordLevelUploadData } = useContext(AudioManagementContext)

  useEffect(()=> {
    getWordLevelUploadData();
       // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div>
      <Table.Type27 data={wordLevelUploadData} />
    </div>
  )
}

export default WordLevelUpload