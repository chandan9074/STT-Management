import React, { useEffect, useState } from "react";
import Icons from "../../assets/Icons";
import Buttons from "../../components/Buttons";
import AddScript from "../../components/containers/AssignContainer/CreateTarget/AddScript";
import CreateCriteria from "../../components/containers/AssignContainer/CreateTarget/Criteria";
import AddAssignee from "../../components/containers/AssignContainer/CreateTarget/AddAssignee";
import Layouts from "../../components/Layouts";
import TargetTable from "../../components/containers/AssignContainer/CreateTarget/TargetTable";
import { AssigneeItemDT, CriteriaItemDT, ScriptItemDT } from "../../types/assignTypes";
import { useAssigneeContext } from "../../context/AssignProvider";
import { useNavigate } from "react-router-dom";
const CreateTarget = () => {
  const [dataShow, setDataShow] = useState<boolean>(true);
  const [showSave, setShowSave] = useState<boolean>(false);
  const { selectedScriptList, selectedAssigneList, selectedCriteriaList, postDraftTarget } = useAssigneeContext();

  const navigate = useNavigate();


  function checkSelected(arr: ScriptItemDT[] | AssigneeItemDT[] | CriteriaItemDT[]) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      const obj = arr[i];
      if (obj.hasOwnProperty('isSelected')) {
        result.push(Boolean(obj.isSelected));
      } else {
        result.push(false);
      }
    }
    return result;
  }

  useEffect(() => {
    if (checkSelected(selectedScriptList).includes(true) && checkSelected(selectedAssigneList).includes(true) && checkSelected(selectedCriteriaList).includes(true)) {
      setShowSave(true);
    } else {
      setShowSave(false);
    }
    
  }, [selectedScriptList, selectedAssigneList, selectedCriteriaList]);


  return (
    <Layouts.Sixth>
      <div className={`bg-red-03 shadow-box pl-[24px] pt-[30px] pr-4  ${dataShow ? "h-[31rem]" : "h-32 overflow-hidden"} duration-300 relative`}>
        <div className='flex justify-between items-center mb-[23px] gap-x-3 mt-8'>
          <div className='flex items-center'>
            <h1 className='text-blue-95 text-[18px] font-medium pr-3'>Create Target</h1>
            <h2 className='text-ct-blue-90 text-opacity-70 text-small'>
              {
                dataShow ? "Create one or more target and assign" : ("Script: " + (selectedScriptList.length < 10 ? ('0' + selectedScriptList.length) : selectedScriptList.length) + ", Criteria: " + (selectedCriteriaList.length < 10 ? ('0' + selectedCriteriaList.length) : selectedCriteriaList.length) + ", Assignee: " + (selectedAssigneList.length < 10 ? ('0' + selectedAssigneList.length) : selectedAssigneList.length))
              }
            </h2>
          </div>
          <div className="flex items-center gap-x-4">
            <div className={`${dataShow ? "hidden" : "block"} animate-fadeIn`}>
              <Buttons.IconWithTextButton.Tertiary
                label="Add Script, Create Criteria, Add Assignee"
                size="xSmall"
                variant="Blue"
                disabled={false}
                icon={
                  <img src={Icons.AddBlue} className="w-[9px] h-[9px]" alt="" />
                }
                iconAlign="start"
                onClick={() => setDataShow(!dataShow)}
              />
            </div>
            <div className='flex gap-x-[15px]'>
              {/* <button
                onClick={() => setDataShow(!dataShow)}
                className={`border-[1px] bg-white border-ct-blue-20 rounded-full py-[10.5px] px-[11px] z-[80] right-0 duration-1000`}
              >
                <img src={dataShow ? Icons.DoubleDarkICon : Icons.DoubleArroDownDark} alt="" className="" />
              </button> */}
              <Buttons.IconButton.Circle
                size='medium'
                variant="CT-Blue"
                icon={<img src={dataShow ? Icons.DoubleDarkICon : Icons.DoubleArroDownDark} alt="" className="" />}
                border='border'
                background="white"
                onClick={() => setDataShow(!dataShow)}
              />
              <Buttons.IconButton.Circle
                size='medium'
                variant="CT-Blue"
                icon={<img src={Icons.CloseIconButton} alt="" className="w-[10.58px] h-[10.58px]" />}
                border='border'
                background="white"
                onClick={()=>navigate(-1)}
              />
            </div>
          </div>
        </div>

        <div className={`flex gap-x-4`}>
          <div className="flex-[1]">
            <AddScript />
          </div>
          <div className="flex-[1.2]">
            <CreateCriteria />
          </div>{" "}
          <div className="flex-[1]">
            <AddAssignee />
          </div>
        </div>
        {showSave && <div className="absolute right-7 -bottom-4 animate-fadeIn">
          <Buttons.LabelButton.Primary label="Save" size="small" variant="Megenta" onClick={postDraftTarget} /></div>}
      </div>

      <TargetTable />
    </Layouts.Sixth>
  );
};

export default CreateTarget;
