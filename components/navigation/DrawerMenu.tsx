import { Drawer } from "@mui/material";
import { FC } from "react";
import { styles } from "@styles/components/navigation";
import MenuItems from "@components/navigation/MenuItems";
import {
  Drawer as DrawerDesktop,
} from "@styles/components/navigation/utils";
import { useAppCtx } from "../../src/contexts/store";

type props = {
  open: boolean;
  onClose(): void;
};

const DrawerMenu: FC<props> = ({ open, onClose }) => {
  const {modeTheme,menuOpen} = useAppCtx();

  const drawerStyle = styles.drawer(menuOpen,modeTheme);

  return (
    <>
      <Drawer
        anchor={"left"}
        open={open}
        onClose={onClose}
        sx={drawerStyle.drawerMobile}
      >
        <MenuItems />
      </Drawer>
      <DrawerDesktop sx={drawerStyle.drawerDesktop} variant="permanent" open={open}>
        <MenuItems />
      </DrawerDesktop>
    </>
  );
};

export default DrawerMenu;
