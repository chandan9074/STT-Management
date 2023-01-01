import React, { createContext, useState } from "react";
import DashboardService from "../services/dashboardService";
import { overTheTimeGDT } from "../types/dashboardTypes";

interface ContextProps {
  loading: boolean;
  errorMsg: string;
  overTheTimeData: overTheTimeGDT | undefined;
  getOverTheTimeData: (
    module: string,
    role: string,
    year?: number,
    month?: string
  ) => void;
}

export const DashboardContext = createContext({} as ContextProps);

const DashboardProvider = ({ children }: { children: any }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [overTheTimeData, setOverTheTimeData] = useState<
    overTheTimeGDT | undefined
  >();

  const getOverTheTimeData = (
    module: string,
    role: string,
    year?: number,
    month?: string
  ) => {
    setLoading(true);
    setErrorMsg("");
    // fetch data from api
    // const response = await DashboardService.getOverTheTimeData();
    // console.log("response", response.data);
    // setOverTheTimeData(response.data);
    const response = DashboardService.getOverTheTimeData(module, role, year, month);
    setOverTheTimeData(response);
    setLoading(false);
  };

  return (
    <DashboardContext.Provider
      value={{
        loading,
        errorMsg,
        overTheTimeData,
        getOverTheTimeData,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
