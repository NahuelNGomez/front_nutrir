import React, { FC } from "react";
import {
  ListItemIcon,
  MenuItem,
  Divider,
  MenuList,
  ListItemText,
  Typography,
  Grid,
} from "@mui/material";
import { ExitToApp, PublishedWithChanges } from "@mui/icons-material";
import { componentsStyles } from "@styles/index";
import { useAppCtx } from "../../../src/contexts/store";
import SwitchMode from "../special/SwitchMode";
import { useRouter } from "next/router";


const UserOptions: FC<{}> = () => {
  const { setModalOpen, modeTheme, updateTheme, setUser } = useAppCtx();
  const { contentStyles: { userMenuStyles } } = componentsStyles(modeTheme);

  const router = useRouter()
  
  const onLogoutHandler = ()=>{   

    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}user/sesion/logout/`)
    .then(res => res.json())
    .then(json => {
      console.log('logout response', json);
      setUser({
        firstName: "",
        lastName: "",
        cuil: 1,
        email: "",
        comedor: "",
        comedorActivo: 1,
        logged: false,
        phone: '+151133443355',
        token: ''
      })
      router.push("/login")
    })
    .catch(err => {
      console.log('error logout', err);
    })
  }

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
          onClick={onLogoutHandler}
          primaryTypographyProps={userMenuStyles.menu_text}
          primary={"Salir"}
        />
      </MenuItem>
      <Divider />
      <Grid container justifyContent={"center"}>
        <Typography sx={{ fontWeight: "500" }}>Otras Configuraciones</Typography>
      </Grid>
      <MenuItem sx={{ mt: 1 }} onClick={() => updateTheme(modeTheme == "dark" ? "light" : "dark")}>
        <SwitchMode />
        <ListItemText
          primaryTypographyProps={userMenuStyles.menu_text.sx}
          primary={modeTheme === 'light' ? 'Cambiar a modo Oscuro' : 'Cambiar a modo claro'}
        />
      </MenuItem>
    </MenuList>
  );
};

export default UserOptions;
