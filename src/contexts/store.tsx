import React, { createContext, useContext, useEffect, useState } from "react";
import { lightTheme } from "../template/theme";
import { storeType, themes, userType, invoiceInfoType, comedorInfoType, selectedSurveyType, guestsStepsType, mealStepType } from "../types/global";

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
  // Step 0
  selectedSurvey: { date: '', service: '' },
  // Step 1: guest Amount
  guestsAmount: {
    childs: 0,
    kids: 0,
    teens: 0,
    adults: 0,
  },
  // Step 2: Drink
  drinkStep: {
    comida: null,
    nombre: '',
    alimento: []
  },
  // Step 3a: simpleMainMealStep Breakfast
  simpleMainMealStep: {
    comida: null,
    nombre: '',
    alimento: []
  },
  // 3b
  entryStep: {
    comida: null,
    nombre: '',
    alimento: []
  },
  // 4
  compoundMainMealStep: {
    comida: null,
    nombre: '',
    alimento: []
  },
  dessertStep: {
    comida: null,
    nombre: '',
    alimento: []
  },
  // Last step
  displaySideStepper: true,
  // Step active
  stepActive: 0,

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
  setSelectedSurvey: () => { },
  // Step 1: guest Amount
  setGuestsAmount: () => { },
  // Step 2: drink Step
  setDrinkStep: () => { },
  // Step 3: simpleMainMealStep Breakfast
  setSimpleMainMealStep: () => { },
  // Step 3b: entry
  setEntryStep: () => { },
  // 4
  setCompoundMainMailStep: () => { },
  // 5
  setDessertStep: () => { },
  // Last Step
  setDisplaySideStepper: () => { },
  // Step Active
  setStepActive: () => { }
};

export const useStoreController = ({ userLog }: { userLog: userType }) => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  const [modeTheme, setModeTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [comedoresDisponibles, setComedoresDisponibles] = useState<Array<any>>([])
  const [comedorSeleccionado, setComedorSeleccionado] = useState<comedorInfoType>(comedorInit)
  const [surveyModalOpen, setSurverModalOpen] = useState(false);
  const [surveyInfo, setSurveynfo] = useState<invoiceInfoType>({});
  const [surverOptionsModal, setSurverOptionsModal] = useState(false);
  // Steps
  const [selectedSurvey, setSelectedSurvey] = useState<selectedSurveyType>({ date: '', service: '' });
  const [guestsAmount, setGuestsAmount] = useState<guestsStepsType>({
    childs: 0,
    kids: 0,
    teens: 0,
    adults: 0
  });
  const [drinkStep, setDrinkStep] = useState<mealStepType>({
    comida: null,
    nombre: '',
    alimento: []
  })
  const [simpleMainMealStep, setSimpleMainMealStep] = useState<mealStepType>({
    comida: null,
    nombre: '',
    alimento: []
  })
  const [entryStep, setEntryStep] = useState<mealStepType>({
    comida: null,
    nombre: '',
    alimento: []
  })
  const [compoundMainMealStep, setCompoundMainMailStep] = useState<mealStepType>({
    comida: null,
    nombre: '',
    alimento: []
  })
  const [dessertStep, setDessertStep] = useState<mealStepType>({
    comida: null,
    nombre: '',
    alimento: []
  })
  const [displaySideStepper, setDisplaySideStepper] = useState(true);
  const [stepActive, setStepActive] = useState<number>();

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
    // Step 1: guest amount
    guestsAmount,
    // Step 2: drink
    drinkStep,
    // Step 3
    simpleMainMealStep,
    // 3b Entry
    entryStep,
    // 4
    compoundMainMealStep,
    // 5
    dessertStep,
    // Last step
    displaySideStepper,
    // Step active
    stepActive,

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
    // Step 1: guest amount
    setGuestsAmount,
    // Step 2: drink
    setDrinkStep,
    // Step 3
    setSimpleMainMealStep,
    // 3b,
    setEntryStep,
    // 4
    setCompoundMainMailStep,
    // 5
    setDessertStep,
    // Last step
    setDisplaySideStepper,
    // Step Active
    setStepActive,
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
