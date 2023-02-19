import React, { useState } from "react";
import TargetBox from "../TargetBox";
import Type1 from "../../../../Drawer/Criteria/Type1";
import CriteriaForm from "../CreateCriteria/CriteriaForm";
import Buttons from "../../../../Buttons";
import Icons from "../../../../../assets/Icons";
import AssigneeTargetBox from "./AssigneeTargetBox";
import { useAssigneContext } from "../../../../../context/AssignProvider";

const AddAssignee = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const { selectedAssigneList } = useAssigneContext();
  const drawerClose = () => {
    setDrawerOpen(false);
  };
  const openDrawer = () => {
    setDrawerOpen(true);
  };

  return (
    <div className="h-full flex flex-col justify-end">
      {selectedAssigneList?.length > 0 && (
        <Buttons.IconWithTextButton.Tertiary
          style={{ border: "none" }}
          label={"Add Assignee"}
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

      {
        <div className="bg-white w-full h-[332px] flex rounded-t-[6px] py-4">
          <AssigneeTargetBox
            targetTitle={"Create Assignee"}
            onClick={openDrawer}
          />
        </div>
      }

      <div>
        {/* Use this for create target */}
        <Type1
          isDrawerOpen={drawerOpen}
          drawerClose={drawerClose}
          title="Create Critaria"
        >
          <CriteriaForm />
        </Type1>
      </div>
    </div>
  );
};

export default AddAssignee;
