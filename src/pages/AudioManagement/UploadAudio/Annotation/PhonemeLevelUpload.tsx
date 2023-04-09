import { useContext, useEffect } from "react"
import Table from "../../../../components/Table"
import { AudioManagementContext } from "../../../../context/AudioManagementProvider"

const PhonemeLevelUpload = () => {

  const { getPhonemeLevelUploadData, phonemeLevelUploadData } = useContext(AudioManagementContext)

  useEffect(()=> {
    getPhonemeLevelUploadData();
       // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div>
    <Table.Type27 data={phonemeLevelUploadData} />
  </div>
  )
}

export default PhonemeLevelUpload