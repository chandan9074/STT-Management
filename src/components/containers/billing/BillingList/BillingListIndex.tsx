import React from 'react';
import BillingTable from "./BillingTable";

const BillingListIndex = () => {
    return (
        <div>

            <div className="w-100 flex flex-row justify-between items-center gap-1 pt-10 ">
                <div className="flex flex-row items-center gap-4 ">
                    <h2 className="mb-0 border-r-2 pr-3 text-heading-6 font-medium text-ct-blue-95">Last Billing
                        Info</h2>
                    <div>
                        <p className="text-xxs text-ct-blue-90-70% mb-0">Paid</p>
                        <p className="text-small text-ct-blue-95 font-medium">BDT 350</p>
                    </div>
                    <div>
                        <p className="text-xxs text-ct-blue-90-70% mb-0">Date of Payment</p>
                        <p className="text-small text-ct-blue-95 font-medium">30 Aug 2022</p>
                    </div>
                </div>

                <div>
                    <button className="font-sans text-small text-ct-blue-60 font-medium ">Download in Excel
                    </button>
                </div>
            </div>

            {/*    table------------------*/}
            <BillingTable/>
        </div>
    );
};

export default BillingListIndex;