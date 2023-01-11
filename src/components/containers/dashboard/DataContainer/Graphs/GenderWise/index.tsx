import PercentageCard from "../../../../../common/PercentageCard";
import {genderWiseDT} from "../../../../../../types/dashboardTypes";
import Gauge from "../../../../../common/Gauge";


interface Props {
    data:genderWiseDT[]
}
const GenderWise = ({data}:Props) => {


    return (
        <div className="px-5">
            <div className="grid grid-cols-12 gap-2.5">
                <div className="col-span-6">
                    <PercentageCard
                        name="Male"
                        value={60}
                        hour={400}
                        BorderColor="border-b-bright-turquoise"
                    />
                </div>
                <div className="col-span-6">
                    <PercentageCard
                        name="Female"
                        value={50}
                        hour={300}
                        BorderColor="border-b-your-pink"
                    />
                </div>
            </div>

            <div className="flex items-center justify-center mt-5">
                <Gauge.Type2 data={data}/>
            </div>

        </div>
    );
};

export default GenderWise;