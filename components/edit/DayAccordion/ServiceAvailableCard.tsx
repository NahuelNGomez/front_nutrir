import { FormControlLabel, FormGroup, Grid, Switch } from '@mui/material'
import React, { FC } from 'react'

type Props = {
  checked: boolean;
  name: string;
  keyInfo: string;
}

const ServiceAvailableCard: FC<Props> = ({ checked, name, keyInfo }) => {

  return (
    <Grid item xs={12} md={6} lg={4} xl={4}>
      <FormGroup>
        <FormControlLabel checked={checked} control={<Switch />} label={name} />
      </FormGroup>
    </Grid>
  )
}

export default ServiceAvailableCard