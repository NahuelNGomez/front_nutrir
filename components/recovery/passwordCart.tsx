import AuthCart from "@components/utils/authCart";
import { FC, useEffect } from "react";
import useForm from "../../src/hooks/useForm";
import {
  passwordResetFields,
} from "../../src/types/forms";
import { styles } from "@styles/pages/login";
import {
  Alert,
  Button,
  CardActions,
  CardContent,
  CircularProgress,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

type props = {
  changeSteper(step: number): void;
  token: string;
};

const PasswordCart: FC<props> = ({ changeSteper, token }) => {
  const router = useRouter();
  const { fields, errors, process, updateField, submit, updateFieldProps } =
    useForm<passwordResetFields>("password_reset");

  useEffect(() => updateFieldProps("token", token), []);

  const handleSubmit = (e: React.FormEvent) => {
    submit(e, "/api/reset/password").then(() => {
      changeSteper(2);
      router.push("login");
    });
  };
  return (
    <>
      <AuthCart>
        {process.loading && <LinearProgress color="primary" />}
        <form onSubmit={handleSubmit}>
          <CardContent sx={styles.content}>
            <Typography gutterBottom variant="h5" component="div">
              Restablecer contraseña.
            </Typography>
            <div style={styles.semiFullWidth}>
              <TextField
                error={errors.password}
                fullWidth
                id="input-with-sx"
                label="Nueva Contraseña"
                variant="filled"
                type="password"
                name="password"
                margin="normal"
                value={fields.password}
                sx={styles.input_text}
                helperText={
                  errors.password ? "Debes ingresar una contraseña" : ""
                }
                onChange={updateField}
              />
              <TextField
                error={errors.confirm_password}
                fullWidth
                id="input-with-sx"
                label="Confirmar Contraseña"
                variant="filled"
                type="password"
                name="confirm_password"
                margin="normal"
                value={fields.confirm_password}
                sx={styles.input_text}
                helperText={
                  errors.confirm_password ? "Debes confirmar tu contraseña" : ""
                }
                onChange={updateField}
              />
            </div>
          </CardContent>
          <div style={styles.semiFullWidth}>
            <CardActions sx={styles.actions.container}>
              <Button
                disabled={process.loading}
                type="submit"
                variant="contained"
                size="medium"
                color={process.loading ? "inherit" : "primary"}
              >
                Cambiar Contraseña{" "}
                {process.loading && (
                  <CircularProgress
                    size={20}
                    sx={styles.circularProgress}
                    color="inherit"
                  />
                )}
              </Button>
            </CardActions>
          </div>
        </form>
        {!process.validate && (
          <div style={styles.error_message}>
            <Alert severity="error">Hubo un error.</Alert>
          </div>
        )}
      </AuthCart>
    </>
  );
};

export default PasswordCart;
