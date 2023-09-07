import Table from "../../../components/Table";
import Header from "../../../components/containers/AudioManagement/UploadAuidioVideo/Header";
import { useContext, useEffect } from "react";
import { AudioManagementContext } from "../../../context/AudioManagementProvider";

const UploadAudio = () => {
  const { getUploadAudioData, uploadAudioData } = useContext(
    AudioManagementContext
  );

  const query = {
    page: 1,
    pageSize: 20,
    dataType: "",
    uploader: "",
    uploadPeriod: "",
    domain: "",
  };

  useEffect(() => {
    getUploadAudioData(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <Table.Type23 data={uploadAudioData.data} />
    </div>
  );
};

export default UploadAudio;
