import React, { useContext, useEffect } from 'react'
import Table from '../../../../components/Table'
import { AudioManagementContext } from '../../../../context/AudioManagementProvider'

const ValidatedFiles = () => {

    const {getValidatedFilesData,validatedFilesData} = useContext(AudioManagementContext)

    useEffect(()=>{
        getValidatedFilesData()
           // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])

  return (
    <div>
        <Table.Type31 data={validatedFilesData}/>
    </div>
  )
}

export default ValidatedFiles