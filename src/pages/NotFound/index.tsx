import React from "react";
import { Link } from "react-router-dom";
import Layouts from "../../components/Layouts";
import * as PATH from "../../helpers/Slug";

const NotFound = () => {
  return (
    <Layouts.Secondary>
      <div className="min-h-[calc(100vh-9.5vh)] flex justify-center items-center">
        <div className="rounded-md p-4 shadow-md flex flex-col items-center justify-center">
          <h1 className="text-heading-1 font-bold bg-gradient-to-r from-[#2E3192] to-[#1BFFFF] text-transparent bg-clip-text">
            Opps!
          </h1>
          <h3 className="mt-2 font-medium text-small text-blue-gray-80">
            This page may not exist or is under maintenance
          </h3>
          <Link
            to={PATH.BILLING_PATH}
            className="text-small text-white py-1.5 px-2.5 bg-primary-ct-blue-60 mt-5 rounded-full"
          >
            Go to Billing
          </Link>
        </div>
      </div>
    </Layouts.Secondary>
  );
};

export default NotFound;
