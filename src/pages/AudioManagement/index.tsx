import { Outlet } from 'react-router-dom';
import Layouts from '../../components/Layouts';

const AudioManagement = () => {
    return (
        <Layouts.Third>
            <Outlet/>
        </Layouts.Third>
    );
};

export default AudioManagement;