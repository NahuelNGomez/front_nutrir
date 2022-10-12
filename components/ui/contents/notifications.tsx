import React from "react";
import {
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { components } from "@styles/components/ui";

export default function Notifications() {
  return (
    <List sx={components.notification}>
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
