import React, { createContext, useState } from "react";

interface ContextProps {
  // loading: boolean;
  // errorMsg: string;
  type: string;
  role: string;
  handleRole: (value: string) => void;
  handleModuleType: (value: string) => void;
  setType: React.Dispatch<React.SetStateAction<string>>;
  toastOpen: boolean;
  setToastOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toastMessage: string;
  setToastMessage: React.Dispatch<React.SetStateAction<string>>;
  handleToast: (value: boolean) => void
}

export const CommonContext = createContext({} as ContextProps);

const CommonProvider = ({ children }: { children: any }) => {
  // const [loading, setLoading] = useState<boolean>(true);
  // const [errorMsg, setErrorMsg] = useState<string>("");
  const [type, setType] = useState<string>("STT");
  const [role, setRole] = useState<string>("admin");
  const [toastOpen, setToastOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  const handleToast = (value: boolean) => {
    setToastOpen(value);
  }

  const handleModuleType = (value: string) => {
    setType(value);
  };

  const handleRole = (value: string) => {
    setRole(value);
  };

  return (
    <CommonContext.Provider
      value={{
        setType,
        // loading,
        // errorMsg,
        type,
        role,
        handleRole,
        handleModuleType,
        toastOpen,
        setToastOpen,
        toastMessage,
        setToastMessage,
        handleToast
      }}
    >
      {children}
    </CommonContext.Provider>
  );
};

export default CommonProvider;
