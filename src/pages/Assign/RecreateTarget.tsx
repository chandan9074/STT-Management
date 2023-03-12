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

const RecreateTarget = () => {
    const [dataShow, setDataShow] = useState<boolean>(true);
    const { id } = useParams<{ id: string }>();
    const { getTargetForRecreate, recreateTable } = useAssigneeContext();

    useEffect(() => {
        if (id) {
            getTargetForRecreate(id);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])
    return (
        <Layouts.Sixth>
            <div className={`bg-red-03 shadow-box pl-6 pt-4 pr-4  ${dataShow ? "h-[29rem]" : "h-24 overflow-hidden"} duration-300 relative`}>
                <div className='flex justify-between items-start mb-[23px] gap-x-3'>
                    <Navigator.Back path={`${Path.ASSIGN_PATH}/${Path.ALL_TARGET_PTAH}`} title="Recreate Target" />
                    <div className="flex items-center gap-x-4 mt-4">
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
                            <button
                                onClick={() => setDataShow(!dataShow)}
                                className={`border-[1px] bg-white border-ct-blue-20 rounded-full p-[11px] z-[100] right-0 duration-1000`}
                            >
                                <img src={dataShow ? Icons.DoubleArroDownDark : Icons.DoubleDarkICon} alt="" className="w-[7px] h-[8px] " />
                            </button>
                            <Buttons.IconButton.Circle
                                size='medium'
                                variant="CT-Blue"
                                icon={<img src={Icons.CloseIconButton} alt="" />}
                                border='border'
                                background="white"
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
            <Table.Type12 />
        </Layouts.Sixth>
    )
}

export default RecreateTarget