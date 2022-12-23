import React, { createContext, useContext, useEffect, useState } from "react";
import { lightTheme } from "../template/theme";
import { storeType, themes, userType, invoiceInfoType } from "../types/global";

const initialStoreState: storeType = {
  currentTheme: lightTheme,
  modeTheme: "light",
  user: {
    firstName: "",
    lastName: "",
    cuil: 1,
    email: "",
    comedor: "",
    logged: false,
    phone: '+151133443355',
    token: '',
    comedorActivo: 1
  },
  menuOpen: false,
  surveyModalOpen: false,
  modalOpen: false,
  surveyInfo: {},
  surverOptionsModal: false,
  setSurverOptionsModal: () => { },
  setMenuOpen: () => { },
  setModalOpen: () => { },
  setSurverModalOpen: () => { },
  updateTheme: () => { },
  setSurveynfo: () => { },
  setUser: () => { },
};

export const useStoreController = ({ userLog }: { userLog: userType }) => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  const [modeTheme, setModeTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [surveyModalOpen, setSurverModalOpen] = useState(false);
  const [surveyInfo, setSurveynfo] = useState<invoiceInfoType>({});
  const [surverOptionsModal, setSurverOptionsModal] = useState(false);
  const [user, setUser] = useState<userType>(userLog);

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
    surveyInfo,
    modeTheme,
    user,
    menuOpen,
    surveyModalOpen,
    modalOpen,
    surverOptionsModal,
    setSurverOptionsModal,
    setSurveynfo,
    setSurverModalOpen,
    updateTheme,
    setMenuOpen,
    setModalOpen,
    setUser
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
