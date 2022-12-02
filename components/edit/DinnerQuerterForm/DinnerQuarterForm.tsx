import { useRouter } from "next/router";
import { Alert, Button, Card, CardActions, CardContent, CircularProgress, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import useForm from '../../../src/hooks/useForm';
import { merenderoFields } from '../../../src/types/forms';
import { statesForms } from '../../../src/constants/states';
import { useAppCtx } from "../../../src/contexts/store";
import { pagesStyles } from "@styles/index";

const DinnerQuarterForm = () => {

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

  // const { comedorForm: {editStyles}} = pagesStyles(modeTheme);

  const {
    editStyles: { comedorForm },
  } = pagesStyles(modeTheme);

  return (
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
            sx={comedorForm.title}
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
              lg={12}
              xl={12}
              sx={comedorForm.fields}
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
                sx={comedorForm.utils.textInput}
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
              lg={8}
              xl={8}
              sx={comedorForm.fields}
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
                sx={comedorForm.utils.textInput}
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
              lg={4}
              xl={4}
              sx={comedorForm.fields}
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
                sx={comedorForm.utils.textInput}
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
              lg={12}
              xl={12}
              sx={comedorForm.form.fields}
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
                sx={comedorForm.utils.textInput}
                onChange={updateField}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              lg={12}
              xl={12}
              sx={comedorForm.form.fields}
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
                sx={comedorForm.utils.textInput}
                helperText={
                  errors.province ? "Debes ingresar una province" : ""
                }
                onChange={updateField}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              lg={12}
              xl={12}
              sx={comedorForm.form.fields}
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
                sx={comedorForm.utils.textInput}
                helperText={
                  errors.province ? "Debes ingresar una province" : ""
                }
                onChange={updateField}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              lg={12}
              xl={12}
              sx={comedorForm.form.fields}
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
                sx={comedorForm.utils.textInput}
                helperText={
                  errors.province ? "Debes ingresar una province" : ""
                }
                onChange={updateField}
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions
          sx={comedorForm.actions.container}
        >
          <Button
            disabled={process.loading}
            type="submit"
            variant="contained"
            sx={comedorForm.utils.submitButton}
            color={process.loading ? "inherit" : "primary"}
          >
            Actualizar{" "}
            {process.loading && (
              <CircularProgress
                size={20}
                sx={comedorForm.utils.circularProgress}
                color="inherit"
              />
            )}
          </Button>
        </CardActions>
        {!process.validate && (
          <div style={comedorForm.utils.errorMessage}>
            <Alert severity="error" sx={comedorForm.utils.AlertMessage}>
              Hubo un error!
            </Alert>
          </div>
        )}
        {process.finish && (
          <div style={comedorForm.utils.errorMessage}>
            <Alert severity="success" sx={comedorForm.utils.AlertMessage}>
              Se Modifico con exito el comedor
            </Alert>
          </div>
        )}
      </form>
    </Card>
  )
}

export default DinnerQuarterForm