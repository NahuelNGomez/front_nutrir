import { FC, useEffect } from "react";
import useForm from "../../src/hooks/useForm";
import { passwordResetFields } from "../../src/types/forms";
import { pagesStyles } from "@styles/index";
import {
  Alert,
  Button,
  CardActions,
  CardContent,
  CircularProgress,
  LinearProgress,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
import { useRouter } from "next/router";
import { statesForms } from "../../src/constants/states";
import { useAppCtx } from "../../src/contexts/store";

type props = {
  changeSteper(step: number): void;
  token: string;
};

const PasswordCart: FC<props> = ({ changeSteper, token }) => {
  const router = useRouter();
  const { modeTheme } = useAppCtx();

  const { fields, errors, process, updateField, submit, updateFieldProps } =
    useForm<passwordResetFields>(statesForms.password_reset);

  useEffect(() => updateFieldProps("token", token), []);

  const handleSubmit = (e: React.FormEvent) => {
    submit(e, "/api/reset/password").then(() => {
      changeSteper(2);
      router.push("login");
    });
  };
  const {
    recoveryAccountStyles: { passwordCartStyles },
  } = pagesStyles(modeTheme);
  return (
    <>
      {process.loading && <LinearProgress color="primary" />}
      <form onSubmit={handleSubmit}>
        <CardContent sx={passwordCartStyles.cardContent}>
          <Typography gutterBottom variant="h5" component="div">
            Restablecer contraseña.
          </Typography>
          <Grid style={passwordCartStyles.utils.container}>
            <TextField
              error={errors.password}
              fullWidth
              id="input-with-sx"
              label="Nueva Contraseña"
              variant="outlined"
              type="password"
              name="password"
              margin="normal"
              value={fields.password}
              sx={passwordCartStyles.utils.textInput}
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
              variant="outlined"
              type="password"
              name="confirm_password"
              margin="normal"
              value={fields.confirm_password}
              sx={passwordCartStyles.utils.textInput}
              helperText={
                errors.confirm_password ? "Debes confirmar tu contraseña" : ""
              }
              onChange={updateField}
            />
          </Grid>
        </CardContent>
        <Grid style={passwordCartStyles.utils.container}>
          <CardActions sx={passwordCartStyles.actions.container}>
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
                  sx={passwordCartStyles.utils.circularProgress}
                  color="inherit"
                />
              )}
            </Button>
          </CardActions>
        </Grid>
      </form>
      {!process.validate && (
        <Grid style={passwordCartStyles.utils.errorMessage}>
          <Alert severity="error">Hubo un error.</Alert>
        </Grid>
      )}
    </>
  );
};

export default PasswordCart;
