import { Avatar, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import Header from "../components/navigation/Header";
import Poll from "../components/utils/poll";
import { styles } from "../styles/pages/index";

export {getServerSideProps} from "../src/contexts/store";

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
        <Avatar src="/logo-nutrir.png" sx={{width:150,height:150}} />
        <Typography variant={"h4"} >
          Nutrir App
        </Typography>

        <Poll />
        
      </Grid>
    </div>
  );

};

export default Home;
