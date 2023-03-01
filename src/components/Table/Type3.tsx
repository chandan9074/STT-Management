import { Table } from "antd";
import "../../assets/css/table/table.css";
import { getTableColorByName } from '../../helpers/Utils';
interface Props {
    // data: createDataDT | collectDataDT ;
    data: any
    activePanel: string
}

const Type3 = ({ data, activePanel }: Props) => {
    let professionWiseData = Object.assign([], data?.professionWise)
    const columns = [
        {
            title: `${activePanel.replace('-wise', '').toUpperCase()}`,
            dataIndex: 'name',
            key: 'distribution_source',
            render: (data: any) => (

                <>
                    <div className="flex items-center gap-2">
                        <div style={{
                            height: "8px",
                            width: "8px",
                            borderRadius: "50%",
                            background: `${getTableColorByName(data)}`
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
            align: 'right' as 'right',
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
            align: 'right' as 'right',
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
            align: 'right' as 'right',
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
                    <div className="flex items-center gap-2">
                        <div style={{
                            height: "8px",
                            width: "8px",
                            borderRadius: "50%",
                            background: `${getTableColorByName(data)}`
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
            align: 'right' as 'right',
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
            align: 'right' as 'right',
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
            align: 'right' as 'right',
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
            align: 'right' as 'right',
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
                rowKey={data[camelize(activePanel)].id}
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
                                    <p className="text-small text-blue-gray-80 font-bold ml-[2px]">Total</p>
                                </Table.Summary.Cell>
                                {activePanel === "Distribution Source-wise" ? <Table.Summary.Cell index={1}>
                                    <p className="text-small text-blue-gray-80 font-bold text-right">{totalTarget}</p>
                                </Table.Summary.Cell> : ""}
                                <Table.Summary.Cell index={2}>
                                    <p className="text-small text-blue-gray-80 font-bold text-right">{totalReceive}</p>
                                </Table.Summary.Cell>
                                <Table.Summary.Cell index={3}>
                                    <p className="text-small text-blue-gray-80 font-bold text-right">{totalValid_hr}</p>
                                </Table.Summary.Cell>
                                <Table.Summary.Cell index={4}>
                                    <p className="text-small text-blue-gray-80 font-bold text-right">{totalInvalid_hr}</p>
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