import { Button } from "@mui/material"
import { pagesStyles } from "@styles/index"
import { useRouter } from "next/router"
import { FC } from "react"
import { useAppCtx } from "../../../../src/contexts/store"



interface Props {
  surveyData: { comedor: number, fecha: string, funcionamiento: string }
  text: string,
  type: string,
  columData: any,
  handleGoToNextStep?: any,
  setDateStep: (date: string) => {},
  suerveyInfo: {},
  setSurveyInfo: (surveyData: {}) => {},
}


const SubmitBtn: FC<Props> = ({
  setDateStep,
  text,
  type = 'complete',
  columData,
  handleGoToNextStep,
  surveyData,
  suerveyInfo,
  setSurveyInfo
}) => {

  const { modeTheme } = useAppCtx();
  const { surveyStyles } = pagesStyles(modeTheme);

  
  

  const completeHandleClick = (e: any, data: any) => {
    e.preventDefault()
    const date = data.row.date

    console.log('data to fetch', surveyData);
    

    setDateStep(date)
    setSurveyInfo(surveyData)
  }

  const uncompleteHandleClick = (e: any) => {
    e.preventDefault()
    alert('La opción fue marcada como no servida')
  } 

  return (
    <>
      {
        type === 'complete'
          ? (
            <Button
              sx={surveyStyles.dataTable.utils.completeButton}
              onClick={(e) => {
                const data = columData
                completeHandleClick(e, data)
                handleGoToNextStep()
              }}
            >
              {text}
            </Button>
          )
          :
          type === 'uncomplete'
            ? (
              <Button
                sx={surveyStyles.dataTable.utils.uncompleteButton}
                onClick={uncompleteHandleClick}
              >
                {text}
              </Button>
            )
            : null
      }
    </>
  )
}

export default SubmitBtn