import { Link } from 'react-router-dom';
import Icons from '../../../../assets/Icons';
import { CREATE_TARGET_PATH } from '../../../../helpers/Slug';
import Buttons from '../../../Buttons';
import TargetTable from './TargetTable';
import AudioStatus from './AudioStatus';
import Header from "./Header";

const AllTarget = () => {
    return (
        <div>
            <div className='bg-white shadow-box pl-[325px] pt-[110px] pb-[24px] pr-[15px]'>
               <Header />
                <AudioStatus />
            </div>

            <TargetTable />


        </div>
    );
};

export default AllTarget;