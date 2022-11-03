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
import { pagesStyles } from "@styles/index";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { statesForms } from "../src/constants/states";
import { useAppCtx } from "../src/contexts/store";
import useForm from "../src/hooks/useForm";
import { merenderoFields } from "../src/types/forms";
export { getServerSideProps } from "../src/serverSideProps";

const Edit: NextPage = () => {
  const { modeTheme } = useAppCtx();
  const router = useRouter();

  const {
    fields,
    errors,
    process,
    updateField,
    submit,
    finishProcess,
  } = useForm<merenderoFields>(statesForms.merendero);

  const {editStyles} = pagesStyles(modeTheme);

  return (
    <LoggedLayout>
      <Grid
        container
        spacing={6}
        flexDirection={"row"}
        justifyContent={"space-around"}
        sx={editStyles.container}
      >
        <Grid item xs={12} lg={12}>
          <Typography variant={"h6"} sx={editStyles.title}>
            Modificar Comedor
          </Typography>
          <Divider />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={editStyles.daysContainerButton}
        >
          <Button
            sx={editStyles.utils.daysButton}
            onClick={() => router.push("/days")}
          >
            Modificar Horarios
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={8} xl={6}>
          <Card>
            {process.loading && <LinearProgress color="primary" />}
            <form
              onSubmit={(e) =>
                submit(e, "/api/merendero").then(() => {
                  console.log("it works!");
                  finishProcess();
                })
              }
            >
              <CardContent>
                <Typography
                  sx={editStyles.form.title}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Editar Comedor
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
                    sx={editStyles.form.fields}
                  >
                    <TextField
                      error={errors.name}
                      fullWidth
                      id="input-with-sx"
                      label="Comedor"
                      variant="outlined"
                      type="text"
                      name="name"
                      margin="normal"
                      value={fields.name}
                      sx={editStyles.utils.textInput}
                      helperText={
                        errors.name
                          ? "Debes ingresar el nombre del comedor"
                          : ""
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
                    sx={editStyles.form.fields}
                  >
                    <TextField
                      error={errors.street}
                      fullWidth
                      id="input-with-sx"
                      label="Calle"
                      variant="outlined"
                      type="text"
                      name="street"
                      margin="normal"
                      value={fields.street}
                      sx={editStyles.utils.textInput}
                      helperText={
                        errors.street ? "Debes ingresar una calle" : ""
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
                    sx={editStyles.form.fields}
                  >
                    <TextField
                      error={errors.number}
                      fullWidth
                      id="input-with-sx"
                      label="Numero"
                      variant="outlined"
                      type="number"
                      name="number"
                      margin="normal"
                      value={fields.number}
                      sx={editStyles.utils.textInput}
                      helperText={
                        errors.number ? "Debes ingresar una altura" : ""
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
                    sx={editStyles.form.fields}
                  >
                    <TextField
                      error={errors.between_streets}
                      fullWidth
                      id="input-with-sx"
                      label="Entre Calles"
                      variant="outlined"
                      type="text"
                      name="between_streets"
                      margin="normal"
                      value={fields.between_streets}
                      sx={editStyles.utils.textInput}
                      onChange={updateField}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={6}
                    xl={6}
                    sx={editStyles.form.fields}
                  >
                    <TextField
                      error={errors.province}
                      fullWidth
                      id="input-with-sx"
                      label="Provincia"
                      variant="outlined"
                      type="text"
                      name="province"
                      margin="normal"
                      value={fields.province}
                      sx={editStyles.utils.textInput}
                      helperText={
                        errors.province ? "Debes ingresar una province" : ""
                      }
                      onChange={updateField}
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions
                sx={editStyles.actions.container}
              >
                <Button
                  disabled={process.loading}
                  type="submit"
                  variant="contained"
                  sx={editStyles.utils.submitButton}
                  color={process.loading ? "inherit" : "primary"}
                >
                  Actualizar{" "}
                  {process.loading && (
                    <CircularProgress
                      size={20}
                      sx={editStyles.utils.circularProgress}
                      color="inherit"
                    />
                  )}
                </Button>
              </CardActions>
              {!process.validate && (
                <div style={editStyles.utils.errorMessage}>
                  <Alert severity="error" sx={editStyles.utils.AlertMessage}>
                    Hubo un error!
                  </Alert>
                </div>
              )}
              {process.finish && (
                <div style={editStyles.utils.errorMessage}>
                  <Alert severity="success" sx={editStyles.utils.AlertMessage}>
                    Se Modifico con exito el comedor
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

export default Edit;
