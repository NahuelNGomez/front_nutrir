import { Divider, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import LoggedLayout from "@components/layouts/LoggedLayout";
import DashboardNewsCards from "@components/ui/contents/DashboardNewsCards";
export { getServerSideProps } from "../src/serverSideProps";
import { pagesStyles } from "@styles/index";
import { useAppCtx } from "../src/contexts/store";
import { useEffect } from "react";
import axios from "axios";

const Home: NextPage = () => {
  const { modeTheme, user, setModalLogin, setComedoresDisponibles, comedoresDisponibles, setModalOpen } = useAppCtx();
  const { dashboardStyles } = pagesStyles(modeTheme);  

  useEffect(() => {
    axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}comedor/responsable/`,
      { headers: { Authorization: `Bearer ${user.access_token}` } })
      .then(res => {
        console.log('comedores', res.data);
        setComedoresDisponibles(res.data)
        if (res.status === 401) {
          setModalLogin(true)
        }
      })
      .catch(err => {
        // console.log('err', err.response)
        if (err.response.status === 401) {
          setModalLogin(true)
        }
      })
  }, [])

  useEffect(() => {
    if(comedoresDisponibles?.length > 0){
      setModalOpen(true)
    }
  }, [comedoresDisponibles])
  

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
