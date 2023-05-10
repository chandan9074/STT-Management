import { SearchOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";
import Icons from "../../../../../assets/Icons";
import { useAssigneeContext } from "../../../../../context/AssignProvider";
import { scriptColorData } from "../../../../../data/assign/AssignData";
import { getRandomInt } from "../../../../../helpers/Utils";
import Buttons from "../../../../Buttons";
import { Tooltip } from "../../../../Tooltip";
import { useState } from "react";
import { SearchBox } from "../../../../SearchBox";
const ScriptTargetBox = ({
  targetTitle,
  onClick,
}: {
  targetTitle: string;
  onClick: () => void;
}) => {
  const { selectedScriptList, selectScript, deleteSingleScript } = useAssigneeContext();

  const [isSearchBox, setIsSearchBox] = useState(false);

  const checkedScriptList = selectedScriptList?.filter(
    (item) => item?.isSelected
  );
  const isAllSelected =
    checkedScriptList?.length === selectedScriptList?.length;
  const indeterminate =
    checkedScriptList?.length !== selectedScriptList?.length &&
    checkedScriptList?.length > 0;

  return (
    <>
      {selectedScriptList?.length === 0 ? (
        <div className="w-full h-full flex justify-center items-center">
          <Buttons.IconWithTextButton.Tertiary
            // style={{ border: "none" }}
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
            <div className="flex items-center gap-1 w-full px-[11px] pt-3 pb-1">
              <Checkbox
                onChange={(e) => selectScript(null, e.target.checked, true)}
                checked={isAllSelected}
                indeterminate={indeterminate}
              />
              <div className="flex-1 ml-5">
                <p className="text-ct-blue-40 font-semibold text-xxs uppercase">
                  Script: {selectedScriptList?.length}
                </p>
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
            </div> : <SearchBox.Type2 inputWidth='w-[320px]' placeholder='Search script...' bgColor='bg-white' textColor='text-blue-gray-80' setIsSearchBox={setIsSearchBox}/>
          }
          {/* //body  */}
          <div className="flex flex-col items-start justify-start h-full w-full  overflow-y-auto custom_scrollbar">
            {selectedScriptList?.map((item, index) => (
              <div
                key={item?.id}
                className="flex items-center gap-x-1 w-full px-[11px] py-2 even:bg-table-row-gray"
              >
                <Checkbox
                  onChange={(e) => selectScript(item, e.target.checked)}
                  checked={item?.isSelected}
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
                    onClick={() => {
                      deleteSingleScript(item.id)
                    }}
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
