import { SearchOutlined } from "@ant-design/icons";
import { Radio } from "@mui/material";
import { useRef, useState } from "react";
import Icons from "../../../../../assets/Icons";
import { useAssigneeContext } from "../../../../../context/AssignProvider";
import { CriteriaItemDT } from "../../../../../types/assignTypes";
import Buttons from "../../../../Buttons";
import { Drawer } from "../../../../Drawer";
import CriteriaDetailsModal from "../../CreateTarget/Criteria/CriteriaDetailsModal";
import CriteriaForm from "../../CreateTarget/Criteria/CriteriaForm";

const CriteriaTargetBox = ({
  targetTitle,
  onClick,
}: {
  targetTitle: string;
  onClick: () => void;
}) => {
  const [openCriteriaDetailsModal, setOpenCriteriaDetailsModal] =
    useState(false);


  const { targetForRecreate, setTargetForRecreate, singleCriteriaData, getCriteriaByID, getSingleCriteriaRecreate, singleCriteriaRecreate, setRecreateTable, recreateTable } = useAssigneeContext();
  const optionMenuRef = useRef<null | HTMLDivElement>(null);
  const [criteriaId, setCriteriaId] = useState<any>();

  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  // const [selectedValue, setSelectedValue] = useState<string>("");

  console.log('single-----------------', singleCriteriaRecreate);


  const handleTextConcatenation = (data: CriteriaItemDT) => {
    let text = ""
    for (let item in data) {
      if (item === "target" || item === "id") {
        continue;
      }
      else if (data[item as keyof CriteriaItemDT] !== null) {
        if (Array.isArray(data[item as keyof CriteriaItemDT])) {
          const itemArray = data[item as keyof CriteriaItemDT] as string[];
          if (itemArray.length > 0) {
            for (let i = 0; i < itemArray.length; i++) {
              text += itemArray[i] + "- ";
            }
          }
        } else if (typeof data[item as keyof CriteriaItemDT] === "string") {
          const itemString = data[item as keyof CriteriaItemDT] as string;
          if (itemString !== undefined) {
            text += itemString + "- ";
          }
        }
      }
    }
    return text;
  }

  const selectCriteria = (
    selectedItem: CriteriaItemDT | null,
  ) => {
    if (selectedItem?.id) {

      setTargetForRecreate((prevList) => {
        return prevList?.map((item) => {
          if (item?.id === selectedItem?.id) {
            return { ...item, isSelected: true };
          }
          else {
            return { ...item, isSelected: false };
          }
        });
      });
      // setSelectedValue(selectedItem?.id);
      setRecreateTable({ ...recreateTable, target: selectedItem })
    }
  };

  const drawerClose = () => {
    setDrawerOpen(false);
  };


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
            {targetForRecreate?.map((criteria, index) => (

              <div
                key={criteria?.id}
                className="flex items-start gap-1 w-full px-[11px] hover:bg-[#F9FAFC] duration-300 py-3 animate-fadeIn cursor-pointer"
              >
                <Radio
                  checked={recreateTable.target ? recreateTable.target.id === criteria?.id : targetForRecreate[0].id === criteria?.id}
                  onChange={(e) => selectCriteria(criteria)}
                  name="radio-buttons"
                  size="small"
                />
                {/* </div> */}
                <div className="flex-1 flex flex-col ml-2.5 group">
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-ct-blue-80 text-small leading-4 mt-0.5">
                      Target {criteria?.target}
                    </h4>
                    <div

                      className=" justify-self-end relative cursor-pointer"
                    >
                      <Buttons.IconButton.Circle
                        background="transparent"
                        size="medium"
                        variant="CT-Blue"
                        icon={<img src={Icons.moreIcon} alt="" />
                        }
                        onClick={() => {
                          setCriteriaId(criteria?.id);
                        }}
                      />
                      {(criteriaId === criteria?.id) && (
                        <div>
                          <div className="fixed top-0 left-0 opacity-50 w-full h-screen z-[999]"
                            onClick={() => {
                              setCriteriaId('');
                            }}
                          />
                          <div
                            ref={optionMenuRef}
                            onKeyDown={(e) => e.stopPropagation()}
                            className="w-[160px] absolute top-0 right-0 bg-white rounded-md shadow-md animate-fadeIn z-[9999]"
                          >

                            <button
                              onClick={() => {
                                getCriteriaByID(criteria?.id)
                                setOpenCriteriaDetailsModal(true);
                                setCriteriaId('');
                                getSingleCriteriaRecreate(criteria?.id)
                              }}
                              className={`flex w-full items-center justify-between px-4 py-3 rounded-t-lg cursor-pointer hover:bg-[rgba(44,121,190,0.12)]`}
                            >
                              <div className="flex items-center gap-4">
                                <img src={Icons.open_in_new} alt="" />
                                <p>Details</p>
                              </div>
                            </button>
                            <button
                              onClick={() => setTargetForRecreate(targetForRecreate?.filter((item) => item?.id !== criteria?.id))}
                              className={`flex w-full items-center justify-between px-4 py-3 rounded-t-lg cursor-pointer  hover:bg-[rgba(44,121,190,0.12)]`}
                            >
                              <div className="flex items-center gap-4">
                                <img src={Icons.delete_red} alt="" />
                                <p>Delete</p>
                              </div>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="m-0 text-ct-blue-90-68% text-xs font-[300] truncate text-ellipsis w-[380px] leading-4 group-hover:text-overflow-clip group-hover:whitespace-normal">
                    {handleTextConcatenation(criteria)}
                  </p>
                </div>


                <Drawer.Criteria.Type1
                  isDrawerOpen={drawerOpen}
                  drawerClose={drawerClose}
                  title="Create Critaria"
                >
                  <CriteriaForm drawerClose={drawerClose} data={singleCriteriaData} />
                </Drawer.Criteria.Type1>

              </div>
            ))}
          </div>
        </div>
      )}
      {openCriteriaDetailsModal && (
        <CriteriaDetailsModal
          modalOpen={openCriteriaDetailsModal}
          setModalOpen={setOpenCriteriaDetailsModal}
          data={singleCriteriaRecreate}
        />
      )}
    </>
  );
};

export default CriteriaTargetBox;
