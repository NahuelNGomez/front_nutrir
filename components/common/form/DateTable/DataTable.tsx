import { Button, CircularProgress, Grid } from '@mui/material';
import moment from 'moment';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import { FC, useEffect, useState } from 'react';
import SurveyAnswerBtn from './SurveyAnswerBtn';
import { useAppCtx } from '../../../../src/contexts/store';
import { pagesStyles } from '@styles/index';
import { surveyType } from '../../../../src/types/global';

const currentDate = new Date()

const rows2 = [
  { id: 1, date: moment(currentDate).format('L'), meal: 'Desayuno' },
  { id: 2, date: moment(currentDate).format('L'), meal: 'Almuerzo' },
  { id: 3, date: moment(currentDate).format('L'), meal: 'Merienda' },
  { id: 4, date: moment(currentDate).format('L'), meal: 'Cena' },
  { id: 5, date: moment(currentDate).format('L'), meal: 'Olla Popular' },
  { id: 6, date: moment(currentDate).format('L'), meal: 'Desayuno' },
  { id: 7, date: moment(currentDate).format('L'), meal: 'Desayuno' },
  { id: 8, date: moment(currentDate).format('L'), meal: 'Desayuno' },
  { id: 9, date: moment(currentDate).format('L'), meal: 'Desayuno' },
  { id: 10, date: moment(currentDate).format('L'), meal: 'Desayuno' },
];



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

interface Props {
  // columns?: Array<{}>,
  // rows?: Array<{}>,
  // handleGoToNextStep?: () => void,
  // handleGoToPreviousStep?: () => void,
  // setDateStep: () => {},
  encuestasAdeudadas: Array<surveyType>,
  // suerveyInfo: {},
  // setSurveyInfo: () => {},
}



const DataTable: FC<Props> = ({
  // handleGoToNextStep,
  encuestasAdeudadas,
  // handleGoToPreviousStep,
  // setDateStep,
  // suerveyInfo,
  // setSurveyInfo
}) => {

  const columns: GridColDef[] = [
    { field: 'date', headerName: 'Día' },
    { field: 'meal', headerName: 'Falta responder', minWidth: 100, flex: 1 },
    {
      field: 'actions',
      headerName: 'Acciones',
      renderCell: (params) => {
        return (
          <Grid
            container
            spacing={2}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Grid item xs={5} >
              <SubmitBtn
                columData={params}
                type={'uncomplete'}
                text="No se sirvió"
              />
            </Grid>
            <Grid item xs={5}>
              <SubmitBtn
                columData={params}
                type={'complete'}
                text="Responder"
              />
            </Grid>
          </Grid>
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
              // rows={row(encuestasAdeudadas)}
              rows={rows2}
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
