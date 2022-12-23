import LoggedLayout from "@components/layouts/LoggedLayout";
import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Divider,
  Grid,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import { pagesStyles } from "@styles/index";
import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import DaysForm from "../components/edit/DaysForm/DaysForm";
import DinnerQuarterForm from "../components/edit/DinnerQuerterForm/DinnerQuarterForm";
import { statesForms } from "../src/constants/states";
import { useAppCtx } from "../src/contexts/store";
import useForm from "../src/hooks/useForm";
import { merenderoFields } from "../src/types/forms";
export { getServerSideProps } from "../src/serverSideProps";

const Edit: NextPage = () => {
  const { modeTheme } = useAppCtx();
  const router = useRouter();

  const {
    fields,
    errors,
    process,
    updateField,
    submit,
    finishProcess,
  } = useForm<merenderoFields>(statesForms.merendero);

  const { editStyles } = pagesStyles(modeTheme);

  useEffect(() => {
    // fetch('https://pokeapi.co/api/v2/ability/1')
    //   .then(json => {
    //     console.log(json);
    //   })
    // fetch('http://50.116.44.91:3600/comedor')
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err =>{
    //     console.log(err);
        
    //   })
    // axios('https://pokeapi.co/api/v2/ability/1')
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(err =>{
    //     console.log(err);
        
    //   })

    
  }, [])

  return (
    <LoggedLayout>
      <Grid
        container
        spacing={6}
        flexDirection={"row"}
        justifyContent={"space-around"}
        sx={editStyles.container}
      >
        <Grid item xs={12} lg={12}>
          <Typography variant={"h6"} sx={editStyles.title}>
            Modificar Comedor
          </Typography>
          <Divider />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mt: -2 }}>
          <Grid container spacing={2} >
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <DinnerQuarterForm />
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xl={6}
            >
              <DaysForm />
            </Grid>

          </Grid>
        </Grid>


      </Grid>
    </LoggedLayout>
  );
};

export default Edit;
