import {
  Card,
  CardActions,
  Collapse,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  Typography,
} from "@mui/material";
import React, { FC, useState } from "react";
import { useAppCtx } from "../../../src/contexts/store";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import colors from "@styles/colors";

type props = {
  day: string;
};

const DayTime: FC<props> = ({ day }) => {
  const { modeTheme } = useAppCtx();
  const [collapse, setCollapse] = useState(true);

  return (
    <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
      <Card>
        <Grid
          sx={{
            width: "100%",
            height: "90px",
            backgroundColor: modeTheme == "light" ? "#013A6B" : "#121212",
            backgroundImage:
              modeTheme == "light"
                ? "-webkit-linear-gradient(71deg, #7ec8c7 50%, #6fc2c1 50%)"
                : "-webkit-linear-gradient(73deg, #121212 50%, rgba(255, 255, 255, 0.09) 50%)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            pl: 2,
          }}
        >
          <CalendarMonthOutlinedIcon
          
            sx={{
              fontSize: "50px",
              color: modeTheme === "light" ? "white" : "",
            }}
          />
          <Typography
            sx={{
              fontSize: "20px",
              color: modeTheme === "light" ? "white" : "",
              fontWeight: "500",
              pl:2
            }}
          >
            {day}
          </Typography>
        </Grid>
       
        <Collapse in={collapse} timeout="auto" unmountOnExit>
          <CardActions sx={{ p: 2 }}>
            <Grid container wrap="wrap">
              <Grid item xs={12} md={6} lg={6} xl={6}>
                <FormGroup>
                  <FormControlLabel control={<Switch />} label="Desayuno" />
                </FormGroup>
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6}>
                <FormGroup>
                  <FormControlLabel control={<Switch />} label="Almuerzo" />
                </FormGroup>
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6}>
                <FormGroup>
                  <FormControlLabel control={<Switch />} label="Merienda" />
                </FormGroup>
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6}>
                <FormGroup>
                  <FormControlLabel control={<Switch />} label="Cena" />
                </FormGroup>
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6}>
                <FormGroup>
                  <FormControlLabel control={<Switch />} label="Olla Popular" />
                </FormGroup>
              </Grid>
            </Grid>
          </CardActions>
        </Collapse>
      </Card>
    </Grid>
  );
};

export default DayTime;
