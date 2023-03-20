import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import "../../assets/css/table/table.css";
import { paymentHistoryDataDT } from "../../types/billingTypes";

interface Props {
  columnsData: ColumnsType<paymentHistoryDataDT>;
  dataSources: paymentHistoryDataDT[];
}
const Type1 = ({ columnsData, dataSources }: Props) => {
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

export default Type1;
