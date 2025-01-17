import { SearchOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";
import Icons from "../../../../../assets/Icons";
import { useAssigneeContext } from "../../../../../context/AssignProvider";
import Buttons from "../../../../Buttons";
import AssigneeRowItem from "./AssigneeRowItem";
import { useState } from "react";
import { SearchBox } from "../../../../SearchBox";

const AssigneeTargetBox = ({
  targetTitle,
  onClick,
}: {
  targetTitle: string;
  onClick: () => void;
}) => {
  const [isSearchBox, setIsSearchBox] = useState(false);

  const { selectedAssigneList, selectAssigne } = useAssigneeContext();

  const checkedAssigneeList = selectedAssigneList?.filter(
    (item) => item?.isSelected
  );
  const isAllSelected =
    checkedAssigneeList?.length === selectedAssigneList?.length;
  const indeterminate =
    checkedAssigneeList?.length !== selectedAssigneList?.length &&
    checkedAssigneeList?.length > 0;

  return (
    <>
      {selectedAssigneList?.length === 0 ? (
        <div className="w-full h-full flex justify-center items-center">
          <Buttons.IconWithTextButton.Tertiary
            label={targetTitle}
            size="small"
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
        <div className="flex flex-col items-start justify-start h-full w-full pb-1">
          {/* headers  */}
          {
            !isSearchBox ? 
            <div className="flex items-center gap-1 w-full pt-3 pb-1 px-[11px]">
              <Checkbox
                onChange={(e) => selectAssigne(null, e.target.checked, true)}
                checked={isAllSelected}
                indeterminate={indeterminate}
              />
              <div className="flex-1 ml-5">
                <p className="text-ct-blue-40 font-semibold text-xxs">ASSIGNEE: {selectedAssigneList.length}</p>
              </div>
              <div className="self-end">
                <Buttons.IconButton.Circle
                  size="medium"
                  variant="CT-Blue"
                  icon={<SearchOutlined style={{ color: "#6B7B8C" }} />}
                  background="white"
                  onClick={() => setIsSearchBox(true)}
                />
              </div>
            </div> : <SearchBox.Type2 inputWidth='w-[310px]' placeholder='Search Assignee...' bgColor='bg-white' textColor='text-blue-gray-80' setIsSearchBox={setIsSearchBox}/>
          }
          {/* //body  */}
          <div className="flex flex-col gap-1 items-start justify-start h-full w-full py-1 overflow-y-auto custom_scrollbar">
            {selectedAssigneList.map((item, index) => (
              <AssigneeRowItem assignee={item} key={index} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AssigneeTargetBox;
