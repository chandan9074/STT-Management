import { Outlet } from 'react-router-dom';
import Layouts from '../../components/Layouts';

const AudioManagement = () => {
    return (
        <Layouts.Third>
            <div className="min-h-[calc(100vh-21vh)]">
                <Outlet />
            </div>
        </Layouts.Third>
    );
};

export default AudioManagement;