import { useState } from "react";
import Icons from "../../../../../assets/Icons";
import Buttons from "../../../../Buttons";
import "../../../../../assets/css/table/criteria_details.css";
import { AssigneeItemDT } from "../../../../../types/assignTypes";
import { Input, Radio } from "antd";
import { SearchOutlined } from "@ant-design/icons";
type Props = {
  assigneeList: AssigneeItemDT[];
};

const AssigneeTargetModal = ({ assigneeList }: Props) => {
  const [selectedAssignee, setSelectedAssignee] =
    useState<AssigneeItemDT | null>(null);
  const [searchEnable, setSearchEnable] = useState(false);

  const handleSelectCriteria = (checked: boolean, item: AssigneeItemDT) => {
    if (checked) {
      setSelectedAssignee(item);
    } else {
      setSelectedAssignee(null);
    }
  };

  return (
    <div className="flex flex-col w-full h-[300px] pb-2 overflow-y-auto custom_scrollbar">
      <div className="flex flex-col gap-3 items-start justify-start h-full w-full py-1">
        {/* headers  */}
        {searchEnable ? (
          <Input
            className="animate-fadeIn mt-[-4px]"
            placeholder="Search"
            prefix={
              <SearchOutlined
                className="site-form-item-icon"
                style={{
                  color: "#136EE5",
                }}
              />
            }
            suffix={
              <Buttons.IconButton.Circle
                onClick={() => setSearchEnable(false)}
                size="medium"
                variant="CT-Blue"
                icon={<img src={Icons.CloseIconButton} alt="Close" />}
                background="white"
              />
            }
          />
        ) : (
          <div className="flex items-center gap-1 w-full px-4 pt-1 justify-between">
            <div>
              <p className="text-[#6B7B8C] font-[500]">
                ASSIGNEE: {assigneeList?.length}
              </p>
            </div>
            <div>
              <Buttons.IconButton.Circle
                onClick={() => setSearchEnable(true)}
                size="medium"
                variant="CT-Blue"
                icon={<SearchOutlined style={{ color: "#6B7B8C" }} />}
                background="white"
              />
            </div>
          </div>
        )}

        {/* //body  */}
        <div className="flex flex-col gap-1 items-start justify-start h-full w-full py-1 overflow-y-auto custom_scrollbar">
          {assigneeList?.map((item, index) => (
            <div
              key={item?.id}
              className={`flex items-center gap-1 w-full px-4 py-1 justify-between ${selectedAssignee?.id === item?.id && "bg-[#E1EFFE]"
                }`}
            >
              <div className="flex-[13] flex gap-3">
                <div className="flex items-center gap-2">
                  <Radio
                    checked={selectedAssignee?.id === item?.id}
                    onChange={(e) =>
                      handleSelectCriteria(e.target.checked, item)
                    }
                  />
                  <div className="w-[full] flex items-center gap-2">
                    <img
                      src={Icons.admin}
                      alt=""
                      className="w-[32px] h-[32px] object-cover"
                    />
                    <div className="flex flex-col">
                      <h4 className="font-[500] text-ct-blue-60 text-[14px]">
                        Target {item?.name}
                      </h4>
                      <p className="mt-0 text-ct-blue-60 text-xs font-[300] truncate text-ellipsis w-[280px]">
                        {item?.role}, {item?.roleId}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {selectedAssignee?.id === item?.id && (
                <div className="flex-[1] ml-10">
                  <img src={Icons.CorrectIcon} alt="" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssigneeTargetModal;
