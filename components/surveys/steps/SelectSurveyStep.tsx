import { FC, useEffect, useState } from "react";

import { Card, CardContent, Grid } from "@mui/material";
import { pagesStyles } from "@styles/index";
import { useAppCtx } from "../../../src/contexts/store";
import PanelHeader from "../dateTable/PanelHeader";
import DataTable from '../../common/form/DateTable/DataTable'
import axios from "axios";
import currentDay from "../../../src/utils/currentDate";
import { surveyType } from "../../../src/types/global";


const SelectSurveyStep = () => {

  const { modeTheme, user, setModalLogin, comedorSeleccionado } = useAppCtx();
  const { surveyStyles: { dataTable } } = pagesStyles(modeTheme);
  
  const [encuestasAdeudadas, setEncuestasAdeudadas] = useState<Array<surveyType>>([])

  useEffect(() => {

    const id = comedorSeleccionado?.id

    axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}encuesta/incompletas/${id}/${currentDay('YYYY-MM-DD')}`,
      { headers: { Authorization: `Bearer ${user.access_token}` } })
      .then(res => {
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
  }, [user.access_token])


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
