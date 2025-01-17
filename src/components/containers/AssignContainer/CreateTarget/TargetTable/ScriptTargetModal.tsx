import React, { useEffect, useState } from "react";
import Icons from "../../../../../assets/Icons";
import Buttons from "../../../../Buttons";
import "../../../../../assets/css/table/criteria_details.css";
import { ScriptItemDT, updateDraftTargetQueryParams } from "../../../../../types/assignTypes";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { scriptColorData } from "../../../../../data/assign/AssignData";
import { getRandomInt } from "../../../../../helpers/Utils";
import { useAssigneeContext } from "../../../../../context/AssignProvider";
import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";

type Props = {
  selectedScriptId: string;
  selectedTargetId: string;
  handleSelectItem: (item: ScriptItemDT, params?: updateDraftTargetQueryParams) => void;
  selectedItemList: ScriptItemDT[];
  setOpenScriptModal?: React.Dispatch<React.SetStateAction<boolean>>;
}


const ScriptTargetModal = ({ selectedScriptId, selectedTargetId, handleSelectItem, selectedItemList, setOpenScriptModal }: Props) => {
  const [searchEnable, setSearchEnable] = useState(false);

  const { getSelectedScript } = useAssigneeContext();

  useEffect(() => {
    getSelectedScript();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleSelectedScript = (item: ScriptItemDT) => {
    const params = {
      id: selectedTargetId,
      script: item.id,
    }
    // updateDraftTarget(params);

    // setOpenScriptModal(false);
    // }
    handleSelectItem(item, params);
  };

  return (
    <>
      <div onClick={() => setOpenScriptModal && setOpenScriptModal(false)} className="bg-opacity-5 fixed top-0 left-0 w-full h-screen bg-black animate-fadeIn z-[90]" />
      <div className="w-[376px] h-[249px]  flex flex-col pb-2 overflow-y-auto custom_scrollbar relative z-[110] bg-white rounded-[4px]">
        <div className="flex flex-col gap-3 items-start justify-start h-full py-1">
          {/* headers  */}
          {searchEnable ? (
            <Input
              className="animate-fadeIn -mt-1"
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
                <p className="text-[#6B7B8C] font-semibold">
                  Script: {selectedItemList?.length}
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
          <div className="flex w-full flex-col gap-1 items-start justify-start py-1 overflow-y-auto custom_scrollbar">
            <FormControl sx={{ width: "100%" }}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={selectedScriptId}
                name="radio-buttons-group"
              >
                {selectedItemList?.map((item, index) => (
                  <div
                    key={item?.id}
                    className={`flex w-full items-center gap-1 pr-4 pl-1.5 py-1 justify-between ${selectedScriptId === item?.id && "bg-[#E1EFFE]"
                      } odd:bg-table-row-gray`}
                  >
                    <div className="flex items-center py-0.5">
                      {/* <Radio style={{ backgroundColor: "transparent" }} size="small" checked={selectedScriptId === item?.id} onChange={() => handleSelectedScript(item)} /> */}
                      <FormControlLabel value={item?.id} sx={{ m: 0 }} control={<Radio size="small" onChange={() => handleSelectedScript(item)} />} label={<Typography sx={{ display: "none" }}>Criteria</Typography>} />
                      <button className="inline-flex gap-x-2 items-center">
                        <div
                          className={`${scriptColorData[getRandomInt(0, 6, index)].id
                            } text-xxs font-semibold px-1.5 py-0.5 rounded-[4px] ${scriptColorData[getRandomInt(0, 6, index)].idBg
                            } w-12 truncate`}
                        >
                          {item?.id}
                        </div>
                        <p className="w-[210px] m-0 text-ct-blue-95 text-xs font-[300] truncate text-ellipsis text-left">
                          {item?.description}
                        </p>
                      </button>
                    </div>
                    {selectedScriptId === item?.id && (
                      <div className="">
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

export default ScriptTargetModal;
