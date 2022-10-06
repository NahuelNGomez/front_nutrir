import { darkTheme, lightTheme } from "../template/theme";

const themes = {
    light: lightTheme,
    dark: darkTheme
}

export type ThemeHook = {
    currentTheme: typeof darkTheme | typeof lightTheme,
    updateTheme(theme:keyof typeof themes):void
}