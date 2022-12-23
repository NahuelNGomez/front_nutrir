import { Card, CardContent, Collapse, Grid, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { pagesStyles } from "@styles/index";
import { useAppCtx } from "../../src/contexts/store";
import MerenderoCard from "@components/ui/special/MerenderoCard";
import axios from "axios";

const merenderos = [
  {
    name: "Centro Cultural El Cole",
    address: "Villa Cordobita, Paraguay 1031",
  },
];

const MerenderoCards: FC<{}> = () => {

  const { user } = useAppCtx();


  useEffect(() => {

    console.log('user', user);
  


    const getComedores = async ()=>{
      try {
        if (user.token) {
          axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
        }
        const response = await axios.get('http://50.116.44.91:3600/comedor')
        console.log(response);
        
      } catch (error) {
        console.log(error);
        
      }
    }
    getComedores()
  }, [])
  



  const { modeTheme } = useAppCtx();
  const {
    profileStyles: { merenderosCardsStyles },
  } = pagesStyles(modeTheme);
  const [collapse, setCollapse] = useState(false);

  return (
    <Grid xl={12}>

      <Typography sx={merenderosCardsStyles.title}>
        Comedores Habilitados
      </Typography>
      {/* <MerenderoCard {...merenderos[0]} />
           */}
      {merenderos.map((merendero, index) => (
        <MerenderoCard {...merendero} key={index} />
      ))}
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
