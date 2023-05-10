import { SearchOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";
import React, { useState } from "react";
import Icons from "../../../../../assets/Icons";
import { useAssigneeContext } from "../../../../../context/AssignProvider";
import Buttons from "../../../../Buttons";
import CriteriaDetailsModal from "./CriteriaDetailsModal";
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

  const { selectedCriteriaList, selectCriteria } = useAssigneeContext();

  const checkedCriteriaList = selectedCriteriaList?.filter(
    (item) => item?.isSelected
  );

  const { singleCriteriaData } = useAssigneeContext();

  const isAllSelected =
    selectedCriteriaList?.length === checkedCriteriaList?.length;
  const indeterminate =
    selectedCriteriaList?.length !== checkedCriteriaList?.length &&
    checkedCriteriaList?.length > 0;

  return (
    <>
      {selectedCriteriaList?.length === 0 ? (
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
          <div className="flex items-center gap-1 w-full pt-3 pb-1 px-[11px]">
            <Checkbox
              onChange={(e) => selectCriteria(null, e.target.checked, true)}
              checked={isAllSelected}
              indeterminate={indeterminate}
            />
            <div className="flex-1 ml-5">
              <p className="text-ct-blue-40 font-semibold text-xxs">
                CRITERIA: {selectedCriteriaList?.length}
              </p>
            </div>
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
            {selectedCriteriaList?.map((item, index) => (
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
          data={singleCriteriaData}
        />
      )}
    </>
  );
};

export default CriteriaTargetBox;
