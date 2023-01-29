import React, { useState } from 'react';
import Icons from '../../assets/Icons';
import Buttons from '../../components/Buttons';
import { CustomModal } from '../../components/common/CustomModal';
import Layouts from '../../components/Layouts';
import Table from '../../components/Table';
import { Toast } from '../../components/Toast';
import Header from '../../components/containers/userManagement/Header';

const UserManagement = () => {
    const [date, setData] = useState<string>('')
    return (
        <Layouts.Forth>
            <div className="min-h-[calc(100vh-9.5vh)]">
                <Header />
                <Table.Type5 />
                <CustomModal.Type2 />
                <Toast.Type1
                    massages='A user has been created'
                    iconSrc={Icons.home}
                />
                <Buttons.TabButton.Secondary setActiveData={setData} tabLabel={['Type1', "Type2", "Type3"]} />

            </div>
        </Layouts.Forth>
    );
};

export default UserManagement;