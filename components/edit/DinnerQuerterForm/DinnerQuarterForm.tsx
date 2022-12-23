import { useRouter } from "next/router";
import { Alert, Button, Card, CardActions, CardContent, CircularProgress, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import useForm from '../../../src/hooks/useForm';
import { merenderoFields } from '../../../src/types/forms';
import { statesForms } from '../../../src/constants/states';
import { useAppCtx } from "../../../src/contexts/store";
import { pagesStyles } from "@styles/index";
import { useEffect } from "react";

const DinnerQuarterForm = () => {


  const { modeTheme, user } = useAppCtx();
  const router = useRouter();

  const {
    fields,
    errors,
    processing,
    updateField,
    submit,
    finishProcess,
    defaultValues
  } = useForm<merenderoFields>(statesForms.merendero);

  const {
    editStyles: { comedorForm },
  } = pagesStyles(modeTheme);

  useEffect(() => {

    // const credentials = {
    //   username: '20276253418',
    //   password: 'Geneos2022'
    // }

    // fetch(`http://50.116.44.91:3600/comedor/${user.comedorActivo}`, {
    //   headers: {
    //     method: 'GET',
    //     'Content-Type': 'application/json',
    //     'csrftoken': 'U1oq4EBiU0cQ2goH8INf0Bl0RrRzyNHd',
    //     'sessionid': 'ztcab68lnmf2mh1epakxthoey95wqbd1',
    //     'refresh_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MTQ3ODAxNCwiaWF0IjoxNjcxNDc2MjE0LCJqdGkiOiI5OWM1NTc1YmU2ZmQ0YTliYjljYjcxMGQwYmUxMDcyNiIsInVzZXJfaWQiOjF9.tWShk1grPR4VXeHV_9nVysvUB-AfsafeM8lHjiVWWro'
    //   },
    // })
    //   .then(res => res.json())
    //   .then(json => {
    //     console.log(json);
    //   })
    //   .catch(err => {
    //     console.log(err);

    //   })
    defaultValues({
      name: 'Centro Cultural El Cole',
      street: 'Paraguay',
      number: 1031,
      between_street1: 'NSNC',
      between_street2: 'NSNC',
      province: 'Buenos Aires'
    })
  }, [])


  return (
    <Card>
      {processing.loading && <LinearProgress color="primary" />}
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

            {/* Number */}
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

            {/*Between 1  */}
            <Grid
              item
              xs={12}
              sm={12}
              lg={12}
              xl={12}
              sx={comedorForm.form.fields}
            >
              <TextField
                error={errors.between_street1}
                fullWidth
                id="input-with-sx"
                label="Entre Calle 1"
                variant="outlined"
                type="text"
                name="between_street1"
                margin="normal"
                value={fields.between_street1}
                sx={comedorForm.utils.textInput}
                onChange={updateField}
              />
            </Grid>

            {/*Between 2  */}
            {/* <Grid
              item
              xs={12}
              sm={12}
              lg={12}
              xl={12}
              sx={comedorForm.form.fields}
            >
              <TextField
                error={errors.between_street2}
                fullWidth
                id="input-with-sx"
                label="Entre Calle 2"
                variant="outlined"
                type="text"
                name="between_street2"
                margin="normal"
                value={fields.between_street2}
                sx={comedorForm.utils.textInput}
                onChange={updateField}
              />
            </Grid> */}
            
            {/* Province */}
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
            disabled={processing.loading}
            type="submit"
            variant="contained"
            sx={comedorForm.utils.submitButton}
            color={processing.loading ? "inherit" : "primary"}
          >
            Actualizar{" "}
            {processing.loading && (
              <CircularProgress
                size={20}
                sx={comedorForm.utils.circularProgress}
                color="inherit"
              />
            )}
          </Button>
        </CardActions>
        {!processing.validate && (
          <div style={comedorForm.utils.errorMessage}>
            <Alert severity="error" sx={comedorForm.utils.AlertMessage}>
              Hubo un error!
            </Alert>
          </div>
        )}
        {processing.finish && (
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