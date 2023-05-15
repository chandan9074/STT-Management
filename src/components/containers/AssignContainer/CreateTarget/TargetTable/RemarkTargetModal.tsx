import React from "react";
import Icons from "../../../../../assets/Icons";
import Buttons from "../../../../Buttons";
import "../../../../../assets/css/table/criteria_details.css";
import { remarkDT } from "../../../../../types/assignTypes";
type Props = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  remark?: remarkDT;
};

const RemarkTargetModal = ({ setModalOpen, remark }: Props) => {
  // const { target } = target || {};

  return (
    <>
      <div onClick={() => setModalOpen && setModalOpen(false)} className="bg-opacity-5 fixed top-0 left-0 w-full h-screen bg-black animate-fadeIn z-[90]" />
      <div className="flex flex-col w-full custom_scrollbar relative z-[110] bg-white rounded-xl">
        <div className="px-4 py-4 bg-[#F4F7FA] flex justify-between items-center rounded-tl-xl rounded-tr-xl">
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
        <div className="px-4">
          <div className="mt-3 flex items-center gap-2 ">
            <p className="text-[#5F6B7D] font-[600] text-sm">
              {remark?.deadline}
            </p>
            <img
              alt=""
              src={Icons.admin}
              className="w-[20px] h-[20px] object-cover ml-2"
            />
            <h2 className="font-bold text-[#464E5F]">{remark?.roleInfo.name},</h2>
            <p className="text-[#5F6B7D] font-[500] text-sm">{remark?.roleInfo.role}</p>
          </div>
          <div className="mt-3 mb-4 bg-[#F7FAFD] px-3 py-2 rounded-[4px]">
            <p className="text-[#5F6B7D] font-[400] text-sm text-left">{remark?.Des}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RemarkTargetModal;
