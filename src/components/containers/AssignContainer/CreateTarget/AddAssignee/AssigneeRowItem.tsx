import { Checkbox } from "antd";
import Icons from "../../../../../assets/Icons";
import { useAssigneContext } from "../../../../../context/AssignProvider";
import { AssigneeItemDT } from "../../../../../types/assignTypes";
import Buttons from "../../../../Buttons";

interface Props {
  assignee: AssigneeItemDT;
}

const AssigneeRowItem = ({ assignee }: Props) => {
  const { selectAssigne } = useAssigneContext();
  return (
    <div className="flex items-start gap-1 w-full px-4  even:bg-[#F9FAFC] py-2 animate-fadeIn">
      <div className="flex-[6]">
        <div className="flex items-center gap-3">
          <Checkbox
            onChange={(e) => selectAssigne(assignee, e.target.checked)}
            checked={assignee?.isSelected}
          />
          <img src={Icons.manager} alt="Manger" />
          <div className="flex w-[80%] flex-col">
            <h4 className="font-[500] text-[#2D516E]">
              Target {assignee?.target}
            </h4>
            <p className="m-0 text-ct-blue-95 text-xs font-[300] truncate text-ellipsis w-[100%]">
              {assignee?.description}
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1] justify-self-end relative">
        <Buttons.IconButton.Circle
          size="medium"
          variant="CT-Blue"
          icon={<img src={Icons.cancel} alt="" />}
          background="transparent"
        />
      </div>
    </div>
  );
};

export default AssigneeRowItem;
