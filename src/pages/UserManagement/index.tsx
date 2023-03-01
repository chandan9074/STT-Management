import { useState } from 'react';
import { CustomModal } from '../../components/common/CustomModal';
import Layouts from '../../components/Layouts';
import Table from '../../components/Table';
import Header from '../../components/containers/userManagement/Header';

const UserManagement = () => {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <Layouts.Forth>
            <div className="min-h-[calc(100vh-9.5vh)]">
                <Header open={open} setOpen={setOpen} />
                <Table.Type5  />
                <CustomModal.Type2 open={open} setOpen={setOpen} />
                {/* <Toast.Type1
                    massages='A user has been created'
                    iconSrc={Icons.home}
                /> */}
              

            </div>
        </Layouts.Forth>
    );
};

export default UserManagement;