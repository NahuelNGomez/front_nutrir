import { DinnerDining } from "@mui/icons-material";
import {
  Alert,
  AlertTitle,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
  Button,
  CardActions,
  Skeleton,
} from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Poll() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 2000);
  }, []);

  return (
    <div style={{width:"100%",marginTop: "20px"}}>
      {ready ? 
        <Card
          sx={{
            width: "100%",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto", width: "100%" }}>
            <Typography component="div" variant="h5">
              Nombre del comedor
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              test 123, Ciudad Autónoma de Buenos Aires
            </Typography>
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert severity="error">
                <AlertTitle>Aviso</AlertTitle>
                Falta responder: <strong>Almuerzo!</strong>
              </Alert>
            </Stack>
          </CardContent>
          <CardActions>
            <Button size="small">Iniciar Encuesta</Button>
          </CardActions>
        </Card>
       : 
        <Box sx={{width:"100%",height:214,padding:"15px"}}>
            <Skeleton variant={"text"} animation={"wave"} sx={{fontSize:"16px",width:"40%"}}/>
            <Skeleton variant={"text"} animation={"wave"} sx={{fontSize:"12px",width:"30%"}}/>
            <Skeleton variant={"rectangular"} animation={"wave"} height="40%" width="95%"/>
            <Skeleton variant={"text"} animation={"wave"} sx={{fontSize:"12px",width:"20%"}}/>
        </Box>
      }
    </div>
  );
}
