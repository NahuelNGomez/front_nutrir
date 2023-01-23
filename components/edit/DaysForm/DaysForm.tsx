import { Button, Card, CardContent, CircularProgress, Grid, Typography } from "@mui/material"
import { pagesStyles } from "@styles/index";
import { useAppCtx } from "../../../src/contexts/store";
import DayAccordion from "../DayAccordion/DayAccordion";
import { FC } from "react";
import { serviciosDiaType, serviciosType } from "../../../src/types/global";
import serviciosMock from "./mock/serviciosMock";
import { daysName } from "./constants/constants";


interface Props {
  serviciosData: Array<serviciosDiaType>
}

const DaysForm: FC<Props> = ({ serviciosData }) => {

  const { modeTheme } = useAppCtx();

  const {
    editStyles: { daysForm },
  } = pagesStyles(modeTheme);

  return (
    <>
      {
        serviciosData.length
          ? (
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
                // onClick={() => router.push("/days")}
                >
                  Guardar cambios
                </Button>
              </Grid>
            </Card>
          )
          : <CircularProgress />
      }
    </>
  )
}

export default DaysForm