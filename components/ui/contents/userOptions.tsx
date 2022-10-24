import React from "react";
import {
  ListItemIcon,
  MenuItem,
  Divider,
  MenuList,
  ListItemText
} from "@mui/material";
import { ExitToApp, PublishedWithChanges } from "@mui/icons-material";

export default function UserOptions() {
  return (
    <MenuList sx={{padding:"10px"}}>
      <MenuItem >
        <ListItemIcon>
            <PublishedWithChanges />
        </ListItemIcon>
        <ListItemText primaryTypographyProps={{sx:{fontSize:"13px"}}} primary={"Cambiar de comedor"} />
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
            <ExitToApp />
        </ListItemIcon>
        <ListItemText primaryTypographyProps={{sx:{fontSize:"13px"}}} primary={"Salir"} />
      </MenuItem>
    </MenuList>
  );
}
