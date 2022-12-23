import {
  Typography,
  CardContent,
  TextField,
  CardActions,
  Button,
  Alert,
  LinearProgress,
  CircularProgress,
  Card,
  Grid,
} from "@mui/material";
import { NextPage } from "next";
import React, { useEffect } from "react";
import { pagesStyles } from "@styles/index";
import useForm from "../src/hooks/useForm";
import { useRouter } from "next/router";
import { loginFields } from "../src/types/forms";
import { statesForms } from "../src/constants/states";
import { useAppCtx } from "../src/contexts/store";
import UnloggedLayout from "@components/layouts/UnloggedLayout";
const Cookies = require('js-cookie')
// import Cookies from 'js-cookie'
import axios from "axios";



const Login: NextPage = () => {
  const router = useRouter();
  const { modeTheme, user, setUser } = useAppCtx();
  const { fields, errors, processing, updateField, submit } = useForm<loginFields>(
    statesForms.login
  );
  const { loginStyles } = pagesStyles(modeTheme);

  const handleSubmit = (e: any) => {
    e.preventDefault()

    const credentials = {
      username: e.target[0].value,
      password: e.target[2].value
    }

    const loginHandler = async () => {

      const path = process.env.NEXT_PUBLIC_API_BASE_URL

      try {
        const response = await axios.post(`${path}user/sesion/login/`, credentials)
        const data = response.data
        // console.log({ data });
        const userData = data.user
        setUser({
          ...user,
          firstName: userData.first_name,
          lastName: userData.last_name,
          cuil: userData.cuil,
          email: userData.email,
          logged: true,
          token: data.refresh_token
        })
        Cookies.set("refresh_token", data.refresh_token, { expires: 30 });
        router.push("/")
        
      } catch (error) {
        console.log(error);
      }
    }
    loginHandler()
  }

  return (
    <UnloggedLayout>
      <Grid
        item
        flexDirection={"column"}
        xs={12}
        sm={8}
        lg={4}
        xl={3}
        sx={{ padding: "10px" }}
      >
        <Card>
          {processing.loading && <LinearProgress color="primary" />}
          <form
            onSubmit={handleSubmit}
          >
            <CardContent sx={loginStyles.cardContent}>
              <img
                src={
                  modeTheme == "dark"
                    ? "/images/ui/NUTRIR logo-transparente-01.png"
                    : "/images/ui/NUTRIR logo-03.png"
                }
                style={{ width: "200px" }}
              />

              <div style={loginStyles.utils.container}>
                <TextField
                  error={errors.email}
                  fullWidth
                  id="input-with-sx"
                  label="Usuario"
                  variant="outlined"
                  // type="email"
                  name="email"
                  margin="normal"
                  value={fields.email}
                  sx={loginStyles.utils.textInput}
                  helperText={
                    errors.email ? "Debes ingresar tu usuario/correo" : ""
                  }
                  onChange={updateField}
                />

                <TextField
                  type={"password"}
                  error={errors.password}
                  fullWidth
                  id="input-with-sx"
                  label="Contraseña"
                  variant="outlined"
                  margin="normal"
                  name="password"
                  sx={loginStyles.utils.textInput}
                  value={fields.password}
                  helperText={
                    errors.password ? "Debes ingresar tu contraseña" : ""
                  }
                  onChange={updateField}
                />
                <Typography
                  sx={loginStyles.utils.linkText}
                  onClick={() => router.push("recovery_account")}
                >
                  {" "}
                  ¿Olvidaste tu contraseña?
                </Typography>
              </div>
            </CardContent>
            <CardActions sx={loginStyles.actions.container}>
              <div style={loginStyles.utils.container}>
                <Button
                  disabled={processing.loading}
                  type="submit"
                  variant="contained"
                  sx={loginStyles.utils.submitButton}
                  color={processing.loading ? "inherit" : "primary"}
                >
                  Ingresar{" "}
                  {processing.loading && (
                    <CircularProgress
                      size={20}
                      sx={loginStyles.utils.circularProgress}
                      color="inherit"
                    />
                  )}
                </Button>
              </div>
            </CardActions>
            <CardActions sx={loginStyles.actions.helperText}>
              <Typography sx={loginStyles.actions.floatingText}>
                ¿No tienes una cuenta?{" "}
                <Button
                  size="small"
                  sx={loginStyles.utils.linkText}
                  onClick={() => router.push("register")}
                >
                  Registrate
                </Button>
              </Typography>
            </CardActions>
            {!processing.validate && (
              <div style={loginStyles.utils.errorMessage}>
                <Alert severity="error" sx={{ justifyContent: "center" }}>
                  Usuario o Contraseña son incorrectas
                </Alert>
              </div>
            )}
          </form>
        </Card>
      </Grid>
    </UnloggedLayout>
  );
};

export default Login;
