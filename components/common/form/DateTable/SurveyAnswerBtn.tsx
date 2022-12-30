
import { Grid } from '@mui/material'
import { pagesStyles } from '@styles/index';
import React, { FC } from 'react'
import { useAppCtx } from '../../../../src/contexts/store';
import SubmitBtn from '../SubmitBtn/SubmitBtn'

type Props = {
  columnData: any;
  handleGoToNextStep?: any;
  handleGoToPreviousStep?: any;
  setDateStep: () => {}
  suerveyInfo: {},
  setSurveyInfo: () => {},
}

const SurveyAnswerBtn: FC<Props> = ({
  setDateStep,
  columnData,
  handleGoToNextStep,
  handleGoToPreviousStep,
  suerveyInfo,
  setSurveyInfo
}) => {

  const { modeTheme } = useAppCtx();
  const { surveyStyles } = pagesStyles(modeTheme);


  return (
    <>
      <Grid
        container
        spacing={2}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Grid item xs={5} >
          <SubmitBtn
            surveyData={columnData.row.data}
            setDateStep={setDateStep}
            columData={columnData}
            type={'uncomplete'}
            text="No se sirvió"
            suerveyInfo={suerveyInfo}
            setSurveyInfo={setSurveyInfo}
          />
        </Grid>
        <Grid item xs={5}>
          <SubmitBtn
            surveyData={columnData.row.data}
            setDateStep={setDateStep}
            handleGoToNextStep={handleGoToNextStep}
            columData={columnData}
            type={'complete'}
            text="Responder"
            suerveyInfo={suerveyInfo}
            setSurveyInfo={setSurveyInfo}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default SurveyAnswerBtn