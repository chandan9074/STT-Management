import { useContext, useEffect, useState } from "react";
import { AssignContext, useAssigneeContext } from "../../../../../context/AssignProvider";
import Table from "../../../../Table";
import { postResTargetAssignParamDT } from "../../../../../types/assignTypes";
import Buttons from "../../../../Buttons";
import { useNavigate } from "react-router-dom";
const TargetTable = () => {
  const { getDraftTarget } = useAssigneeContext()
  const [selectedRowsId, setSelectedRowsId] = useState<postResTargetAssignParamDT>({ selectedTargets: [] } as postResTargetAssignParamDT);
  const assignContext = useContext(AssignContext);
  const navigate = useNavigate();
  // postRestTargetAssign

  useEffect(() => {
    getDraftTarget()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createTarget = async () => {
    const res = await assignContext.postRestTargetAssign(selectedRowsId);
    if (res === 200) {
      navigate(-1);
    }
  }

  const deleteDraftTarget = () => {
    assignContext.deleteDraftTargetAssign(selectedRowsId.selectedTargets.join(','))
  }

  return (
    <div className="mt-10 mx-5">
      <div className="flex items-center justify-between">
        <p className="text-heading-6 font-normal text-ct-blue-95 mb-4">
          1000 Targets
        </p>

        {
          selectedRowsId.selectedTargets.length > 0 &&
          <div>
            <Buttons.LabelButton.Tertiary
              label="Remove"
              size="small"
              variant="Blue"
              onClick={() => deleteDraftTarget()}
            />
            <Buttons.LabelButton.Primary
              label="Create and Send"
              size="small"
              variant="Blue"
              onClick={() => createTarget()}
            />
          </div>
        }
      </div>
      <Table.Type8 setSelectedRowsId={setSelectedRowsId} />
    </div>
  );
};

export default TargetTable;
