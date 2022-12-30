import { Button, CircularProgress, Grid } from '@mui/material';
import moment from 'moment';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import { FC, useEffect, useState } from 'react';
import SurveyAnswerBtn from './SurveyAnswerBtn';
import { useAppCtx } from '../../../../src/contexts/store';
import { pagesStyles } from '@styles/index';
import { surveyType } from '../../../../src/types/global';


interface Props {
  columns?: Array<{}>,
  rows?: Array<{}>,
  handleGoToNextStep?: () => {},
  handleGoToPreviousStep?: () => {},
  setDateStep: () => {},
  encuestasAdeudadas: Array<surveyType>,
  suerveyInfo: {},
  setSurveyInfo: () => {},
}

const row = (encuestas: Array<{ comedor: number, fecha: string, funcionamiento: string }>) => {
  const servicioFormatter = (servicio: string) => {
    if (servicio) {
      const servicioFomatted = servicio.replace('_', ' ')
      return servicioFomatted
    }
  }

  const rows = encuestas?.map((e, index) => {
    return (
      {
        id: index + 1,
        date: moment(e.fecha).format('DD MM YYYY').replaceAll(' ', '/'),
        meal: servicioFormatter(e.funcionamiento),
        data: e
      }
    )
  })
  return rows
}


const DataTable: FC<Props> = ({
  handleGoToNextStep,
  handleGoToPreviousStep,
  setDateStep,
  encuestasAdeudadas,
  suerveyInfo,
  setSurveyInfo
}) => {

  const columns: GridColDef[] = [
    { field: 'date', headerName: 'Día', width: 100 },
    { field: 'meal', headerName: 'Falta responder', width: 500 },
    {
      field: 'actions',
      headerName: 'Acciones',
      renderCell: (params) => {
        return (
          <SurveyAnswerBtn
            handleGoToNextStep={handleGoToNextStep}
            handleGoToPreviousStep={handleGoToPreviousStep}
            columnData={params}
            setDateStep={setDateStep}
            suerveyInfo={suerveyInfo}
            setSurveyInfo={setSurveyInfo}
          />
        )
      },
      width: 300
    },
  ];

  return (
    <Grid
      item
      xs={12}
      sx={{ height: 400 }}
    >
      {
        encuestasAdeudadas 
          ? (
            <DataGrid
              rows={row(encuestasAdeudadas)}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              sx={{ textTransform: 'capitalize' }}
            />
          )
          : (
            <CircularProgress
              size={20}
              // sx={loginStyles.utils.circularProgress}
              sx={{
                ml: "50%",
                mt: '15%',
              }}
              color="inherit"
            />
          )
      }
    </Grid>
  );
}

export default DataTable;
