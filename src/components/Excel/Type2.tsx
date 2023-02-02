// import React, { useCallback, useEffect, useState } from "react";
// import { read, utils, writeFileXLSX } from 'xlsx';

// interface Props {
//     csvData: any;
//     fileName: any;
//     headerCells: any;
// }

// const Type2 = ({ csvData, fileName, headerCells }: Props) => {
//     const [data, setData] = useState([
//         {
//             name: 'John Doe',
//             age: 32,
//             city: 'New York'
//         },
//         {
//             name: 'Jane Doe',
//             age: 29,
//             city: 'San Francisco'
//         }
//     ]);

//     /* get state data and export to XLSX */
//     const handleExport = () => {
//         const ws = utils.json_to_sheet(data);
//         const sumRow = { name: 'Total', age: data.reduce((sum, { age }) => sum + age, 0) };
//         ws['A' + (data.length + 2)] = { v: 'Total' };
//         ws['B' + (data.length + 2)] = { v: sumRow.age, t: 'n' };
//         const wb = utils.book_new();
//         utils.book_append_sheet(wb, ws, 'Sheet1');
//         writeFileXLSX(wb, 'data.xlsx');
//     };

//     return (
//         <div>
//             <button onClick={handleExport}>Export to XLSX</button>
//         </div>
//     );
// };
// export default Type2;



import React, { useState } from 'react';
import {
    read, writeFileXLSX, SSF, utils, writeFile
} from 'xlsx';
// import * as XLSX from 'xlsx';

interface Person {
    name: string;
    age: number;
    city: string;
}

function Type2() {
    const [data, setData] = useState<Person[]>([
        {
            name: 'John Doe',
            age: 32,
            city: 'New York'
        },
        {
            name: 'Jane Doe',
            age: 29,
            city: 'San Francisco'
        },
        {
            name: 'Jane Doe',
            age: 29,
            city: 'San Francisco'
        },
        {
            name: 'Jane Doe',
            age: 29,
            city: 'San Francisco'
        },
        {
            name: 'Jane Doe',
            age: 29,
            city: 'San Francisco'
        },
        {
            name: 'Jane Doe',
            age: 29,
            city: 'San Francisco'
        },
        {
            name: 'Jane Doe',
            age: 29,
            city: 'San Francisco'
        },
        {
            name: '',
            age: 0,
            city: ''
        }
    ]);



    // const handleExport = () => {
    // const ws = utils.json_to_sheet(data);
    // const range = utils.decode_range(ws['!ref'] as string);
    // const formula = `SUM(B2:B${range.e.r + 1})`;
    // ws['B' + (range.e.r + 2)] = {t: 'n', f: formula, v: SSF.parse_formula(formula)};
    // const wb = utils.book_new();
    // utils.book_append_sheet(wb, ws, 'Sheet1');
    // writeFile(wb, 'data.xlsx');
    //   };
    const handleExport = () => {

        const ws = utils.json_to_sheet(data);
        const range = utils.decode_range(ws['!ref'] as string);
        const sum = data.reduce((acc, current) => acc + current.age, 0);
        ws[`A${range.e.r + 1}`] = { t: 's', v: 'Total' };
        ws[`B${range.e.r + 1}`] = { t: 'n', v: sum };
        const wb = utils.book_new();
        utils.book_append_sheet(wb, ws, 'Sheet1');
        writeFile(wb, 'data.xlsx');



    };

    return (
        <div>
            <button onClick={handleExport}>Export to XLSX</button>
        </div>
    );
};

export default Type2;

