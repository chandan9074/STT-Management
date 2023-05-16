import { useEffect, useState } from 'react';
import Icons from '../../assets/Icons';
import Buttons from '../../components/Buttons';
import AddScript from '../../components/containers/AssignContainer/Recreate/AddScript';
import Layouts from '../../components/Layouts';
import { Navigator } from '../../components/Navigator';
import * as Path from '../../helpers/Slug';
import { useParams } from 'react-router-dom';
import { useAssigneeContext } from '../../context/AssignProvider';
import CreateCriteria from '../../components/containers/AssignContainer/Recreate/CreateCriteria';
import AddAssignee from '../../components/containers/AssignContainer/Recreate/AddAssignee';
import Table from '../../components/Table';
import { useNavigate } from "react-router-dom";


const RecreateTarget = () => {
    const [dataShow, setDataShow] = useState<boolean>(true);
    const { id } = useParams<{ id: string }>();
    const { getTargetForRecreate, recreateTable, postRecreateTargetAssign, loading } = useAssigneeContext();

    const navigate = useNavigate();


    useEffect(() => {
        if (id) {
            getTargetForRecreate(id);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const handleRecreateTable = async () => {
        console.log("recreateTable", recreateTable);
        const body = {
            script: recreateTable?.script.id,
            target: recreateTable?.target,
            assignee: recreateTable?.assignee.email,
        }
        const res = await postRecreateTargetAssign(body);
        if (res === "ok") {
            navigate(-1);
        }
    }


    return (
        <Layouts.Sixth>
            <div className={`bg-red-03 shadow-box pl-[24px] pt-[30px] pr-4  ${dataShow ? "h-[31rem]" : "h-32 overflow-hidden"} duration-300 relative`}>
                <div className='flex justify-between items-center mb-[23px] gap-x-3 mt-8'>
                    <Navigator.Back path={`${Path.ASSIGN_PATH}/${Path.ALL_TARGET_PTAH}`} title="Recreate Target" />
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
                                onClick={() => navigate(-1)}
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
                    </div>
                    <div className="flex-[1]">
                        <AddAssignee />
                    </div>
                </div>
            </div>
            {/* {recreateTable && <Table.Type12 />} */}
            <div className='mx-5 mt-5'>
                <div className='flex justify-between items-center mb-4'>
                    <h1 className="text-heading-6 font-normal text-ct-blue-95">
                        {recreateTable?.target?.target} Targets
                    </h1>
                    <Buttons.LabelButton.Primary label={`Create and Send${loading ? "..." : ""}`} variant='CT-Blue' size='small' onClick={() => handleRecreateTable()} />
                </div>
                <Table.Type12 />
            </div>
        </Layouts.Sixth>
    )
}

export default RecreateTarget