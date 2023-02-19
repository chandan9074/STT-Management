import { Checkbox } from "antd";
import { useRef, useState } from "react";
import Icons from "../../../../../assets/Icons";
import { useAssigneContext } from "../../../../../context/AssignProvider";
import { CriteriaItemDT } from "../../../../../types/assignTypes";
import Buttons from "../../../../Buttons";
import useOutsideClick from "../../../../Hooks/useOutsideClick";

const CriteriaRowItem = ({
  criteria,
  setDetailsModalOpen,
}: {
  criteria: CriteriaItemDT;
  setDetailsModalOpen: (open: boolean) => void;
}) => {
  const { selectCriteria } = useAssigneContext();
  const optionMenuRef = useRef<null | HTMLDivElement>(null);
  const { open, handleOpen } = useOutsideClick(optionMenuRef);
  return (
    <div
      key={criteria?.id}
      className="flex items-start gap-1 w-full px-4  even:bg-[#F9FAFC] py-2 animate-fadeIn"
    >
      <div className="flex-[1]">
        <Checkbox
          onChange={(e) => selectCriteria(criteria, e.target.checked)}
          checked={criteria?.isSelected}
        />
      </div>
      <div className="flex-[6]">
        <div className="flex flex-col">
          <h4 className="font-[500] text-[#2D516E]">
            Target {criteria?.target}
          </h4>
          <p className="m-0 text-ct-blue-95 text-xs font-[300] truncate text-ellipsis w-[95%]">
            {criteria?.criteria}
          </p>
        </div>
      </div>
      <div
        onClick={handleOpen}
        className="flex-[1] justify-self-end relative cursor-pointer"
      >
        <Buttons.IconButton.Circle
          background="transparent"
          size="medium"
          variant="CT-Blue"
          icon={<img src={Icons.moreIcon} alt="" />}
        />
        {open && (
          <div
            ref={optionMenuRef}
            onKeyDown={(e) => e.stopPropagation()}
            className="w-[160px] absolute top-0 right-0 bg-white rounded-md shadow-md animate-fadeIn z-50"
          >
            <div
              onClick={() => setDetailsModalOpen(true)}
              className={`flex gap-1 items-center justify-between px-4 py-3 rounded-t-lg cursor-pointer hover:bg-[rgba(44,121,190,0.12)]`}
            >
              <div className="flex items-center gap-4">
                <img src={Icons.open_in_new} />
                <p>Details</p>
              </div>
            </div>
            <div
              className={`flex gap-1 items-center justify-between px-4 py-3 rounded-t-lg cursor-pointer  hover:bg-[rgba(44,121,190,0.12)]`}
            >
              <div className="flex items-center gap-4">
                <img src={Icons.edit_blue} />
                <p>Edit</p>
              </div>
            </div>
            <div
              className={`flex gap-1 items-center justify-between px-4 py-3 rounded-t-lg cursor-pointer  hover:bg-[rgba(44,121,190,0.12)]`}
            >
              <div className="flex items-center gap-4">
                <img src={Icons.delete_red} />
                <p>Delete</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CriteriaRowItem;
