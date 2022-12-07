import React, { createContext, useState } from "react";

interface ContextProps {
  loading: boolean;
  errorMsg: string;
}

export const BillingContext = createContext({} as ContextProps);

const BillingProvider = ({ children }: { children: any }) => {
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <BillingContext.Provider
      value={{
        loading,
        errorMsg,
      }}
    >
      {children}
    </BillingContext.Provider>
  );
};

export default BillingProvider;
