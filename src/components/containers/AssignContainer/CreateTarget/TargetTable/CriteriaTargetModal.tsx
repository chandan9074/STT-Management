import { useEffect, useState } from "react";
import Icons from "../../../../../assets/Icons";
import Buttons from "../../../../Buttons";
import "../../../../../assets/css/table/criteria_details.css";
import { CriteriaItemDT, updateDraftTargetQueryParams } from "../../../../../types/assignTypes";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useAssigneeContext } from "../../../../../context/AssignProvider";
import { Radio } from "@mui/material";
type Props = {
  selectedItemList:  CriteriaItemDT[];
  selectedCriteriaId: string;
  selectedTargetId: string;
  handleSelectItem: (item: CriteriaItemDT, params?: updateDraftTargetQueryParams) => void;
};

const CriteriaTargetModal = ({ selectedCriteriaId, selectedTargetId,  handleSelectItem, selectedItemList }: Props) => {

  const [searchEnable, setSearchEnable] = useState(false);
  const { getCriteria } = useAssigneeContext();

  useEffect(() => {
    getCriteria();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectCriteria = (item: CriteriaItemDT) => {
    const params = {
      id: selectedTargetId,
      target: item.id,
    }
    // updateDraftTarget(params);

    // setOpenTargetModal(false);
    // console.log("hello")
    handleSelectItem(item, params);
  };

  const handleTextConcatenation = (data: CriteriaItemDT) => {

    let text = ""

    for (let item in data) {
      if (item === "target" || item === "id") {
        continue;
      }
      else if (data[item as keyof CriteriaItemDT] !== null) {
        if (Array.isArray(data[item as keyof CriteriaItemDT])) {
          const itemArray = data[item as keyof CriteriaItemDT] as string[];
          if (itemArray.length > 0) {
            for (let i = 0; i < itemArray.length; i++) {
              text += itemArray[i] + "- ";
            }
          }
        } else if (typeof data[item as keyof CriteriaItemDT] === "string") {
          const itemString = data[item as keyof CriteriaItemDT] as string;
          if (itemString !== undefined) {
            text += itemString + "- ";
          }
        }


      }
    }

    return text;
  }

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
                CRITERIA: {selectedItemList?.length}
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
          {selectedItemList.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-1 w-full pr-4 pl-1.5 py-1 justify-between group ${selectedCriteriaId === item?.id && "bg-[#E1EFFE]"
                }`}
            >
              <div className="flex-[13] flex gap-3">
                <div className="flex items-start">
                  <Radio style={{ backgroundColor: "transparent", marginTop: "-6px" }} size="small" checked={selectedCriteriaId === item?.id} onChange={() => handleSelectCriteria(item)} />
                  <div className="w-full flex flex-col">
                    <div className="w-full flex justify-between items-center">
                      <h4 className={`font-semibold ${selectedCriteriaId === item?.id ? "text-ct-blue-60" : "text-ct-blue-80"}`}>
                        Target {item?.target}
                      </h4>
                      {selectedCriteriaId === item?.id && (
                        <img src={Icons.CorrectIcon} alt="" />
                      )}
                    </div>
                    <p className={`m-0 ${selectedCriteriaId === item?.id ? "text-ct-blue-60" : "text-ct-blue-90-68%"}  text-xs font-[300] truncate text-ellipsis w-[360px] group-hover:text-overflow-clip group-hover:whitespace-normal`}>
                      {handleTextConcatenation(item)}
                    </p>
                  </div>
                </div>
              </div>
              {selectedCriteriaId === item?.id && (
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

export default CriteriaTargetModal;
