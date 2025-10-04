import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { caloriesLineChartDataFormatter } from '../../utils/chartDataProvider';
import { ChartDataFetchedType, ChartDataType, ChartsTypes, DataSetReturned } from '../../types';
import { useUserTokenAndComedorFetchDetail } from '../../hooks';
import { statsDataFetch } from '../../services';
import { useAppCtx } from '../../../../src/contexts/store';
import { fetchErrorHandler } from '../../../../src/dataFetch/fetchErrorHandler';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  title: string,
  fetchType: ChartsTypes
}

const StatLineLayout: FC<Props> = ({ title, fetchType }) => {

  const { setModalLogin } = useAppCtx()
  const [chartData, setChartData] = useState<ChartDataType>()
  const userTokenAndComedorDetails = useUserTokenAndComedorFetchDetail()

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
        text: '',
      },
      skipNull: true
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Kilocalorías (kcal)'
        }
      }
    }
  };

  useEffect(() => {
    const statsDataFetchConfig = {
      userTokenAndComedorDetails,
      fetchType
    }

    statsDataFetch(statsDataFetchConfig)
      .then(res => {
        const data = res.data
        if (data.lista.length > 0) {
          if (fetchType === ChartsTypes.CaloriasSemana || fetchType === ChartsTypes.CaloriasMes) {
            const dataFormatted = caloriesLineChartDataFormatter(data)
            setChartData(dataFormatted)
          }
        }
      })
      .catch(err => {
        fetchErrorHandler(err, setModalLogin)
      })
  }, [])


  return (
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
      <Card>
        <CardContent>
          <Grid
            container
            sx={{ p: 2 }}
            flexDirection={'row'}
          >

            <Grid
              item
              sx={{ mb: 1 }}
              xs={12}
            >
              <Typography variant="h4">{title}</Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{ mt: 2 }}
            >
              {
                chartData
                  ? (
                    <Line options={options} data={chartData} />
                  )
                  : (<p>No hay datos disponibles</p>)
              }
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>

  )
}

export default StatLineLayout
