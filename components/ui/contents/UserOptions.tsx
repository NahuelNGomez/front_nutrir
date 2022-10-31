import React, { FC } from "react";
import {
  ListItemIcon,
  MenuItem,
  Divider,
  MenuList,
  ListItemText,
} from "@mui/material";
import { ExitToApp, PublishedWithChanges } from "@mui/icons-material";
import {userMenuStyles} from "@styles/components/ui/content";
import { useAppCtx } from "../../../src/contexts/store";

const UserOptions: FC<{}> = () => {
  const {setModalOpen} = useAppCtx();

  return (
    <MenuList sx={userMenuStyles.menu_list}>
      <MenuItem onClick={() => setModalOpen(true)}>
        <ListItemIcon>
          <PublishedWithChanges />
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={userMenuStyles.menu_text}
          primary={"Cambiar de comedor"}
        />
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <ExitToApp />
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={userMenuStyles.menu_text}
          primary={"Salir"}
        />
      </MenuItem>
    </MenuList>
  );
};

export default UserOptions;
