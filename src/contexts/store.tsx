import { getIronSession, IronSessionData } from "iron-session";
import { GetServerSideProps } from "next";
import React, { createContext, useContext, useState } from "react";
import { darkTheme, lightTheme } from "../template/theme";
import { sessionOptions } from "../utils/withIronSession";

export type userType = {
  username?: string;
  name?: string;
  comedor?: string;
  logged: boolean;
};

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export const useStoreController = ({ userLog }: { userLog: userType }) => {
  const [currentTheme, setCurrentTheme] = useState(darkTheme);
  const [modeTheme, setModeTheme] = useState("dark");
  const [user, setUser] = useState(userLog);

  const updateTheme = (mode: keyof typeof themes): void => {
    setCurrentTheme(themes[mode]);
    setModeTheme(mode);
  };

  const login = (userLogged: userType): void => {
    setUser(userLogged);
  };

  const logout = () => {
    setUser({ logged: false });
  };

  return { currentTheme, updateTheme, modeTheme, login, logout, user };
};

export const AppCtx = createContext<ReturnType<typeof useStoreController>>({
  currentTheme: lightTheme,
  updateTheme: () => {},
  modeTheme: "light",
  login: () => {},
  logout: () => {},
  user: { logged: false },
});

export const getServerSideProps:GetServerSideProps = async (ctx) => {

    const ironSession: IronSessionData = await getIronSession(ctx.req, ctx.res, sessionOptions);
    
    return {
        props: {
            user: ironSession.user ?? { logged: false }
        }
    }
}

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

export const useAppCtx = () => useContext(AppCtx);
