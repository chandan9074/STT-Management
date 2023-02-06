import React from 'react';
import { DISTRIBUSION_SOURCE } from '../../../helpers/ConditionVariable';
import TableFooter from './TableFooter';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

interface Props {
    data: any;
    headerName: string;
}
const TableIndex = (props: Props) => {
    const { data, headerName } = props
    let totalTerget: number = 0;
    let totalRecive: number = 0;
    let totalValid: number = 0;
    let totalInvalid: number = 0;


    const res = data.map((data: any) => {

        totalTerget = totalTerget + data.target
        totalRecive = totalRecive + data.totalReceived
        totalValid = totalValid + data.totalValid
        totalInvalid = totalInvalid + data.totalInvalid


    })

    const tableheaderdata: string[] = ["Distribution Source", "Target (hour)", "Received (hour)", "Valid (hour)", "Invalid (hour)", "Last update"]
    const tableheaderdata2: string[] = [`${headerName}`, "Received (hour)", "Valid (hour)", "Invalid (hour)", "Last update"]
    return (
        <div>
            <TableHeader tableheaderdata={headerName === DISTRIBUSION_SOURCE ? tableheaderdata : tableheaderdata2} />
            {data.map((data: any, index: number) => <TableRow
                key={index}
                data={data}
                headerName={headerName}
            />)}
            <TableFooter
                totalInvalid={totalInvalid}
                totalRecive={totalRecive}
                totalTerget={totalTerget}
                totalValid={totalValid}
                headerName={headerName}
            />
        </div>
    );
};

export default TableIndex;