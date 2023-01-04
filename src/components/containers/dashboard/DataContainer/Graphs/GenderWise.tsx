import React, {useState} from 'react';
import PercentiseCard from "../../../../common/PercentiseCard";
import Gauge from "../../../../common/Gauge";
import CustomRangeCalender, {DateDT} from "../../../../calender/CustomRangeCalender";
import { genderWiseDT } from '../../../../../types/dashboardTypes';


interface Props {
    data:genderWiseDT[]
}
const GenderWise = ({data}:Props) => {


    return (
        <div className="px-5">
            <div className="grid grid-cols-12 gap-2.5">
                <div className="col-span-6">
                    <PercentiseCard
                        name="Male"
                        value={60}
                        hour={400}
                        BorderColor="border-b-bright-turquoise"
                    />
                </div>
                <div className="col-span-6">
                    <PercentiseCard
                        name="Female"
                        value={50}
                        hour={300}
                        BorderColor="border-b-your-pink"
                    />
                </div>
            </div>

            <div className="flex items-center justify-center mt-5">
                <Gauge.Type2 female={35} male={75} speakers={32500}/>
            </div>

        </div>
    );
};

export default GenderWise;