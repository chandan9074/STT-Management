import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import "../../assets/css/table/table.css";


interface Props<T> {
  columnsData: ColumnsType<T>;
  dataSources: T[];
}
const Type2 = <T extends object>({ columnsData, dataSources }: Props<T>) => {
  return (
    <div className="billing-table my-2">
      <Table<T>
        columns={columnsData}
        dataSource={dataSources}
        pagination={false}
      />
    </div>
  );
};

export default Type2;
