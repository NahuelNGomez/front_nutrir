import { Drawer } from "@mui/material";
import { FC } from "react";
import { styles } from "@styles/components/navigation";
import MenuItems from "@components/navigation/MenuItems";

type props = {
  open: boolean;
  onClose(): void;
};

const DrawerMenu: FC<props> = ({ open, onClose }) => {

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
      <Drawer
        variant="permanent"
        sx={styles.drawerPermanent}
        open
      >
        <MenuItems />
      </Drawer>
    </>
  );
};

export default DrawerMenu;
