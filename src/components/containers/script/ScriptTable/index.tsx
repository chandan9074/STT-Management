
import React, { useContext, useEffect } from 'react';
import { CommonContext } from '../../../../context/CommonProvider';
import { ScriptContext } from '../../../../context/ScriptProvider';
import Table from '../../../Table';

const ScriptTable = () => {
    const scriptContext = useContext(ScriptContext)
    const commonContext = useContext(CommonContext)

    useEffect(() => {
        scriptContext.getAllScript({ role: commonContext.role.toLowerCase() })
    }, [])

    const handleSelectRow = (selectedRows: any[]) => {
        console.log(selectedRows)
    }
    return (
        <div>
            <Table.Type4 Data={scriptContext.scriptsData} handleSelectRow={handleSelectRow} />
        </div>
    );
};

export default ScriptTable;