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
      {MenuList.map(({ key, text, icon, action }) => (
        <ListItem key={key} disablePadding>
          <ListItemButton onClick={() => action(router)}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
      <Divider />
    </List>
  );
};

export default MenuItems;
