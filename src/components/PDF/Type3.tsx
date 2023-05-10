import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';

import '../../assets/fonts/Li Alinur Tumatul Unicode-normal.js';
// import '../../assets/fonts/../../assets/fonts/SolaimanLipi-Normal.ttf';


const fontTtfName = 'Li Alinur Tumatul Unicode-normal.ttf';
const fontTitle = 'Li Alinur Tumatul Unicode';

interface Props {
  data: any[];
}

const Type3 = ({ data }: Props) => {

  

  const handleDownload = () => {
    const zip = new JSZip();
  
    const addPdfToZip = (item: any, index: any) => {
      return new Promise((resolve: any, reject) => {
        const doc = new jsPDF();

      //    // Register the font with jsPDF
      //  doc.addFont('SolaimanLipi_22-02-2012-normal.ttf', 'SolaimanLipi_22-02-2012', 'normal');

      // // Set the font for the document
      // doc.setFont('SolaimanLipi_22-02-2012', 'normal');

      //  Register the font with jsPDF
       doc.addFont(fontTtfName, fontTitle, 'normal');

      // Set the font for the document
      doc.setFont(fontTitle, 'normal');



      
        doc.setFontSize(16);
        // doc.setFont('helvetica', 'bold');
        doc.text(`Subject: ${item.script.title}`, 20, 20);
  
        doc.setFontSize(12);
        // doc.setFont('helvetica', 'normal');
        doc.text(`Source type: ${item.script.distributionSource}`, 20, 30);
        doc.text(`Source Domain: ${item.script.domain}`, 20, 40);
  
        const idText = `ID: ${item.script.id}`;
        const idTextWidth = doc.getTextWidth(idText);
        const idTextX = doc.internal.pageSize.width - 20 - idTextWidth;
        doc.text(idText, idTextX, 50);
  
        doc.text(`Ref: ${item.script.sourceType}`, 20, 60);
  
        doc.setFontSize(12);
  
        doc.line(20, 70, 200, 70);

        // doc.text(`Rerrrrrrf: মাইক্রোসফট আফিস ট্রেনিং গাইড'`, 20, 60);
  
        const lines = doc.splitTextToSize(item.script.description, 160);
        doc.setFontSize(12);
        // doc.setFont('SolaimanLipi', 'helvetica', 'normal');
        // doc.setFont('helvetica', 'normal');
        doc.text(lines, 20, 80);

        const pdfDataUri = doc.output('datauristring');
        const pdfData = pdfDataUri.split(',')[1]; // Extract the base64-encoded PDF data
  
        zip.file(`Script_${index + 1}.pdf`, pdfData, { base64: true });
  
        resolve();
      });
    };
  
    const promises = data.map(addPdfToZip);
  
    Promise.all(promises)
      .then(() => {
        zip.generateAsync({ type: 'blob' })
          .then((content) => {
            saveAs(content, 'scripts.zip');
          });
      });
  };
  
  // const handleDownload = () => {
  //   data.forEach((item, index) => {
  //     // Create a new PDF document
  //     const doc = new jsPDF();

  //     // Set font size and style
  //     doc.setFontSize(12);
  //     // doc.setFont('helvetica', 'normal');

  //     // Define the content for the PDF
  //     const content = `
  //       <div>
  //         <p class="text-heading-3 font-bold mb-4">Subject: ${item.script.title}</p>
  //         <p class="">Source type: ${item.script.distributionSource}</p>
  //         <p>Source Domain: ${item.script.domain}</p>
  //         <p class="text-right">ID: ${item.script.id}</p>
  //         <p>Ref: ${item.script.sourceType}</p>
  //         <hr class="my-2" />
  //         <p>${item.script.description}</p>
  //       </div>
  //     `;


  //     // Add the content to the PDF
  //     doc.text(content, 10, 10);

  //     // Save the PDF file
  //     doc.save(`Script_${index + 1}.pdf`);
  //   });
  // };

  return (
    <div>
      <button onClick={handleDownload}>Download Scripts</button>
    </div>
  );
};


