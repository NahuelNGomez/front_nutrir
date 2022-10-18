import AuthCart from "@components/utils/authCart";
import { FC, useEffect } from "react";
import useForm from "../../src/hooks/useForm";
import { codeResetFields, SubmitForm } from "../../src/types/forms";
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
import useTimer from "../../src/hooks/useTimer";

type props = {
  changeSteper(step: number): void;
  changeToken(token: string): void;
  email: string;
};

const CodeCart: FC<props> = ({ changeSteper, changeToken, email }) => {
  const router = useRouter();
  const { seconds } = useTimer(60);

  const { fields, errors, process, updateField, submit, updateFieldProps } =
    useForm<codeResetFields>("code_reset");

  useEffect(() => {
    updateFieldProps("email", email);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    submit(e, "/api/reset/code").then((response: SubmitForm) => {
      changeSteper(2);
      changeToken(response.token);
    });
  };
  return (
    <>
      <AuthCart>
        {process.loading && <LinearProgress color="primary" />}
        <form onSubmit={handleSubmit}>
          <CardContent sx={styles.content}>
            <Typography gutterBottom variant="h5" component="div">
              Codigo de Seguridad
            </Typography>
            <div style={styles.semiFullWidth}>
              <TextField
                error={errors.code}
                fullWidth
                id="input-with-sx"
                label="codigo de verificación"
                variant="filled"
                type="text"
                name="code"
                margin="normal"
                value={fields.code}
                sx={styles.input_text}
                helperText={
                  errors.code ? "Debes ingresar un codigo valido" : ""
                }
                onChange={updateField}
              />
            </div>
          </CardContent>
          <div style={styles.semiFullWidth}>
            <CardActions sx={styles.actions.code_container}>
              <Button
                size="small"
                sx={{ ...styles.link_text, textAlign: "left" }}
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
            <Alert severity="error">
              El codigo que ingresaste es invalido o expiro
            </Alert>
          </div>
        )}
        {seconds === 0 && (
          <div style={styles.error_message}>
            <Alert severity="error">
              Tu tiempo se ha terminado por favor intenta de nuevo.
            </Alert>
          </div>
        )}
        <div style={styles.seconds_timer}>
          <small>Te quedan 00:{seconds >= 10 ? seconds : `0${seconds}`}</small>
        </div>
      </AuthCart>
    </>
  );
};

export default CodeCart;
