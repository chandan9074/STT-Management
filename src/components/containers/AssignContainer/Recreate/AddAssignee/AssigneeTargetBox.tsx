import { SearchOutlined } from "@ant-design/icons";
import { Radio } from "@mui/material";
import Icons from "../../../../../assets/Icons";
import { useAssigneeContext } from "../../../../../context/AssignProvider";
import { AssigneeItemDT } from "../../../../../types/assignTypes";
import Buttons from "../../../../Buttons";
import RoleImage from "../../../../Image/RoleImage";
import { Tooltip } from "../../../../Tooltip";

const AssigneeTargetBox = ({
  targetTitle,
  onClick,
}: {
  targetTitle: string;
  onClick: () => void;
}) => {

  const { setAssigneeForRecreate, assigneeForRecreate, setRecreateTable, recreateTable } = useAssigneeContext();
  // const [selectedValue, setSelectedValue] = useState<string>("");

  const selectAssignee = (
    selectedItem: AssigneeItemDT | null,
  ) => {
    if (selectedItem?.id) {
      setAssigneeForRecreate((prevList) => {
        return prevList?.map((item) => {
          if (item?.id === selectedItem?.id) {
            return { ...item, isSelected: true };
          }
          else {
            return { ...item, isSelected: false };
          }
        });
      });
      // setSelectedValue(selectedItem?.id);
      setRecreateTable({ ...recreateTable, assignee: selectedItem })
    }
  };

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
            {assigneeForRecreate.map((assignee, index) => (
              // <AssigneeRowItem assignee={item} key={index} />
              <div key={index} className="flex items-center gap-1 w-full px-[11px] py-3.5 animate-fadeIn">
                {/* <div className="flex-[6]"> */}
                {/* <div className="flex items-center gap-3"> */}
                <Radio
                  checked={recreateTable.assignee ? recreateTable.assignee.id === assignee?.id : assigneeForRecreate[0].id === assignee?.id}
                  onChange={(e) => selectAssignee(assignee)}
                  name="radio-buttons"
                  size="small"
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
                    onClick={() => setAssigneeForRecreate(assigneeForRecreate?.filter((item) => item?.id !== assignee?.id))}
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
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AssigneeTargetBox;
