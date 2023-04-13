import { useContext, useEffect } from "react"
import Table from "../../../../components/Table"
import { AudioManagementContext } from "../../../../context/AudioManagementProvider"

const SentenceLevelUploadVal = () => {

  const { getSentenceLevelUploadVal, sentenceLevelUploadVal } = useContext(AudioManagementContext)

  useEffect(() => {
    getSentenceLevelUploadVal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Table.Type34 data={sentenceLevelUploadVal}/>
  )
}

export default SentenceLevelUploadVal