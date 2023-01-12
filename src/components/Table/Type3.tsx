import React from 'react';
import { Table } from "antd";
import './type2BillingTable.css'
import { collectDataDT, createDataDT } from '../../types/dashboardTypes';
interface Props {
    // data: createDataDT | collectDataDT ;
    data: any
    activePanel: string
}

const Type3 = ({ data, activePanel }: Props) => {
    let professionWiseData = Object.assign([], data?.professionWise)
    const bgColor: any = {
        1: {
            bgColor: "#F5427F"
        },
        2: {
            bgColor: "#425EF5"
        },
        3: {
            bgColor: "#42E0F5"
        },
        4: {
            bgColor: "#3EE545"
        },
        5: {
            bgColor: "#E4F542"
        },
        6: {
            bgColor: "#DB42F5"
        },
        7: {
            bgColor: "#F57142"
        },
        8: {
            bgColor: "#42B9F5"
        },
    }
    const dataSource = [
        {
            key: '1',
            distribution_source: {
                id: 1,
                name: "dev"
            },
            target: 32,
            received: 250,
            valid_hr: 200,
            valid_percent: " 15 %",
            invalid_hr: 115,
            last_update: "12 aug 2022"
        },
        {
            key: '2',
            distribution_source: {
                id: 2,
                name: "dev"
            },
            target: 32,
            received: 250,
            valid_hr: 200,
            valid_percent: " 15 %",
            invalid_hr: 115,
            last_update: "12 aug 2022"
        }, {
            key: '3',
            distribution_source: {
                id: 3,
                name: "dev"
            },
            target: 32,
            received: 250,
            valid_hr: 200,
            valid_percent: " 15 %",
            invalid_hr: 115,
            last_update: "12 aug 2022"
        }, {
            key: '4',
            distribution_source: {
                id: 4,
                name: "dev"
            },
            target: 32,
            received: 250,
            valid_hr: 200,
            valid_percent: " 15 %",
            invalid_hr: 115,
            last_update: "12 aug 2022"
        }, {
            key: '5',
            distribution_source: {
                id: 5,
                name: "dev"
            },
            target: 32,
            received: 250,
            valid_hr: 200,
            valid_percent: " 15 %",
            invalid_hr: 115,
            last_update: "12 aug 2022"
        }, {
            key: '6',
            distribution_source: {
                id: 6,
                name: "dev"
            },
            target: 32,
            received: 250,
            valid_hr: 200,
            valid_percent: " 15 %",
            invalid_hr: 115,
            last_update: "12 aug 2022"
        }, {
            key: '7',
            distribution_source: {
                id: 7,
                name: "jalal"
            },
            target: 32,
            received: 250,
            valid_hr: 200,
            valid_percent: " 15 %",
            invalid_hr: 115,
            last_update: "12 aug 2022"
        }, {
            key: '8',
            distribution_source: {
                id: 8,
                name: "dev"
            },
            target: 32,
            received: 250,
            valid_hr: 200,
            valid_percent: " 15 %",
            invalid_hr: 115,
            last_update: "12 aug 2022"
        },

    ];
    const columns = [
        {
            title: `${activePanel.replace('-wise', '').toUpperCase()}`,
            dataIndex: 'name',
            key: 'distribution_source',
            render: (data: any) => (

                <>
                    <div className="flex items-center gap-1">
                        <div style={{
                            height: "8px",
                            width: "8px",
                            borderRadius: "50%",
                            // background: `${bgColor[data.id].bgColor}`
                        }}></div>
                        <p className="-mb-[2px]">{data}</p>
                    </div>
                </>
            )
        },
        {
            title: 'RECEIVE (HOUR)',
            dataIndex: 'totalReceived',
            key: 'totalReceived',
            render: (data: any) => (
                <>
                    <p className="-mb-[2px] text-small">{data === 0 ? "-" : data}</p>
                </>
            )
        },
        {
            title: 'VALID (HOUR)',
            dataIndex: 'totalValid',
            key: 'totalValid',
            render: (data: any) => (
                <>
                    <p className="-mb-[2px] text-small">{data === 0 ? "-" : data}</p>
                </>
            )
        },
        {
            title: 'INVALID (HOUR)',
            dataIndex: 'totalInvalid',
            key: 'totalInvalid',
            render: (data: any) => (
                <>
                    <p className="-mb-[2px] text-small">{data === 0 ? "-" : data}</p>
                </>
            )
        },
        {
            title: 'LAST UPDATE',
            dataIndex: 'lastUpdate',
            key: 'last_update',
            render: (data: any) => (
                <>
                    <p className="-mb-[2px] text-small">{data === 0 ? "-" : data}</p>
                </>
            )
        },
    ];

    const columnsForDistribution = [
        {
            title: `${activePanel.replace('-wise', '').toUpperCase()}`,
            dataIndex: 'name',
            key: 'distribution_source',
            render: (data: any) => (
                <>
                    <div className="flex items-center gap-1">
                        <div style={{
                            height: "8px",
                            width: "8px",
                            borderRadius: "50%",
                            // background: `${bgColor[data.id].bgColor}`
                        }}></div>
                        <p className="-mb-[2px]">{data}</p>
                    </div>
                </>
            )
        },
        {
            title: 'TARGET(HOUR)',
            dataIndex: 'target',
            key: 'target',
            render: (data: any) => (
                <>
                    <p className="-mb-[2px] text-small">{data === 0 ? "-" : data}</p>
                </>
            )
        },
        {
            title: 'RECEIVE (HOUR)',
            dataIndex: 'totalReceived',
            key: 'totalReceived',
            render: (data: any) => (
                <>
                    <p className="-mb-[2px] text-small">{data === 0 ? "-" : data}</p>
                </>
            )
        },
        {
            title: 'VALID (HOUR)',
            dataIndex: 'totalValid',
            key: 'totalValid',
            render: (data: any) => (
                <>
                    <p className="-mb-[2px] text-small">{data === 0 ? "-" : data}</p>
                </>
            )
        },
        {
            title: 'INVALID (HOUR)',
            dataIndex: 'totalInvalid',
            key: 'totalInvalid',
            render: (data: any) => (
                <>
                    <p className="-mb-[2px] text-small">{data === 0 ? "-" : data}</p>
                </>
            )
        },
        {
            title: 'LAST UPDATE',
            dataIndex: 'lastUpdate',
            key: 'lastUpdate',
            render: (data: any) => (
                <>
                    <p className="-mb-[2px] text-small">{data === 0 ? "-" : data}</p>
                </>
            )
        },
    ];

    function camelize(text: string) {
        const a = text.toLowerCase()
            .replace(/[-_\s.]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
        return a.substring(0, 1).toLowerCase() + a.substring(1);
    }


    return (
        <div className="billing-table">
            <Table
                dataSource={activePanel === "Profession-wise" ? professionWiseData.reverse() : data[camelize(activePanel)]}
                columns={activePanel === "Distribution Source-wise" ? columnsForDistribution : columns}
                pagination={false}
                summary={(pageData) => {
                    let totalTarget = 0;
                    let totalReceive = 0;
                    let totalValid_hr = 0;
                    let totalInvalid_hr = 0;

                    // @ts-ignore
                    pageData.forEach(({ target, totalReceived, totalValid, totalInvalid }) => {
                        totalTarget += target;
                        totalReceive += totalReceived;
                        totalValid_hr += totalValid;
                        totalInvalid_hr += totalInvalid
                    });

                    return (
                        <>
                            <Table.Summary.Row>
                                <Table.Summary.Cell index={0}>
                                    <p className="text-small text-blue-gray-80 font-bold">Total</p>
                                </Table.Summary.Cell>
                                {activePanel === "Distribution Source-wise" ? <Table.Summary.Cell index={1}>
                                    <p className="text-small text-blue-gray-80 font-bold">{totalTarget}</p>
                                </Table.Summary.Cell> : ""}
                                <Table.Summary.Cell index={2}>
                                    <p className="text-small text-blue-gray-80 font-bold">{totalReceive}</p>
                                </Table.Summary.Cell>
                                <Table.Summary.Cell index={3}>
                                    <p className="text-small text-blue-gray-80 font-bold">{totalValid_hr}</p>
                                </Table.Summary.Cell>
                                <Table.Summary.Cell index={4}>
                                    <p className="text-small text-blue-gray-80 font-bold">{totalInvalid_hr}</p>
                                </Table.Summary.Cell>
                            </Table.Summary.Row>

                        </>
                    );
                }}
            />


        </div>
    );
};

export default Type3;