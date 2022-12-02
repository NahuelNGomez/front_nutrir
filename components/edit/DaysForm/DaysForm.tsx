import { Button, Card, CardContent, Grid, Typography } from "@mui/material"
import { pagesStyles } from "@styles/index";
import { useAppCtx } from "../../../src/contexts/store";
import DayAccordion from "../DayAccordion/DayAccordion";

const daysName = [
  {
    name: 'Lunes'
  },
  {
    name: 'Martes'
  },
  {
    name: 'Miércoles'
  },
  {
    name: 'Jueves'
  },
  {
    name: 'Viernes'
  },
  {
    name: 'Sábado'
  },
  {
    name: 'Domingo'
  },
]

const DaysForm = () => {

  const { modeTheme } = useAppCtx();

  const {
    editStyles: { daysForm },
  } = pagesStyles(modeTheme);

  return (
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
            daysName.map(({ name }, index) => {
              return (
                <Grid item key={`key_${name}`} xs={12}>
                  <DayAccordion dayName={name} index={index} />
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
}

export default DaysForm