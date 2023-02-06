import React, { useState } from 'react';
import { Workbook, Worksheet } from 'exceljs';
import { DISTRIBUSION_SOURCE } from '../../helpers/ConditionVariable';



const arrData: any = [
    {
        name: "read",
        target: 10,
        receive: 20,
        valid: 30,
        invalid: 40,
        lastUpdate: "22 aug 2022"
    },
    {
        name: "mono",
        target: 10,
        receive: 20,
        valid: 30,
        invalid: 40,
        lastUpdate: "22 aug 2022"
    },
    {
        name: "Di",
        target: 10,
        receive: 20,
        valid: 30,
        invalid: 40,
        lastUpdate: "22 aug 2022"
    },
    {
        name: "Lecture",
        target: 10,
        receive: 20,
        valid: 30,
        invalid: 40,
        lastUpdate: "22 aug 2022"
    },

]

const worksheetlist: any = ["Distribution Source", "Domain", "Gender", "Age", "Locality", "Economic Situation", "Education Situation", "Profession", "Recording Area", "Recording Distance"]

interface Props {
    data: any;
    type: string;
    module: string,
    lastUpdate: string;
    totalValid: number
}

const Type2 = (props: Props) => {
    const { data, type, module, lastUpdate, totalValid } = props

    // const handleExport = () => {
    //     const workbook = new Workbook();
    //     const Worksheet = workbook.addWorksheet('Sheet1');
    //     const Worksheet2 = workbook.addWorksheet('Sheet2');

    //     Worksheet.mergeCells('A1');
    //     Worksheet.getCell('A1').value = 'STT- CREATE DATA'
    //     Worksheet.mergeCells('A2', 'D2');
    //     Worksheet.getCell('A2').value = 'Distribution source-wise data distribution'
    //     Worksheet.mergeCells('A3', 'C3');
    //     Worksheet.getCell('A3').value = '(valid: 1000h, last update: 22 Aug 2022)'


    //     /*Column headers*/
    //     Worksheet.getRow(6).values = ['Distribution Source', 'Target (hour)', 'Received (hour)', 'Valid (hour)', 'Invalid (hour)', 'Last update'];
    //     Worksheet.getRow(6).font = {
    //         bold: true,
    //     };
    //     Worksheet.columns = [
    //         { key: 'name', width: 30 },
    //         { key: 'target', width: 20 },
    //         { key: 'receive', width: 20 },
    //         { key: 'valid', width: 20 },
    //         { key: 'invalid', width: 20 },
    //         { key: 'lastUpdate', width: 30 }
    //     ]
    //     arrData.forEach((item: any, index: number) =>
    //         Worksheet.addRow({
    //             name: item.name,
    //             target: item.target,
    //             receive: item.receive,
    //             valid: item.valid,
    //             invalid: item.invalid,
    //             lastUpdate: item.lastUpdate,
    //         })
    //     )

    //     const sumOfTarget = arrData.reduce((sum: any, value: any) => sum + value.target, 0);
    //     const sumOfReceive = arrData.reduce((sum: any, value: any) => sum + value.receive, 0);
    //     const sumOfValid = arrData.reduce((sum: any, value: any) => sum + value.valid, 0);
    //     const sumOfInvalid = arrData.reduce((sum: any, value: any) => sum + value.invalid, 0);

    //     const totalRow = Worksheet.addRow({
    //         name: 'Total',
    //         target: sumOfTarget,
    //         receive: sumOfReceive,
    //         valid: sumOfValid,
    //         invalid: sumOfInvalid,
    //     });

    //     totalRow.font = {
    //         bold: true,
    //         color: { argb: 'FF0000' },
    //     };

    //     // for downlaod excel file 
    //     workbook.xlsx.writeBuffer().then((buffer) => {
    //         const blob = new Blob([buffer], { type: 'application/octet-stream' });
    //         const link = document.createElement('a');
    //         link.href = window.URL.createObjectURL(blob);
    //         link.download = 'data.xlsx';
    //         link.click();
    //     });
    // };



    const handleWorksheet = (name: string, workbook: any, fullData: any) => {
        const Worksheet = workbook.addWorksheet(name);

        Worksheet.mergeCells('A1');
        Worksheet.getCell('A1').value = `${module}-${type.toLocaleUpperCase()} DATA`
        Worksheet.mergeCells('A2', 'D2');
        Worksheet.getCell('A2').value = `${name}-wise data distribution`
        Worksheet.mergeCells('A3', 'C3');
        Worksheet.getCell('A3').value = `(valid: ${totalValid}h, last update: ${lastUpdate})`


        /*Column headers*/
        if (name === "Distribution Source") {

            Worksheet.getRow(6).values = [name, 'Target (hour)', 'Received (hour)', 'Valid (hour)', 'Invalid (hour)', 'Last update'];

            Worksheet.columns = [
                { key: 'name', width: 30 },
                { key: 'target', width: 20 },
                { key: 'receive', width: 20 },
                { key: 'valid', width: 20 },
                { key: 'invalid', width: 20 },
                { key: 'lastUpdate', width: 30 }
            ]
            fullData.forEach((item: any, index: number) =>
                Worksheet.addRow({
                    name: item.name,
                    target: item.target,
                    receive: item.totalReceived,
                    valid: item.totalValid,
                    invalid: item.totalInvalid,
                    lastUpdate: item.lastUpdate,
                })
            )

            const sumOfTarget = fullData.reduce((sum: any, value: any) => sum + value.target, 0);
            const sumOfReceive = fullData.reduce((sum: any, value: any) => sum + value.totalReceived, 0);
            const sumOfValid = fullData.reduce((sum: any, value: any) => sum + value.totalValid, 0);
            const sumOfInvalid = fullData.reduce((sum: any, value: any) => sum + value.totalInvalid, 0);

            const totalRow = Worksheet.addRow({
                name: 'Total',
                target: sumOfTarget,
                receive: sumOfReceive,
                valid: sumOfValid,
                invalid: sumOfInvalid,
            });

            totalRow.font = {
                bold: true,
                color: { argb: '000000' },
            };
        }
        else {

            Worksheet.getRow(6).values = [name, 'Received (hour)', 'Valid (hour)', 'Invalid (hour)', 'Last update'];
            Worksheet.columns = [
                { key: 'name', width: 30 },
                { key: 'receive', width: 20 },
                { key: 'valid', width: 20 },
                { key: 'invalid', width: 20 },
                { key: 'lastUpdate', width: 30 }
            ]
            fullData.forEach((item: any, index: number) =>
                Worksheet.addRow({
                    name: item.name,
                    receive: item.totalReceived,
                    valid: item.totalValid,
                    invalid: item.totalInvalid,
                    lastUpdate: item.lastUpdate,
                })
            )

            const sumOfReceive = fullData.reduce((sum: any, value: any) => sum + value.totalReceived, 0);
            const sumOfValid = fullData.reduce((sum: any, value: any) => sum + value.totalValid, 0);
            const sumOfInvalid = fullData.reduce((sum: any, value: any) => sum + value.totalInvalid, 0);

            const totalRow = Worksheet.addRow({
                name: 'Total',
                receive: sumOfReceive,
                valid: sumOfValid,
                invalid: sumOfInvalid,
            });

            totalRow.font = {
                bold: true,
                color: { argb: '000000' },
            };

        }


        Worksheet.getRow(6).font = {
            bold: true,
        };

        Worksheet.getCell("A6").fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "D3D3D3" },
        };
        Worksheet.getCell("B6").fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "D3D3D3" },
        };
        Worksheet.getCell("C6").fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "D3D3D3" },
        };
        Worksheet.getCell("D6").fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "D3D3D3" },
        };
        Worksheet.getCell("E6").fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "D3D3D3" },
        };
        Worksheet.getColumn('lastUpdate').alignment = { vertical: 'middle', horizontal: 'right' };

    }


    const handleExport = () => {
        const workbook = new Workbook();
        const res = data.map((_data: any) => {
            handleWorksheet(_data.name, workbook, _data.data)
        })

        // for downlaod excel file 
        workbook.xlsx.writeBuffer().then((buffer) => {
            const blob = new Blob([buffer], { type: 'application/octet-stream' });
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);

            link.download = `Dashboard_${module}_${type} Data.xlsx`;
            link.click();
        });
    };

    return (
        <p
            onClick={handleExport}
            className='text-small font-medium text-blue-gray-80 hover:text-ct-blue-60 cursor-pointer'
        >
            Download as Excel
        </p>
    );
};

export default Type2;
