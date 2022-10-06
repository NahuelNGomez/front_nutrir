import { createContext, useContext, useState } from "react";
import { darkTheme, lightTheme } from "../template/theme";

const themes = {
    light: lightTheme,
    dark: darkTheme
}

export const useStoreController = () => 
{
    const [currentTheme,setCurrentTheme] = useState(darkTheme);
    const [modeTheme,setModeTheme]       = useState('dark');

    const updateTheme = (mode:keyof typeof themes):void => {
        setCurrentTheme(themes[mode]);
        setModeTheme(mode);
    }

    return {currentTheme,updateTheme,modeTheme}
}

export const AppCtx = createContext<ReturnType<typeof useStoreController>>({
    currentTheme:lightTheme,
    updateTheme: () => {},
    modeTheme:'light'
});


export const useAppCtx = () => useContext(AppCtx);