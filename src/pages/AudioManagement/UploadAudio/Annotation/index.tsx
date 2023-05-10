import { useContext, useEffect } from "react"
import Table from "../../../../components/Table"
import { AudioManagementContext } from "../../../../context/AudioManagementProvider"

const AnnotationUpload = () => {
  const { getAnnotationUploadData, annotationUploadData } = useContext(AudioManagementContext)

  useEffect(()=> {
    getAnnotationUploadData();
       // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div>
        <Table.Type26 data={annotationUploadData} />
    </div>
  )
}

export default AnnotationUpload