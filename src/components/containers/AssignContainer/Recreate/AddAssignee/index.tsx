import { useContext, useState } from "react";
import Buttons from "../../../../Buttons";
import Icons from "../../../../../assets/Icons";
import AssigneeTargetBox from "./AssigneeTargetBox";
import { AssignContext } from "../../../../../context/AssignProvider";
import AddAssigneeModal from "../../CreateTarget/AddAssignee/AddAssigneeModal";

const AddAssignee = () => {
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    const drawerClose = () => {
        setDrawerOpen(false);
    };
    const openDrawer = () => {
        setDrawerOpen(true);
    };

    const { assigneeForRecreate } = useContext(AssignContext)



    return (
        <div className="h-full w-full flex flex-col justify-end">
            {assigneeForRecreate?.length > 0 && (
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
                {/* <Type1
          isDrawerOpen={drawerOpen}
          drawerClose={drawerClose}
          title="Create Critaria"
        >
          <CriteriaForm drawerClose={drawerClose} />
        </Type1> */}
                {
                    drawerOpen &&
                    <AddAssigneeModal
                        handleModal={drawerClose}
                        isRecreate={true}
                    />
                }
            </div>
        </div>
    );
};

export default AddAssignee;
