import React from "react";
import Icons from "../../../../../assets/Icons";
import Buttons from "../../../../Buttons";
import { CustomModal } from "../../../../common/CustomModal";
import "../../../../../assets/css/table/criteria_details.css";
type Props = {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CriteriaDetailsModal = ({ modalOpen, setModalOpen }: Props) => {
  const info: any = {
    Gender: "Male",
    "Age Range": "15-24",
    "Division/District": "Nator, Chandpur",
    Profession: "Student",
    "Economic Situation": "Upper Class",
    "Smoking Habit": "Yes",
    "Hearing Disability": "-",
    Stutter: "-",
    "Recording Area": "Inside Room",
    "Recording Distance": "Close",
    Target: 1000,
    Dedline: "30 Jan 2020",
    Reminder: "21 Dec 2021,1 Jan 2022,19 Jan 2022",
    Note: "Dark Ux is when designer create an experience that pushes users in a direction.",
  };

  const objectKeyList = Object.keys(info);

  return (
    <CustomModal.Primary
      open={modalOpen}
      setOpen={setModalOpen}
      width={"892px"}
    >
      <div className="flex flex-col p-6  w-full">
        {/* heading  */}
        <div className="flex items-center w-full justify-between">
          <h2 className="text-[#143252] font-[500] text-[18px]">
            Criteria Details
          </h2>
          <Buttons.IconButton.Circle
            onClick={() => setModalOpen(false)}
            size="medium"
            variant="CT-Blue"
            icon={<img src={Icons.CloseIconButton} alt="" />}
            border="border"
            background="white"
          />
        </div>
        {/* user info  */}
        <div className="flex items-center gap-3 mt-7">
          <div className="flex items-center gap-3 px-4 py-2 bg-ct-blue-60 rounded-[65px]">
            <img
              src={Icons.admin}
              alt="admin"
              className="w-[24px] h-[24px] object-cover"
            />
            <div className="flex flex-col">
              <h5 className="text-white font-[400] text-xs">
                Target ID - 23-23456-7
              </h5>
              <h5 className="text-white font-[500] text-xs">1000</h5>
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-[65px]">
            <img
              className="w-[24px] h-[24px] object-cover"
              src={Icons.admin}
              alt="admin"
            />
            <div className="flex flex-col">
              <h5 className="text-black font-[400] text-xs">
                Target ID - 23-23456-7
              </h5>
              <h5 className="text-black font-[500] text-xs">1000</h5>
            </div>
          </div>
        </div>
        {/* details info */}
        <div className="flex mt-7 justify-between">
          <table className="flex-[1] criteria_details_table">
            {objectKeyList
              .slice(0, objectKeyList.length - 4)
              .map((key, index) => {
                return (
                  <tr key={index} className="">
                    <td className="bg-[rgba(44,121,190,0.12)] px-4 py-2 text-[#5F6B7D] font-[500] text-sm w-[125px]">
                      {key}
                    </td>
                    <td className="px-4 py-2 text-[#464E5F] font-[500] text-small">
                      {info[key]}
                    </td>
                  </tr>
                );
              })}
          </table>
          <table className="flex-[1] h-fit criteria_details_table">
            {objectKeyList
              .slice(objectKeyList.length - 4, objectKeyList.length)
              .map((key, index) => {
                return (
                  <tr key={index} className="">
                    <td className="bg-[rgba(44,121,190,0.12)] px-4 py-2 text-[#5F6B7D] font-[500] text-sm w-[125px]">
                      {key}
                    </td>
                    <td className="px-4 py-2 text-[#464E5F] font-[500] text-small">
                      {info[key]}
                    </td>
                  </tr>
                );
              })}
          </table>
        </div>
      </div>
    </CustomModal.Primary>
  );
};

export default CriteriaDetailsModal;
