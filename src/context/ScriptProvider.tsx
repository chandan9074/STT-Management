import React, { createContext, useContext, useState } from "react";
import Icons from "../assets/Icons";
import { Toast } from "../components/Toast";
import ScriptService from "../services/scriptService";
import { allScriptResDT, createScriptDt, getAllScriptsParamsDT } from "../types/script";
import { CommonContext } from "./CommonProvider";


interface ContextProps {
  modalOpen: boolean;
  modalData: string;
  setModalData: React.Dispatch<React.SetStateAction<string>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  uploadCsv: (formData: any) => void;
  getAllScript: (prams: getAllScriptsParamsDT) => void;
  scriptsData: allScriptResDT | undefined
  // createScript: (params: any) => Promise<{ message: string; status: number }>;
  createScript: (params: any) => any;
  singleScript: allScriptResDT;
  getScriptById: (id: any) => void;
  updateScript: (params: any) => any;
}

export const ScriptContext = createContext({} as ContextProps);

const ScriptProvider = ({ children }: { children: any }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<string>("");
  const [scriptsData, setScriptsData] = useState<allScriptResDT>()
  // const [loading, setLoading] = useState<boolean>(true);
  // const [errorMsg, setErrorMsg] = useState<string>("");
  const [singleScript, setSingleScript] = useState<any>({});

  const uploadCsv = async (formData: any) => {

    ScriptService.uploadCsv(formData);
  };

  const getAllScript = async (params: getAllScriptsParamsDT) => {
    const response = await ScriptService.getAllScript(params);
    setScriptsData(response.data.scripts);
  }

  const getScriptById = async(data: any) => {
    const response = await ScriptService.getScriptById(data);
     setSingleScript(response?.data);
  }

  const createScript = async (params: any) => {
    const response = await ScriptService.createScript(params);
    return {
      message: response?.data?.message,
      status: response?.status
    }
  }

  const updateScript = async (params: any) => {
    const response = await ScriptService.UpdateScript(params);
    // return {
    //   message: response?.data?.message,
    //   status: response?.status
    // }
  }

  return (
    <ScriptContext.Provider
      value={{
        modalData,
        modalOpen,
        setModalData,
        setModalOpen,
        uploadCsv,
        getAllScript,
        scriptsData,
        createScript,
        singleScript,
        getScriptById,
        updateScript
      }}
    >
      {children}
    </ScriptContext.Provider>
  );
};

export default ScriptProvider;
