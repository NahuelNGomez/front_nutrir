import LoggedLayout from "@components/layouts/LoggedLayout";
import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Divider,
  Grid,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import { styles } from "@styles/pages/auth";
import { NextPage } from "next";
import { useEffect } from "react";
import { statesForms } from "../src/constants/states";
import { useAppCtx } from "../src/contexts/store";
import useForm from "../src/hooks/useForm";
import { profileFields } from "../src/types/forms";
export { getServerSideProps } from "../src/contexts/store";

const Profile: NextPage = () => {
  const { modeTheme, user } = useAppCtx();

  const {
    fields,
    errors,
    process,
    updateField,
    submit,
    defaultValues,
    finishProcess,
  } = useForm<profileFields>(statesForms.profile);

  const style = styles(modeTheme);

  useEffect(() => {
    defaultValues({
      user: user.user,
      name: user.name,
      phone: user.phone,
      email: user.email,
      password: "",
    });
  }, []);

  return (
    <LoggedLayout>
      <Grid
        container
        spacing={6}
        flexDirection={"row"}
        justifyContent={"space-around"}
        sx={{ padding: "20px" }}
      >
        <Grid item xs={12} lg={12}>
          <Typography variant={"h6"} sx={{ paddingBottom: "15px" }}>
            Perfil de Usuario
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Card>
            {process.loading && <LinearProgress color="primary" />}
            <form
              onSubmit={(e) =>
                submit(e, "/api/profile").then(() => {
                  console.log("it works!");
                  finishProcess();
                })
              }
            >
              <CardContent>
              <Typography
                sx={style.register.title}
                gutterBottom
                variant="h5"
                component="div"
              >
                Edita tu perfil
              </Typography>
                <Grid
                  container
                  direction={"row"}
                  justifyContent={"space-between"}
                >
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={6}
                    xl={6}
                    sx={style.register.fields}
                  >
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
                      sx={style.utils.textInput}
                      helperText={
                        errors.user ? "Debes ingresar tu usuario" : ""
                      }
                      onChange={updateField}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={6}
                    xl={6}
                    sx={style.register.fields}
                  >
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
                      sx={style.utils.textInput}
                      helperText={
                        errors.name
                          ? "Debes ingresar tu nombre y appellido"
                          : ""
                      }
                      onChange={updateField}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction={"row"}
                  justifyContent={"space-between"}
                >
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={6}
                    xl={6}
                    sx={style.register.fields}
                  >
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
                      sx={style.utils.textInput}
                      helperText={
                        errors.phone ? "Debes ingresar tu telefono" : ""
                      }
                      onChange={updateField}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={6}
                    xl={6}
                    sx={style.register.fields}
                  >
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
                      sx={style.utils.textInput}
                      helperText={
                        errors.email ? "Debes ingresar tu correo" : ""
                      }
                      onChange={updateField}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction={"row"}
                  justifyContent={"space-between"}
                >
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={6}
                    xl={6}
                    sx={style.register.fields}
                  >
                    <TextField
                      error={errors.password}
                      fullWidth
                      id="input-with-sx"
                      label="Elegi una contraseña"
                      variant="outlined"
                      type="password"
                      name="password"
                      margin="normal"
                      value={fields.password}
                      sx={style.utils.textInput}
                      helperText={
                        errors.password ? "Debes ingresar tu telefono" : ""
                      }
                      onChange={updateField}
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions
                sx={{
                  ...style.content.actions.container,
                  alignItems: "center",
                }}
              >
                <Button
                  disabled={process.loading}
                  type="submit"
                  variant="contained"
                  sx={{
                    ...style.utils.submitButton,
                    width: "40%",
                    margin: "15px",
                  }}
                  color={process.loading ? "inherit" : "primary"}
                >
                  Actualizar{" "}
                  {process.loading && (
                    <CircularProgress
                      size={20}
                      sx={style.utils.circularProgress}
                      color="inherit"
                    />
                  )}
                </Button>
              </CardActions>
              {!process.validate && (
                <div style={style.utils.errorMessage}>
                  <Alert severity="error" sx={{ justifyContent: "center" }}>
                    Hubo un error!
                  </Alert>
                </div>
              )}
              {process.finish && (
                <div style={style.utils.errorMessage}>
                  <Alert severity="success" sx={{ justifyContent: "center" }}>
                    Se Modifico con exito tu perfil
                  </Alert>
                </div>
              )}
            </form>
          </Card>
        </Grid>
      </Grid>
    </LoggedLayout>
  );
};

export default Profile;
