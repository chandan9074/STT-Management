import { useEffect, useState } from "react";
import { useAssigneeContext } from "../../../../../context/AssignProvider";
import Table from "../../../../Table";
import { TargetItemDT, postResTargetAssignParamDT } from "../../../../../types/assignTypes";
import Buttons from "../../../../Buttons";
import { useNavigate } from "react-router-dom";
const TargetTable = () => {
  const { getDraftTarget, postRestTargetAssign, deleteDraftTargetAssign, loading } = useAssigneeContext()
  const [selectedRowsId, setSelectedRowsId] = useState<postResTargetAssignParamDT>({ selectedTargets: [] } as postResTargetAssignParamDT);
  const [selectedTarget, setSelectedTarget] = useState<TargetItemDT[]>([] as TargetItemDT[]);

  // const assignContext = useContext(AssignContext);
  const navigate = useNavigate();
  // postRestTargetAssign

  useEffect(() => {
    getDraftTarget()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createTarget = async () => {
    const res = await postRestTargetAssign(selectedRowsId);
    if (res === 200) {
      navigate(-1);
    }
  }

  const deleteDraftTarget = () => {
    deleteDraftTargetAssign(selectedRowsId.selectedTargets.join(','))
    setSelectedRowsId({ selectedTargets: [] })
  }

  return (
    <div className="mt-10 mx-5 h-[calc(100vh-230px)] flex flex-col gap-y-5">
      <div className="flex items-center justify-between">
        <h1 className='text-[18px] text-ct-blue-95 font-medium'>{selectedTarget.reduce((acc, obj) => acc + Number(obj.target.target), 0)} Targets</h1>


        {
          selectedRowsId.selectedTargets.length > 0 &&
          <div className="flex gap-x-4">
            <Buttons.LabelButton.Tertiary
              label="Remove"
              size="small"
              variant="Blue"
              onClick={() => deleteDraftTarget()}
            />
            <Buttons.LabelButton.Primary
              label={`Create and Send${loading ? "..." : ""}`}
              size="small"
              variant="Blue"
              onClick={() => createTarget()}
            />
          </div>
        }
      </div>
      <Table.Type8 setSelectedRowsId={setSelectedRowsId} setSelectedTargetState={setSelectedTarget} />
    </div>
  );
};

export default TargetTable;
