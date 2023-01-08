import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Sector } from "recharts";
import { createCollectData } from "../../../../../data/dashboard/createCollectData";
import PropertyListType2 from "../../../../common/PropertyListType2";
import GraphTooltip from "../GraphTooltip";

// const data = [
//     {name: "Group A", value: 100},
//     {name: "Group B", value: 500},
//     {name: "Group C", value: 300},
//     {name: "Group D", value: 300},
//     {name: "Group E", value: 300},
//     {name: "Group F", value: 300},
//     {name: "Group G", value: 300},
//     {name: "Group H", value: 300},
//     {name: "Group I", value: 300},
// ];

const COLORS = ["#F5427F", "#00B86E", "#E4F542", "#42E0F5", "#3BA2F5", "#B336C8", "#F54542", "#F5AC42", "#FFD145"];
const ActiveColor: any = {
    "Natural & Pure Science": {
        fillColor: "#D11263",
        borderColor: "#F5427F",
        textColor: "",
        titeleColor: "text-[#F5427F]",
        validBgColor: "bg-[#F5427F1F]"
    },
    "Arts": {
        fillColor: "#00944D",
        borderColor: "#00B86E",
        textColor: "",
        titeleColor: "text-[#00B86E]",
        validBgColor: "bg-[#00B86E1F]"
    },
    "Belief & Thought": {
        fillColor: "#ADC100",
        borderColor: "#E4F542",
        textColor: "",
        titeleColor: "text-[#E4F542]",
        validBgColor: "bg-[#E4F5421F]"
    },
    "Applied Science": {
        fillColor: "#00B2C6",
        borderColor: "#42E0F5",
        textColor: "",
        titeleColor: "text-[#42E0F5]",
        validBgColor: "bg-[#42E0F51F]"
    },
    "Commerce & Finance": {
        fillColor: "#0081D0",
        borderColor: "#3BA2F5",
        textColor: "",
        titeleColor: "text-[#3BA2F5]",
        validBgColor: "bg-[#3BA2F51F]"
    },
    "Leisure": {
        fillColor: "#88009F",
        borderColor: "#B336C8",
        textColor: "",
        titeleColor: "text-[#B336C8]",
        validBgColor: "bg-[#B336C8]"
    },
    "Literature": {
        fillColor: "#D11C29",
        borderColor: "#F54542",
        textColor: "",
        titeleColor: "text-[#F54542]",
        validBgColor: "bg-[#F545421F]"
    },
    "World & Current Affairs": {
        fillColor: "#C78415",
        borderColor: "#F5AC42",
        textColor: "",
        titeleColor: "text-[#F5AC42]",
        validBgColor: "bg-[#F5AC421F]"

    },
    "Social & Community": {
        fillColor: "#CBA302",
        borderColor: "#FFD145",
        textColor: "",
        titeleColor: "text-[#FFD145]",
        validBgColor: "bg-[#FFD1451F]"
    },
}

const RADIAN = Math.PI / 180;
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
    const radius = innerRadius + (outerRadius - innerRadius) * 0.3;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    let _percent: string = (percent * 100).toFixed(0)
    return (
        <text
            x={x}
            y={y}
            fill={payload.fill === "#E4F542" ? "black" : "white"}
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {
                parseInt(_percent) >= 15 ? `${_percent}%` : ''
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
    const sx = cx + (outerRadius - 120) * cos;
    const sy = cy + (outerRadius - 120) * sin;
    return (
        <Sector
            cx={sx}
            cy={sy}
            innerRadius={innerRadius - 1}
            outerRadius={outerRadius + 1}
            startAngle={startAngle}
            endAngle={endAngle}
            fill={ActiveColor[payload.name]?.fillColor}
            stroke={ActiveColor[payload.name]?.borderColor}


        />
    );
};
const CustomTooltip = ({ payload }: any) => {
    const listData: any = createCollectData
    return (
        <div>
            <GraphTooltip
                align="left"
                data={listData.data.createData.domainWise.filter((item: any) => item.name === payload[0]?.payload?.name)[0]}
                validBgColor={ActiveColor[payload[0]?.payload?.name]?.validBgColor}
                titleColor={ActiveColor[payload[0]?.payload?.name]?.titeleColor}
            />
        </div>
    );
};
const DomainWise = () => {
    const [activeIndex, setActiveIndex] = useState<any>(0);
    const [activeData, setActiveData] = useState<any>({})
    // const [top, setTop] = useState<number>(0);
    // const [left, setLeft] = useState<number>(0)

    const onMouseOver = (data: any, index: any, event: any) => {
        setActiveIndex(index);
        // setTop(event.clientY)
        // setLeft(event.clientX)
        setActiveData(data)
       
    }
    const onMouseLeave = useCallback((data: any, index: any) => {
        setActiveIndex(null);
    }, []);
    const listData: any = createCollectData
    let domainData: any = []
    listData.data.createData.domainWise.map((e: any) =>
        domainData.push({
            name: e.name,
            value: e.contribution
        })
    )



    return (
        <div className="flex items-center justify-between">

            <PieChart width={300} height={400}>
                <Pie
                    isAnimationActive={false}
                    animationDuration={0}
                    data={domainData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    innerRadius={70}
                    outerRadius={120}
                    paddingAngle={1}
                    fill="#8884d8"
                    dataKey="value"
                    startAngle={90}
                    endAngle={-360}
                    activeIndex={activeIndex}
                    onMouseOver={onMouseOver}
                    onMouseLeave={onMouseLeave}
                    activeShape={renderActiveShape}

                >
                    {COLORS.map((entry: any, index: any) => (

                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                            style={{ position: "relative" }}
                        >
                        </Cell>

                    ))}
                </Pie>
                <Tooltip
                    position={{
                        x: activeData?.tooltipPosition?.x - 45,
                        y: activeData?.tooltipPosition?.y - 230
                    }}
                    content={<CustomTooltip />} />
            </PieChart>

            <PropertyListType2 data={listData.data.createData.domainWise} />

        </div>
    );
};

export default DomainWise;