
import React, { useContext, useEffect } from 'react';
import { CommonContext } from '../../../../context/CommonProvider';
import { ScriptContext } from '../../../../context/ScriptProvider';
import { scriptResDT } from '../../../../types/script';
import Pagination from '../../../Pagination';
import Table from '../../../Table';

type Props = {
    setSelectedScript: React.Dispatch<React.SetStateAction<scriptResDT[]>>;
}

const ScriptTable = ({ setSelectedScript }: Props) => {
    const scriptContext = useContext(ScriptContext)
    const commonContext = useContext(CommonContext)

    useEffect(() => {
        scriptContext.getAllScript({ ...scriptContext.scriptFilter, role: commonContext.role.toLowerCase() });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scriptContext.scriptFilter])

    const handleSelectRow = (selectedRows: scriptResDT[]) => {
        // console.log("selected rows------", selectedRows)
        setSelectedScript(selectedRows)

    }

    const handlePageChange = (page: number) => {
        scriptContext.setScriptFilter({ ...scriptContext.scriptFilter, page: page, pageSize: 10 })
    }

    return (
        <div>
            <Table.Type4 Data={scriptContext.scriptsData.scripts} handleSelectRow={handleSelectRow} />
            <div className='flex w-full justify-end mt-4 mb-2'>
                <Pagination.Type2
                    total={scriptContext.scriptsData.totalNumberOfScripts}
                    pageSize={10}
                    // total={35}
                    // pageSize={5}
                    handleDataChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default ScriptTable;