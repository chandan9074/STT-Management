import React, { createContext } from 'react';
import OrganizerService from '../services/ organizerService';
import { roleParamDT } from '../types/organizerTypes';

interface ContextProps {
    createScript: (params: roleParamDT) => void;
}

export const OrganizerContext = createContext({} as ContextProps);
const OrganizerProvider = ({ children }: { children: any }) => {

    const createScript = async (params: roleParamDT) => {
        try {
          const response = await OrganizerService.createRole(params);
          return {
            message: response?.data?.message,
            status: response?.status
          }
        } catch (error) {
    
        }
      }

    return (
        <div>
            <OrganizerContext.Provider
                value={{
                    createScript
                }}
            >
                {children}
            </OrganizerContext.Provider>
        </div>
    );
};

export default OrganizerProvider;