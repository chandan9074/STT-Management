import React, { useContext, useState } from "react";
import Layouts from "../../components/Layouts";
import Header from "../../components/containers/script/Header";
import Table from "../../components/Table";
import { CustomModal } from "../../components/common/CustomModal";
import { ScriptContext } from "../../context/ScriptProvider";
import ScriptTable from "../../components/containers/script/ScriptTable";

const Script = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modaData, setModalData] = useState<string>("");

  const scriptContext = useContext(ScriptContext);

  return (
    <Layouts.Forth>
      <div className="min-h-[calc(100vh-9.5vh)]">
        <Header />
        <ScriptTable />
        <CustomModal.Type1
          open={scriptContext.modalOpen}
          setOpen={scriptContext.setModalOpen}
          setData={scriptContext.setModalData}
        />
      </div>
    </Layouts.Forth>
  );
};
export default Script;
