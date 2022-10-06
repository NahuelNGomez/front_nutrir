import {  Drawer } from "@mui/material";
import { FC } from "react";
import MenuItems from "./MenuItems";

type props = {
  open: boolean;
  onClose(): void;
};

const DrawerMenu: FC<props> = ({ open, onClose }) => {
  return (
    <Drawer
      anchor={"left"}
      open={open}
      onClose={onClose}
    >
      <MenuItems />
    </Drawer>
  );
};

export default DrawerMenu;
