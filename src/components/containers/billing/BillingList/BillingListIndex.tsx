import React, {useContext, useEffect, useState} from "react";
import BillingTable from "./BillingTable";
import {InputNumber} from "antd";
// import Primary from "./Primary";
import {ColumnsType} from "antd/es/table";
import ManagerIcon from "../../../../assets/images/BillingManagerAvatar.png"
import {allBillingParamsDT, lastBillingParamsDT} from "../../../../types/billingTypes";
import {BillingContext} from "../../../../context/BillingProvider";
import CustomRangeCalender, {DateDT} from "../../../calender/CustomRangeCalender";
import ExportCsv from "../../../common/ExportCsv";
import {excelNameFormatter} from "../../../../helpers/Utils";


interface Person {
    name: string;
    locality: string;
    image?: string;
}

export interface BillingDataType {
    key: React.Key;
    manager: Person;
    hour: string;
    amountPaid: string;
}

export interface AllBillingDataType {
    key: React.Key;
    date: any;
    hour: string;
    amountPaid: string;
}

const lastBillingColumns: ColumnsType<BillingDataType | AllBillingDataType> = [
    {
        title: "MANAGER",
        dataIndex: "manager",
        width: 100,
        render: (data) => (
            <>
                <div className="flex gap-2 items-start">
                    <img className="h-4 w-4 mt-1" src={ManagerIcon} alt=""/>
                    <div>
                        <p className="font-sans font-medium text-xs">{data.name}</p>
                        <p className="font-sans text-xxs text-blue-gray-75">
                            {data.locality}
                        </p>
                    </div>
                </div>
            </>
        ),
    },
    {
        title: "HOUR ",
        dataIndex: "hour",
        width: 100,
    },
    {
        title: "AMOUNT PAID",
        dataIndex: "amountPaid",
        width: 100,
    },
];
const allBillingColumns: ColumnsType<AllBillingDataType> = [
    {
        title: "DATE",
        dataIndex: "date",
        width: 100,
    },
    {
        title: "HOUR ",
        dataIndex: "hour",
        width: 100,
    },
    {
        title: "AMOUNT PAID",
        dataIndex: "amountPaid",
        width: 100,
    },
];

const BillingListIndex = () => {
    const billingContext = useContext(BillingContext)
    const {
        GetAllBillingInfo,
        GetLastBillingsInfo,
        lastBillings,
        allBillings,
        lastBillingsExcelData
    } = billingContext
    const [pageNumber, setPageNumber] = useState<number>(1)
    const [billingsParam, setBillingsParam] = useState<allBillingParamsDT>({
        pageSize: 1,
        type: "stt",
        role: "Manager"
    })
    const [lastBillingsParams, setLastBillingsParams] = useState<lastBillingParamsDT>({
        page: 1,
        pageSize: 10,
        type: "stt",
        role: "Manager"
    })
    const [dateValue, setDateValue] = useState<DateDT>({start: "", end: ""})
    const [open, setOpen] = useState<boolean>(false)


    useEffect(() => {
        GetAllBillingInfo(billingsParam)
        GetLastBillingsInfo(lastBillingsParams)
    }, [billingsParam])
    const changeEntry = (e: any) => {
        setPageNumber(e)
    };
    const handleChangeEntry = () => {
        setBillingsParam((prev: any) => ({...prev, pageSize: pageNumber}))

    }

    const listedLastBillings: BillingDataType[] = []
    const _res = lastBillings?.billingInfo.map((data) => {
        listedLastBillings.push({
            key: data.id,
            manager: {
                name: data.manager.name,
                locality: data.manager.locality
            },
            hour: `${data.hour} hr`,
            amountPaid: ` ${data.amountPaid} /-`,
        });
    })

    const listedAllBillings: AllBillingDataType[] = []
    const res = allBillings?.billingInfo.map((data) => {
        listedAllBillings.push({
            key: data.id,
            date: data.date,
            hour: `${data.hour} hr`,
            amountPaid: ` ${data.amountPaid} /-`,
        });
    })

    // console.log("--=====---", lastBillingsExcelData)
    const excelHeader = {
        A1: "MANAGER",
        B1: "HOUR",
        C1: "AMOUNT PAID",

    };
    return (
        <div>
            <div className="w-100 flex flex-row justify-between items-center gap-1 pt-10 ">
                <div className="flex flex-row items-center gap-4 ">
                    <h2 className="mb-0 border-r-2 pr-3 text-heading-6 font-medium text-ct-blue-95">Last Billing
                        Info</h2>
                    <div>
                        <p className="text-xxs text-ct-blue-90-70% mb-0">Paid</p>
                        <p className="text-small text-ct-blue-95 font-medium">BDT {lastBillings?.paid}</p>
                    </div>
                    <div>
                        <p className="text-xxs text-ct-blue-90-70% mb-0">Date of Payment</p>
                        <p className="text-small text-ct-blue-95 font-medium">{lastBillings?.dateOfPayment}</p>
                    </div>
                </div>

                <div>
                    {/*<button className="border rounded-md border-white font-sans text-small text-ct-blue-60 font-medium hover:border-gray-400 duration-300 p-1.5">Download in Excel*/}
                    {/*</button>*/}
                    <ExportCsv
                        csvData={lastBillingsExcelData}
                        fileName={excelNameFormatter("Manager Table", true)}
                        headerCells={excelHeader}
                    />
                </div>
            </div>
            {/*    table------------------*/}
            <div>
                <BillingTable
                    columnsData={lastBillingColumns}
                    dataSources={listedLastBillings}
                />
                <div className="my-4 w-100 flex items-center gap-8 justify-end">
                    {/* <Primary total={50}/> */}
                    <div className="flex items-center gap-2">
                        <button>Entry</button>
                        <InputNumber
                            className="w-12"
                            controls={false}
                            min={1}
                            max={10}
                            defaultValue={1}
                            onChange={changeEntry}/>
                    </div>
                </div>
            </div>
            <hr className="my-10"/>
            <div className="w-100 flex flex-row justify-between items-center gap-1 ">
                <div className="flex flex-row items-center gap-4 ">
                    <h2 className="mb-0 pr-3 text-heading-6 font-medium text-ct-blue-95 font-sans">
                        All Billing Info</h2>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={handleChangeEntry}
                    >
                        Entry
                    </button>
                    <InputNumber
                        controls={false}
                        className="w-12"
                        min={1}
                        value={pageNumber}
                        onChange={(e) => changeEntry(e)}/>
                </div>
            </div>
            <div className="mb-10">
                <BillingTable
                    columnsData={allBillingColumns}
                    dataSources={listedAllBillings}/>
            </div>

        </div>
    );
};

export default BillingListIndex;
