import React, { createContext, useState } from "react";
import DashboardService from "../services/dashboardService";
import { createCollectDT, overTheTimeGDT, totalDataParamsDT, totalDataResDT } from "../types/dashboardTypes";

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
  getCreateCollectData: () => void;
  createCollectData: createCollectDT | undefined;
  getTotalDataCollection: (data: totalDataParamsDT) => void;
  totalDataCollection: totalDataResDT | undefined

}

export const DashboardContext = createContext({} as ContextProps);

const DashboardProvider = ({ children }: { children: any }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [overTheTimeData, setOverTheTimeData] = useState<
    overTheTimeGDT | undefined
  >();
  const [createCollectData, setCreateCollectData] = useState<
    createCollectDT | undefined
  >();
  const [totalDataCollection, setTotalDataCollection] = useState<
    totalDataResDT | undefined
  >();

  const getOverTheTimeData = async (
    module: string,
    role: string,
    year?: number,
    month?: string
  ) => {
    setLoading(true);
    setErrorMsg("");
    // fetch data from api
    const response = await DashboardService.getOverTheTimeData(
      module,
      role,
      year,
      month
    );
    console.log("response", response.data);
    setOverTheTimeData(response.data);
    // const response = DashboardService.getOverTheTimeData(
    //   module,
    //   role,
    //   year,
    //   month
    // );
    // setOverTheTimeData(response);
    setLoading(false);
  };

  const getCreateCollectData = () => {
    setLoading(true);
    setErrorMsg("");
    // fetch data from api
    // const response = await DashboardService.getOverTheTimeData();
    // console.log("response", response.data);
    // setOverTheTimeData(response.data);
    const response = DashboardService.getCollectCreateData();
    setCreateCollectData(response);
  };

  const getTotalDataCollection = async (data: totalDataParamsDT) => {

    try {
      setLoading(true);
      setErrorMsg("");
      const response = await DashboardService.getTotalDataCollection(data);
      setTotalDataCollection(response.data);
      setLoading(false);
    }
    catch (error) {
      setErrorMsg("Something Went wrong.......");
    }
  }

  return (
    <DashboardContext.Provider
      value={{
        loading,
        errorMsg,
        overTheTimeData,
        getOverTheTimeData,
        getCreateCollectData,
        createCollectData,
        getTotalDataCollection,
        totalDataCollection

      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
