
import { Button, Grid, Typography } from '@mui/material'
import { pagesStyles } from '@styles/index'
import React, { FC, ReactNode } from 'react'
import { useAppCtx } from '../../../src/contexts/store'

type Props = {
  title: string,
  subtitle?: string
  children: ReactNode,
  // childContent?: any,
  // backClickHandler: (e: any) => void,
  // fowardClickHandler: (e: any) => void,
}

const FormPanel: FC<Props> = ({ title, subtitle, children }) => {

  const { modeTheme } = useAppCtx();
  const { surveyStyles: { formPanel } } = pagesStyles(modeTheme);

  return (
    <>
      <Grid
        container
        justifyContent={'center'}

      >
        <Grid item xs={10} >
          <Typography sx={formPanel.title}>{title}</Typography>
        </Grid>
        <Grid item xs={10} sx={formPanel.subtitle}>
          <Typography>{subtitle}</Typography>
        </Grid>

        <Grid
          container
          xs={10}
          sx={{ height: '400px', mt: 2 }}
          justifyContent={'flex-end'}
        >
          <Grid
            item xs={12} >
            {children}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default FormPanel