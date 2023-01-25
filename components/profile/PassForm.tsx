import {
  Alert,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
  Card,
} from "@mui/material";
import { FC, useEffect } from "react";
import { statesForms } from "../../src/constants/states";
import { useAppCtx } from "../../src/contexts/store";
import useForm from "../../src/hooks/useForm";
import { profileFields } from "../../src/types/forms";
import { pagesStyles } from "@styles/index";


const PassForm: FC<{}> = () => {
  const { modeTheme, user, setModalLogin } = useAppCtx();

  const {
    fields,
    errors,
    processing,
    updateField,
    submit,
    defaultValues,
    finishProcess,
  } = useForm<profileFields>(statesForms.password_reset);

  const {
    profileStyles: { passFormStyles },
  } = pagesStyles(modeTheme);

  const handleSubmit = (e:React.FormEvent)=>{

    console.log('submit', e);
    

    submit(e, "/api/reset/password")
    .then((res) => {
      finishProcess();
      console.log("res FRONT", res);
      
    })
    .catch(err=>{
      console.log('form err', err);
    })
  }

  return (

    <form
      onSubmit={(e)=>handleSubmit(e)}
    >
      <Grid>
        <Typography
          sx={passFormStyles.title}
          gutterBottom
          variant="h5"
          component="h5"
        >
          Cambia tu contraseña
        </Typography>
      </Grid>
      <Grid container direction={"row"} justifyContent={"space-between"}>
        <Grid item xs={12} sm={12} lg={12} xl={12} sx={passFormStyles.fields}>
          <TextField
            error={errors.password}
            fullWidth
            id="input-with-sx"
            label="Elegi una contraseña (opcional)"
            variant="outlined"
            type="password"
            name="password"
            margin="normal"
            value={fields.password}
            sx={passFormStyles.textInput}
            helperText={errors.password ? "Debes ingresar tu contraseña" : ""}
            onChange={updateField}
          />
        </Grid>
        <Grid item xs={12} sm={12} lg={12} xl={12} sx={passFormStyles.fields}>
          <TextField
            error={errors.confirm_password}
            fullWidth
            id="input-with-sx"
            label="confirma tu contraseña (opcional)"
            variant="outlined"
            type="password"
            name="confirm_password"
            margin="normal"
            value={fields.confirm_password}
            sx={passFormStyles.textInput}
            helperText={
              errors.password ? "Debes ingresar confirmar tu contraseña" : ""
            }
            onChange={updateField}
          />
        </Grid>
      </Grid>
      <Grid sx={passFormStyles.actions.container}>
        <Button
          disabled={processing.loading}
          type="submit"
          variant="contained"
          sx={passFormStyles.submiButton}
          color={processing.loading ? "inherit" : "primary"}
        >
          Actualizar{" "}
          {processing.loading && (
            <CircularProgress
              size={20}
              sx={passFormStyles.circularProgress}
              color="inherit"
            />
          )}
        </Button>
      </Grid>
      {!processing.validate && (
        <div style={passFormStyles.errorMessage}>
          <Alert severity="error" sx={passFormStyles.alertComponent}>
            Hubo un error!
          </Alert>
        </div>
      )}
      {processing.finish && (
        <div style={passFormStyles.errorMessage}>
          <Alert severity="success" sx={passFormStyles.alertComponent}>
            Se modifico con exito tu contraseña
          </Alert>
        </div>
      )}
    </form>

  );
};

export default PassForm;
