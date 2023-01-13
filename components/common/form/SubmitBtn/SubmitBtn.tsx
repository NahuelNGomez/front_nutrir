import { Button } from "@mui/material"
import { pagesStyles } from "@styles/index"
import { useRouter } from "next/router"
import { FC } from "react"
import { useAppCtx } from "../../../../src/contexts/store"



interface Props {
  text: string,
  type: string,
  columData: any,
}


const SubmitBtn: FC<Props> = ({
  text,
  type = 'complete',
  columData,
}) => {

  const { modeTheme, setSelectedSurvey } = useAppCtx();
  const { surveyStyles } = pagesStyles(modeTheme);

  

  const completeHandleClick = (e: any, data: any) => {
    e.preventDefault()
    const date = data.row.date 
    const service = data.row.meal

    setSelectedSurvey({
      date,
      service
    })
    // setDateStep(date)
    // setSurveyInfo(surveyData)
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