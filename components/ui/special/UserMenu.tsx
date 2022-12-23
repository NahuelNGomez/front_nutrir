import { Avatar, Grid, Menu } from "@mui/material";
import {componentsStyles} from "@styles/index";
import { FC, useState } from "react";
import { useAppCtx } from "../../../src/contexts/store";
import UserOptions from "../contents/UserOptions";
import PersonIcon from '@mui/icons-material/Person';
import { ArrowDropDown } from "@mui/icons-material";

const UserMenu: FC<{}> = () => {
  const { user, modeTheme } = useAppCtx();
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

  const {contentStyles:{userMenuStyles}} = componentsStyles(modeTheme);

  return (
    <Grid container sx={userMenuStyles.container} >
      
      <Grid sx={userMenuStyles.text_content}>
        <Grid container justifyContent={"center"} flexDirection={"column"}>
        <span style={userMenuStyles.text}>Manos en Acción TEst Manos en Acción TEst </span>
        <small style={{textAlign:"end"}}>{user.lastName}, {user.firstName}</small>
        </Grid>
      </Grid>
      <Avatar sx={userMenuStyles.avatar} >
        <PersonIcon fontSize="small" />
      </Avatar>
      <ArrowDropDown onClick={handleClick}/>
      <Menu
        id="account-menu"
        open={open}
        anchorEl={anchor}
        onClose={handleClose}
        PaperProps={userMenuStyles.menu}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <UserOptions />
      </Menu>
    </Grid>
  );
};

export default UserMenu;
