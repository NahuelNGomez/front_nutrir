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
  const { modeTheme, user } = useAppCtx();

  const {
    fields,
    errors,
    processing,
    updateField,
    submit,
    defaultValues,
    finishProcess,
  } = useForm<profileFields>(statesForms.profile);

  const {
    profileStyles: { passFormStyles },
  } = pagesStyles(modeTheme);

  useEffect(() => {
    // defaultValues({
    //   user: user.user,
    //   name: user.name,
    //   phone: user.phone,
    //   email: user.email,
    //   password: "",
    // });
  }, []);

  return (
    
      <form
        onSubmit={(e) =>
          submit(e, "/api/profile").then(() => {
            console.log("it works!");
            finishProcess();
          })
        }
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
{/* 
          <Grid container direction={"row"} justifyContent={"space-between"}>
            <Grid item xs={12} sm={12} lg={12} xl={6} sx={passFormStyles.fields}>
              <TextField
                error={errors.user}
                fullWidth
                id="input-with-sx"
                label="Usuario"
                variant="outlined"
                type="text"
                name="user"
                margin="normal"
                value={fields.user}
                sx={passFormStyles.textInput}
                helperText={errors.user ? "Debes ingresar tu usuario" : ""}
                onChange={updateField}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={12} xl={6} sx={passFormStyles.fields}>
              <TextField
                error={errors.name}
                fullWidth
                id="input-with-sx"
                label="Nombre y Apellido"
                variant="outlined"
                type="text"
                name="name"
                margin="normal"
                value={fields.name}
                sx={passFormStyles.textInput}
                helperText={
                  errors.name ? "Debes ingresar tu nombre y appellido" : ""
                }
                onChange={updateField}
              />
            </Grid>
          </Grid>
          <Grid container direction={"row"} justifyContent={"space-between"}>
            <Grid item xs={12} sm={12} lg={12} xl={12} sx={passFormStyles.fields}>
              <TextField
                error={errors.phone}
                fullWidth
                id="input-with-sx"
                label="Telefono"
                variant="outlined"
                type="text"
                name="phone"
                margin="normal"
                value={fields.phone}
                sx={passFormStyles.textInput}
                helperText={errors.phone ? "Debes ingresar tu telefono" : ""}
                onChange={updateField}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={12} xl={12} sx={passFormStyles.fields}>
              <TextField
                error={errors.email}
                fullWidth
                id="input-with-sx"
                label="Correo Electronico"
                variant="outlined"
                type="email"
                name="email"
                margin="normal"
                value={fields.email}
                sx={passFormStyles.textInput}
                helperText={errors.email ? "Debes ingresar tu correo" : ""}
                onChange={updateField}
              />
            </Grid>
          </Grid>
          <Typography sx={passFormStyles.seccionTitle}>
            Cambia tu contraseña
          </Typography>
           */}
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
              error={errors.password}
              fullWidth
              id="input-with-sx"
              label="confirma tu contraseña (opcional)"
              variant="outlined"
              type="password"
              name="password"
              margin="normal"
              value={fields.password}
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
              Se Modifico con exito tu perfil
            </Alert>
          </div>
        )}
      </form>
   
  );
};

export default PassForm;
