import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import jsPDF from "jspdf";
// @ts-ignore
import font from './SolaimanLipi.ttf';
import Buttons from "../Buttons";
import Icons from "../../assets/Icons";



interface Props {
    data: any
}
const Type2 = ({ data }: Props) => {
    const componentRef = useRef<any>(null);

    const handleDownload = () => {
        const doc = new jsPDF();
        // doc.html(componentRef.current, {
        //     callback: () => {
        //         doc.save("document.pdf");
        //     }
        // });

    };
    return (
        <div>
            <ReactToPrint
                trigger={() => (
                    <Buttons.IconWithTextButton.Tertiary
                        label="Downlaod Script"
                        size="xSmall"
                        variant="Blue"
                        icon={<img src={Icons.fileDownload} />}
                        iconAlign="start"

                    />
                )}
                content={() => componentRef.current}
            />
            <div style={{ display: "none" }}>
                <div ref={componentRef} className="p-10">
                    <p className="text-heading-3 font-bold mb-4">Subject : {data.title}</p>
                    <p className="">Source type : {data.distributionSource}</p>
                    <p>Source Domain : {data.domain}</p>
                    <p className="text-right">ID : {data.id}</p>
                    <p>Ref : {data.sourceType}</p>
                    <hr className="my-2" />
                    <p>{data.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Type2;