import React, { useState } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { TableRowSelection } from "antd/es/table/interface";
import "./billingTable.css";
import { InputNumber } from "antd";
import { AllBillingDataType, BillingDataType } from "./BillingListIndex";

interface Props {
  columnsData: ColumnsType<any>;
  dataSources: (AllBillingDataType | BillingDataType)[];
}
const BillingTable = ({ columnsData, dataSources }: Props) => {
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

export default BillingTable;
