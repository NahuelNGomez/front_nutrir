import { Card, Grid } from "@mui/material";
import { styles } from "@styles/pages/auth";
import React, { FC, ReactNode } from "react";
import { useAppCtx } from "../../src/contexts/store";

type props = {
  children: ReactNode;
};

const AuthCart: FC<props> = ({ children }) => {
  const {modeTheme} = useAppCtx();
  return (
    <>
      
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        alignContent={"center"}
        sx={styles(modeTheme).content.container}
      >
        <Grid item xs={11} sm={8} lg={4} xl={3}>
          <Card>{children}</Card>
        </Grid>
      </Grid>
    </>
  );
};

export default AuthCart;
