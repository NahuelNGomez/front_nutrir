import { Theme } from "@mui/material";
import { darkTheme, lightTheme } from "../template/theme";

export type userType = {
  user: string;
  phone: string;
  name: string;
  email: string;
  comedor: string;
  logged: boolean;
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

export type invoiceInfoType = {
  type?: keyof typeof surveyTypes;
  dishes?: Array<dishestype>;
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
};

export type SurveysAvailableType = Array<{
  name: string;
  type: keyof typeof dishesOptionsType;
  complete: boolean;
  available: boolean;
}>;
