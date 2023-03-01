import React, { useEffect, useState } from "react";
import Icons from "../../../../../assets/Icons";
import { useAssigneContext } from "../../../../../context/AssignProvider";
import { singleScriptDT } from "../../../../../types/assignTypes";
import Buttons from "../../../../Buttons";
import { Drawer } from "../../../../Drawer";
import ScriptModal from "./ScriptModal";
import ScriptTargetBox from "./ScriptTargetBox";

const AddSript = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalScript, setModalScript] = useState<singleScriptDT>({} as singleScriptDT);
  const { selectedScriptList, getSelectedScript } = useAssigneContext();

  useEffect(() => {
    getSelectedScript();
  }, []);

  console.log("selectedScriptList", selectedScriptList)

  const drawerClose = () => {
    setDrawerOpen(false);
  };

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  return (
    <div className="h-full w-full flex flex-col justify-end">
      {selectedScriptList?.length > 0 && (
        <div className="mb-2">
          <Buttons.IconWithTextButton.Tertiary
            style={{ border: "none" }}
            label={"Add Script"}
            size="small"
            variant="Blue"
            disabled={false}
            icon={
              <img src={Icons.AddBlue} className="w-[12px] h-[12px]" alt="" />
            }
            iconAlign="start"
            onClick={openDrawer}
          />
        </div>
      )}

      <div className="bg-white w-full h-[332px] flex rounded-t-[6px]">
        <ScriptTargetBox targetTitle={"Add Script"} onClick={openDrawer} />
      </div>
      <div>
        {/* Use this for create target */}
        <Drawer.Script.Type1
          isDrawerOpen={drawerOpen}
          drawerClose={drawerClose}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          setModalScript={setModalScript}
        />
      </div>
      {modalOpen && (
        <ScriptModal modalOpen={modalOpen} setModalOpen={setModalOpen} data={modalScript} />
      )}
    </div>
  );
};

export default AddSript;
