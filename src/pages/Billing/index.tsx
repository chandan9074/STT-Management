import TotalAmountDisbursed from "../../components/containers/billing/TotalAmountDisbursed";
import TimeWiseDisbursements from "../../components/containers/billing/TimeWiseDisbursements";
import Layouts from "../../components/Layouts";

const Billing = () => {
  return (
    <Layouts.Default>
      <TotalAmountDisbursed />
      <TimeWiseDisbursements />
    </Layouts.Default>
  );
};

export default Billing;
