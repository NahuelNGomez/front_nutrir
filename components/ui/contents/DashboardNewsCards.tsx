import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { pagesStyles } from "@styles/index";
import { useRouter } from "next/router";
import { FC } from "react";
import { dashboardCards } from "../../../src/contents/cardsList";
import { useAppCtx } from "../../../src/contexts/store";

const DashboardNewsCards: FC<{}> = () => {
  const router = useRouter();
  const { modeTheme } = useAppCtx();
  const {dashboardStyles:{CardsStyles}} = pagesStyles(modeTheme);
  return (
    <>
      {dashboardCards.map(
        ({ title, image, redirectTo, background_light,title_button }, index) => (
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}  key={index}>
            <Card>
              <Grid
                sx={{
                  ...CardsStyles.container,
                  backgroundImage:
                    modeTheme == "light"
                      ? background_light
                      : CardsStyles.dark_bg,
                }}
              >
                <img src={image} width="148" />
              </Grid>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
              </CardContent>
              <CardActions sx={CardsStyles.actions}>
                <Button
                  sx={CardsStyles.button}
                  size="large"
                  onClick={() => router.push(redirectTo)}
                  color="primary"
                >
                  {title_button}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        )
      )}
    </>
  );
};

export default DashboardNewsCards;
