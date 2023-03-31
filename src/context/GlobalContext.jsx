import { createContext, useEffect, useReducer } from "react";
import appReducer from "./AppReducer";

let initialState = {};



export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  
  const [state, dispath] = useReducer(appReducer, initialState);

  
  return (
    <GlobalContext.Provider value={{ ...state}}>
      {children}
    </GlobalContext.Provider>
  );
};
