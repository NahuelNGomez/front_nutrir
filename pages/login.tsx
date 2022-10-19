import {
  Avatar,
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
import { styles } from "@styles/pages/login";
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

  return (
    <div
      style={{
        backgroundColor: modeTheme == "light" ? "#013A6B" : "#121212",
        backgroundImage:
          modeTheme == "light"
            ? "-webkit-linear-gradient(25deg, #ffffff 50%, #f1f3fa 50%)"
            : "-webkit-linear-gradient(25deg, #121212 50%, rgba(255, 255, 255, 0.09) 50%)",
        height: process.validate ? "100vh" : "max-content",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          height:"100vh"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <SwitchMode />
        </div>
        <AuthCart>
          {process.loading && <LinearProgress color="primary" />}
          <form
            onSubmit={(e) =>
              submit(e, "/api/login").then(() => router.push("/"))
            }
          >
            <CardContent sx={styles.content}>
              <Image
                src={modeTheme == "dark" ? "/dark-logo.png" : "/light-logo.png"}
                width={220}
                height={110}
                style={{marginBottom:"7px"}}
              />

              <div style={styles.semiFullWidth}>
                <TextField
                  error={errors.email}
                  fullWidth
                  id="input-with-sx"
                  label="Usuario"
                  variant="filled"
                  type="email"
                  name="email"
                  margin="normal"
                  value={fields.email}
                  sx={styles.input_text}
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
                  variant="filled"
                  margin="normal"
                  name="password"
                  sx={styles.input_text}
                  value={fields.password}
                  helperText={
                    errors.password ? "Debes ingresar tu contraseña" : ""
                  }
                  onChange={updateField}
                />
                <Typography
                  sx={styles.link_text}
                  onClick={() => router.push("recovery_account")}
                >
                  {" "}
                  ¿Olvidaste tu contraseña?
                </Typography>
              </div>
            </CardContent>
            <CardActions sx={styles.actions.container}>
              <div style={styles.semiFullWidth}>
                <Button
                  disabled={process.loading}
                  type="submit"
                  variant="contained"
                  sx={styles.submit_button}
                  color={process.loading ? "inherit" : "primary"}
                >
                  Ingresar{" "}
                  {process.loading && (
                    <CircularProgress
                      size={20}
                      sx={styles.circularProgress}
                      color="inherit"
                    />
                  )}
                </Button>
              </div>
            </CardActions>
            <CardActions sx={styles.actions.second_container}>
              <Typography sx={styles.floating_text}>
                ¿No tienes una cuenta?{" "}
                <Button
                  size="small"
                  sx={styles.link_text}
                  onClick={() => router.push("register")}
                >
                  Registrate
                </Button>
              </Typography>
            </CardActions>
            {!process.validate && (
              <div style={styles.error_message}>
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
