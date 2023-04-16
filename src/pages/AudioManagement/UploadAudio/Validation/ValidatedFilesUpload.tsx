import React, { useContext, useEffect } from 'react'
import Table from '../../../../components/Table'
import { AudioManagementContext } from '../../../../context/AudioManagementProvider'

const ValidatedFilesUpload = () => {

    const {getValidatedFilesUploadData,validatedFilesUploadData} = useContext(AudioManagementContext)

    useEffect(()=>{
      getValidatedFilesUploadData()
           // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])

  return (
    <div>
        <Table.Type35 data={validatedFilesUploadData}/>
    </div>
  )
}

export default ValidatedFilesUpload