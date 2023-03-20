import { useRef } from "react";
import ReactToPrint from "react-to-print";
// @ts-ignore
import Icons from "../../assets/Icons";
import Buttons from "../Buttons";

interface Props {
    data: any
}
const Type2 = ({ data }: Props) => {
    const componentRef = useRef<any>(null);

    // const handleDownload = () => {
    //     const doc = new jsPDF();
    // };
    return (
        <div>
            <ReactToPrint
                trigger={() => (
                    <Buttons.IconWithTextButton.Tertiary
                        label="Downlaod Script"
                        size="xSmall"
                        variant="Blue"
                        icon={<img alt="" src={Icons.fileDownload} />}
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