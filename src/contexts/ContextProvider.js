import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [currentColor, setCurrentColor] = useState("#2CBBFF");
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <StateContext.Provider
      value={{ currentColor, setCurrentColor, activeMenu, setActiveMenu }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
