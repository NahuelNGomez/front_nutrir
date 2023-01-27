import { FC, useEffect, useState } from "react";

import { Card, CardContent, Grid } from "@mui/material";
import { pagesStyles } from "@styles/index";
import { useAppCtx } from "../../../src/contexts/store";
import PanelHeader from "../dateTable/PanelHeader";
import DataTable from '../../common/form/DateTable/DataTable'
import axios from "axios";
import currentDay from "../../../src/utils/currentDate";


const SelectSurveyStep = () => {

  const { modeTheme, user, setModalLogin, comedorSeleccionado, setEncuestasAdeudadas, encuestasAdeudadas, todaySurveySelected, setTodaySurveySelected } = useAppCtx();
  const { surveyStyles: { dataTable } } = pagesStyles(modeTheme);


  useEffect(() => {
    const id = comedorSeleccionado?.id
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
    const url = `${baseUrl}encuesta/incompletas/${id}/${currentDay('YYYY-MM-DD')}`
    const headers = { headers: { Authorization: `Bearer ${user.access_token}` } }
   

    if (!todaySurveySelected) {

      axios.get(url, headers)
        .then(res => {
          if (res.status === 400) {
            alert('Sin conexión al server')
          }
          if (res.status === 401) {
            setModalLogin(true)
          } else {
            const data = res.data.encuestas
            // console.log('respuesta date', data);
            setEncuestasAdeudadas([...data])
          }
        })
        .catch(err => {
          // console.log('err', err.response)
          if (err.response.status === 401) {
            setModalLogin(true)
          }
        })

    }
    return () => {
      setTodaySurveySelected(false)
    }
    
  }, [encuestasAdeudadas, user, todaySurveySelected])



  return (

    <Grid
      container
      item
      xs={12}
      lg={11}
      flexDirection={"row"}
      justifyContent={"center"}
      sx={dataTable.container}
    >
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <PanelHeader />
            <DataTable
              encuestasAdeudadas={encuestasAdeudadas}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>




  );
};

export default SelectSurveyStep;
