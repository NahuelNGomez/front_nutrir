import { CircularProgress, Grid } from '@mui/material';
import moment from 'moment';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import { FC } from 'react';
import { surveyType } from '../../../../src/types/global';



const row = (encuestas: Array<{ comedor: number, fecha: string, funcionamiento: string }>) => {
  const servicioFormatter = (servicio: string) => {
    if (servicio) {
      const servicioFomatted = servicio.replace('_', ' ')
      return servicioFomatted
    }
  }

  const rows = encuestas?.map((e, index) => {

    moment.locale('es');

    return (
      {
        id: index + 1,
        date: e.fecha,
        // date: moment(e.fecha).format('DD MM YYYY').replaceAll('-', '/'),
        meal: servicioFormatter(e.funcionamiento),
        data: e
      }
    )
  })
  return rows
}

interface Props {
  encuestasAdeudadas: Array<surveyType>,
}

const DataTable: FC<Props> = ({encuestasAdeudadas}) => {

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
              rows={row(encuestasAdeudadas)}
              // rows={rows2}
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
