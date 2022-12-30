import { FC, useEffect, useState } from "react";

import { Button, Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import LoggedLayout from "@components/layouts/LoggedLayout";
// export { getServerSideProps } from "../../src/serverSideProps"
import { pagesStyles } from "@styles/index";
import { useAppCtx } from "../../../src/contexts/store";
import SurveysAvailable from "@components/ui/contents/SurveysAvailable";
// import { dishesList } from "../../src/contents/dishesList";
import { Box } from "@mui/system";
import PanelHeader from "../../surveys/dateTable/PanelHeader";
import DataTable from '../../common/form/DateTable/DataTable'
import axios from "axios";
import currentDay from "../../../src/utils/currentDate";
import { surveyType } from "../../../src/types/global";

type Props = {
  handleGoToNextStep: () => {}
  handleGoToPreviousStep: () => {}
  setDateStep: () => {}
  suerveyInfo: {},
  setSurveyInfo: () => {},
}

const SurveyPanel: FC<Props> = ({
  handleGoToNextStep,
  handleGoToPreviousStep,
  setDateStep,
  suerveyInfo,
  setSurveyInfo,
}) => {

  const { modeTheme, user, setModalLogin } = useAppCtx();
  const { surveyStyles: { dataTable } } = pagesStyles(modeTheme);
  const [encuestasAdeudadas, setEncuestasAdeudadas] = useState<Array<surveyType>>([])

  useEffect(() => {
    axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}encuesta/incompletas/1/${currentDay('YYYY-MM-DD')}`,
      { headers: { Authorization: `Bearer ${user.access_token}` } })
      .then(res => {
        if (res.status === 401) {
          setModalLogin(true)
        } else {
          const data = res.data.encuestas
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
      xs={11}
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
              handleGoToNextStep={handleGoToNextStep}
              handleGoToPreviousStep={handleGoToPreviousStep}
              setDateStep={setDateStep}
              suerveyInfo={suerveyInfo}
              setSurveyInfo={setSurveyInfo}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>




  );
};

export default SurveyPanel;
