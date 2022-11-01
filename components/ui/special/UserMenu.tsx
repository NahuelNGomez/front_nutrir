import { Avatar, Grid, Menu } from "@mui/material";
import {userMenuStyles} from "@styles/components/ui/content";
import { FC, useState } from "react";
import { useAppCtx } from "../../../src/contexts/store";
import UserOptions from "../contents/UserOptions";
import PersonIcon from '@mui/icons-material/Person';

const UserMenu: FC<{}> = () => {
  const { user } = useAppCtx();
  const [open, setOpen] = useState(false);
  const [anchor, setAnchor] = useState(null);

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
    <Grid container sx={userMenuStyles.container}  onClick={handleClick}>
      <Avatar sx={userMenuStyles.avatar} >
        <PersonIcon />
      </Avatar>
      <Grid sx={userMenuStyles.text_content}>
        <Grid container justifyContent={"center"} flexDirection={"column"}>
        <span style={userMenuStyles.text}>Manos en Acción</span>
        <small>{user.name}</small>
        </Grid>
      </Grid>
      <Menu
        id="account-menu"
        open={open}
        anchorEl={anchor}
        onClose={handleClose}
        sx={userMenuStyles.menu}
      >
        <UserOptions />
      </Menu>
    </Grid>
  );
};

export default UserMenu;
