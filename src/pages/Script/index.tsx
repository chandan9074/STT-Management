import { useContext, useState } from "react";
import Layouts from "../../components/Layouts";
import Header from "../../components/containers/script/Header";
import { CustomModal } from "../../components/common/CustomModal";
import { ScriptContext } from "../../context/ScriptProvider";
import ScriptTable from "../../components/containers/script/ScriptTable";
import { scriptResDT } from "../../types/script";

const Script = () => {

  const scriptContext = useContext(ScriptContext);
  const [selectedScript, setSelectedScript] = useState<scriptResDT[]>([] as scriptResDT[]);

  return (
    <Layouts.Forth>
      <div className="min-h-[calc(100vh-9.5vh)]">
        <Header selectedScript={selectedScript} setSelectedScript={setSelectedScript} />
        <ScriptTable setSelectedScript={setSelectedScript} />
        <CustomModal.Type1
          open={scriptContext.modalOpen}
          setOpen={scriptContext.setModalOpen}
        />
      </div>
    </Layouts.Forth>
  );
};
export default Script;
