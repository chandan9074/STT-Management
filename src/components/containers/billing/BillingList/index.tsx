import React, { useContext, useEffect, useState } from "react";
import { InputNumber } from "antd";
// import Primary from "./Primary";
import { ColumnsType } from "antd/es/table";
import ManagerIcon from "../../../../assets/images/BillingManagerAvatar.png";
import {
  allBillingParamsDT,
  lastBillingParamsDT,
  timeWiseDisbursementParamsDT,
} from "../../../../types/billingTypes";
import { BillingContext } from "../../../../context/BillingProvider";
import { DateDT } from "../../../calender/CustomRangeCalender";
import ExportCsv from "../../../common/ExportCsv";
import { excelNameFormatter } from "../../../../helpers/Utils";
import Table from "../../../Table";
import Pagination from "../../../Pagination";

interface Person {
  name: string;
  locality: string;
  image?: string;
}

export interface BillingDataType {
  key: React.Key;
  userInfo: Person;
  hour: string;
  amountPaid: string;
}

export interface AllBillingDataType {
  key: React.Key;
  date: any;
  hour: string;
  amountPaid: string;
}
interface Props {
  twDisbursement: timeWiseDisbursementParamsDT
}

const BillingListIndex = ({ twDisbursement }: Props) => {
  const billingContext = useContext(BillingContext);
  const {
    GetAllBillingInfo,
    GetLastBillingsInfo,
    lastBillings,
    allBillings,
    lastBillingsExcelData,
  } = billingContext;
  const [pageNumberAllBilling, setPageNumberAllBilligs] = useState<number>(10);
  const [pageNumberLastBilling, setPageNumberLastBilligs] = useState<number>(5);
  const [allbillingsParam, setAllbillingsParam] = useState<allBillingParamsDT>({
    pageSize: 10,
    module: twDisbursement.module,
    role: twDisbursement.role,
  });
  const [lastBillingsParams, setLastBillingsParams] =
    useState<lastBillingParamsDT>({
      page: 1,
      pageSize: pageNumberLastBilling,
      module: twDisbursement.module,
      role: twDisbursement.role,
    });

  useEffect(() => {
    GetLastBillingsInfo(lastBillingsParams);
  }, [lastBillingsParams]);


  useEffect(() => {
    GetAllBillingInfo(allbillingsParam);
  }, [allbillingsParam]);


  useEffect(() => {
    setLastBillingsParams((prev: any) => ({ ...prev, role: twDisbursement.role, module: twDisbursement.module }));
    setAllbillingsParam((prev: any) => ({ ...prev, role: twDisbursement.role, module: twDisbursement.module }));
  }, [twDisbursement]);

  const handlePageChange = (page: number) => {

    setLastBillingsParams((prev: any) => ({ ...prev, pageSize: pageNumberLastBilling, page: page }));
  }
  const changeEntryLastBilling = (e: any) => {
    setPageNumberLastBilligs(e);
  };
  const changeEntryAllBiling = (e: any) => {
    setPageNumberAllBilligs(e);
  };
  const handleChangeEntryLastBilling = () => {

    setLastBillingsParams((prev: any) => ({ ...prev, pageSize: pageNumberLastBilling }));
  };
  const handleChangeEntryAllBilling = () => {
    setAllbillingsParam((prev: any) => ({ ...prev, pageSize: pageNumberAllBilling }));
  };


  const listedLastBillings: BillingDataType[] = [];
  const _res = lastBillings?.billingInfo.map((data) => {
    listedLastBillings.push({
      key: data.id,
      userInfo: {
        name: data.userInfo.name,
        locality: data.userInfo.locality,
      },
      hour: `${data.hour} hr`,
      amountPaid: ` ${data.amountPaid} /-`,
    });
  });

  const listedAllBillings: AllBillingDataType[] = [];
  const res = allBillings?.billingInfo.map((data) => {
    listedAllBillings.push({
      key: data.id,
      date: data.date,
      hour: `${data.hour} hr`,
      amountPaid: ` ${data.amountPaid} /-`,
    });
  });


  const excelHeader = {
    A1: `${lastBillings?.role.toUpperCase()}`,
    B1: "HOUR",
    C1: "AMOUNT PAID",
  };


  const lastBillingColumns: ColumnsType<BillingDataType | AllBillingDataType> =
    [
      {
        title: `${lastBillings?.role.toUpperCase()}`,
        dataIndex: "userInfo",
        width: 100,
        render: (data) => (
          <>
            <div className="flex gap-2 items-start">
              <img className="h-4 w-4 mt-1" src={ManagerIcon} alt="" />
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

  console.log("params", lastBillingsParams, "role", twDisbursement);



  return (
    <div>
      <div className="w-100 flex flex-row justify-between items-center gap-1 pt-10 ">
        <div className="flex flex-row items-center gap-4 ">
          <h2 className="mb-0 border-r-2 pr-3 text-heading-6 font-medium text-ct-blue-95">
            Last Billing Info
          </h2>
          <div>
            <p className="text-xxs text-ct-blue-90-70% mb-0">Paid</p>
            <p className="text-small text-ct-blue-95 font-medium">
              BDT {lastBillings?.paid}
            </p>
          </div>
          <div>
            <p className="text-xxs text-ct-blue-90-70% mb-0">Date of Payment</p>
            <p className="text-small text-ct-blue-95 font-medium">
              {lastBillings?.dateOfPayment}
            </p>
          </div>
        </div>

        <div>
          {/*<button className="border rounded-md border-white font-sans text-small text-ct-blue-60 font-medium hover:border-gray-400 duration-300 p-1.5">Download in Excel*/}
          {/*</button>*/}
          <ExportCsv
            csvData={lastBillingsExcelData}
            fileName={excelNameFormatter(`${lastBillings?.role.toUpperCase()}`, true)}
            headerCells={excelHeader}
          />
        </div>
      </div>
      {/*    table------------------*/}
      <div>
        <Table.Type2
          columnsData={lastBillingColumns}
          dataSources={listedLastBillings}
        />
        <div className="my-4 w-100 flex items-center gap-8 justify-end">
          {lastBillings?.numberOfBills ? <Pagination.Type1

            total={lastBillings?.numberOfBills}
            pageSize={pageNumberLastBilling}
            handlePageChange={handlePageChange}
          /> : ""}
          <div className="flex items-center gap-2">
            <button
              onClick={handleChangeEntryLastBilling}
              className="font-medium text-xxs text-ct-blue-90-70%"
            >
              Entry
            </button>
            <InputNumber
              className="w-12 font-medium text-xs text-ct-blue-90-70%"
              controls={false}
              min={1}
              max={10}
              value={pageNumberLastBilling}
              onChange={changeEntryLastBilling}
            />
          </div>
        </div>
      </div>
      <hr className="my-10" />
      {/* All Billing */}
      <div className="w-100 flex flex-row justify-between items-center gap-1 ">
        <div className="flex flex-row items-center gap-4 ">
          <h2 className="mb-0 pr-3 text-heading-6 font-medium text-ct-blue-95 font-sans">
            All Billing Info
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleChangeEntryAllBilling}
            className="font-medium text-xxs text-ct-blue-90-70%"
          >Entry</button>
          <InputNumber
            controls={false}
            className="w-12 font-medium text-xs text-ct-blue-90-70%"
            min={1}
            value={pageNumberAllBilling}
            defaultValue={allbillingsParam.pageSize}
            onChange={changeEntryAllBiling}
          />
        </div>
      </div>
      <div className="mb-10">
        <Table.Type2
          columnsData={allBillingColumns}
          dataSources={listedAllBillings}
        />
      </div>
    </div>
  );
};

export default BillingListIndex;
