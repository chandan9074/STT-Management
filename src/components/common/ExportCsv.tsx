import React from 'react';
import XLSX from 'sheetjs-style';
import * as FileSaver from 'file-saver';

interface Props {
    csvData: any;
    fileName: any;
    headerCells: any;
}

const ExportCsv = ({csvData, fileName, headerCells}: Props) => {


        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const fileExtension = '.xlsx';

        const exportToCSV = (csvData: any, fileName: any) => {
            const ws = XLSX.utils.json_to_sheet(csvData);

            for (let headerCell in headerCells) {

                ws[headerCell].s = {
                    font: {
                        bold: true,
                    }
                }

                ws[headerCell].v = headerCells[headerCell]
            }

            const wb = {Sheets: {'data': ws}, SheetNames: ['data']};
            const excelBuffer = XLSX.write(wb, {bookType: 'xlsx', type: 'array'});
            const data = new Blob([excelBuffer], {type: fileType});
            FileSaver.saveAs(data, fileName + fileExtension);

        }

        return (
            <div>
                <button
                    onClick={() => exportToCSV(csvData, fileName)}
                    className="border rounded-md border-white font-sans text-small text-ct-blue-60 font-medium hover:border-ct-blue-30 duration-300 px-4 py-2"
                    id="csv"
                >
                    Download in Excel
                </button>
            </div>
        );
    }
;

export default ExportCsv;