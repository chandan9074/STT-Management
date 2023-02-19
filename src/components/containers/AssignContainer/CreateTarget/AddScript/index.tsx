import React, { useState } from "react";
import Icons from "../../../../../assets/Icons";
import { useAssigneContext } from "../../../../../context/AssignProvider";
import Buttons from "../../../../Buttons";
import { Drawer } from "../../../../Drawer";
import ScriptModal from "./ScriptModal";
import ScriptTargetBox from "./ScriptTargetBox";

const AddSript = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { selectedScriptList } = useAssigneContext();
  const drawerClose = () => {
    setDrawerOpen(false);
  };

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  return (
    <div className="h-full flex flex-col justify-end">
      {selectedScriptList?.length > 0 && (
        <Buttons.IconWithTextButton.Tertiary
          style={{ border: "none" }}
          label={"Add Script"}
          size="medium"
          variant="Blue"
          disabled={false}
          icon={
            <img src={Icons.AddBlue} className="w-[12px] h-[12px]" alt="" />
          }
          iconAlign="start"
          onClick={openDrawer}
        />
      )}

      <div className="bg-white w-full h-[332px] flex rounded-t-[6px] py-4">
        <ScriptTargetBox targetTitle={"Add Script"} onClick={openDrawer} />
      </div>
      <div>
        {/* Use this for create target */}
        <Drawer.Script.Type1
          isDrawerOpen={drawerOpen}
          drawerClose={drawerClose}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      </div>
      {modalOpen && (
        <ScriptModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
    </div>
  );
};

export default AddSript;
