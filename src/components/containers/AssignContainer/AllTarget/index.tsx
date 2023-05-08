import TargetTable from './TargetTable';
import Statistics from './Statistics';
import Header from "./Header";
import { useContext, useEffect } from 'react';
import { AssignContext } from '../../../../context/AssignProvider';

const AllTarget = () => {

    const { fetchResAudioStatistics, audioStatisticsData, audioStatisticsParams } = useContext(AssignContext)

    useEffect(() => {
        fetchResAudioStatistics();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [audioStatisticsParams]);

    return (
        <div>
            <div className='bg-white shadow-box pl-6 pt-[85px] pb-[24px] pr-[15px]'>
                <Header />
                {audioStatisticsData.target && <Statistics data={audioStatisticsData} />}
            </div>
            <TargetTable />
        </div>
    );
};

export default AllTarget;