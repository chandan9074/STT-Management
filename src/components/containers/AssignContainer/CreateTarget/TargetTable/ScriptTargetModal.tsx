import { useState } from "react";
import Icons from "../../../../../assets/Icons";
import Buttons from "../../../../Buttons";
import "../../../../../assets/css/table/criteria_details.css";
import { ScriptItemDT } from "../../../../../types/assignTypes";
import { Input, Radio } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { scriptColorData } from "../../../../../data/assign/AssignData";
import { getRandomInt } from "../../../../../helpers/Utils";
type Props = {
  scriptList: ScriptItemDT[];
};

const ScriptTargetModal = ({ scriptList }: Props) => {
  const [selectedScript, setSelectedScript] = useState<ScriptItemDT | null>(
    null
  );
  const [searchEnable, setSearchEnable] = useState(false);

  const handleSelectScript = (checked: boolean, item: ScriptItemDT) => {
    if (checked) {
      setSelectedScript(item);
    } else {
      setSelectedScript(null);
    }
  };

  return (
    <div className="flex flex-col w-full  h-[300px] pb-2 overflow-y-auto custom_scrollbar">
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
                Script: {scriptList?.length}
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
          {scriptList?.map((item, index) => (
            <div
              key={item?.id}
              className={`flex items-center gap-1 w-full px-4 py-1 justify-between ${
                selectedScript?.id === item?.id && "bg-[#E1EFFE]"
              }`}
            >
              <div className="flex  items-center gap-3">
                <Radio
                  // onChange={(e) => selectScript(item, e.target.checked)}
                  checked={selectedScript?.id === item?.id}
                  onChange={(e) => handleSelectScript(e.target.checked, item)}
                />
                <button className="inline-flex gap-x-2 items-center">
                  <div
                    className={`${
                      scriptColorData[getRandomInt(0, 6, index)].id
                    } text-xxs font-semibold px-1.5 py-0.5 rounded-[4px] ${
                      scriptColorData[getRandomInt(0, 6, index)].idBg
                    }`}
                  >
                    {item?.id}
                  </div>
                  <p className="w-[280px] m-0 text-ct-blue-95 text-xs font-[300] truncate text-ellipsis">
                    {item?.script}
                  </p>
                </button>
              </div>
              {selectedScript?.id === item?.id && (
                <div className="self-end ml-10">
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
