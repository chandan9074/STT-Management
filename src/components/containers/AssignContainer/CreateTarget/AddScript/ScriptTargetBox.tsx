import { SearchOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";
import React, { useState } from "react";
import Icons from "../../../../../assets/Icons";
import { useAssigneContext } from "../../../../../context/AssignProvider";
import { scriptColorData } from "../../../../../data/assign/AssignData";
import { getRandomInt } from "../../../../../helpers/Utils";
import Buttons from "../../../../Buttons";
const ScriptTargetBox = ({
  targetTitle,
  onClick,
}: {
  targetTitle: string;
  onClick: () => void;
}) => {
  const { selectedScriptList, selectScript } = useAssigneContext();

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
        <div className="flex flex-col gap-3 items-start justify-start h-full w-full py-1">
          {/* headers  */}
          <div className="flex items-center gap-1 w-full px-4">
            <div className="flex-[1]">
              <Checkbox
                onChange={(e) => selectScript(null, e.target.checked, true)}
                checked={isAllSelected}
                indeterminate={indeterminate}
              />
            </div>
            <div className="flex-[6]">
              <p className="text-[#6B7B8C] font-[500]">
                Script: {selectedScriptList?.length}
              </p>
            </div>
            <div className="flex-[1] self-end">
              <Buttons.IconButton.Circle
                size="medium"
                variant="CT-Blue"
                icon={<SearchOutlined style={{ color: "#6B7B8C" }} />}
                background="white"
              />
            </div>
          </div>
          {/* //body  */}
          <div className="flex flex-col gap-3 items-start justify-start h-full w-full py-1 overflow-y-auto custom_scrollbar">
            {selectedScriptList?.map((item, index) => (
              <div
                key={item?.id}
                className="flex items-center gap-1 w-full px-4  even:bg-[#F9FAFC] py-2"
              >
                <div className="flex-[1]">
                  <Checkbox
                    onChange={(e) => selectScript(item, e.target.checked)}
                    checked={item?.isSelected}
                  />
                </div>
                <div className="flex-[6]">
                  <button className="w-full inline-flex gap-x-2 items-center">
                    <div
                      className={`${
                        scriptColorData[getRandomInt(0, 6, index)].id
                      } text-xxs font-semibold px-1.5 py-0.5 rounded-[4px] ${
                        scriptColorData[getRandomInt(0, 6, index)].idBg
                      }`}
                    >
                      {item?.id}
                    </div>
                    <p className="m-0 text-ct-blue-95 text-xs font-[300] truncate text-ellipsis w-[80%]">
                      {item?.script}
                    </p>
                  </button>
                </div>
                <div className="flex-[1] self-end">
                  <Buttons.IconButton.Circle
                    background="transparent"
                    size="medium"
                    variant="CT-Blue"
                    icon={<img src={Icons.cancel} alt="" />}
                  />
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
