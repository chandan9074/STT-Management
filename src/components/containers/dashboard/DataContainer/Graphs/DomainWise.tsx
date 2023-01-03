import React, {useCallback, useEffect, useState} from "react";
import {PieChart, Pie, Cell, Tooltip} from "recharts";
import {createCollectData} from "../../../../../data/dashboard/createCollectData";

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

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
                                   cx,
                                   cy,
                                   midAngle,
                                   innerRadius,
                                   outerRadius,
                                   percent,
                                   index,
                                   data
                               }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.3;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const CustomTooltip = () => {
    return (
        <div>
            <p>Hello</p>
        </div>
    );
};
const DomainWise = () => {
    const listData: any = createCollectData
    let domainData: any = []
    const res = listData.data[0].domainWise.map((e: any) =>
        domainData.push({
            name: e.name,
            value: e.contribution
        })
    )
    return (
        <div >
            <PieChart width={400} height={400}>
                <Pie
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
                >
                    {COLORS.map((entry: any, index: any) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}

                        />
                    ))}
                </Pie>
                <Tooltip content={<CustomTooltip/>}/>
            </PieChart>
        </div>
    );
};

export default DomainWise;