
import { useContext, useEffect } from 'react';
import { CommonContext } from '../../../../context/CommonProvider';
import { ScriptContext } from '../../../../context/ScriptProvider';
import Table from '../../../Table';

const ScriptTable = () => {
    const scriptContext = useContext(ScriptContext)
    const commonContext = useContext(CommonContext)

    useEffect(() => {
        scriptContext.getAllScript({ role: commonContext.role.toLowerCase() });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSelectRow = (selectedRows: any[]) => {
        // console.log(selectedRows)
        
    }
    return (
        <div>
            <Table.Type4 Data={scriptContext.scriptsData} handleSelectRow={handleSelectRow} />
        </div>
    );
};

export default ScriptTable;