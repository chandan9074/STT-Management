import { useContext, useEffect } from 'react';
import { UserManagementContext } from '../../../../context/UserManagementProvider';
import { useParams } from 'react-router-dom';
import UserForm from '../UserForm';

const EditUser = () => {

    const userManagementContext = useContext(UserManagementContext);
    const { id } = useParams();
    const search = { id: id ?? '' }

    useEffect(() => {
        if (id) {
            userManagementContext.getUserById(search)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            {/* <Layouts.Sixth> */}
                {/* <ScriptForms data={scriptContext?.singleScript} /> */}
                <UserForm  data={userManagementContext?.userData && userManagementContext?.userData}/>
            {/* </Layouts.Sixth> */}

        </div>
    );
};

export default EditUser;