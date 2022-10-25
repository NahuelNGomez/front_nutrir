import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import LoggedLayout from "@components/layouts/LoggedLayout";

export { getServerSideProps } from "../src/contexts/store";

const Home: NextPage = () => {
  return (
    <LoggedLayout>
      <Grid
        container
        spacing={6}
        flexDirection={"row"}
        justifyContent={"space-around"}
        sx={{ padding: "20px" }}
      >
        <Grid item xs={12} lg={12}>
          <Typography variant={"h6"} sx={{ paddingBottom: "15px" }}>
            NOVEDADES
          </Typography>
          <Divider />
        </Grid>
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
            <CardActions
              sx={{ justifyContent: "center", paddingBottom: "20px" }}
            >
              <Button
                sx={{ width: "80%", borderRadius: "20px", color: "white" }}
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
            <CardActions
              sx={{ justifyContent: "center", paddingBottom: "20px" }}
            >
              <Button
                sx={{ width: "80%", borderRadius: "20px", color: "white" }}
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
            <CardActions
              sx={{ justifyContent: "center", paddingBottom: "20px" }}
            >
              <Button
                sx={{ width: "80%", borderRadius: "20px", color: "white" }}
                size="large"
              >
                Ver análisis
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </LoggedLayout>
  );
};

export default Home;
