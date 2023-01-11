import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Sector } from "recharts";
import GraphTooltip from "../../GraphTooltip";
import { createCollectData } from "../../../../../../data/dashboard/createCollectData";
import PropertyListType2 from "../../../../../common/PropertyListType2";
import { createCollectSimilarPropertyDT } from "../../../../../../types/dashboardTypes";


interface Props {
    data: createCollectSimilarPropertyDT[];
    hoverTooltipsColors: any;
    colorsArray: string[]

}

const RADIAN = Math.PI / 180;




const DomainWise = ({ data, hoverTooltipsColors, colorsArray }: Props) => {
    const [activeIndex, setActiveIndex] = useState<any>();
    const [activeData, setActiveData] = useState<any>({})
    const [activeName, setActiveName] = useState<string>('')
    const [enter, setEnter] = useState(false);

    const onMouseOver = (data: any, index: any, event: any) => {
        setActiveIndex(index);
        setActiveData(data)
        setActiveName(data.name)

    }
    const onMouseLeave = useCallback((data: any, index: any) => {
        // setActiveIndex(null);
        // setActiveData({name:""})
        // setActiveName("")

    }, []);

    let domainData: any = []
    data.map((e: any) =>
        domainData.push({
            name: e.name,
            value: e.contribution
        })
    )

    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index,
        payload

    }: any) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        let _percent: string = (percent * 100).toFixed(0)
        console.log("payload", payload)

        return (
            <text

                x={x}
                y={y}
                fill={payload.fill === "#E4F542" || payload.fill === "#42E0F5" ? "black" : "white"}
                textAnchor="middle"
                dominantBaseline="central"
                font-size={14}
                font-weight={500}
                onMouseOver={()=> setEnter(true)}
                onMouseLeave={()=> setEnter(false)}
            >

                {

                    (activeName === payload.name && parseInt(_percent) >= 3) ? `${_percent}%` : parseInt(_percent) >= 15 ? `${_percent}%` : ""

                }
            </text>
        );
    };
    const renderActiveShape = (props: any) => {
        const RADIAN = Math.PI / 180;
        const {
            cx,
            cy,
            innerRadius,
            outerRadius,
            startAngle,
            endAngle,
            midAngle,
            payload
        } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius - 140) * cos;
        const sy = cy + (outerRadius - 140) * sin;
        return (
            <Sector
                cx={sx}
                cy={sy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={hoverTooltipsColors[payload.name]?.fillColor}
                stroke={hoverTooltipsColors[payload.name]?.borderColor}
                strokeWidth={3}

            />
        );
    };
    const CustomTooltip = ({ payload, active }: any) => {
        console.log(active)
        const listData: any = createCollectData
        return (
            <div>
                <GraphTooltip
                    align="left"
                    data={data.filter((item: any) => item.name === payload[0]?.payload?.name)[0]}
                    validBgColor={hoverTooltipsColors[payload[0]?.payload?.name]?.validBgColor}
                    titleColor={hoverTooltipsColors[payload[0]?.payload?.name]?.titeleColor}
                />
            </div>
        );
    };


    return (
        <div className="flex items-center justify-between">

            <PieChart width={330} height={400}>
                <Pie
                    isAnimationActive={false}
                    animationDuration={0}
                    data={domainData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    innerRadius={80}
                    outerRadius={140}
                    paddingAngle={1}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-360}
                    
                    activeIndex={activeIndex}
                    onMouseOver={onMouseOver}
                    onMouseLeave={onMouseLeave}
                    // activeShape={renderActiveShape}

                >
                    {colorsArray.map((entry: any, index: any) => (

                        <Cell
                            key={`cell-${index}`}
                            fill={colorsArray[index % colorsArray.length]}
                            style={{ position: "relative", }}
                        >
                        </Cell>

                    ))}
                </Pie>
                <Tooltip
                    isAnimationActive={false}
                    animationEasing="linear"
                    wrapperStyle={{ outline: "none" }}
                    active={true}
                    position={{
                        x: activeData?.tooltipPosition?.x - 45,
                        y: activeData?.tooltipPosition?.y - 230
                    }}
                    content={<CustomTooltip active={true} />} />
            </PieChart>

            <PropertyListType2 data={data} />

        </div>
    );
};

export default DomainWise;