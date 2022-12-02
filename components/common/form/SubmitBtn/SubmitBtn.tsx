import { Button } from "@mui/material"
import { pagesStyles } from "@styles/index"
import { useRouter } from "next/router"
import { FC } from "react"
import { useAppCtx } from "../../../../src/contexts/store"



interface Props {
  text: string,
  type: string,
  columData: any
  handleGoToNextStep?: () => {}
  setDateStep: (date: string) => {}
}


const SubmitBtn: FC<Props> = ({ setDateStep, text, type = 'complete', columData, handleGoToNextStep }) => {

  const { modeTheme } = useAppCtx();
  const { surveyStyles } = pagesStyles(modeTheme);

  const router = useRouter()

  const completeHandleClick = (e: any, data: any) => {
    e.preventDefault()
    const date = data.row.date
    setDateStep(date)
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