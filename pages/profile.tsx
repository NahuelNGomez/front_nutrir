import LoggedLayout from "@components/layouts/LoggedLayout";
import { Card, Divider, Grid, Typography } from "@mui/material";
import { pagesStyles } from "@styles/index";
import { NextPage } from "next";
import { useAppCtx } from "../src/contexts/store";
export { getServerSideProps } from "../src/serverSideProps";
import InfoCard from "../components/profile/InfoCard";
import MerenderoCards from "../components/profile/MerenderoCards";
import Form from "../components/profile/Form";

const Profile: NextPage = () => {
  const { modeTheme } = useAppCtx();

  const { profileStyles } = pagesStyles(modeTheme);

  return (
    <LoggedLayout>
      <Grid
        container
        spacing={6}
        flexDirection={"row"}
        justifyContent={"space-around"}
        sx={profileStyles.container}
      >
        <Grid item xs={12} lg={12}>
          <Typography variant={"h6"} sx={profileStyles.title}>
            Perfil de Usuario
          </Typography>
          <Divider />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Card>
            <Grid container>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                sx={profileStyles.firstContainer}
              >
                <InfoCard />
                <MerenderoCards />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                sx={profileStyles.secondContainer}
              >
                <Form />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </LoggedLayout>
  );
};

export default Profile;
