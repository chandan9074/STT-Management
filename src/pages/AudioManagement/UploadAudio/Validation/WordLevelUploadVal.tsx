import { useContext, useEffect } from "react"
import Table from "../../../../components/Table"
import { AudioManagementContext } from "../../../../context/AudioManagementProvider"

const WordLevelUploadVal = () => {

  const { getWordLevelUploadVal, wordLevelUploadVal } = useContext(AudioManagementContext)

  useEffect(()=> {
    getWordLevelUploadVal();
       // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    // <Table.Type22 data={wordLevelUploadVal} />
    <div>
      
    </div>
  )
}

export default WordLevelUploadVal