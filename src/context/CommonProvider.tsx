import React, { createContext, useState } from "react";

interface ContextProps {
  // loading: boolean;
  // errorMsg: string;
  type: string;
  role: string;
  roleName: string;
  setRoleName: React.Dispatch<React.SetStateAction<string>>;
  handleRole: (value: string) => void;
  handleModuleType: (value: string) => void;
  setType: React.Dispatch<React.SetStateAction<string>>;
  toastOpen: boolean;
  setToastOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toastMessage: string;
  setToastMessage: React.Dispatch<React.SetStateAction<string>>;
  handleToast: (value: boolean) => void;
  setRoleId: React.Dispatch<React.SetStateAction<string>>;
  roleId: string;
}

export const CommonContext = createContext({} as ContextProps);

const CommonProvider = ({ children }: { children: any }) => {
  // const [loading, setLoading] = useState<boolean>(true);
  // const [errorMsg, setErrorMsg] = useState<string>("");
  const [type, setType] = useState<string>("STT");
  const [role, setRole] = useState<string>("admin");
  const [roleName, setRoleName] = useState<string>("Md. Jalal Uddin");
  const [roleId, setRoleId] = useState<string>("shahrukkhan23@gmail.com");
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
        roleName,
        setRoleName,
        handleRole,
        handleModuleType,
        toastOpen,
        setToastOpen,
        toastMessage,
        setToastMessage,
        handleToast,
        setRoleId,
        roleId
      }}
    >
      {children}
    </CommonContext.Provider>
  );
};

export default CommonProvider;
