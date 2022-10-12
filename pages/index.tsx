import { Avatar, Breadcrumbs, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import Header from "../components/navigation/Header";
import Poll from "../components/utils/poll";
import { styles } from "../styles/pages/index";

export { getServerSideProps } from "../src/contexts/store";

const Home: NextPage = () => {
  return (
    <div>
      <Header />

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={styles.container}
      >
       
        <Poll />
      </Grid>
    </div>
  );
};

export default Home;
