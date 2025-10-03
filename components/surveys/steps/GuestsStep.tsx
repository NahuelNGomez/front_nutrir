import { Button, Card, CardActions, CardContent, Grid, TextField } from "@mui/material"
import { FC, useState, useEffect } from "react"
import { guestsStepsType } from "../../../src/types/global"
import { useAppCtx } from "../../../src/contexts/store"
import { useFormik } from "formik"
import validationSchema from "../../common/form/schema/schema"
import { pagesStyles } from "@styles/index"
import survey from "@styles/pages/survey"

type Props = {
  handleGoToNextStep: () => {}
  handleGoToPreviousStep: () => {}
}


const GuestsStep: FC<Props> = ({
  handleGoToNextStep,
  handleGoToPreviousStep
}) => {

  const { modeTheme, setSelectedSurvey, guestsAmount, setGuestsAmount, setStepActive } = useAppCtx();
  const { surveyStyles: { guests } } = pagesStyles(modeTheme);
  const [disableBtn, setDisableBtn] = useState(true)

  const formik = useFormik<guestsStepsType>({
    initialValues: guestsAmount,
    validationSchema: validationSchema,
    onSubmit: (values: guestsStepsType) => {
      // Convertir valores vacíos a 0 antes de enviar
      const processedValues = {
        childs: values.childs || 0,
        kids: values.kids || 0,
        teens: values.teens || 0,
        adults: values.adults || 0
      };
      // alert(JSON.stringify(processedValues, null, 2));
      handleGoToNextStep()
      setStepActive(1)
      setGuestsAmount(processedValues)
    },
  })

  const handleFieldChange = (fieldName: keyof guestsStepsType, value: string) => {
    // Convertir valores vacíos a 0
    const numericValue = value === '' ? 0 : parseInt(value) || 0;
    formik.setFieldValue(fieldName, numericValue);
  }

  const handleBackBtn = () => {
    setSelectedSurvey({ date: '', service: '' })
    setGuestsAmount({
      childs: null,
      kids: null,
      teens: null,
      adults: null
    })
    setStepActive(0)
    handleGoToPreviousStep()
  }

  useEffect(() => {
    const guestsAdd = (formik.values.childs || 0) + (formik.values.kids || 0) + (formik.values.teens || 0) + (formik.values.adults || 0)
    if (guestsAdd > 0) setDisableBtn(false)
    if (guestsAdd <= 0) setDisableBtn(true)
  }, [formik.values.childs, formik.values.kids, formik.values.teens, formik.values.adults])



  return (
    <Grid item>
      <Grid container>     
        <form onSubmit={formik.handleSubmit}>
          <Card sx={{ pt: 3, pb: 2 }}>
            <CardContent >
              <Grid
                container
                sx={{
                  gap: '1.5rem',
                  borderRadius: '5px'
                }}
                boxShadow={'inherit'}
                alignItems='center'
                justifyContent={'center'}
              >
                <Grid item xs={11}>
                  <TextField
                    name='childs'
                    id="childs"
                    label="Infantes de 0 a 5 años"
                    type="number"
                    inputProps={{ min: 0, max: 500 }}
                    fullWidth
                    placeholder="Infantes de 0 a 5 años"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    // onChange={handleChange}
                    value={formik.values.childs || ''}
                    onChange={(e) => handleFieldChange('childs', e.target.value)}
                    error={formik.touched.childs && Boolean(formik.errors.childs)}
                    helperText={formik.touched.childs && formik.errors.childs}
                  />
                </Grid>
                <Grid item xs={11}>
                  <TextField
                    name='kids'
                    // id="outlined-number"
                    id="kids"
                    label="Niñxs de 5 a 10 años"
                    type="number"
                    inputProps={{ min: 0, max: 500 }}
                    placeholder="Niñxs de 5 a 10 años"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    // onChange={handleChange}
                    value={formik.values.kids || ''}
                    onChange={(e) => handleFieldChange('kids', e.target.value)}
                    error={formik.touched.kids && Boolean(formik.errors.kids)}
                    helperText={formik.touched.kids && formik.errors.kids}
                  />
                </Grid>
                <Grid item xs={11}>
                  <TextField
                    name='teens'
                    // id="outlined-number"
                    id="teens"
                    label="Adolescentes de 10 a 18 años"
                    type="number"
                    inputProps={{ min: 0, max: 500 }}
                    placeholder="Adolescentes de 10 a 18 años"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    // onChange={handleChange}
                    value={formik.values.teens || ''}
                    onChange={(e) => handleFieldChange('teens', e.target.value)}
                    error={formik.touched.teens && Boolean(formik.errors.teens)}
                    helperText={formik.touched.teens && formik.errors.teens}
                  />
                </Grid>
                <Grid item xs={11}>
                  <TextField
                    name='adults'
                    // id="outlined-number"
                    id="adults"
                    label="Adultos más de 18 años"
                    type="number"
                    inputProps={{ min: 0, max: 500 }}
                    placeholder="Adultos más de 18 años"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    // onChange={handleChange}
                    value={formik.values.adults || ''}
                    onChange={(e) => handleFieldChange('adults', e.target.value)}
                    error={formik.touched.adults && Boolean(formik.errors.adults)}
                    helperText={formik.touched.adults && formik.errors.adults}
                  />

                </Grid>
              </Grid>

            </CardContent>
          </Card>

          <Grid
            container
            xs={12}
            justifyContent={"space-between"}
            sx={{ pt: 0 }}
          >
            <Button
              onClick={handleBackBtn}
              sx={guests.button}
            >
              Volver
            </Button>
            <Button
              type="submit"
              // onClick={handleNextBtn}
              sx={guests.button}
              disabled={disableBtn}
            >
              Siguiente
            </Button>
          </Grid>

        </form>
      </Grid>
    </Grid>
  )
}

export default GuestsStep