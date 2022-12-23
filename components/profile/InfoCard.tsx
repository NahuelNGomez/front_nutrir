import { Avatar, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { useAppCtx } from "../../src/contexts/store";
import PersonIcon from "@mui/icons-material/Person";
import { pagesStyles } from "@styles/index";

const InfoCard: FC<{}> = () => {
  const { modeTheme, user } = useAppCtx();

  const {
    profileStyles: { infoCardStyles },
  } = pagesStyles(modeTheme);

  return (
    <Grid sx={infoCardStyles.container}>
      <Typography sx={infoCardStyles.cardTitle}>
        {user.lastName + ', ' + user.firstName}
      </Typography>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={infoCardStyles.infoSeccion}
      >
        <Avatar sx={infoCardStyles.avatar}>
          <PersonIcon fontSize="large" sx={{ color: "white" }} />
        </Avatar>
        <Grid>
          <Typography sx={infoCardStyles.userInfo}>
            Tipo de Perfil: Admin
          </Typography>
          <Typography sx={infoCardStyles.userInfo}>
            Te uniste el : 10 de diciembre del 2022
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InfoCard;
