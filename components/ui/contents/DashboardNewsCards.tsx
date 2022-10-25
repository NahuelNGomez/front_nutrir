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
import { FC } from "react";

const DashboardNewsCards: FC<{}> = () => {
  return (
    <>
      <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
        <Card>
          <CardMedia
            component="img"
            image="/images/ui/dash/01.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              ¡Las encuestas del día esperan tu respuesta!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions sx={dashboardCardsStyle.actions}>
            <Button
              sx={dashboardCardsStyle.button}
              size="large"
            >
              Completar
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
        <Card>
          <CardMedia
            component="img"
            image="/images/ui/dash/02.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Revisa y completa las encuestas que te faltan
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions sx={dashboardCardsStyle.actions}>
            <Button
              sx={dashboardCardsStyle.button}
              size="large"
            >
              Revisar
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
        <Card>
          <CardMedia
            component="img"
            image="/images/ui/dash/03.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Ya puedes ver los balances semanales
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions sx={dashboardCardsStyle.actions}>
            <Button
              sx={dashboardCardsStyle.button}
              size="large"
            >
              Ver análisis
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default DashboardNewsCards;
