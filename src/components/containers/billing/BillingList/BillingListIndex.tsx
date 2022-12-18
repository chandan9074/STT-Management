import React from "react";
import BillingTable from "./BillingTable";
import { InputNumber } from "antd";
import { ColumnsType } from "antd/es/table";
import ManagerIcon from "../../../../assets/images/BillingManagerAvatar.png";
import Pagination from "../../../Pagination";

interface Person {
  title: string;
  subTitle: string;
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

const lastBillingColumns: ColumnsType<BillingDataType> = [
  {
    title: "MANAGER",
    dataIndex: "manager",
    width: 100,
    render: (data) => (
      <>
        <div className="flex gap-2 items-start">
          <img className="h-4 w-4 mt-1" src={ManagerIcon} alt="" />
          <div>
            <p className="font-sans font-medium text-xs">{data.title}</p>
            <p className="font-sans text-xxs text-blue-gray-75">
              {data.subTitle}
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

const data: BillingDataType[] = [];

for (let i = 0; i < 8; i++) {
  data.push({
    key: i,
    manager: {
      title: `Edward King ${i}`,
      subTitle: `sub-title ${i}`,
    },
    hour: `${i} hr`,
    amountPaid: ` ${i} /-`,
  });
}
const anotherData: AllBillingDataType[] = [];
for (let i = 0; i < 8; i++) {
  anotherData.push({
    key: i,
    date: `Date ${i}`,
    hour: `${i} hr`,
    amountPaid: ` ${i} /-`,
  });
}
const BillingListIndex = () => {
  const changeEntry = (value: any) => {
    console.log("changed", value);
  };
  return (
    <div>
      <div className="w-100 flex flex-row justify-between items-center gap-1 pt-10 ">
        <div className="flex flex-row items-center gap-4 ">
          <h2 className="mb-0 border-r-2 pr-3 text-heading-6 font-medium text-ct-blue-95">
            Last Billing Info
          </h2>
          <div>
            <p className="text-xxs text-ct-blue-90-70% mb-0">Paid</p>
            <p className="text-small text-ct-blue-95 font-medium">BDT 350</p>
          </div>
          <div>
            <p className="text-xxs text-ct-blue-90-70% mb-0">Date of Payment</p>
            <p className="text-small text-ct-blue-95 font-medium">
              30 Aug 2022
            </p>
          </div>
        </div>

        <div>
          <button className="font-sans text-small text-ct-blue-60 font-medium ">
            Download in Excel
          </button>
        </div>
      </div>

      {/*    table------------------*/}
      <div>
        <BillingTable columnsData={lastBillingColumns} dataSources={data} />
        <div className="my-4 w-100 flex items-center gap-8 justify-end">
          <Pagination.Type1 total={50} />
          <div className="flex items-center gap-2">
            <button>Entry</button>
            <InputNumber
              className="w-9"
              controls={false}
              min={1}
              max={10}
              defaultValue={1}
              onChange={changeEntry}
            />
          </div>
        </div>
      </div>

      <hr className="my-10" />
      <div className="w-100 flex flex-row justify-between items-center gap-1 ">
        <div className="flex flex-row items-center gap-4 ">
          <h2 className="mb-0 pr-3 text-heading-6 font-medium text-ct-blue-95 font-sans">
            All Billing Info
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <button>Entry</button>
          <InputNumber
            controls={false}
            className="w-9"
            min={1}
            max={10}
            defaultValue={1}
            onChange={changeEntry}
          />
        </div>
      </div>
      <div className="mb-10">
        <BillingTable
          columnsData={allBillingColumns}
          dataSources={anotherData}
        />
      </div>
    </div>
  );
};

export default BillingListIndex;
