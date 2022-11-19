import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();
const initialState = {
  chat: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [currentColor, setCurrentColor] = useState("#2CBBFF");
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentMode, setCurrentMode] = useState("Dark");
  const [themeSettings, setThemeSettings] = useState(false);

  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });

  const handleClose = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: false });

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("themeColor", color);
  };

  return (
    <StateContext.Provider
      value={{
        currentColor,
        setCurrentColor,
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        screenSize,
        setScreenSize,
        handleClick,
        handleClose,
        currentMode,
        setCurrentMode,
        themeSettings,
        setThemeSettings,
        setMode,
        setColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
