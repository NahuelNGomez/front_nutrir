import { Card, CardContent, Grid, TextField } from "@mui/material"
import { FC, useState } from "react"
import { guestType } from "../../../src/types/global"

type Props = {
  guestsStep: {}
  setGuestStep: any
}


const GuestsPanel: FC<Props> = ({ guestsStep, setGuestStep }) => {

  const [guests, setGuests] = useState<guestType>()

  const handleChange = (e: any) => {
    e.preventDefault()
    setGuestStep({
      ...guestsStep,
      [e.target.name]: e.target.value
    })
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
    </div>
  )
}

export default GuestsPanel