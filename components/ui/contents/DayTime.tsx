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
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

type props = {
  day: string;
};

const DayTime: FC<props> = ({ day }) => {
  const { modeTheme } = useAppCtx();
  const [collapse, setCollapse] = useState(false);

  return (
    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
      <Card>
        <Grid
          sx={{
            width: "100%",
            height: "140px",
            backgroundColor: modeTheme == "light" ? "#013A6B" : "#121212",
            backgroundImage:
              modeTheme == "light"
                ? "-webkit-linear-gradient(71deg, white 50%, #e8e8e8 50%)"
                : "-webkit-linear-gradient(71deg, #121212 50%, rgba(255, 255, 255, 0.09) 50%)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            pl: 2,
          }}
        >
          <CalendarMonthIcon
            sx={{
              fontSize: "105px",
              color: modeTheme == "light" ? "gray" : "",
            }}
          />
          <Typography
            sx={{
              fontSize: "25px",
              color: modeTheme === "light" ? "gray" : "",
              fontWeight: "bold",
            }}
          >
            {day}
          </Typography>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1,
            mt: 1,
          }}
        >
          <Typography>Modificar horarios</Typography>
          <KeyboardArrowDownIcon
            sx={{ cursor: "pointer" }}
            onClick={() => setCollapse(!collapse)}
          />
        </Grid>
        <Collapse in={collapse} timeout="auto" unmountOnExit>
          <CardActions sx={{ p: 2 }}>
            <Grid container>
              <Grid item xs={6} md={6} lg={6} xl={6}>
                <FormGroup>
                  <FormControlLabel control={<Switch />} label="Desayuno" />
                </FormGroup>
              </Grid>
              <Grid item xs={6} md={6} lg={6} xl={6}>
                <FormGroup>
                  <FormControlLabel control={<Switch />} label="Almuerzo" />
                </FormGroup>
              </Grid>
              <Grid item xs={6} md={6} lg={6} xl={6}>
                <FormGroup>
                  <FormControlLabel control={<Switch />} label="Merienda" />
                </FormGroup>
              </Grid>
              <Grid item xs={6} md={6} lg={6} xl={6}>
                <FormGroup>
                  <FormControlLabel control={<Switch />} label="Cena" />
                </FormGroup>
              </Grid>
              <Grid item xs={6} md={6} lg={6} xl={6}>
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
