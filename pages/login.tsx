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
import { FormLoginData } from "../src/types/forms";
import { initialLoginFormState } from "../src/constants/states";
import { useRouter } from "next/router";
import buildReducer from "../src/reducers";
import Header from "@components/navigation/Header";

const Login: NextPage = () => {
  const { fields, errors, process, updateField, submit } =
    useForm<FormLoginData>(
      buildReducer<FormLoginData>(initialLoginFormState),
      initialLoginFormState
    );

  const router = useRouter();

  return (
    <>
      <Header />
      <AuthCart>
        {process.loading && <LinearProgress color="primary" />}
        <form
          onSubmit={(e) => submit(e, "/api/login").then(() => router.push("/"))}
        >
          <CardContent sx={styles.content}>
            <Avatar src="/logo-nutrir.png" sx={styles.icon} />
            <Typography gutterBottom variant="h5" component="div">
              Iniciar Session
            </Typography>
            <div style={styles.semiFullWidth}>
              <TextField
                error={errors.email}
                fullWidth
                id="input-with-sx"
                label="Usuario"
                variant="standard"
                type="email"
                name="email"
                margin="normal"
                value={fields.email}
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
                variant="standard"
                margin="normal"
                name="password"
                value={fields.password}
                helperText={
                  errors.password ? "Debes ingresar tu contraseña" : ""
                }
                onChange={updateField}
              />
            </div>
          </CardContent>
          <CardActions sx={styles.actions.container}>
            <Button
              disabled={process.loading}
              type="submit"
              variant="contained"
              size="medium"
              color={process.loading ? "inherit" : "primary"}
            >
              Entrar{" "}
              {process.loading && (
                <CircularProgress
                  size={20}
                  sx={styles.circularProgress}
                  color="inherit"
                />
              )}
            </Button>
          </CardActions>
          <CardActions sx={styles.actions.second_container}>
            <Button
              size="small"
              onClick={() => router.push("recovery_account")}
            >
              Olvide mi contraseña
            </Button>
            <Button size="small">Registrarse</Button>
          </CardActions>
          {!process.validate && (
            <div style={styles.error_message}>
              <Alert severity="error">
                Usuario o Contraseña son incorrectas
              </Alert>
            </div>
          )}
        </form>
      </AuthCart>
    </>
  );
};

export default Login;
