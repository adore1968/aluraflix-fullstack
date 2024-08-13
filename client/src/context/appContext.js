import { createContext, useContext } from "react";

export const appContext = createContext();

export const useApp = () => {
  const context = useContext(appContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
};
