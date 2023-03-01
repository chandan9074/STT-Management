import OverTheTime from "../../components/containers/dashboard/OverTheTime";
import TotalData from "../../components/containers/dashboard/TotalData";
import Layouts from "../../components/Layouts";
import DataContainer from "../../components/containers/dashboard/DataContainer";

const Dashboard = () => {
  
  return (
    <Layouts.Secondary>
      <div className="min-h-[calc(100vh-9.5vh)]">
        <div>
          <TotalData />
          <OverTheTime />
        </div>
        <DataContainer />
      </div>
    </Layouts.Secondary>
  );
};

export default Dashboard;
