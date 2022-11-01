import { FC, useEffect } from "react";
import useForm from "../../src/hooks/useForm";
import { codeResetFields, SubmitForm } from "../../src/types/forms";
import { styles } from "@styles/pages/forms";
import {
  Alert,
  Button,
  CardActions,
  CardContent,
  CircularProgress,
  Grid,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import useTimer from "../../src/hooks/useTimer";
import { statesForms } from "../../src/constants/states";
import { useAppCtx } from "../../src/contexts/store";

type props = {
  changeSteper(step: number): void;
  changeToken(token: string): void;
  email: string;
};

const CodeCart: FC<props> = ({ changeSteper, changeToken, email }) => {
  const router = useRouter();
  const { seconds } = useTimer(60);
  const { modeTheme } = useAppCtx();

  const { fields, errors, process, updateField, submit, updateFieldProps } =
    useForm<codeResetFields>(statesForms.code_reset);

  useEffect(() => {
    updateFieldProps("email", email);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    submit(e, "/api/reset/code").then((response: SubmitForm) => {
      changeSteper(2);
      changeToken(response.token);
    });
  };

  const style = styles(modeTheme);
  return (
    <>
      {process.loading && <LinearProgress color="primary" />}
      <form onSubmit={handleSubmit}>
        <CardContent sx={style.content.cardContent}>
          <Typography gutterBottom variant="h5" component="div">
            Codigo de Seguridad
          </Typography>
          <Grid style={style.utils.container}>
            <TextField
              error={errors.code}
              fullWidth
              id="input-with-sx"
              label="codigo de verificación"
              variant="outlined"
              type="text"
              name="code"
              margin="normal"
              value={fields.code}
              sx={style.utils.textInput}
              helperText={errors.code ? "Debes ingresar un codigo valido" : ""}
              onChange={updateField}
            />
          </Grid>
        </CardContent>
        <Grid style={style.utils.container}>
          <CardActions sx={style.utils.codeContainer}>
            <Button
              size="small"
              sx={{ ...style.utils.linkText, textAlign: "left" }}
              onClick={() => router.reload()}
            >
              Probar con otro correo electronico
            </Button>
            <Button
              disabled={process.loading || seconds === 0}
              type="submit"
              variant="contained"
              size="medium"
              color={process.loading || seconds === 0 ? "inherit" : "primary"}
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
        </Grid>
      </form>
      {!process.validate && (
        <Grid style={style.utils.errorMessage}>
          <Alert severity="error">
            El codigo que ingresaste es invalido o expiro
          </Alert>
        </Grid>
      )}
      {seconds === 0 && (
        <Grid style={style.utils.errorMessage}>
          <Alert severity="error">
            Tu tiempo se ha terminado por favor intenta de nuevo.
          </Alert>
        </Grid>
      )}
      <Grid style={style.utils.secondsTimer}>
        <small>Te quedan 00:{seconds >= 10 ? seconds : `0${seconds}`}</small>
      </Grid>
    </>
  );
};

export default CodeCart;
