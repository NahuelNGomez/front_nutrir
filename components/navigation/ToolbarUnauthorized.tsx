import SwitchMode from "@components/ui/special/SwitchMode";
import { Grid, Toolbar } from "@mui/material";
import { styles } from "@styles/components/navigation";
import Image from "next/image";
import { FC } from "react";

const UnauthorizedToolBar: FC<{}> = () => (
  <Toolbar>
    <Grid container direction="row">
      <Grid
        xs={8}
        item
        sx={styles.toolBarComponents}
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

export default UnauthorizedToolBar;
