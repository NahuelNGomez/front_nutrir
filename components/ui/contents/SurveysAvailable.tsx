import { Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
import { useAppCtx } from "../../../src/contexts/store";
import {
  dishesOptionsType,
  SurveysAvailableType,
} from "../../../src/types/global";
import { invoiceInfoType } from "../../../src/types/global";
import DishIcon from "../special/DishIcon";

type Props = {
  surveys: SurveysAvailableType
  setMealTypeStep: () => {}
}

const SurveysAvailable: FC<Props> = ({
  surveys, setMealTypeStep
}) => {
  const { modeTheme } = useAppCtx();
  const { surveyInfo, setSurveynfo } = useAppCtx()
  const [selectedDish, setSelectedDish] = useState<
    keyof typeof dishesOptionsType | null
  >(null);

  // console.log({ surveyInfo });

  const dishHandleClick = (type: keyof typeof dishesOptionsType, name: string) => {   
    setMealTypeStep(name)
    setSelectedDish(type);
    setSurveynfo({
      dishes: [
        {
          type,
          name,
          ingredients: []
        }
      ]
    })

  }

  return (
    <>
      <Grid
        container
        xs={7}
        sx={{ margin: '0 auto', height: '350px', gap: '2rem 2rem' }}
        justifyContent={'space-around'}
      >
        {surveys.map(({ name, type, complete, available }) => (
          <Grid
            item
            justifyContent={"center"}
            sx={{ opacity: available ? 1 : 0.5 }}
            key={`key_${name}`}
          >
            <DishIcon
              background={
                modeTheme == "dark" ? "rgba(255, 255, 255, 0.09)" : "white"
              }
              width={100}
              height={100}
              type={type}
              color={modeTheme == "dark" ? "white" : "#6fc2c1"}
              active={type === selectedDish || complete}
              complete={complete}
              dishHandleClick={() => {
                dishHandleClick(type, name)
              }}
              disabled={!available}
            />

            <Typography sx={{ textAlign: "center", pt: 1, pb: 1 }}>
              {name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SurveysAvailable;
