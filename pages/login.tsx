import {
  Avatar,
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
  CardActions,
  Button,
} from "@mui/material";
import { NextPage } from "next";
import React from "react";
import Header from "../components/navigation/Header";

const Login: NextPage = () => {
  return (
    <>
      <Header />
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        alignContent={"center"}
        sx={{ backgroundcolor: "blue", height: "80vh" }}
      >
        <Grid item xs={11} sm={8} lg={4} xl={3}>
          <Card>
            <form>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Avatar
                  src="/logo-nutrir.png"
                  sx={{ width: 155, height: 155 }}
                />
                <Typography gutterBottom variant="h5" component="div">
                  Iniciar Session
                </Typography>
                <div style={{width:"90%"}}>
                  <TextField
                    fullWidth
                    id="input-with-sx"
                    label="Usuario"
                    variant="standard"
                    type="email"
                    margin="dense"
                  />

                  <TextField
                    fullWidth
                    id="input-with-sx"
                    label="Contraseña"
                    variant="standard"
                    margin="dense"
                  />
                </div>
              </CardContent>
              <CardActions sx={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                <Button variant="contained" size="small">Entrar</Button>
              </CardActions>
              <CardActions sx={{display:"flex",flexDirection:"column",justifyContent:"flex-end"}}>
                <Button  size="small">Olvide mi contraseña</Button>
              </CardActions>
            </form>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
