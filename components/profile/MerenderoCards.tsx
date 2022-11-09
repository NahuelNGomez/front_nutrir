import { Card, Collapse, Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
import { pagesStyles } from "@styles/index";
import { useAppCtx } from "../../src/contexts/store";
import MerenderoCard from "@components/ui/special/MerenderoCard";

const merenderos = [
  {
    name: "Merendero 1",
    address: "Av. 9 de Julio 34, Buenos Aires",
  },
  {
    name: "Merendero 2",
    address: "Av. 9 de Julio 34, Buenos Aires",
  },
];

const MerenderoCards: FC<{}> = () => {
  const { modeTheme } = useAppCtx();
  const {
    profileStyles: { merenderosCardsStyles },
  } = pagesStyles(modeTheme);
  const [collapse, setCollapse] = useState(false);

  return (
    <Grid xl={12} sx={merenderosCardsStyles.container}>
      <Typography sx={merenderosCardsStyles.title}>
        Comedores Habilitados
      </Typography>
      <MerenderoCard {...merenderos[0]} />
      <Grid justifyContent={"center"}>
        
      </Grid>
      {merenderos.length > 1 && (
        <Collapse in={collapse} timeout="auto" unmountOnExit>
          {merenderos.map((merendero, index) => (
            <MerenderoCard {...merendero} key={index} />
          ))}
        </Collapse>
      )}
    </Grid>
  );
};

export default MerenderoCards;
