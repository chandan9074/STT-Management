import { useContext, useEffect, useState } from 'react';
import { CustomModal } from '../../components/common/CustomModal';
import Layouts from '../../components/Layouts';
import Table from '../../components/Table';
import Header from '../../components/containers/userManagement/Header';
import { UserManagementContext } from '../../context/UserManagementProvider';

const UserManagement = () => {
    const [open, setOpen] = useState<boolean>(false)
    const { getUserManagementTable, userManagementTable, queryParams } = useContext(UserManagementContext);
    const [selectedRowId, setSelectedRowId] = useState<string[]>([])

    useEffect(() => {
        getUserManagementTable(queryParams)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queryParams])

    const handleSelectedRow = (values: string[]) => {
        setSelectedRowId(values)
    }
    return (
        <Layouts.Forth>
            <div className="min-h-[calc(100vh-9.5vh)]">
                <Header open={open} setOpen={setOpen} selectedRowId={selectedRowId} />
                <Table.Type5 data={userManagementTable.data} handleSelectedRow={handleSelectedRow} />
                <CustomModal.Type2 open={open} setOpen={setOpen} />
            </div>
        </Layouts.Forth>
    );
};

export default UserManagement;