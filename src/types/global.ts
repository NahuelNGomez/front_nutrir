import { Theme } from "@mui/material";
import { darkTheme, lightTheme } from "../template/theme";

export type userType = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  cuil: number; 
  comedor: string;
  logged: boolean;
  comedorActivo: number;
  token: string;
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export enum surveyTypes {
  CURRENT = "current",
  SPECIAL = "special",
}

export enum dishesOptionsType {
  BREAKFAST = "BREAKFAST",
  LUNCH = "LUNCH",
  DINNER = "DINNER",
  MERIENDA = "MERIENDA",
  OLLAPOPULAR = "OLLAPOPULAR",
}

export type dishestype = {
  type: keyof typeof dishesOptionsType;
  name: string;
  description?: string;
  picture?: string;
  ingredients: Array<{ name: string; description: string }>;
};

export type guestType = {
  childs?: number;
  kids?: number;
  teens?: number; 
  adults?: number
}

export type invoiceInfoType = {
  type?: keyof typeof surveyTypes;
  dishes?: Array<dishestype>;
  adults?: Array<guestType>;
};

export type storeType = {
  currentTheme: Theme;
  modeTheme: keyof typeof themes;
  user: userType;
  menuOpen: boolean;
  modalOpen: boolean;
  surveyModalOpen: boolean;
  surveyInfo: invoiceInfoType;
  surverOptionsModal: boolean;
  setSurverOptionsModal(): void;
  setModalOpen(): void;
  setMenuOpen(): void;
  setSurverModalOpen(): void;
  updateTheme(): void;
  setSurveynfo(): void;
  setUser(): void,
};

export type SurveysAvailableType = Array<{
  name: string;
  type: keyof typeof dishesOptionsType;
  complete: boolean;
  available: boolean;
}>;
