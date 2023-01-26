import React, { createContext, useState } from "react";
import ScriptService from "../services/scriptService";

interface ContextProps {
  modalOpen: boolean;
  modalData: string;
  setModalData: React.Dispatch<React.SetStateAction<string>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  uploadCsv: (formData: any) => void;
}

export const ScriptContext = createContext({} as ContextProps);

const ScriptProvider = ({ children }: { children: any }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<string>("");

  const uploadCsv = (formData: any) => {
    // console.log("formData", formData);

    const res = ScriptService.uploadCsv(formData);
  };

  return (
    <ScriptContext.Provider
      value={{ modalData, modalOpen, setModalData, setModalOpen, uploadCsv }}
    >
      {children}
    </ScriptContext.Provider>
  );
};

export default ScriptProvider;
