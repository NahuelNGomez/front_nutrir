import * as React from "react";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Menu } from "@mui/material";
import Notifications from "../contents/notifications";

export default function Notification() {
  const [open, setOpen] = React.useState(false);
  const [anchor, setAnchor] = React.useState(null);
  
  const handleClose = () => {
    setOpen(false);
    setAnchor(null);
  };
  const handleClick = (e: any) => {
    if (!open) {
      setOpen(true);
      setAnchor(e.currentTarget);
    } else {
      setOpen(false);
      setAnchor(null);
    }
  };

  return (
    <>
      <Stack onClick={handleClick}  spacing={2} direction="row">
        <Badge badgeContent={4} color="secondary" >
          <NotificationsIcon sx={{color:"white"}} />
        </Badge>
      </Stack>
      <Menu
        id="basic-menu"
        open={open}
        anchorEl={anchor}
        onClose={handleClose}
      >
        <Notifications />
      </Menu>
    </>
  );
}