export default Type3;





// import React, { useEffect, useRef, useState } from 'react';
// import JSZip from 'jszip';
// import { saveAs } from 'file-saver';
// import { renderToStaticMarkup, renderToString } from 'react-dom/server';
// import { Page, Text, View, Document, StyleSheet, PDFViewer, PDFDownloadLink, Font } from '@react-pdf/renderer';
// import ReactDOM from 'react-dom';
// import ReactToPrint, { useReactToPrint } from 'react-to-print';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import ReactDOMServer from 'react-dom/server';

// // import '../../assets/fonts/Li Alinur Tumatul Unicode-normal.js'


// const fontTtfName = 'Li Alinur Tumatul Unicode-normal.ttf';
// // const fontTitle = 'Li Alinur Tumatul Unicode';
// const fontTitle = 'akaashnormal';


// Font.register({
//   family: 'akaashnormal',
//   src: '../../assets/fonts/akaashnormal.ttf',
// });

// interface Props {
//   data: any[];
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   sourceType: {
//     marginBottom: 4,
//   },
//   domain: {
//     marginBottom: 4,
//   },
//   id: {
//     textAlign: 'right',
//     marginBottom: 4,
//   },
//   sourceTypeRef: {
//     marginBottom: 4,
//   },
//   description: {
//     marginTop: 8,
//     // fontFamily: 'akaashnormal'
//   },
//   divider: {
//     marginTop: 8,
//     marginBottom: 8,
//     borderTop: '1px solid #000',
//   },
// });

// let linkElement;

// const PdfDownloadLink = ({ item, index }: { item: any, index: number }) => {
//   const MyDocument = () => (
//     <Document>
//       <Page size="A4">
//         <View style={styles.container}>
//           <Text style={styles.title}>Subject: {item.script.title}</Text>
//           <Text style={styles.sourceType}>Source type: {item.script.distributionSource}</Text>
//           <Text style={styles.domain}>Source Domain: {item.script.domain}</Text>
//           <Text style={styles.id}>ID: {item.script.id}</Text>
//           <Text style={styles.sourceTypeRef}>Ref: {item.script.sourceType}</Text>
//           <View style={styles.divider} />
//           <Text style={styles.description}>{item.script.description}</Text>
//           {/* <Text style={{ fontFamily: fontTitle }}>{item.script.description}</Text> */}
      
//         </View>
//       </Page>
//     </Document>
//   );

//   const fileName = `script_${index + 1}.pdf`;

//   const handleDownload = (url: string) => {
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = fileName;
//     link.style.display = 'none';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const downloadLink = (
//     <PDFDownloadLink document={<MyDocument />} fileName={fileName}>
//       {({ blob, url, loading, error }) => {
//         if (loading) {
//           return 'Loading document...';
//         } else if (error) {
//           return 'Error occurred while generating PDF.';
//         } else if (url) {
//           handleDownload(url); // Trigger the download with the URL
//           return null;
//         } else {
//           return null;
//         }
//       }}
//     </PDFDownloadLink>
//   );

//    linkElement = React.Children.only(downloadLink);

//   // Render the link to generate the URL
//   return <div>{linkElement}</div>;
// };
// console.log('------link element ', linkElement);


// const Type3 = ({ data }: Props) => {
//   const handleDownload = () => {
//     linkElement = null;

//     console.log('------------data', data);
    
//     data.map((item, index) => {
//       ReactDOM.render(<PdfDownloadLink item={item} index={index} />, document.createElement('div'));
//     })
//     // data.forEach((item, index) => {
//     //   ReactDOM.render(<PdfDownloadLink item={item} index={index} />, document.createElement('div'));
//     // });
//   };
  

//   return (
//     <div>
//       <button onClick={() => handleDownload()}>Download Scripts</button>
//     </div>
//   );
// };

// export default Type3;

