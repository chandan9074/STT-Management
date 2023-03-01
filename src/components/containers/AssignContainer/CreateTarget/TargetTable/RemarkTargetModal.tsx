import React from "react";
import Icons from "../../../../../assets/Icons";
import Buttons from "../../../../Buttons";
import "../../../../../assets/css/table/criteria_details.css";
import { TargetItemDT } from "../../../../../types/assignTypes";
type Props = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  remark: string;
};

const RemarkTargetModal = ({ setModalOpen, remark }: Props) => {
  // const { target } = target || {};

  return (
    <div className="flex flex-col w-full custom_scrollbar">
      <div className="px-4 py-4 bg-[#F4F7FA] flex justify-between items-center rounded-tl-lg rounded-tr-lg">
        <h2 className="text-[rgba(31,56,76,0.68)] text-[16px] font-[500]">
          Remark
        </h2>
        <Buttons.IconButton.Circle
          onClick={() => setModalOpen(false)}
          size="medium"
          variant="CT-Blue"
          icon={<img src={Icons.CloseIconButton} alt="" />}
          background="white"
        />
      </div>
      <div className="mt-3 px-4 flex items-center gap-2 ">
        <p className="text-[#5F6B7D] font-[600] text-sm">
          {/* {remark?.date} , {remark?.time} */}
        </p>
        <img
        alt=""
          src={Icons.admin}
          className="w-[20px] h-[20px] object-cover ml-2"
        />
        {/* <h2 className="font-bold text-[#464E5F]">{remark?.name},</h2>
        <p className="text-[#5F6B7D] font-[500] text-sm">{remark?.role}</p> */}
      </div>
      <div className="mt-3 px-4 mb-4">
        {/* <p className="text-[#5F6B7D] font-[400] text-sm">{remark?.details}</p> */}
      </div>
    </div>
  );
};

export default RemarkTargetModal;
