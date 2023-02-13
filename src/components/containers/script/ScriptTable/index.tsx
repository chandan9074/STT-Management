
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
    return (
        <div>
            <Table.Type4 Data={scriptContext.scriptsData} />
        </div>
    );
};

export default ScriptTable;