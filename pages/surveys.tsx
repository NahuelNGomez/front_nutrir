import { Button, Divider, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import LoggedLayout from "@components/layouts/LoggedLayout";
export { getServerSideProps } from "../src/serverSideProps";
import { pagesStyles } from "@styles/index";
import { useAppCtx } from "../src/contexts/store";
import SurveysAvailable from "@components/ui/contents/SurveysAvailable";
import { dishesList } from "../src/contents/dishesList";

const DailySurvers: NextPage = () => {
  const { modeTheme } = useAppCtx();
  const { surveyStyles } = pagesStyles(modeTheme);
  return (
    <LoggedLayout>
      <Grid
        container
        flexDirection={"row"}
        justifyContent={"space-around"}
        sx={surveyStyles.container}
      >
        <Grid item xs={12} lg={12}>
          <Typography variant={"h6"} sx={surveyStyles.title}>
            ¿Qué comida vas a cargar?
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2, mb: 2 }}>
          <Typography>15 de Nov. 2022</Typography>
        </Grid>
        <Grid
          container
          xs={12}
          sm={12}
          md={12}
          lg={9}
          xl={9}
          justifyContent={"space-around"}
        >
          <SurveysAvailable surveys={dishesList} />
        </Grid>
        <Grid container justifyContent={"center"} sx={{ pt: 4 }}>
          <Button
            sx={{
              width: {xs:"100%",sm:"90%",lg:"80%",xl:"30%"},
              borderRadius: "18px",
              textTransform: "none",
              padding: "10px",
              fontSize: "14px",
              color: "white",
            }}
          >
            Continuar con la encuesta
          </Button>
        </Grid>
      </Grid>
    </LoggedLayout>
  );
};

export default DailySurvers;
