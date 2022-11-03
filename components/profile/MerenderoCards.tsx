import { Card, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { pagesStyles } from "@styles/index";
import { useAppCtx } from "../../src/contexts/store";

const MerenderoCards: FC<{}> = () => {
  const { modeTheme } = useAppCtx();
  const {
    profileStyles: { merenderosCardsStyles },
  } = pagesStyles(modeTheme);

  return (
    <Grid xl={12} sx={merenderosCardsStyles.container}>
      <Typography sx={merenderosCardsStyles.title}>
        Comedores Habilitados
      </Typography>
      <Grid xl={12}>
        <Card sx={merenderosCardsStyles.card}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography sx={merenderosCardsStyles.titleCard}>
                Comedor 1
              </Typography>
              <Typography sx={merenderosCardsStyles.titleCard}>
                Av. 9 de Julio 34, Buenos Aires
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              sx={merenderosCardsStyles.actions}
            >
              <Typography sx={merenderosCardsStyles.button}>Editar</Typography>
              <Typography sx={merenderosCardsStyles.button}>
                Seleccionar
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MerenderoCards;
