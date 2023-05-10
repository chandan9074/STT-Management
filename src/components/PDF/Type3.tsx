import React, { useEffect, useRef, useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
// import { Document, Page, Text, StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { Page, Text, View, Document, StyleSheet, PDFViewer, PDFDownloadLink, Font } from '@react-pdf/renderer';
import ReactDOM from 'react-dom';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactDOMServer from 'react-dom/server';

interface Props {
  data: any[];
}

const Type3 = ({ data }: Props) => {

  // Register the font for Bengali text
  Font.register({
    family: 'Noto Sans Bengali',
    src: 'https://fonts.gstatic.com/ea/notosansbengali/v1/NotoSansBengali-Regular.ttf',
  });



  // const handleDownload = () => {
  //   data.forEach((item, index) => {
  //     const MyDocument = () => (
  //       <Document>
  //         <Page size="A4">
  //           <Text>Subject: {item.script.title}</Text>
  //           <Text>Source type: {item.script.distributionSource}</Text>
  //           <Text>Source Domain: {item.script.domain}</Text>
  //           <Text render={({ pageNumber, totalPages }) => (
  //             `ID: ${item.script.id} - Page ${pageNumber} of ${totalPages}`
  //           )} fixed />
  //           <Text>Ref: {item.script.sourceType}</Text>
  //         </Page>
  //       </Document>
  //     );

  //     const downloadLink = (
  //       <PDFDownloadLink document={<MyDocument />} fileName={`script_${index + 1}.pdf`}>
  //         {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
  //       </PDFDownloadLink>
  //     );

  //     const link = document.createElement('a');
  //     link.href = window.URL.createObjectURL(
  //       new Blob([downloadLink.props.document.props.file], { type: 'application/pdf' })
  //     );
  //     link.download = downloadLink.props.fileName;
  //     link.click();
  //   });
  // };

  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "white"
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });
 

  // solved without support bangla language
  const handleDownload = () => {
    const zip = new JSZip();
  
    const addPdfToZip = (item: any, index: any) => {
      return new Promise((resolve: any, reject) => {
        const doc = new jsPDF();
  
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.text(`Subject: ${item.script.title}`, 20, 20);
  
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text(`Source type: ${item.script.distributionSource}`, 20, 30);
        doc.text(`Source Domain: ${item.script.domain}`, 20, 40);
  
        const idText = `ID: ${item.script.id}`;
        const idTextWidth = doc.getTextWidth(idText);
        const idTextX = doc.internal.pageSize.width - 20 - idTextWidth;
        doc.text(idText, idTextX, 50);
  
        doc.text(`Ref: ${item.script.sourceType}`, 20, 60);
  
        doc.setFontSize(12);
  
        doc.line(20, 70, 200, 70);
  
        const lines = doc.splitTextToSize(item.script.description, 160);
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
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
  //   const zip = new JSZip();
  //   data.forEach((item, index) => {
  //     const doc = new jsPDF();
  
  //     doc.setFontSize(16);
  //     doc.setFont('helvetica', 'bold');
  //     doc.text(`Subject: ${item.script.title}`, 20, 20);
  
  //     doc.setFontSize(12);
  //     doc.setFont('helvetica', 'normal');
  //     doc.text(`Source type: ${item.script.distributionSource}`, 20, 30);
  //     doc.text(`Source Domain: ${item.script.domain}`, 20, 40);

  //     // id
  //     const idText = `ID: ${item.script.id}`;
  //     const idTextWidth = doc.getTextWidth(idText);
  //     const idTextX = doc.internal.pageSize.width - 20 - idTextWidth;
  //     doc.text(idText, idTextX, 50);
    
  //     doc.text(`Ref: ${item.script.sourceType}`, 20, 60);

  //     doc.text(`Ref: ${item.script.sourceType}`, 20, 60);
  
  //     doc.setFontSize(12);

  //     //  doc.text('-------------------------------------------------', 20, 70);
  //     doc.line(20, 70, 200, 70)
  
  //     const lines = doc.splitTextToSize(item.script.description, 160);
  //     doc.setFontSize(12);
  //     doc.setFont('helvetica', 'normal');
  //     doc.text(lines, 20, 80);
  
  //     // Save the PDF
  //     doc.save(`Script_${index + 1}.pdf`);

  //   });
  // };


  // const handleDownload = () => {
  //   const doc = new jsPDF();

  //   let y = 10;

  //   data.forEach((item, index) => {
  //     doc.setFontSize(12);
  //     doc.setFont('helvetica', 'normal');

  //     doc.text(`Subject: ${item.script.title}`, 10, y + 10);
  //     doc.text(`Source type: ${item.script.distributionSource}`, 10, y + 20);
  //     doc.text(`Source Domain: ${item.script.domain}`, 10, y + 30);
  //     doc.text(`ID: ${item.script.id}`, 10, y + 40);
  //     doc.text(`Ref: ${item.script.sourceType}`, 10, y + 50);
  //     doc.text(item.script.description, 10, y + 70);

  //     doc.setDrawColor(0, 0, 0);
  //     doc.setLineWidth(0.5);
  //     doc.line(10, y + 65, 200, y + 65);

  //     y += 90;

  //     if (index < data.length - 1) {
  //       doc.addPage();
  //     } else {
  //       doc.save('Scripts.pdf');
  //     }
  //   });
  // };

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



  // const handleDownload = () => {
  //   const zip = new JSZip();

//   data.forEach((item, index) => {
//     const pdfContent = (
//   <div className="p-10" key={index}>
//  <p className="text-heading-3 font-bold mb-4">Subject: {item.script.title}</p>
//  <p className="">Source type: {item.script.distributionSource}</p>
//  <p>Source Domain: {item.script.domain}</p>
//  <p className="text-right">ID: {item.script.id}</p>
//  <p>Ref: {item.script.sourceType}</p>
//   <hr className="my-2" />
//  <p>{item.script.description}</p>
//  </div> 
//     );

    //   // const pdfBlob = new Blob([renderToStaticMarkup(pdfContent)], { type: 'application/pdf' });
    //   const pdfBlob = new Blob([renderToString(pdfContent)], { type: 'application/pdf' });

    //   zip.file(`script_${index + 1}.pdf`, pdfBlob);
    // });

    // zip.generateAsync({ type: 'blob' }).then((content) => {
    //   saveAs(content, 'scripts.zip');
    // });
  // };

  // const handleDownload = () => {
  //   data.forEach((item, index) => {
  //     const MyDocument = () => (
  //       <Document>
  //         <Page size="A4" style={styles.page}>
  //           <View style={styles.section}>
  //             <Text>Subject: {item.script.title}</Text>
  //             <Text>Source type: {item.script.distributionSource}</Text>
  //             <Text>Source Domain: {item.script.domain}</Text>
  //             <Text>ID: {item.script.id}</Text>
  //             <Text>Ref: {item.script.sourceType}</Text>
  //             <Text>{item.script.description}</Text>
  //           </View>
  //         </Page>
  //       </Document>
  //     );

  //     const fileName = `script_${index + 1}.pdf`;

  //     const handleDownload = (url: string) => {
  //       const link = document.createElement("a");
  //       link.href = url;
  //       link.download = fileName;
  //       link.style.display = "none";
  //       document.body.appendChild(link);
  //       link.click();
  //       document.body.removeChild(link);
  //     };

  //     const downloadLink = (
  //       <PDFDownloadLink document={<MyDocument />} fileName={fileName}>
  //         {({ blob, url, loading, error }) => {
  //           if (loading) {
  //             return "Loading document...";
  //           } else if (error) {
  //             return "Error occurred while generating PDF.";
  //           } else if (url) {
  //             handleDownload(url); // Trigger the download with the URL
  //             return null;
  //           } else {
  //             return null;
  //           }
  //         }}
  //       </PDFDownloadLink>
  //     );

  //     const linkElement = React.Children.only(downloadLink);

  //     // Render the link to generate the URL
  //     ReactDOM.render(linkElement, document.createElement("div"));
  //   });
  // };

  return (
    <div>
      <button onClick={handleDownload}>Download Scripts</button>

      {/* <div className="App">
        <PDFDownloadLink
          document={
            <Document>
              {data.map((item, index) => (
                <Page key={index} size="A4" style={styles.page}>
                  <View style={styles.section}>
                    <Text>Subject: {item.script.title}</Text>
                    <Text>Source type: {item.script.distributionSource}</Text>
                    <Text>Source Domain: {item.script.domain}</Text>
                    <Text>ID: {item.script.id}</Text>
                    <Text>Ref: {item.script.sourceType}</Text>
                    <Text>{item.script.description}</Text>
                  </View>
                </Page>
              ))}
            </Document>
          }
          fileName="scripts.pdf"
        >
          {({ blob, url, loading, error }) => {
            if (loading) {
              return "Generating PDF...";
            } else if (error) {
              return "Error occurred while generating PDF.";
            } else if (url) {
              return <a href={url}>Download now----------</a>;
            } else {
              return null;
            }
          }}
        </PDFDownloadLink>
      </div>
      */}
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

