import React, { Fragment, useEffect, useState } from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { PDF } from '.';
import ReactPDF from '@react-pdf/renderer';
import { createCollectData, createCollectDataTTS } from '../../data/dashboard/createCollectData';
import { Excel } from '../Excel';

interface Props {
    data: any
}

const PdfContainer = ({ data }: Props) => {

    return (
        <div>
            {/* <button onClick={() => handlePdf()}>download pdf</button> */}

            <div className="App">
                <PDFDownloadLink document={<PDF.Type2 data={data} />} fileName="somename.pdf">
                    {/* @ts-ignore */}
                    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
                </PDFDownloadLink>
            </div>

            {/* <Fragment>
                <PDFViewer width="1366" height="600">
                    <Fragment>
                        <PDF.Type2
                            data={data}

                        />
                    </Fragment>
                </PDFViewer>
            </Fragment> */}

            {/* <Excel.Type2 /> */}

        </div>
    );
};

export default PdfContainer;