import { Card, Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import { pagesStyles } from "@styles/index";
import { useAppCtx } from "../../../src/contexts/store";

const MerenderoCard: FC<{ name?: string; address?: string }> = ({
  name,
  address,
}) => {
  const { modeTheme } = useAppCtx();

  const {
    profileStyles: { merenderosCardsStyles },
  } = pagesStyles(modeTheme);
  return (
    <Grid xl={12}>
      <Card sx={merenderosCardsStyles.card}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Typography sx={merenderosCardsStyles.titleCard}>{name}</Typography>
            <Typography sx={merenderosCardsStyles.titleCard}>
              {address}
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
            <div onClick={() => { }}>
              <Typography sx={merenderosCardsStyles.button}>Editar</Typography>
            </div>
            <Typography sx={merenderosCardsStyles.button}>
              Seleccionar
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default MerenderoCard;
