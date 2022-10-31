import React, { createContext, useContext, useEffect, useState } from "react";
import { darkTheme, lightTheme } from "../template/theme";

export type userType = {
  user: string;
  phone: string;
  name: string;
  email: string;
  comedor: string;
  logged: boolean;
};

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

const initialStoreState = {
  currentTheme: lightTheme,
  updateTheme: () => {},
  modeTheme: "light",
  user: {
    user: "",
    phone: "",
    name: "",
    email: "",
    comedor: "",
    logged: false,
  },
  menuOpen: false,
  setMenuOpen: () => {},
  modalOpen: false,
  setModalOpen: () => {},
};

export const useStoreController = ({ userLog }: { userLog: userType }) => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  const [modeTheme, setModeTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const updateTheme = (mode: keyof typeof themes): void => {
    setCurrentTheme(themes[mode]);
    setModeTheme(mode);
    localStorage.setItem("theme-mode", mode);
  };

  useEffect(() => {
    const savedMode: keyof typeof themes =
      (localStorage.getItem("theme-mode") as keyof typeof themes) ?? "light";
    setModeTheme(savedMode);
    setCurrentTheme(themes[savedMode]);
  }, []);

  return {
    currentTheme,
    updateTheme,
    modeTheme,
    user: userLog,
    menuOpen,
    setMenuOpen,
    modalOpen,
    setModalOpen,
  };
};

export const AppCtxProvider = ({
  user,
  children,
}: {
  user: userType;
  children: React.ReactNode;
}) => {
  return (
    <AppCtx.Provider value={useStoreController({ userLog: user })}>
      {children}
    </AppCtx.Provider>
  );
};

export const AppCtx =
  createContext<ReturnType<typeof useStoreController>>(initialStoreState);

export const useAppCtx = () => useContext(AppCtx);
