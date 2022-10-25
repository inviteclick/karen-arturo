import { createContext, useState } from "react";
import { TContext } from "../types";

export const ContextInstance = createContext({} as TContext);

export const ContextProvider = ({ children }: { children: any }) => {
  const [state, setState] = useState({
    selectedGuest: null,
    error: false,
  });

  return (
    <ContextInstance.Provider value={{ state, setState }}>
      {children}
    </ContextInstance.Provider>
  );
};
