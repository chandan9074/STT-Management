import React, { createContext, useState } from "react";
import ScriptService from "../services/scriptService";
import { allScriptResDT, createScriptDt, getAllScriptsParamsDT } from "../types/script";


interface ContextProps {
  modalOpen: boolean;
  modalData: string;
  setModalData: React.Dispatch<React.SetStateAction<string>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  uploadCsv: (formData: any) => void;
  getAllScript: (prams: getAllScriptsParamsDT) => void;
  scriptsData: allScriptResDT | undefined
  createScript: (params: createScriptDt) => void;

}

export const ScriptContext = createContext({} as ContextProps);

const ScriptProvider = ({ children }: { children: any }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<string>("");
  const [scriptsData, setScriptsData] = useState<allScriptResDT>()
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const uploadCsv = async (formData: any) => {
    // console.log("formData", formData);

    ScriptService.uploadCsv(formData);
  };

  const getAllScript = async (params: getAllScriptsParamsDT) => {
    // setLoading(true);
    // setErrorMsg("");
    const response = await ScriptService.getAllScript(params);
    setScriptsData(response.data.scripts);
    // setLoading(false);

  }

  const createScript = async (params: createScriptDt) => {
    // setLoading(true);
    // setErrorMsg("");
    const response = await ScriptService.createScript(params);
    console.log('resposne--------', response);
    
    // setLoading(false);

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
        createScript
      }}
    >
      {children}
    </ScriptContext.Provider>
  );
};

export default ScriptProvider;
