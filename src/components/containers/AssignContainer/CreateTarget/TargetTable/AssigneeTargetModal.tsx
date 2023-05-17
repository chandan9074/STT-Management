import { useEffect, useState } from "react";
import Icons from "../../../../../assets/Icons";
import Buttons from "../../../../Buttons";
import "../../../../../assets/css/table/criteria_details.css";
import { AssigneeItemDT, updateDraftTargetQueryParams } from "../../../../../types/assignTypes";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useAssigneeContext } from "../../../../../context/AssignProvider";
import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import RoleImage from "../../../../Image/RoleImage";
type Props = {
  selectedTargetId: string;
  selectedAssigneeId: string;
  handleSelectItem: (item: AssigneeItemDT, params?: updateDraftTargetQueryParams) => void;
  selectedItemList: AssigneeItemDT[];
  setOpenAssigneeModal?: React.Dispatch<React.SetStateAction<boolean>>;
};

const AssigneeTargetModal = ({ selectedAssigneeId, selectedTargetId, handleSelectItem, selectedItemList, setOpenAssigneeModal }: Props) => {
  const [searchEnable, setSearchEnable] = useState(false);

  const { getAssignee } = useAssigneeContext();


  useEffect(() => {
    getAssignee();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectAssignee = (item: AssigneeItemDT) => {
    const params = {
      id: selectedTargetId,
      assignee: item.roleID,
    }
    // updateDraftTarget(params);

    // setOpenAssigneeModal(false);
    handleSelectItem(item, params);
  };

  return (
    <>
      <div onClick={() => setOpenAssigneeModal && setOpenAssigneeModal(false)} className="bg-opacity-5 fixed top-0 left-0 w-full h-screen bg-black animate-fadeIn z-[90]" />
      <div className="flex flex-col w-[376px] h-[175px] pb-2 overflow-y-auto custom_scrollbar bg-white rounded-[4px] relative z-[110]">
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
                  ASSIGNEE: {selectedItemList?.length}
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
            <FormControl sx={{ width: "100%" }}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={selectedAssigneeId}
                name="radio-buttons-group"
              >
                {selectedItemList?.map((item, index) => (
                  <div
                    key={item?.id}
                    className={`flex items-center gap-1 w-full pr-4 pl-1.5 py-1 justify-between ${selectedAssigneeId === item?.id && "bg-[#E1EFFE]"
                      }`}
                  >
                    <div className="flex-[13] flex gap-3">
                      <div className="flex items-center gap-1">
                        {/* <Radio style={{ backgroundColor: "transparent" }} size="small" checked={selectedAssigneeId === item?.id} onChange={() => handleSelectAssignee(item)} /> */}
                        <FormControlLabel value={item?.id} sx={{ m: 0 }} control={<Radio size="small" onChange={() => handleSelectAssignee(item)} />} label={<Typography sx={{ display: "none" }}>Criteria</Typography>} />
                        <div className="w-full flex items-center gap-2">
                          <RoleImage role={item.role} width="w-8" height="h-8" />
                          <div className="flex flex-col">
                            <h4 className={`font-semibold ${selectedAssigneeId === item?.id ? "text-ct-blue-60" : "text-ct-blue-80"} text-small leading-4`}>
                              {item?.name}
                            </h4>
                            <p className={`${selectedAssigneeId === item?.id ? "text-ct-blue-60" : "text-ct-blue-90-68%"} text-small leading-4 font-[300] truncate text-ellipsis w-[280px] mt-0.5`}>
                              {item?.role}, {item?.id}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {selectedAssigneeId === item?.id && (
                      <div className="flex-[1] ml-10">
                        <img src={Icons.CorrectIcon} alt="" />
                      </div>
                    )}
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssigneeTargetModal;
