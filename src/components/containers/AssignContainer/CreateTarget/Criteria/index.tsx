
import { useEffect, useState } from "react";
import CriteriaForm from "./CriteriaForm";
import { Drawer } from "../../../../Drawer";
import Buttons from "../../../../Buttons";
import Icons from "../../../../../assets/Icons";
import CriteriaTargetBox from "./CriteriaTargetBox";
import { useAssigneeContext } from "../../../../../context/AssignProvider";
import { CriteriaItemDT } from "../../../../../types/assignTypes";

const CreateCriteria = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const { selectedCriteriaList, getCriteria, setSingleCriteriaData } = useAssigneeContext();

  useEffect(() => {
    getCriteria();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const drawerClose = () => {
    setDrawerOpen(false);
  };
  const openDrawer = () => {
    setDrawerOpen(true);
    setSingleCriteriaData({} as CriteriaItemDT);
  };
  return (
    <div className="h-full w-full flex flex-col justify-end">
      {selectedCriteriaList?.length > 0 && (
        <div className="mb-2">
          <Buttons.IconWithTextButton.Tertiary
            style={{ border: "none" }}
            label={"Create Critaria"}
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
