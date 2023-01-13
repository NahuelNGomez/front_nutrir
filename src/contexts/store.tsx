import React, { createContext, useContext, useEffect, useState } from "react";
import { lightTheme } from "../template/theme";
import { storeType, themes, userType, invoiceInfoType, comedorInfoType, selectedSurveyType } from "../types/global";

const comedorInit = {
  nombre: '',
  numero: 1,
  organizacion_regional: 1,
  actividades: [1],
  activo: false,
  asistentes_diarios: 1,
  barrio: '',
  calle: '',
  cantidad_trabajadores: 0,
  departamento: 0,
  descripcion: '',
  entre_calles: '',
  fecha_inicio_actividad: '',
  fuente_agua: 0,
  fuente_agua_potable: false,
  gobierno_local: 0,
  id: 0,
  latitud: '',
  localidad: 0,
  longitud: '',
  provincia: 0,
  responsable_comedor: 0,
  servicio_comedor: 0,
  tipos_energia: 0,
  ubicacion_georreferencial: '',
  selected: false
}


const initialStoreState: storeType = {
  currentTheme: lightTheme,
  modeTheme: "light",
  user: {
    first_name: "",
    last_name: "",
    cuil: 1,
    email: "",
    comedor: "",
    logged: false,
    telefono: '',
    access_token: '',
    refresh_token: '',
    groups: []
  },
  menuOpen: false,
  surveyModalOpen: false,
  modalOpen: false,
  modalLogin: false,
  surveyInfo: {},
  surverOptionsModal: false,
  comedoresDisponibles: [],
  comedorSeleccionado: comedorInit,
  // Steps
  selectedSurvey: { date: '', service: '' },


  setSurverOptionsModal: () => { },
  setMenuOpen: () => { },
  setModalOpen: () => { },
  setModalLogin: () => { },
  setSurverModalOpen: () => { },
  updateTheme: () => { },
  setSurveynfo: () => { },
  setComedoresDisponibles: () => { },
  setComedorSeleccionado: () => { },

  // Steps
  setSelectedSurvey: () => { }
};

export const useStoreController = ({ userLog }: { userLog: userType }) => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  const [modeTheme, setModeTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [comedoresDisponibles, setComedoresDisponibles] = useState<Array<any>>([])
  const [comedorSeleccionado, setComedorSeleccionado] = useState<comedorInfoType>()
  const [surveyModalOpen, setSurverModalOpen] = useState(false);
  const [surveyInfo, setSurveynfo] = useState<invoiceInfoType>({});
  const [surverOptionsModal, setSurverOptionsModal] = useState(false);
  // Steps
  const [selectedSurvey, setSelectedSurvey] = useState<selectedSurveyType>()

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
    comedoresDisponibles,
    comedorSeleccionado,
    currentTheme,
    modeTheme,
    user: userLog,
    menuOpen,
    modalOpen,
    modalLogin,
    surveyInfo,
    surverOptionsModal,
    surveyModalOpen,
    // Step
    selectedSurvey,

    setSurverOptionsModal,
    setMenuOpen,
    setModalOpen,
    setModalLogin,
    setSurveynfo,
    setSurverModalOpen,
    setComedoresDisponibles,
    setComedorSeleccionado,
    updateTheme,
    // Step
    setSelectedSurvey,
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
