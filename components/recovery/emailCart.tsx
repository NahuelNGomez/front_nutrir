import AuthCart from "@components/utils/authCart";
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
import { styles } from "@styles/pages/auth";
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
    const {modeTheme} = useAppCtx();

  const handleSubmit = (e: React.FormEvent) => {
    submit(e, "/api/reset/email").then(() => {
      changeEmail(fields.email);
      changeSteper(1);
    });
  };

  const style = styles(modeTheme);

  return (
    <AuthCart>
      {process.loading && <LinearProgress color="primary" />}
      <form onSubmit={handleSubmit}>
        <CardContent sx={style.content.cardContent}>
          <Typography gutterBottom variant="h5" component="div">
            Restablecer Contraseña
          </Typography>
          <div style={style.utils.container}>
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
              sx={style.utils.textInput}
              helperText={
                errors.email ? "Debes ingresar tu usuario/correo" : ""
              }
              onChange={updateField}
            />
          </div>
        </CardContent>
        <CardActions sx={style.content.actions.container}>
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
                sx={style.utils.circularProgress}
                color="inherit"
              />
            )}
          </Button>
        </CardActions>
      </form>
      {!process.validate && (
        <div style={style.utils.errorMessage}>
          <Alert severity="error">
            No encontramos un registro con el correo electronico ingresado.
          </Alert>
        </div>
      )}
      <div style={style.utils.errorMessage}>
        <small>
          *Te enviaremos un correo electronico con un codigo unico para que
          puedas restablecer tu contraseña.
        </small>
      </div>
    </AuthCart>
  );
};

export default EmailCart;
