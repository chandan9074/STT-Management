import React from 'react';
import { historyDT } from '../../../../types/audioManagementTypes';
import Table from '../../../Table';

type Props = {
    data: historyDT[] | undefined
}

const EditHistory = ({data}: Props) => {
    return (
        <div>
            {
                data &&
                <Table.Type32 data={data}  />
            }
        </div>
    );
};

export default EditHistory;