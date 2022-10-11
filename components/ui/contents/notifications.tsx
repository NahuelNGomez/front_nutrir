import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

export default function Notifications() {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Aun No completas Tu encuesta!"
          secondary={
            <React.Fragment>
            
              {"Te falto completar : Desayuno - Almuerzo"}
            </React.Fragment>
          }
        />
      </ListItem>
     
    </List>
  );
}
