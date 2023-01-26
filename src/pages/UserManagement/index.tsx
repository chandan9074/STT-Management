import React from 'react';
import Buttons from '../../components/Buttons';
import { CustomModal } from '../../components/common/CustomModal';
import Layouts from '../../components/Layouts';
import Table from '../../components/Table';

const UserManagement = () => {
    return (
        <Layouts.Forth>
            <div className="min-h-[calc(100vh-9.5vh)]">
                <Table.Type5 />
                <CustomModal.Type2 />

            </div>
        </Layouts.Forth>
    );
};

export default UserManagement;