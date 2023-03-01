import React, { createContext, useState } from "react";
import ScriptService from "../services/scriptService";
import { allScriptResDT, getAllScriptsParamsDT } from "../types/script";


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
  setScriptModule: React.Dispatch<React.SetStateAction<string>>;
  scriptModule: string;
  loading: boolean;
  scriptDeleteParams: string;
  setScriptDeleteParams: React.Dispatch<React.SetStateAction<string>>;
}

export const ScriptContext = createContext({} as ContextProps);

const ScriptProvider = ({ children }: { children: any }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<string>("");
  const [scriptsData, setScriptsData] = useState<allScriptResDT>()
  const [singleScript, setSingleScript] = useState<any>({});
  const [scriptModule, setScriptModule] = useState<string>('STT');
  const [loading, setLoading] = useState<boolean>(false);
  const [scriptDeleteParams, setScriptDeleteParams] = useState<string>("");

  const uploadCsv = async (formData: any) => {

    ScriptService.uploadCsv(formData);
  };

  const getAllScript = async (params: getAllScriptsParamsDT) => {
    try {
      const response = await ScriptService.getAllScript(params);
      setScriptsData(response.data.scripts);
    } catch (error) {
      console.log('error', error);
    }

  }

  const getScriptById = async (data: any) => {
    try {
      const response = await ScriptService.getScriptById(data);
      setSingleScript(response?.data);
      setScriptModule(response?.data?.module)
    } catch (error) {
      console.log('error', error);
    }
  }

  const createScript = async (params: any) => {
    try {
      const response = await ScriptService.createScript(params);
      return {
        message: response?.data?.message,
        status: response?.status
      }
    } catch (error) {
      console.log('error', error);

    }
  }

  const updateScript = async (params: any) => {
    try {
      setLoading(true);
      await ScriptService.UpdateScript(params);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('error', error);

    }
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
        updateScript,
        scriptModule,
        setScriptModule,
        loading,
        scriptDeleteParams,
        setScriptDeleteParams
      }}
    >
      {children}
    </ScriptContext.Provider>
  );
};

export default ScriptProvider;
