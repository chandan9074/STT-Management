import React from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { PDF } from '.';
import ReactPDF from '@react-pdf/renderer';
const PdfContainer = () => {
    const handlePdf = () => {

    }
    return (
        <div>
            {/* <button onClick={() => handlePdf()}>download pdf</button> */}

            <div className="App">
                <PDFDownloadLink document={<PDF.Type1 />} fileName="somename.pdf">
                    {/* @ts-ignore */}
                    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
                </PDFDownloadLink>
            </div>
        </div>
    );
};

export default PdfContainer;