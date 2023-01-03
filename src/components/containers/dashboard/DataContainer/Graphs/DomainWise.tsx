import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Sector } from "recharts";
import { createCollectData } from "../../../../../data/dashboard/createCollectData";
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
    "commerce & Finance": {
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
    const sx = cx + (outerRadius - 180) * cos;
    const sy = cy + (outerRadius - 180) * sin;
    return (
        <Sector
            cx={sx}
            cy={sy}
            innerRadius={innerRadius - 2}
            outerRadius={outerRadius + 2}
            startAngle={startAngle}
            endAngle={endAngle}
            fill={ActiveColor[payload.name]?.fillColor}
            stroke={ActiveColor[payload.name]?.borderColor}


        />
    );
};
const CustomTooltip = ({ payload }: any) => {
    const listData: any = createCollectData
    // console.log("hello", listData.data[0].domainWise.filter((item:any) => item.name ===payload[0]?.payload?.name) [0]);
    console.log('---------------', payload[0]?.payload)
    return (
        <div className="flex justify-start">
            <GraphTooltip
                align="center"
                data={listData.data[0].domainWise.filter((item: any) => item.name === payload[0]?.payload?.name)[0]}
                validBgColor={ActiveColor[payload[0]?.payload?.name]?.validBgColor}
                titleColor={ActiveColor[payload[0]?.payload?.name]?.titeleColor}
            />
        </div>
    );
};
const DomainWise = () => {
    const [activeIndex, setActiveIndex] = useState<any>(0);
    const [activeData, setActiveData] = useState<any>()
    const [top, setTop] = useState<number>(0);
    const [left, setLeft] = useState<number>(0)
    // const onMouseOver = useCallback((data: any, index: any, event: any) => {
    //     // if(index !== activeIndex){
    //     //     setActiveIndex(index);
    //     //     setTop(event.clientY)
    //     //     setLeft(event.clientX)
    //     //     setActiveData(data)
    //     // }
    //     setTop(event.clientY)
    //     setLeft(event.clientX)
    //     console.log("hello vasdi f adf", index, activeIndex)
    // }, []);
    const onMouseOver = (data: any, index: any, event: any) => {
        setActiveIndex(index);
        setTop(event.clientY)
        setLeft(event.clientX)
        setActiveData(data)
        console.log("asdkjfhak")
    }
    const onMouseLeave = useCallback((data: any, index: any) => {
        setActiveIndex(null);
    }, []);
    const listData: any = createCollectData
    let domainData: any = []
    listData.data[0].domainWise.map((e: any) =>
        domainData.push({
            name: e.name,
            value: e.contribution
        })
    )

    // console.log("data", activeData)

    return (
        <div>
            <PieChart width={400} height={400}>
                <Pie
                    isAnimationActive={false}
                    animationDuration={0}
                    data={domainData}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    innerRadius={120}
                    outerRadius={180}
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
                {/* <Tooltip
                    // wrapperStyle={{ top: tooltipPosition[activeIndex]?.top, left: tooltipPosition[activeIndex]?.left, display:"flex", justifyContent:"flex-start" }}
                    content={<CustomTooltip />} /> */}
            </PieChart>
            {activeIndex === 0 || activeIndex === 1 || activeIndex === 2 || activeIndex === 3 || activeIndex === 4 || activeIndex === 5 || activeIndex === 6 || activeIndex === 7 || activeIndex === 8 ? <div style={{ position: "absolute", top: top + 180, left: left - 50 }}>

                {/* <h1 className="text-white">{activeData?.payload?.name}</h1> */}
                <GraphTooltip
                    align="left"
                    data={listData.data[0].domainWise.filter((item: any) => item.name === activeData?.payload?.name)[0]}
                    validBgColor={ActiveColor[activeData?.payload?.name]?.validBgColor}
                    titleColor={ActiveColor[activeData?.payload?.name]?.titeleColor}
                />
            </div> : ""}

        </div>
    );
};

export default DomainWise;