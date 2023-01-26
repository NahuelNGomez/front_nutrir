import { Divider, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import LoggedLayout from "@components/layouts/LoggedLayout";
export { getServerSideProps } from "../src/serverSideProps"
import { pagesStyles } from "@styles/index";
import { useAppCtx } from "../src/contexts/store";
import SelectSurveyStep from "../components/surveys/steps/SelectSurveyStep";
import StepsLayout from "../components/surveys/steps/StepsLayout";


const DailySurvers: NextPage = () => {
  const { modeTheme, selectedSurvey } = useAppCtx();
  const { surveyStyles } = pagesStyles(modeTheme);

  return (
    <LoggedLayout>
      <Grid
        container
        flexDirection={"row"}
        justifyContent={"space-around"}
        sx={surveyStyles.container}
      >
        <Grid
          item
          xs={12}
          lg={12}
        >
          <Typography sx={surveyStyles.title}>
            COMPLETAR ENCUESTAS
          </Typography>
          <Divider />
        </Grid>


        {
          selectedSurvey?.service
            ? (
              <StepsLayout />
            )
            : (
              <SelectSurveyStep />
            )
        }

      </Grid>
    </LoggedLayout>
  );
};

export default DailySurvers;
