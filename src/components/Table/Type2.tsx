import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import "../../assets/css/table/table.css";
import { AllBillingDataType, BillingDataType } from "../containers/billing/BillingList";


interface Props {
  columnsData: ColumnsType<any>;
  dataSources: (AllBillingDataType | BillingDataType)[];
}
const Type2 = ({ columnsData, dataSources }: Props) => {
  return (
    <div className="billing-table my-2">
      <Table
        columns={columnsData}
        dataSource={dataSources}
        pagination={false}
      />
    </div>
  );
};

export default Type2;
