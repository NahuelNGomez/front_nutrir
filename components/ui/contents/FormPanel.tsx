
import { Button, Grid, Typography } from '@mui/material'
import React, { FC, ReactNode } from 'react'

type Props = {
  title: string,
  subtitle?: string
  children: ReactNode,
  childContent?: any,
  backClickHandler: (e: any) => void,
  fowardClickHandler: (e: any) => void,
}

const FormPanel: FC<Props> = ({ title, subtitle, children, childContent, backClickHandler, fowardClickHandler }) => {
  return (
    <>
      <Grid
        container
        justifyContent={'center'}

      >
        <Grid item xs={10} sx={{ mt: 3 }}>
          <Typography sx={{ fontSize: '1rem' }}>{title}</Typography>
        </Grid>
        <Grid item xs={10} sx={{ mt: 1 }}>
          <Typography>{subtitle}</Typography>
        </Grid>

        <Grid
          container
          xs={10}
          sx={{ height: '400px', mt: 3}}
          justifyContent={'flex-end'}
        >
          <Grid
            item xs={12} >
            {children}
          </Grid>
        </Grid>

        <Grid
          container xs={10}
          justifyContent={"space-between"}
          sx={{ pt: 2 }}
        >
          <Button
            onClick={backClickHandler}
            sx={{
              width: { xs: "100%", sm: "90%", lg: "80%", xl: "20%" },
              borderRadius: "18px",
              textTransform: "none",
              padding: "10px",
              fontSize: "14px",
              backgroundColor: 'transparent',
              border: '1px solid #40a39b',
              color: "#40a39b",
            }}
          >
            Volver
          </Button>
          <Button
            onClick={fowardClickHandler}
            sx={{
              width: { xs: "100%", sm: "90%", lg: "80%", xl: "20%" },
              borderRadius: "18px",
              textTransform: "none",
              padding: "10px 0",
              fontSize: "14px",
              backgroundColor: 'transparent',
              border: '1px solid #40a39b',
              color: "#40a39b",
            }}
          >
            Siguiente
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default FormPanel