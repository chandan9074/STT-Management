import React from "react";
import type { ColumnsType } from "antd/es/table";
import Icons from "../../../../assets/Icons";
import {
  paymentHistoryDataDT,
  paymentHistoryDT,
} from "../../../../types/billingTypes";
import Image from "../../../Image";
import Table from "../../../Table";
import Pagination from "../../../Pagination";
import { Link } from "react-router-dom";

const PaymentHistoryDetails = ({ data }: { data: paymentHistoryDT }) => {
  const columns: ColumnsType<paymentHistoryDataDT> = [
    {
      title: "DATE",
      dataIndex: "date",
      key: "date",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "HOUR",
      dataIndex: "hours",
      key: "hours",
      render: (text) => <a>{text} hr</a>,
    },
    {
      title: "AMOUNT PAID",
      dataIndex: "amount",
      key: "amount",
      render: (text) => <a>{text} /-</a>,
    },
  ];
  return (
    <div>
      <div className="flex items-center">
        <Link to="/billing">
          <img src={Icons.arrow_back} alt="arrow_back" className="w-5 h-5" />
        </Link>
        <h1 className="text-heading-6 text-ct-blue-95 font-medium mb-0 ml-8">
          Payment History
        </h1>
      </div>
      <div className="py-7 px-6 bg-white rounded-[8px] shadow-light-gray mt-4 min-h-[calc(100vh-16vh)]">
        <div className="flex items-center">
          <div>
            <div className="flex items-center">
              <Image.RoleImage role={data.role} />
              <h3 className="text-base text-ct-blue-95 font-medium mb-0 ml-2">
                {data.name}
              </h3>
            </div>
            <div className="mt-4 flex items-center">
              <div className="flex items-center mr-3">
                <img
                  src={Icons.military_tech}
                  alt="military_tech"
                  className="w-5 h-5"
                />
                <h3 className="text-small text-ct-blue-90 mb-0 ml-1">
                  {data.role}
                </h3>
              </div>
              <div className="flex items-center mr-3">
                <img src={Icons.mail} alt="military_tech" className="w-5 h-5" />
                <h3 className="text-small text-ct-blue-90 mb-0 mt-0.5 ml-1">
                  {data.email}
                </h3>
              </div>
              <div className="flex items-center mr-3">
                <img src={Icons.call} alt="military_tech" className="w-5 h-5" />
                <h3 className="text-small text-ct-blue-90 mb-0 mt-0.5 ml-1">
                  {data.phone}
                </h3>
              </div>
              <div className="flex items-center">
                <img src={Icons.home} alt="military_tech" className="w-5 h-5" />
                <h3 className="text-small text-ct-blue-90 mb-0 mt-1 ml-1">
                  {data.address}
                </h3>
              </div>
            </div>
          </div>
          <div className="h-14 w-0.5 rounded-md bg-border-light-blue mx-7" />
          <div className="flex items-start">
            <div className="mr-7">
              <h3 className="text-xxs text-ct-blue-90 mb-0">
                Total Paid till now
              </h3>
              <h2 className="text-small text-ct-blue-95 font-medium">
                BDT {data.totalPaid}
              </h2>
            </div>
            <div>
              <h3 className="text-xxs text-ct-blue-90 mb-0">
                Total Paid till now
              </h3>
              <h2 className="text-small text-ct-blue-95 font-medium">
                {data.totalHours} hr
              </h2>
            </div>
          </div>
        </div>
        <div className="mb-6 mt-9 flex justify-between items-center">
          <h1 className="text-heading-6 font-medium text-ct-blue-95 mb-0">
            All Payment History
          </h1>
          <button className="p-1.5 rounded-[4px] bg-ct-blue-05">
            <img src={Icons.calender} alt="calender" className="w-6 h-6" />
          </button>
        </div>
        <Table.Type1 columnsData={columns} dataSources={data.paymentHistory} />
        <div className="mt-7 w-full flex justify-end">
          <Pagination.Type1 total={50} />
        </div>
      </div>
    </div>
  );
};

export default PaymentHistoryDetails;
