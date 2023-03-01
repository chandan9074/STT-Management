import { createCollectSimilarPropertyDT } from "../../../../../../types/dashboardTypes";
import PercentageCard from "../../../../../common/PercentageCard";
import CircleGraph from "./CircleGraph";

interface Props {
    data: createCollectSimilarPropertyDT[];
    hoverTooltipsColors: any;
    colorsArray: string[]

}

const DomainWise = ({ data, hoverTooltipsColors, colorsArray }: Props) => {

    return (
        <div className="h-full">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-4">
                    <PercentageCard
                        name={data[0].name}
                        value={data[0].contribution}
                        hour={data[0].totalValid}
                        BorderColor={colorsArray[0]}
                    />
                </div>
                <div className="col-span-4">
                    <PercentageCard
                        name={data[1].name}
                        value={data[1].contribution}
                        hour={data[1].totalValid}
                        BorderColor={colorsArray[1]}
                    />
                </div>
                <div className="col-span-4">
                    <PercentageCard
                        name={data[2].name}
                        value={data[2].contribution}
                        hour={data[2].totalValid}
                        BorderColor={colorsArray[2]}
                    />
                </div>

            </div>
            <CircleGraph
                data={data}
                hoverTooltipsColors={hoverTooltipsColors}
                colorsArray={colorsArray} />
        </div>
    );
}

export default DomainWise;