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
import Header from "@components/navigation/Header";
import { loginFields } from "../src/types/forms";

const Login: NextPage = () => {
  const router = useRouter();

  const { fields, errors, process, updateField, submit } = useForm<loginFields>("login");

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
            <Typography
              sx={styles.title_text}
              gutterBottom
              variant="h5"
              component="div"
            >
              Iniciar sesión
            </Typography>
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
            <Typography sx={styles.floating_text} >
              ¿No tienes una cuenta?{" "}
              <Button size="small" sx={styles.link_text} onClick={() => router.push('register')}>
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
    </>
  );
};

export default Login;
