import React from "react";
import TotalAmountDisbursed from "../components/containers/billing/TotalAmountDisbursed";
import TimeWiseDisbursements from "../components/containers/billing/TimeWiseDisbursements";

const Billing = () => {
    return (
        <>
            <TotalAmountDisbursed/>
            <TimeWiseDisbursements/>
        </>
    );
};

export default Billing;
