import React, { useEffect, useState } from "react";
import TargetBox from "../TargetBox";
import Type1 from "../../../../Drawer/Criteria/Type1";
import CriteriaForm from "../CreateCriteria/CriteriaForm";
import Buttons from "../../../../Buttons";
import Icons from "../../../../../assets/Icons";
import AssigneeTargetBox from "./AssigneeTargetBox";
import { useAssigneContext } from "../../../../../context/AssignProvider";
import AddAssigneeModal from './AddAssigneeModal';

const AddAssignee = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const { selectedAssigneList, getAssignee } = useAssigneContext();

  useEffect(() => {
    getAssignee();
  }, []);

  const drawerClose = () => {
    setDrawerOpen(false);
  };
  const openDrawer = () => {
    setDrawerOpen(true);
  };

  return (
    <div className="h-full w-full flex flex-col justify-end">
      {selectedAssigneList?.length > 0 && (
        <div className="mb-2">
          <Buttons.IconWithTextButton.Tertiary
            style={{ border: "none" }}
            label={"Add Assignee"}
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

      {
        <div className="bg-white w-full h-[332px] flex rounded-t-[6px]">
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
          <CriteriaForm drawerClose={drawerClose} />
        </Type1>
      </div>
    </div>
  );
};

export default AddAssignee;
