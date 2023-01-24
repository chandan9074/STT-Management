import React, { createContext, useState } from "react";

interface ContextProps {
  modalOpen: boolean;
  modalData: string;
  setModalData: React.Dispatch<React.SetStateAction<string>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ScriptContext = createContext({} as ContextProps);

const ScriptProvider = ({ children }: { children: any }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<string>("");

  return (
    <ScriptContext.Provider
      value={{ modalData, modalOpen, setModalData, setModalOpen }}
    >
      {children}
    </ScriptContext.Provider>
  );
};

export default ScriptProvider;
