import { Link } from 'react-router-dom';
import Icons from '../../../../assets/Icons';
import { CREATE_TARGET_PATH } from '../../../../helpers/Slug';
import Buttons from '../../../Buttons';
import TargetTable from './TargetTable';
import Statistics from './Statistics';
import Header from "./Header";
import { assignStatisticsData } from '../../../../data/assign/AssignData';

const AllTarget = () => {
    return (
        <div>
            <div className='bg-white shadow-box pl-6 pt-[85px] pb-[24px] pr-[15px]'>
                <Header />
                <Statistics data={assignStatisticsData} />
            </div>

            <TargetTable />


        </div>
    );
};

export default AllTarget;