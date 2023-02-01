import React, { Fragment } from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { PDF } from '.';
import ReactPDF from '@react-pdf/renderer';
import { createCollectData, createCollectDataTTS } from '../../data/dashboard/createCollectData';
const PdfContainer = () => {
    const handlePdf = () => {

    }

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
        </div>
    );
};

export default PdfContainer;