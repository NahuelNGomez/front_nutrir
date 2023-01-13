import { Button, Card, CardContent, Grid, TextField } from "@mui/material"
import { FC, useState } from "react"
import { guestType } from "../../../src/types/global"
import { useAppCtx } from "../../../src/contexts/store"

type Props = {
  guestsStep?: {}
  setGuestStep?: any
  handleGoToNextStep: () => {}
  handleGoToPreviousStep: () => {}
}


const GuestsStep: FC<Props> = ({
  guestsStep,
  setGuestStep,
  handleGoToNextStep,
  handleGoToPreviousStep
}) => {

  const { setSelectedSurvey } = useAppCtx();
  const [ disableBtn, setDisableBtn ] = useState(true)

  const handleChange = (e: any) => {
    e.preventDefault()
    setDisableBtn(false)
    setGuestStep({
      ...guestsStep,
      [e.target.name]: parseInt(e.target.value) || 0
    })
  }

  const handleNextBtn = () => {
    handleGoToNextStep()
  }

  const handleBackBtn = () => {
    setSelectedSurvey({})
    handleGoToPreviousStep()
  }

  return (
    <div>
      <Card sx={{ pt: 3, pb: 2 }}>
        <CardContent >
          <Grid
            container
            sx={{
              gap: '1.5rem',
              borderRadius: '5px'
            }}
            boxShadow={'inherit'}
            alignItems='center'
            justifyContent={'center'}
          >
            <Grid item xs={11}>
              <TextField
                name='childs'
                id="outlined-number"
                label="Infantes de 0 a 5 años"
                type="number"
                fullWidth
                placeholder="Infantes de 0 a 5 años"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={11}>
              <TextField
                name='kids'
                id="outlined-number"
                label="Niñxs de 5 a 10 años"
                type="number"
                placeholder="Niñxs de 5 a 10 años"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={11}>
              <TextField
                name='teens'
                id="outlined-number"
                label="Adolescentes de 10 a 18 años"
                type="number"
                placeholder="Adolescentes de 10 a 18 años"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={11}>
              <TextField
                name='adults'
                id="outlined-number"
                label="Adultos más de 18 años"
                type="number"
                placeholder="Adultos más de 18 años"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
              />

            </Grid>
          </Grid>

        </CardContent>
      </Card>

      <Grid
        container xs={12}
        justifyContent={"space-between"}
        sx={{ pt: 0 }}
      >
        <Button
          onClick={handleBackBtn}
          sx={{
            width: { xs: "100%", sm: "90%", lg: "20%", xl: "20%" },
            borderRadius: "18px",
            textTransform: "none",
            padding: "10px",
            fontSize: "14px",
            backgroundColor: 'transparent',
            border: '1px solid #40a39b',
            color: "#40a39b",
            mt: 4
          }}
        >
          Volver
        </Button>
        <Button
          onClick={handleNextBtn}
          sx={{
            width: { xs: "100%", sm: "90%", lg: "20%", xl: "20%" },
            borderRadius: "18px",
            textTransform: "none",
            padding: "10px 0",
            fontSize: "14px",
            backgroundColor: 'transparent',
            border: '1px solid #40a39b',
            color: "#40a39b",
            mt: 4
          }}
          disabled={disableBtn}
        >
          Siguiente
        </Button>
      </Grid>

    </div>
  )
}

export default GuestsStep