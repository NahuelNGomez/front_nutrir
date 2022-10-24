import SwitchMode from "@components/ui/special/switchMode";
import { Grid, Toolbar } from "@mui/material";
import { styles } from "@styles/components/navigation";
import Image from "next/image";

const UnauthorizedToolBar = () => (
    <Toolbar>
      <Grid container direction="row">
        <Grid
          xs={8}
          item
          sx={styles.toolBarComponents}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <Image src={"/dark-logo.png"}  width={80} height={50} />
        </Grid>
        <Grid container xs={4} item justifyContent={"flex-end"}>
          <SwitchMode />
        </Grid>
      </Grid>
    </Toolbar>
  );

  export default UnauthorizedToolBar;