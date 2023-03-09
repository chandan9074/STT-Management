import { SearchOutlined } from "@ant-design/icons";
import Icons from "../../../../../assets/Icons";
import { useAssigneeContext } from "../../../../../context/AssignProvider";
import Buttons from "../../../../Buttons";
import AssigneeRowItem from "./AssigneeRowItem";

const AssigneeTargetBox = ({
  targetTitle,
  onClick,
}: {
  targetTitle: string;
  onClick: () => void;
}) => {
  const { assigneeForRecreate } = useAssigneeContext();

  // const checkedAssigneeList = selectedAssigneList?.filter(
  //   (item) => item?.isSelected
  // );
  // const isAllSelected =
  //   checkedAssigneeList?.length === selectedAssigneList?.length;
  // const indeterminate =
  //   checkedAssigneeList?.length !== selectedAssigneList?.length &&
  //   checkedAssigneeList?.length > 0;

  return (
    <>
      {assigneeForRecreate?.length === 0 ? (
        <div className="w-full h-full flex justify-center items-center">
          <Buttons.IconWithTextButton.Tertiary
            label={targetTitle}
            size="medium"
            variant="Blue"
            disabled={false}
            icon={
              <img src={Icons.AddBlue} className="w-[12px] h-[12px]" alt="" />
            }
            iconAlign="start"
            onClick={onClick}
          />
        </div>
      ) : (
        <div className="flex flex-col items-start justify-start h-full w-full py-1">
          {/* headers  */}
          <div className="flex items-center justify-between w-full pt-3 pb-1 px-[11px]">
            <p className="text-ct-blue-40 font-semibold text-xxs">ASSIGNEE: {assigneeForRecreate.length}</p>
            <div className="self-end">
              <Buttons.IconButton.Circle
                size="medium"
                variant="CT-Blue"
                icon={<SearchOutlined style={{ color: "#6B7B8C" }} />}
                background="white"
              />
            </div>
          </div>
          {/* //body  */}
          <div className="flex flex-col gap-1 items-start justify-start h-full w-full py-1 overflow-y-auto custom_scrollbar">
            {assigneeForRecreate.map((item, index) => (
              <AssigneeRowItem assignee={item} key={index} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AssigneeTargetBox;
