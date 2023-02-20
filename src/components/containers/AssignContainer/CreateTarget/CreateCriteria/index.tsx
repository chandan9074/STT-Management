import React, { useState } from "react";
import CriteriaForm from "./CriteriaForm";
import { Drawer } from "../../../../Drawer";
import Type1 from "../../../../Drawer/Script/Type1";
import Buttons from "../../../../Buttons";
import Icons from "../../../../../assets/Icons";
import CriteriaTargetBox from "./CriteriaTargetBox";
import { useAssigneContext } from "../../../../../context/AssignProvider";
import TargetBox from "../TargetBox";

const CreateCriteria = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const { selectedCriteriaList } = useAssigneContext();

  const drawerClose = () => {
    setDrawerOpen(false);
  };
  const openDrawer = () => {
    setDrawerOpen(true);
  };
  return (
    <div className="h-full w-full flex flex-col justify-end">
      {selectedCriteriaList?.length > 0 && (
        <Buttons.IconWithTextButton.Tertiary
          style={{ border: "none" }}
          label={"Create Critaria"}
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
        <CriteriaTargetBox
          targetTitle={"Create Criteria"}
          onClick={openDrawer}
        />
      </div>

      <div>
        {/* Use this for create target */}
        <Drawer.Criteria.Type1
          isDrawerOpen={drawerOpen}
          drawerClose={drawerClose}
          title="Create Critaria"
        >
          <CriteriaForm drawerClose={drawerClose} />
        </Drawer.Criteria.Type1>
      </div>
    </div>
  );
};

export default CreateCriteria;
