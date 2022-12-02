import { Button, Grid } from '@mui/material';
import moment from 'moment';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import { FC, useEffect, useState } from 'react';
import SurveyAnswerBtn from './SurveyAnswerBtn';
import { useAppCtx } from '../../../../src/contexts/store';
import { pagesStyles } from '@styles/index';


interface Props {
  columns?: Array<{}>,
  rows?: Array<{}>
  handleGoToNextStep?: () => {}
  handleGoToPreviousStep?: () => {}
  setDateStep: ()=>{}
}

const DataTable: FC<Props> = ({ handleGoToNextStep, handleGoToPreviousStep, setDateStep }) => {

  const currentDate = new Date()

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
          />
        )
      },
      width: 300
    },
  ];

  const rows = [
    { id: 1, date: moment(currentDate).format('L'), meal: 'Snow' },
    { id: 2, date: moment(currentDate).format('L'), meal: 'Lannister' },
    { id: 3, date: moment(currentDate).format('L'), meal: 'Lannister' },
    { id: 4, date: moment(currentDate).format('L'), meal: 'Stark' },
    { id: 5, date: moment(currentDate).format('L'), meal: 'Targaryen' },
    { id: 6, date: moment(currentDate).format('L'), meal: 'Melisandre' },
    { id: 7, date: moment(currentDate).format('L'), meal: 'Clifford' },
    { id: 8, date: moment(currentDate).format('L'), meal: 'Frances' },
    { id: 9, date: moment(currentDate).format('L'), meal: 'Roxie' },
  ];


  const handleFunctions = {
    handleGoToNextStep,
    handleGoToPreviousStep
  }

  return (
    <Grid
      item
      xs={12}
      sx={{ height: 400 }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      // checkboxSelection
      />
    </Grid>
  );
}

export default DataTable;
