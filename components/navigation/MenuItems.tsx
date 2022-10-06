import { AccountCircle } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Grid,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const MenuItems = () => {
  return (
    <List>
      <ListItem key={"profile"}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar sx={{ width: 60, height: 60 }}>ID</Avatar>
          Hola, Isaias Diaz
        </Grid>
      </ListItem>

      <ListItem key={"usuario"} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary={"Editar Usuarios"} />
        </ListItemButton>
      </ListItem>

      <ListItem key={"comedor"} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary={"Editar Comedor"} />
        </ListItemButton>
      </ListItem>

      <ListItem key={"encuestas"} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary={"Agregar Encuestas Semanales"} />
        </ListItemButton>
      </ListItem>

      <ListItem key={"elegir-comedor"} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary={"Elegir Comedor"} />
        </ListItemButton>
      </ListItem>

    </List>
  );
};

export default MenuItems;
