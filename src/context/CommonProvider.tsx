import React, { createContext, useState } from "react";

interface ContextProps {
  loading: boolean;
  errorMsg: string;
  type: string;
  role: string;
  handleRole: (value: string) => void;
  handleModuleType: (value: string) => void;
}

export const CommonContext = createContext({} as ContextProps);

const CommonProvider = ({ children }: { children: any }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [type, setType] = useState<string>("STT");
  const [role, setRole] = useState<string>("Admin");

  const handleModuleType = (value: string) => {
    setType(value);
  };

  const handleRole = (value: string) => {
    setRole(value);
  };

  return (
    <CommonContext.Provider
      value={{
        loading,
        errorMsg,
        type,
        role,
        handleRole,
        handleModuleType,
      }}
    >
      {children}
    </CommonContext.Provider>
  );
};

export default CommonProvider;
