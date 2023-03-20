import React from 'react'
import { Navigator } from '../../../../Navigator';
import { useParams, useLocation } from 'react-router-dom';

const SpeechHeader = () => {
  const { id, sId } = useParams<{ id: string, sId: string }>();
  const location = useLocation();
  console.log("pathssdfdfd", location.pathname.split("user-management/speeches")[0])
  return (
    <div>
      <Navigator.Back path={`${location.pathname.split("user-management/speeches")[0]}`} title={`Speech Upload, Id: ${sId?.substring(0, 7)}`} />
    </div>
  )
}

export default SpeechHeader;