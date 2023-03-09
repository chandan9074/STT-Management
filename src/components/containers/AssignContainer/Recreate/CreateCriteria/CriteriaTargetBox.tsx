import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import Icons from "../../../../../assets/Icons";
import { useAssigneeContext } from "../../../../../context/AssignProvider";
import Buttons from "../../../../Buttons";
import CriteriaDetailsModal from "../../CreateTarget/Criteria/CriteriaDetailsModal";
import CriteriaRowItem from "./CriteriaRowItem";

const CriteriaTargetBox = ({
  targetTitle,
  onClick,
}: {
  targetTitle: string;
  onClick: () => void;
}) => {
  const [openCriteriaDetailsModal, setOpenCriteriaDetailsModal] =
    useState(false);

  const { targetForRecreate } = useAssigneeContext();

  // const checkedCriteriaList = selectedCriteriaList?.filter(
  //   (item) => item?.isSelected
  // );

  // const isAllSelected =
  //   selectedCriteriaList?.length === checkedCriteriaList?.length;
  // const indeterminate =
  //   selectedCriteriaList?.length !== checkedCriteriaList?.length &&
  //   checkedCriteriaList?.length > 0;

  return (
    <>
      {targetForRecreate?.length === 0 ? (
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
          <div className="w-full flex items-center justify-between pt-3 pb-1 px-[11px]">
            <p className="text-ct-blue-40 font-semibold text-xxs">
              CRITERIA: {targetForRecreate?.length}
            </p>
            <div className="self-end">
              <Buttons.IconButton.Circle
                size="medium"
                variant="CT-Blue"
                icon={<SearchOutlined style={{ color: "#6B7B8C" }} />}
                background="white"
              />
            </div>
          </div>
          <div className="flex flex-col gap-x-3 items-start justify-start h-full w-full py-1 overflow-y-auto custom_scrollbar">
            {/* //body  */}
            {targetForRecreate?.map((item, index) => (
              <CriteriaRowItem
                criteria={item}
                key={item?.id}
                setDetailsModalOpen={setOpenCriteriaDetailsModal}
              />
            ))}
          </div>
        </div>
      )}
      {openCriteriaDetailsModal && (
        <CriteriaDetailsModal
          modalOpen={openCriteriaDetailsModal}
          setModalOpen={setOpenCriteriaDetailsModal}
        />
      )}
    </>
  );
};

export default CriteriaTargetBox;
