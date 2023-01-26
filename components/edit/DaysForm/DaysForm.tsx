import { Button, Card, CardContent, CircularProgress, Grid, Typography } from "@mui/material"
import { pagesStyles } from "@styles/index";
import { useAppCtx } from "../../../src/contexts/store";
import DayAccordion from "../DayAccordion/DayAccordion";
import { FC } from "react";
import { serviciosDiaType, serviciosType } from "../../../src/types/global";
import serviciosMock from "./mock/serviciosMock";
import { daysName } from "./constants/constants";
import { Formik, FormikProps } from "formik";


interface Props {
  serviciosData: Array<serviciosDiaType>
}

const DaysForm: FC<Props> = ({ serviciosData }) => {

  const { modeTheme, comedorSeleccionado, user } = useAppCtx();

  console.log({ serviciosData });

  const {
    editStyles: { daysForm },
  } = pagesStyles(modeTheme);

  const handleSubmit = (values: { funcionamientos: Array<serviciosDiaType> }) => {

    const valuesFiltered = values.funcionamientos.filter((el: serviciosDiaType) => {
      return el.funcionamientos.length > 0
    })

    const data = {
      comedor: comedorSeleccionado.id,
      funcionamientos: valuesFiltered,
      token: user.access_token
    }

    const config = {
      method: "POST",
      body: JSON.stringify(data),
    }

    fetch('api/merendero/days', config)
      .then(res => {
        console.log('days panel, api response', res);
      })
      .catch(err => {
        console.log('days panel, api err', err);
      })

  }

  return (
    <>
      {
        serviciosData.length
          ? (

            <Formik
              initialValues={{
                funcionamientos: serviciosData
              }}
              onSubmit={(values) => handleSubmit(values)}
            // validationSchema={validationSchema}
            >
              {(props: FormikProps<any>) => {


                console.log('formik values', props.values);

                return (
                  <>
                    <form onSubmit={props.handleSubmit}>
                      <Card>
                        <CardContent>
                          <Typography
                            sx={daysForm.title}
                            gutterBottom
                            variant="h5"
                            component="div"
                          >
                            Modificar comidas semanales
                          </Typography>

                          <Grid container xs={12} sx={{ mt: '20px' }}>
                            {
                              daysName.map(({ name, key }, index) => {

                                const dayData = serviciosData.filter(e => e.dia === key)

                                return (
                                  <Grid item key={`key_${name}`} xs={12}>
                                    <DayAccordion
                                      formikProps={props}
                                      dayData={dayData}
                                      dayName={name}
                                      index={index}
                                    />
                                  </Grid>
                                )
                              })
                            }
                          </Grid>
                        </CardContent>
                        <Grid container xs={12} justifyContent={'center'}>
                          <Button
                            sx={daysForm.utils.daysButton}
                            type="submit"
                          // onClick={() => router.push("/days")}
                          >
                            Guardar cambios
                          </Button>
                        </Grid>
                      </Card>
                    </form>
                  </>
                )
              }
              }
            </Formik>
          )
          : <CircularProgress />
      }
    </>
  )
}

export default DaysForm