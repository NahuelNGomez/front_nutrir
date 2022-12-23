import { Divider, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import LoggedLayout from "@components/layouts/LoggedLayout";
import DashboardNewsCards from "@components/ui/contents/DashboardNewsCards";
export { getServerSideProps } from "../src/serverSideProps";
import { pagesStyles } from "@styles/index";
import { useAppCtx } from "../src/contexts/store";
import { useEffect } from "react";

const Home: NextPage = () => {
  const { modeTheme, user } = useAppCtx();
  const { dashboardStyles } = pagesStyles(modeTheme);

  useEffect(() => {
  console.log(user);
  });
  return (
    <LoggedLayout>
      <Grid
        container
        spacing={6}
        flexDirection={"row"}
        justifyContent={"space-around"}
        sx={dashboardStyles.container}
      >
        <Grid item xs={12} lg={12}>
          <Typography variant={"h6"} sx={dashboardStyles.title}>
            NOVEDADES
          </Typography>
          <Divider />
        </Grid>
        <DashboardNewsCards />
      </Grid>
    </LoggedLayout>
  );
};

export default Home;
