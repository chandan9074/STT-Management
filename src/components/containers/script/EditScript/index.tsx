import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CommonContext } from '../../../../context/CommonProvider';
import { ScriptContext } from '../../../../context/ScriptProvider';
import { allScriptResDT } from '../../../../types/script';
import Layouts from '../../../Layouts';
import ScriptForms from '../ScriptForm';

const EditScript = ({ data }: { data?: allScriptResDT }) => {
    const scriptContext = useContext(ScriptContext);
    const commonContext = useContext(CommonContext);
    const { id } = useParams();
    const search = {id: id, role: commonContext.role}

    useEffect(() => {
        if (id) {
            scriptContext.getScriptById(search)
        }
    }, [])
    return (
        <Layouts.Forth>
            <ScriptForms data={scriptContext?.singleScript} />
        </Layouts.Forth>
    );
};

export default EditScript;