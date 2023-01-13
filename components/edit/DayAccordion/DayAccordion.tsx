import { Accordion, AccordionDetails, AccordionSummary, CardActions, FormControlLabel, FormGroup, Grid, Switch, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import { useAppCtx } from "../../../src/contexts/store";
import { pagesStyles } from "@styles/index";

type Props = {
  index: number,
  dayName: string,
  funcionamiento?: string
}

const DayAccordion: React.FC<Props> = ({ dayName, index }) => {

  const { modeTheme } = useAppCtx();

  const {
    editStyles: { daysForm },
  } = pagesStyles(modeTheme);


  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <div key={`key+${dayName}`} style={{ marginBottom: '0.5rem' }}>
        <Accordion
          sx={{ backgroundColor: '#40a39b', color: 'white' }}
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {dayName}
            </Typography>
          </AccordionSummary>

          <AccordionDetails sx={daysForm.details}>
            <Grid container xs={12} justifyContent={'space-between'}>
              <CardActions sx={daysForm.actions}>
                <Grid container wrap="wrap">
                  <Grid item xs={12} md={6} lg={4} xl={4}>
                    <FormGroup>
                      <FormControlLabel control={<Switch />} label="Desayuno" />
                    </FormGroup>
                  </Grid>
                  <Grid item xs={12} md={6} lg={4} xl={4}>
                    <FormGroup>
                      <FormControlLabel control={<Switch />} label="Almuerzo" />
                    </FormGroup>
                  </Grid>
                  <Grid item xs={12} md={6} lg={4} xl={4}>
                    <FormGroup>
                      <FormControlLabel control={<Switch />} label="Merienda" />
                    </FormGroup>
                  </Grid>
                  <Grid item xs={12} md={6} lg={4} xl={4}>
                    <FormGroup>
                      <FormControlLabel control={<Switch />} label="Cena" />
                    </FormGroup>
                  </Grid>
                  <Grid item xs={12} md={6} lg={4} xl={4}>
                    <FormGroup>
                      <FormControlLabel control={<Switch />} label="Olla Popular" />
                    </FormGroup>
                  </Grid>
                </Grid>
              </CardActions>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}

export default DayAccordion