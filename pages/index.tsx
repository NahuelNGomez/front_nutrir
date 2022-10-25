import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import LoggedLayout from "@components/layouts/LoggedLayout";
import DashboardNewsCards from "@components/ui/contents/DashboardNewsCards";
export { getServerSideProps } from "../src/contexts/store";

const Home: NextPage = () => {
  return (
    <LoggedLayout>
      <Grid
        container
        spacing={6}
        flexDirection={"row"}
        justifyContent={"space-around"}
        sx={{ padding: "40px" }}
      >
        <Grid item xs={12} lg={12}>
          <Typography variant={"h6"} sx={{ paddingBottom: "15px" }}>
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
