import { Avatar, Grid, Menu } from "@mui/material";
import { FC, useState } from "react";
import { useAppCtx } from "../../../src/contexts/store";
import UserOptions from "../contents/UserOptions";

const UserMenu:FC<{}> = () => {
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
    <Grid
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        borderLeft: "1px solid #eee",
        cursor: "pointer",
        paddingLeft:"15px"
      }}
      onClick={handleClick}
    >
      <Avatar sx={{ width: 42, height: 42 }} src="/avatar.png" alt="comedor" />
      <Grid
        sx={{
          display: {
            sm: "none",
            xs: "none",
            md: "block",
            xl: "block",
            xxl: "block",
          },
        }}
      >
        <span
          style={{
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          Manos en Acción
        </span>
        <br />
        <small>{user.name}</small>
      </Grid>
      <Menu id="account-menu" open={open} anchorEl={anchor} onClose={handleClose} sx={{mt:"10px",mr:"7px",padding:"10px",boxShadow:"0 0.5rem 1rem rgb(0 0 0 / 15%)",borderRadius:"10px"}} >
        <UserOptions />
      </Menu>
    </Grid>
  );
};

export default UserMenu;
