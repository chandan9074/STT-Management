import { CSSProperties, useEffect, useState } from "react";
import Icons from "../../../../../assets/Icons";
import Buttons from "../../../../Buttons";
import "../../../../../assets/css/table/criteria_details.css";
import { ScriptItemDT } from "../../../../../types/assignTypes";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { scriptColorData } from "../../../../../data/assign/AssignData";
import { getRandomInt } from "../../../../../helpers/Utils";
import { useAssigneeContext } from "../../../../../context/AssignProvider";
import { FormControlLabel, Radio } from "@mui/material";

type Props = {
  selectedScriptId: string;
  selectedTargetId: string;
  setOpenScriptModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface CustomStyleProps extends CSSProperties {
  "&:hover .MuiSvgIcon-root"?: CSSProperties;
}


const ScriptTargetModal = ({ selectedScriptId, selectedTargetId, setOpenScriptModal }: Props) => {
  const [selectedScript, setSelectedScript] = useState(selectedScriptId);
  const [searchEnable, setSearchEnable] = useState(false);

  const { getSelectedScript, selectedScriptList, updateDraftTarget } = useAssigneeContext();

  useEffect(() => {
    getSelectedScript();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleSelectScript = (item: ScriptItemDT) => {
    // if (checked) {
    //   setSelectedScript(item.id);
    // } else {
    //   setSelectedScript("");
    // }
    // if (checked) {
    const params = {
      id: selectedTargetId,
      script: item.id,
    }
    updateDraftTarget(params);

    setOpenScriptModal(false);
    console.log("hello")
    // }
  };

  return (
    <div className="flex flex-col pb-2 overflow-y-auto custom_scrollbar">
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
                Script: {selectedScriptList?.length}
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
          {selectedScriptList?.map((item, index) => (
            <div
              key={item?.id}
              className={`flex w-full items-center gap-1 px-4 py-1 justify-between ${selectedScriptId === item?.id && "bg-[#E1EFFE]"
                }`}
            >
              <div className="flex items-center  gap-x-1 py-0.5">
                {/* <Radio
                  // onChange={(e) => selectScript(item, e.target.checked)}
                  checked={selectedScript === item?.id}
                  onChange={(e) => handleSelectScript(e.target.checked, item)}
                  className="pb-0"
                /> */}
                {/* <FormControlLabel value="female" control={<Radio />} label="" /> */}
                <Radio style={{ "&:hover .MuiSvgIcon-root": { backgroundColor: "transparent" } } as CustomStyleProps} size="small" checked={selectedScript === item?.id} onChange={() => handleSelectScript(item)} />
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
        </div>
      </div>
    </div>
  );
};

export default ScriptTargetModal;
