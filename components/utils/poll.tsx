import {
  Alert,
  Box,
  Card,
  CardContent,
  Slide,
  Typography,
  Button,
  CardActions,
  Skeleton,
  Stack,
} from "@mui/material";
import { styles } from "@styles/components/utils";
import React, { useEffect, useState } from "react";

export default function Poll() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 2000);
  }, []);

  return (
    <div style={styles.poll.container}>
      {ready ? 
      <Slide direction="up" in={ready} mountOnEnter unmountOnExit>
        <Card
          sx={styles.fullWidth}
        >
          <CardContent sx={styles.poll.content}>
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
            <Stack sx={styles.fullWidth} spacing={2}>
              <Alert severity="error">
                Falta responder: <strong>Almuerzo!</strong>
              </Alert>
            </Stack>
          </CardContent>
          <CardActions>
            <Button size="small">Iniciar Encuesta</Button>
          </CardActions>
        </Card>
        </Slide>
       : 
        <Box sx={styles.poll.skeleton}>
            <Skeleton variant={"text"} animation={"wave"} sx={{fontSize:"16px",width:"40%"}}/>
            <Skeleton variant={"text"} animation={"wave"} sx={{fontSize:"12px",width:"30%"}}/>
            <Skeleton variant={"rectangular"} animation={"wave"} height="40%" width="95%"/>
            <Skeleton variant={"text"} animation={"wave"} sx={{fontSize:"12px",width:"20%"}}/>
        </Box>
      }
    </div>
  );
}
