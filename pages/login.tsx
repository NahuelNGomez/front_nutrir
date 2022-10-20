import {
  Typography,
  CardContent,
  TextField,
  CardActions,
  Button,
  Alert,
  LinearProgress,
  CircularProgress,
} from "@mui/material";
import { NextPage } from "next";
import React from "react";
import { styles } from "@styles/pages/auth";
import useForm from "../src/hooks/useForm";
import AuthCart from "@components/utils/authCart";
import { useRouter } from "next/router";
import { loginFields } from "../src/types/forms";
import { statesForms } from "../src/constants/states";
import Image from "next/image";
import { useAppCtx } from "../src/contexts/store";
import SwitchMode from "@components/ui/special/switchMode";

const Login: NextPage = () => {
  const router = useRouter();
  const { modeTheme } = useAppCtx();
  const { fields, errors, process, updateField, submit } = useForm<loginFields>(
    statesForms.login
  );
  const style = styles(modeTheme);

  return (
    <div style={style.page}>
      <div style={style.content.container}>
        <div style={style.content.header}>
          <SwitchMode />
        </div>
        <AuthCart>
          {process.loading && <LinearProgress color="primary" />}
          <form
            onSubmit={(e) =>
              submit(e, "/api/login").then(() => router.push("/"))
            }
          >
            <CardContent sx={style.content.cardContent}>
              <Image
                src={modeTheme == "dark" ? "/dark-logo.png" : "/light-logo.png"}
                width={220}
                height={110}
                style={{ marginBottom: "7px" }}
              />

              <div style={style.utils.container}>
                <TextField
                  error={errors.email}
                  fullWidth
                  id="input-with-sx"
                  label="Usuario"
                  variant="outlined"
                  type="email"
                  name="email"
                  margin="normal"
                  value={fields.email}
                  sx={style.utils.textInput}
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
                  sx={style.utils.textInput}
                  value={fields.password}
                  helperText={
                    errors.password ? "Debes ingresar tu contraseña" : ""
                  }
                  onChange={updateField}
                />
                <Typography
                  sx={style.utils.linkText}
                  onClick={() => router.push("recovery_account")}
                >
                  {" "}
                  ¿Olvidaste tu contraseña?
                </Typography>
              </div>
            </CardContent>
            <CardActions sx={style.content.actions.container}>
              <div style={style.utils.container}>
                <Button
                  disabled={process.loading}
                  type="submit"
                  variant="contained"
                  sx={style.utils.submitButton}
                  color={process.loading ? "inherit" : "primary"}
                >
                  Ingresar{" "}
                  {process.loading && (
                    <CircularProgress
                      size={20}
                      sx={style.utils.circularProgress}
                      color="inherit"
                    />
                  )}
                </Button>
              </div>
            </CardActions>
            <CardActions sx={style.content.actions.helperText}>
              <Typography sx={style.content.actions.floatingText}>
                ¿No tienes una cuenta?{" "}
                <Button
                  size="small"
                  sx={style.utils.linkText}
                  onClick={() => router.push("register")}
                >
                  Registrate
                </Button>
              </Typography>
            </CardActions>
            {!process.validate && (
              <div style={style.utils.errorMessage}>
                <Alert severity="error" sx={{ justifyContent: "center" }}>
                  Usuario o Contraseña son incorrectas
                </Alert>
              </div>
            )}
          </form>
        </AuthCart>
        <img
          src={"/organica.png"}
          style={{ filter: modeTheme == "light" ? "saturate(100%)" : "" }}
          width={150}
          height={75}
        />
      </div>
    </div>
  );
};

export default Login;
