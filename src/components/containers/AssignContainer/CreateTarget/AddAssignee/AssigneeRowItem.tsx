import { Checkbox } from "antd";
import Icons from "../../../../../assets/Icons";
import { useAssigneContext } from "../../../../../context/AssignProvider";
import { AssigneeItemDT } from "../../../../../types/assignTypes";
import Buttons from "../../../../Buttons";
import RoleImage from "../../../../Image/RoleImage";
import { Tooltip } from "../../../../Tooltip";

interface Props {
  assignee: AssigneeItemDT;
}

const AssigneeRowItem = ({ assignee }: Props) => {
  const { selectAssigne, deleteSingleAssignee } = useAssigneContext();
  return (
    <div className="flex items-center gap-1 w-full px-[11px] py-3.5 animate-fadeIn">
      {/* <div className="flex-[6]"> */}
      {/* <div className="flex items-center gap-3"> */}
      <Checkbox
        onChange={(e) => selectAssigne(assignee, e.target.checked)}
        checked={assignee.isSelected}
      />
      <div className="flex-1 ml-[11px] flex items-start gap-x-2.5">
        {/* <img src={Icons.manager} alt="Manger" /> */}
        <RoleImage role={assignee.role} width="w-8" height="w-8" />
        <div className="flex flex-col">
          <h4 className="font-semibold text-small text-ct-blue-80 leading-4">
            {assignee.name}
          </h4>
          <p className="mt-1 text-ct-blue-90-70% text-small font-[400] leading-4">
            {assignee.role}, {assignee.roleID}
          </p>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
      <div className=" justify-self-end relative group flex items-end flex-col">
        <Buttons.IconButton.Circle
          onClick={() => deleteSingleAssignee(assignee.id)}
          size="medium"
          variant="CT-Blue"
          icon={<img src={Icons.cancel} alt="" />}
          background="transparent"
        />
        <div className="absolute group-hover:block hidden animate-fadeIn top-10 z-[99999]">
          <Tooltip.Type1 title="Remove" align="right" />
        </div>
      </div>
    </div>
  );
};

export default AssigneeRowItem;
