import {  Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
import { useAppCtx } from "../../../src/contexts/store";
import {
  dishesOptionsType,
  SurveysAvailableType,
} from "../../../src/types/global";
import DishIcon from "../special/DishIcon";

const SurveysAvailable: FC<{ surveys: SurveysAvailableType }> = ({
  surveys,
}) => {
  const { modeTheme } = useAppCtx();
  const [selectedDish, setSelectedDish] = useState<
    keyof typeof dishesOptionsType | null
  >(null);

  const dishHandleClick = (type: keyof typeof dishesOptionsType) =>
    setSelectedDish(type);

  return (
    <>
      {surveys.map(({ name, type, complete, available }) => (
        <Grid
          item
          justifyContent={"center"}
          sx={{ opacity: available ? 1 : 0.5 }}
        >
          <DishIcon
            background={
              modeTheme == "dark" ? "rgba(255, 255, 255, 0.09)" : "white"
            }
            width={120}
            height={120}
            type={type}
            color={modeTheme == "dark" ? "white" : "#474747"}
            active={type === selectedDish || complete}
            complete={complete}
            dishHandleClick={dishHandleClick}
            disabled={!available}
          />

          <Typography sx={{ textAlign: "center", pt: 1, pb: 1 }}>
            {name}
          </Typography>
        </Grid>
      ))}
    </>
  );
};

export default SurveysAvailable;
