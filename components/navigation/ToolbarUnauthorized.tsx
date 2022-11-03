import SwitchMode from "@components/ui/special/SwitchMode";
import { Grid, Toolbar } from "@mui/material";
import { componentsStyles } from "@styles/index";
import Image from "next/image";
import { FC } from "react";
import { useAppCtx } from "../../src/contexts/store";

const UnauthorizedToolBar: FC<{}> = () => {
  const { modeTheme, menuOpen } = useAppCtx();

  const { navigationStyles } = componentsStyles(modeTheme);
  return (
    <Toolbar>
      <Grid container direction="row">
        <Grid
          xs={8}
          item
          sx={navigationStyles(menuOpen).toolbar.coomponents}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <Image src={"/images/ui/NUTRIR logo-03.png"} width={70} height={50} />
        </Grid>
        <Grid container xs={4} item justifyContent={"flex-end"}>
          <SwitchMode />
        </Grid>
      </Grid>
    </Toolbar>
  );
};

export default UnauthorizedToolBar;
