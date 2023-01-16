import TotalAmountDisbursed from "../../components/containers/billing/TotalAmountDisbursed";
import Layouts from "../../components/Layouts";
import TimeWiseDisbursements from "../../components/containers/billing/TimeWiseDisbursement";

const Billing = () => {
  return (
    <Layouts.Default>
      <TotalAmountDisbursed />
      <TimeWiseDisbursements />
    </Layouts.Default>
  );
};

export default Billing;
