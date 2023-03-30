import React, { createContext, useContext, useState } from "react";
import ScriptService from "../services/scriptService";
import { allScriptResDT, getAllScriptsParamsDT, scriptParamDT, scriptResDT } from "../types/script";
import 'react-toastify/dist/ReactToastify.css';
import { CommonContext } from "./CommonProvider";
import { callingToast } from "../helpers/Utils";


interface ContextProps {
  modalOpen: boolean;
  modalData: string;
  setModalData: React.Dispatch<React.SetStateAction<string>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  uploadCsv: (formData: FormData) => void;
  getAllScript: (prams: getAllScriptsParamsDT) => void;
  scriptsData: allScriptResDT
  // createScript: (params: any) => Promise<{ message: string; status: number }>;
  createScript: (params: FormData) => void;
  singleScript: scriptResDT;
  getScriptById: (id: scriptParamDT) => void;
  updateScript: (params: FormData) => void;
  setScriptModule: React.Dispatch<React.SetStateAction<string>>;
  scriptModule: string;
  loading: boolean;
  scriptDeleteParams: string;
  setScriptDeleteParams: React.Dispatch<React.SetStateAction<string>>;
  scriptFilter: getAllScriptsParamsDT;
  setScriptFilter: React.Dispatch<React.SetStateAction<getAllScriptsParamsDT>>;
  deleteScript: (role: string, id: string) => void;
}

export const ScriptContext = createContext({} as ContextProps);

const ScriptProvider = ({ children }: { children: any }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<string>("");
  const [scriptsData, setScriptsData] = useState<allScriptResDT>({} as allScriptResDT)
  const [singleScript, setSingleScript] = useState<scriptResDT>({} as scriptResDT);
  const [scriptModule, setScriptModule] = useState<string>('STT');
  const [loading, setLoading] = useState<boolean>(false);
  const [scriptDeleteParams, setScriptDeleteParams] = useState<string>("");
  const [scriptFilter, setScriptFilter] = useState<getAllScriptsParamsDT>({} as getAllScriptsParamsDT);

  const commonContext = useContext(CommonContext);

  const uploadCsv = async (formData: FormData) => {

    ScriptService.uploadCsv(formData);
  };

  const getAllScript = async (params: getAllScriptsParamsDT) => {
    try {
      const response = await ScriptService.getAllScript(params);
      setScriptsData(response.data);
    } catch (error) {
    }

  }

  const getScriptById = async (data: scriptParamDT) => {
    try {
      const response = await ScriptService.getScriptById(data);
      setSingleScript(response?.data);
      setScriptModule(response?.data?.module)
    } catch (error) {
    }
  }


  const createScript = async (params: FormData) => {
    try {
      const response = await ScriptService.createScript(params);
      getAllScript({ role: commonContext?.role });
      return {
        message: response?.data?.message,
        status: response?.status
      }
    } catch (error) {

    }
  }

  const updateScript = async (params: FormData) => {
    try {
      setLoading(true);
      await ScriptService.UpdateScript(params);
      setLoading(false);
      getAllScript({ role: commonContext?.role });
    } catch (error) {
      setLoading(false);

    }
  }

  const deleteScript = async (role: string, id: string) => {
    try {
      setLoading(true);
      await ScriptService.deleteScript({ role: role, id: id });
      setLoading(false);
      // await getAllScript({ role: "admin" });
      // if (res.status === 200) {
      // setScriptsData(id.split(',').map((singleId) => (scriptsData.scripts.filter((item: scriptResDT) => item.id !== singleId)));
      // setScriptsData(scriptsData.scripts.filter((item: scriptResDT) => !id.split(',').includes(item.id)));
      setScriptsData({ totalNumberOfScripts: scriptsData.totalNumberOfScripts - id.split(",").length, scripts: scriptsData.scripts.filter((item: scriptResDT) => item.id && !id.split(',').includes(item.id)) })

      callingToast("Script deleted successfully");
      // }
    } catch (error) {
    }
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
        setScriptDeleteParams,
        scriptFilter,
        setScriptFilter,
        deleteScript
      }}
    >
      {children}
    </ScriptContext.Provider>
  );
};

export default ScriptProvider;
