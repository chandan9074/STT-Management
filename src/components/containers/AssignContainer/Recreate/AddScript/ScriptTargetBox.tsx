import { SearchOutlined } from "@ant-design/icons";
import { Radio } from "@mui/material";
import { useState } from "react";
import Icons from "../../../../../assets/Icons";
import { useAssigneeContext } from "../../../../../context/AssignProvider";
import { scriptColorData } from "../../../../../data/assign/AssignData";
import { getRandomInt } from "../../../../../helpers/Utils";
import { ScriptItemDT } from "../../../../../types/assignTypes";
import Buttons from "../../../../Buttons";
import { Tooltip } from "../../../../Tooltip";
const ScriptTargetBox = ({
  targetTitle,
  onClick,
}: {
  targetTitle: string;
  onClick: () => void;
}) => {
  const { scriptForRecreate, setScriptForRecreate, setRecreateTable, recreateTable } = useAssigneeContext();
  const [selectedValue, setSelectedValue] = useState<string>("");

  const selectScript = (
    selectedItem: ScriptItemDT | null,
  ) => {
    if (selectedItem?.id) {
      setScriptForRecreate((prevList) => {
        return prevList?.map((item) => {
          if (item?.id === selectedItem?.id) {
            return { ...item, isSelected: true };
          }
          else {
            return { ...item, isSelected: false };
          }
        });
      });
      console.log('checked value', scriptForRecreate)
      setSelectedValue(selectedItem?.id);
      setRecreateTable({ ...recreateTable, script: selectedItem })
    }
  };

  return (
    <>
      {scriptForRecreate?.length === 0 ? (
        <div className="w-full h-full flex justify-center items-center">
          <Buttons.IconWithTextButton.Tertiary
            style={{ border: "none" }}
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
        <div className="flex flex-col items-start justify-start h-full w-full pb-1">
          {/* headers  */}
          <div className="w-full px-[11px] pt-3 pb-1 flex items-center justify-between">
            <p className="text-ct-blue-40 font-semibold text-xxs">
              Script: {scriptForRecreate?.length}
            </p>
            <Buttons.IconButton.Circle
              size="medium"
              variant="CT-Blue"
              icon={<SearchOutlined style={{ color: "#6B7B8C" }} />}
              background="white"
            />
          </div>
          {/* //body  */}
          <div className="flex flex-col items-start justify-start h-full w-full  overflow-y-auto custom_scrollbar">
            {scriptForRecreate?.map((item, index) => (
              <div
                key={item?.id}
                className="flex items-center gap-x-1 w-full px-[11px] py-2 even:bg-table-row-gray"
              >
                {/* <Checkbox
                  onChange={(e) => selectScript(item, e.target.checked)}
                  checked={item?.isSelected}
                /> */}
                <Radio
                  checked={recreateTable.script ? recreateTable.script.id === item?.id : scriptForRecreate[0].id === item?.id}
                  onChange={(e) => selectScript(item)}
                  name="radio-buttons"
                  size="small"
                />
                <div className="flex-1 ml-[11px]">
                  <button className="w-full inline-flex gap-x-2 items-center">
                    <div
                      className={`${scriptColorData[getRandomInt(0, 6, index)].id
                        } text-xxs font-semibold px-1.5 py-0.5 rounded-[4px] ${scriptColorData[getRandomInt(0, 6, index)].idBg
                        }  w-11 truncate`}
                    >
                      {item?.id}
                    </div>
                    <p className="m-0 text-ct-blue-95 text-xs font-[300] truncate text-ellipsis w-[245px]">
                      {item?.description}
                    </p>
                  </button>
                </div>
                <div className=" flex-[0.5] self-end group flex items-end flex-col relative">
                  <Buttons.IconButton.Circle
                    onClick={() => setScriptForRecreate(scriptForRecreate?.filter((script) => script?.id !== item?.id))}
                    background="transparent"
                    size="medium"
                    variant="CT-Blue"
                    icon={<img src={Icons.cancel} alt="" />}
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

export default ScriptTargetBox;
