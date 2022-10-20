import {
  CSSObject,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Theme,
} from "@mui/material";
import { FC } from "react";
import { styles } from "@styles/components/navigation";
import MenuItems from "@components/navigation/MenuItems";
import {
  Drawer as DrawerDesktop,
  DrawerHeader,
} from "@styles/components/navigation/utils";
import { useTheme } from "@emotion/react";
import {
  ChevronLeft,
  ChevronRight,
  InboxOutlined,
  MailOutline,
} from "@mui/icons-material";

type props = {
  open: boolean;
  onClose(): void;
};

const DrawerMenu: FC<props> = ({ open, onClose }) => {
  const theme = useTheme();
  return (
    <>
      <Drawer
        anchor={"left"}
        open={open}
        onClose={onClose}
        sx={styles.drawerMobile}
      >
        <MenuItems />
      </Drawer>
      <Grid sx={{ display: { sm: "none", xs: "none", md: "block",xl:"block",xxl:"block" } }}>
        <DrawerDesktop variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={onClose}>
              <ChevronRight />
            </IconButton>
          </DrawerHeader>
          <Divider />
          <MenuItems />
        </DrawerDesktop>
      </Grid>
    </>
  );
};

export default DrawerMenu;
