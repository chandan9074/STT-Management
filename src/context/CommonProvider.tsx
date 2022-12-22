import React, { createContext, useState } from "react";

interface ContextProps {
  loading: boolean;
  errorMsg: string;
  type: string;
  handleModuleType: (value: string) => void;
}

export const CommonContext = createContext({} as ContextProps);

const CommonProvider = ({ children }: { children: any }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [type, setType] = useState<string>("STT");

  const handleModuleType = (value: string) => {
    setType(value);
  };

  return (
    <CommonContext.Provider
      value={{
        loading,
        errorMsg,
        type,
        handleModuleType,
      }}
    >
      {children}
    </CommonContext.Provider>
  );
};

export default CommonProvider;
