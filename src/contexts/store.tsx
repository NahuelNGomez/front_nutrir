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
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  const [modeTheme, setModeTheme] = useState("light");

  const updateTheme = (mode: keyof typeof themes): void => {
    setCurrentTheme(themes[mode]);
    setModeTheme(mode);
  };

  return { currentTheme, updateTheme, modeTheme, user: userLog };
};

export const AppCtx = createContext<ReturnType<typeof useStoreController>>({
  currentTheme: lightTheme,
  updateTheme: () => {},
  modeTheme: "light",
  user: { logged: false },
});

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const ironSession: IronSessionData = await getIronSession(
    ctx.req,
    ctx.res,
    sessionOptions
  );

  return {
    props: {
      user: ironSession.user ?? { logged: false },
    },
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

export const useAppCtx = () => useContext(AppCtx);
