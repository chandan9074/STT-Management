import React, { Fragment, useEffect, useState } from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { PDF } from '.';
import ReactPDF from '@react-pdf/renderer';
import { createCollectData, createCollectDataTTS } from '../../data/dashboard/createCollectData';
import { Excel } from '../Excel';

const sample_data = [
    {
        distribution_source: "red",
        target: 100,
        received: 120,
        valid: 20,
        invalid: 20,
        lastUpdate: "22 aug 2022"
    },
    {
        distribution_source: "black",
        target: 100,
        received: 120,
        valid: 20,
        invalid: 20,
        lastUpdate: "22 aug 2022"
    },
    {
        distribution_source: "yellow",
        target: 100,
        received: 120,
        valid: 20,
        invalid: 20,
        lastUpdate: "22 aug 2022"
    },
    {
        distribution_source: "blue",
        target: 100,
        received: 120,
        valid: 20,
        invalid: 20,
        lastUpdate: "22 aug 2022"
    },

]
const PdfContainer = () => {

    const [excelData, setExcelData] = useState<any>([])
    useEffect(() => {
        GetBillingExcelData(sample_data)
    }, [])
    const excelHeader = {
        // A1: `${"STT- COLLECT DATA"}`,
        // A2: `${"Distribution source-wise data distribution"}`,
        // A3: `${"(valid: 1000h, last update: 22 Aug 2022)"}`,
        A1: `${"Distribution Source"}`,
        B1: `${"Target (hour)"}`,
        C1: `${"Received (hour)"}`,
        D1: `${"Valid (hour)"}`,
        E1: `${"Invalid (hour)"}`,
        F1: `${"Last update"}`,
    };

    const GetBillingExcelData = (data: any) => {
        setExcelData(
            data?.map((value: any) => {
                return {
                    distribution_source: value.distribution_source,
                    target: value.target,
                    received: value.received,
                    valid: value.valid,
                    invalid: value.invalid,
                    lastUpdate: value.lastUpdate,
                };
            })
        );
    };



    return (
        <div>
            {/* <button onClick={() => handlePdf()}>download pdf</button> */}

            {/* <div className="App">
                <PDFDownloadLink document={<PDF.Type1 />} fileName="somename.pdf">
                    @ts-ignore
                    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
                </PDFDownloadLink>
            </div> */}

            {/* <Fragment>
                <PDFViewer width="1366" height="600">
                    <Fragment>
                        <PDF.Type1
                            data={createCollectData.data.collectData}
                            type="Create"
                            module='TTS'
                        />
                    </Fragment>
                </PDFViewer>
            </Fragment> */}

            <Excel.Type2 />

        </div>
    );
};

export default PdfContainer;