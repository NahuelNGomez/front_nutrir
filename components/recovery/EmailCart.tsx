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
import { pagesStyles } from "@styles/index";
import useForm from "../../src/hooks/useForm";
import { emailResetFields } from "../../src/types/forms";
import { FC } from "react";
import { statesForms } from "../../src/constants/states";
import { useAppCtx } from "../../src/contexts/store";

type props = {
  changeSteper(step: number): void;
  changeEmail(email: string): void;
};

const EmailCart: FC<props> = ({ changeSteper, changeEmail }) => {
  const { fields, errors, process, updateField, submit } =
    useForm<emailResetFields>(statesForms.email_reset);
  const { modeTheme } = useAppCtx();

  const handleSubmit = (e: React.FormEvent) => {
    submit(e, "/api/reset/email").then(() => {
      changeEmail(fields.email);
      changeSteper(1);
    });
  };

  const {
    recoveryAccountStyles: { emailCartStyles },
  } = pagesStyles(modeTheme);

  return (
    <>
      {process.loading && <LinearProgress color="primary" />}
      <form onSubmit={handleSubmit}>
        <CardContent sx={emailCartStyles.cardContent}>
          <Typography gutterBottom variant="h5" component="div">
            Restablecer Contraseña
          </Typography>
          <Grid style={emailCartStyles.utils.container}>
            <TextField
              error={errors.email}
              fullWidth
              id="input-with-sx"
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              margin="normal"
              value={fields.email}
              sx={emailCartStyles.utils.textInput}
              helperText={
                errors.email ? "Debes ingresar tu usuario/correo" : ""
              }
              onChange={updateField}
            />
          </Grid>
        </CardContent>
        <CardActions sx={emailCartStyles.actions.container}>
          <Button
            disabled={process.loading}
            type="submit"
            variant="contained"
            size="medium"
            color={process.loading ? "inherit" : "primary"}
          >
            Enviar{" "}
            {process.loading && (
              <CircularProgress
                size={20}
                sx={emailCartStyles.utils.circularProgress}
                color="inherit"
              />
            )}
          </Button>
        </CardActions>
      </form>
      {!process.validate && (
        <Grid style={emailCartStyles.utils.errorMessage}>
          <Alert severity="error">
            No encontramos un registro con el correo electronico ingresado.
          </Alert>
        </Grid>
      )}
      <Grid style={emailCartStyles.utils.errorMessage}>
        <small>
          *Te enviaremos un correo electronico con un codigo unico para que
          puedas restablecer tu contraseña.
        </small>
      </Grid>
    </>
  );
};

export default EmailCart;
