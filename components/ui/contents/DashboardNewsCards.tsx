import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { dashboardCardsStyle } from "@styles/components/ui/content";
import { useRouter } from "next/router";
import { FC } from "react";
import { dashboardCards } from "../../../src/contents/cards";

const DashboardNewsCards: FC<{}> = () => {
  const router = useRouter();

  return (
    <>
      {dashboardCards.map(({ title, image, redirectTo }) => (
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Card>
            <CardMedia component="img" image={image} alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
            </CardContent>
            <CardActions sx={dashboardCardsStyle.actions}>
              <Button
                sx={dashboardCardsStyle.button}
                size="large"
                onClick={() => router.push(redirectTo)}
              >
                Completar
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default DashboardNewsCards;
