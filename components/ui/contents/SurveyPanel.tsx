import { FC } from "react";

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

type Props = {
  handleGoToNextStep: () => {}
  handleGoToPreviousStep: () => {}
  setDateStep: () => {}
}


const SurveyPanel: FC<Props> = ({ handleGoToNextStep, handleGoToPreviousStep, setDateStep }) => {

  const { modeTheme } = useAppCtx();
  const { surveyStyles } = pagesStyles(modeTheme);

  return (

    <Grid
      container
      item
      xs={11}
      lg={11}
      flexDirection={"row"}
      justifyContent={"center"}
    >
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <PanelHeader />
            <DataTable
              handleGoToNextStep={handleGoToNextStep}
              handleGoToPreviousStep={handleGoToPreviousStep}
              setDateStep={setDateStep}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>




  );
};

export default SurveyPanel;
