import { Accordion, AccordionDetails, AccordionSummary, CardActions, FormControlLabel, FormGroup, Grid, Switch, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from "react";
import { useAppCtx } from "../../../src/contexts/store";
import { pagesStyles } from "@styles/index";
import { serviciosDiaType } from "../../../src/types/global";
import servicesByDayInfo from "./constants/servicesByDayInfo";
import ServiceAvailableCard from "./ServiceAvailableCard";

type Props = {
  dayData: Array<serviciosDiaType>;
  index: number;
  dayName: string;
}

const DayAccordion: React.FC<Props> = ({ dayName, index, dayData, }) => {

  const { modeTheme } = useAppCtx();
  // const [dayService, setDayService] = useState<serviciosDiaType>()

  const {
    editStyles: { daysForm },
  } = pagesStyles(modeTheme);


  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  // useEffect(() => {
  //   if (dayData?.length) {
  //     setDayService(dayData[0])
  //   }
  // }, [dayData])

  console.log({ dayData });


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
                  {/* <Grid item xs={12} md={6} lg={4} xl={4}>
                    <FormGroup>
                      <FormControlLabel checked={true} control={<Switch />} label="Desayuno" />
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
                  </Grid> */}
                  {
                    servicesByDayInfo.map(({ name, keyInfo }, index) => {
                      
                      const funcionamientos = dayData.length > 0 ? dayData[0].funcionamientos : []
                      const test = funcionamientos.filter(e => e === keyInfo)
                      const checked = test.length > 0 ? true : false

                      return (
                        <ServiceAvailableCard
                          name={name}
                          keyInfo={keyInfo}
                          checked={checked}
                          key={`serviceCard_key_${index}`}
                        />
                      )
                    })
                  }
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