import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { dashboardCardsStyle } from "@styles/components/ui/content";
import { useRouter } from "next/router";
import { FC } from "react";
import { dashboardCards } from "../../../src/contents/cards";
import { useAppCtx } from "../../../src/contexts/store";
import SwitchMode from "../special/SwitchMode";

const DashboardNewsCards: FC<{}> = () => {
  const router = useRouter();
  const {modeTheme} = useAppCtx();
  return (
    <>
      {dashboardCards.map(({ title, image, redirectTo,background_light },index) => (
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={index}>
          <Card>
            {/*<CardMedia component="img" image={image} alt="green iguana" />*/}
            <Grid sx={{width:"100%",height:"140px",
             backgroundColor: modeTheme == "light" ? "#013A6B" : "#121212",
             backgroundImage:
             modeTheme == "light"
                 ? background_light
                 : "-webkit-linear-gradient(71deg, #121212 50%, rgba(255, 255, 255, 0.09) 50%)",
             display:"flex",
             flexDirection:"column",
             justifyContent:"center",
             pl:2
          }}>
                
            <img src={image} width="120"/>
            </Grid>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
            </CardContent>
            <CardActions sx={dashboardCardsStyle.actions}>
              <Button
                sx={dashboardCardsStyle.button}
                size="large"
                onClick={() => router.push(redirectTo)}
                color="primary"
              >
                Completar
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default DashboardNewsCards;
