import { useContext, useEffect } from "react"
import Table from "../../../../components/Table"
import { AudioManagementContext } from "../../../../context/AudioManagementProvider"

const PhonemeLevelUploadVal = () => {

  const { getPhonemeLevelUploadVal, phonemeLevelUploadVal } = useContext(AudioManagementContext)

  useEffect(()=> {
    getPhonemeLevelUploadVal();
       // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <Table.Type34 data={phonemeLevelUploadVal} />
  )
}

export default PhonemeLevelUploadVal