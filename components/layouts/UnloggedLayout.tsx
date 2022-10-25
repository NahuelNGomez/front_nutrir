import Bar from "@components/navigation/Bar";
import { Grid } from "@mui/material";
import { styles } from "@styles/pages/auth";
import React, { FC, ReactNode } from "react";
import { useAppCtx } from "../../src/contexts/store";

type props = {
  children: ReactNode;
};

const UnloggedLayout: FC<props> = ({ children }) => {
  const { modeTheme } = useAppCtx();
  const style = styles(modeTheme);

  return (
    <Grid style={style.page}>
      <Grid style={style.content.container}>
        <Bar />
        <Grid container justifyContent={"center"}>
          {children}
        </Grid>
        <Grid>
          <img
            src={"/organica.png"}
            style={{ filter: modeTheme == "light" ? "saturate(100%)" : "" }}
            width={150}
            height={75}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UnloggedLayout;
