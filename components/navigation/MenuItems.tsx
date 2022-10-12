import {
  Avatar,
  Divider,
  Grid,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useRouter } from "next/router";
import { styles } from "@styles/components/navigation";
import SwitchMode from "@components/ui/special/switchMode";
import { MenuList } from "../../src/contents/menuList";
import { useAppCtx } from "../../src/contexts/store";

const MenuItems = () => {
  const { modeTheme } = useAppCtx();
  const router = useRouter();

  return (
    <List>
      <ListItem
        key={"profile"}
        sx={styles.profileItem}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar sx={styles.avatarName}>ID</Avatar>
          <Typography variant={"subtitle1"} sx={styles.avatarReggard}>Hola, Isaias Diaz</Typography>
        </Grid>
      </ListItem>
      {MenuList.map(({ key, text, icon,action }) => (
        <ListItem key={key} disablePadding>
          <ListItemButton onClick={() => action(router)}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
      <Divider />
      <ListItem key={"switch-mode"} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <SwitchMode />
          </ListItemIcon>
          <ListItemText
            primary={modeTheme === "dark" ? "Modo Claro" : "Modo Oscruo"}
          />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default MenuItems;
