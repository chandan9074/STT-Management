import PercentageCard from "../../../../../common/PercentageCard";
import {genderWiseDT} from "../../../../../../types/dashboardTypes";
import Gauge from "../../../../../common/Gauge";


interface Props {
    data:genderWiseDT[]
}
const GenderWise = ({data}:Props) => {


    return (
        <div className="h-full">
            <div className="grid grid-cols-12 gap-2.5">
                <div className="col-span-6">
                    <PercentageCard
                        name="Male"
                        value={data[0].contribution}
                        hour={data[0].totalValid}
                        BorderColor="#42F5D5"
                    />
                </div>
                <div className="col-span-6">
                    <PercentageCard
                        name="Female"
                        value={data[1].contribution}
                        hour={data[1].totalValid}
                        BorderColor="#FFCBCB"
                    />
                </div>
            </div>

            <div className="flex items-center justify-center h-[370px] ">
                <Gauge.Type2 data={data}/>
            </div>

        </div>
    );
};

export default GenderWise;