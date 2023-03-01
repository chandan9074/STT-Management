import { Checkbox } from "antd";
import { useRef } from "react";
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
      className="flex items-start gap-1 w-full px-[11px] hover:bg-[#F9FAFC] duration-300 py-3 animate-fadeIn cursor-pointer"
    >
      {/* <div className="flex-[1]"> */}
      <Checkbox
        onChange={(e) => selectCriteria(criteria, e.target.checked)}
        checked={criteria?.isSelected}
      />
      {/* </div> */}
      <div className="flex-1 flex flex-col ml-2.5 group">
        <div className="flex justify-between">
          <h4 className="font-semibold text-ct-blue-80 text-small leading-4 mt-0.5">
            Target {criteria?.target}
          </h4>
          <div
            onClick={handleOpen}
            className=" justify-self-end relative cursor-pointer"
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
                    <img src={Icons.open_in_new} alt=""/>
                    <p>Details</p>
                  </div>
                </div>
                <div
                  className={`flex gap-1 items-center justify-between px-4 py-3 rounded-t-lg cursor-pointer  hover:bg-[rgba(44,121,190,0.12)]`}
                >
                  <div className="flex items-center gap-4">
                    <img src={Icons.edit_blue} alt="" />
                    <p>Edit</p>
                  </div>
                </div>
                <div
                  className={`flex gap-1 items-center justify-between px-4 py-3 rounded-t-lg cursor-pointer  hover:bg-[rgba(44,121,190,0.12)]`}
                >
                  <div className="flex items-center gap-4">
                    <img src={Icons.delete_red} alt=""/>
                    <p>Delete</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <p className="m-0 text-ct-blue-90-68% text-xs font-[300] truncate text-ellipsis w-[380px] leading-4 group-hover:text-overflow-clip group-hover:whitespace-normal">
          {criteria?.criteria}
        </p>
      </div>

    </div>
  );
};

export default CriteriaRowItem;
