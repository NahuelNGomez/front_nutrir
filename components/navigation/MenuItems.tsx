import {
  Button,
  Collapse,
  Grid,
  IconButton,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useRouter } from "next/router";
import { styles } from "@styles/components/navigation";
import { MenuList } from "../../src/contents/menuList";
import { useAppCtx } from "../../src/contexts/store";
import { DrawerHeader } from "@styles/components/navigation/utils";
import MenuIcon from "@mui/icons-material/Menu";
import { ExitToApp, ManageAccounts } from "@mui/icons-material";
import { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import colors from "@styles/colors";

const MenuItems = () => {
  const { menuOpen, setMenuOpen,modeTheme } = useAppCtx();
  const [optionsOpen, setOptionsOpen] = useState(false);
  const router = useRouter();
  const drawerStyles = styles.drawer(menuOpen,modeTheme);
  return (
    <>
      <DrawerHeader sx={drawerStyles.DrawerHeader}>
        {menuOpen ? (
          <>
            <img
              src={"/images/ui/logo-icon.png"}
              width={35}
              style={drawerStyles.drawerHeaderIcons.logoIcon}
            />
            <img src={"/images/ui/nutrir-app.png"} width={120} />
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              onClick={() => setMenuOpen(false)}
              sx={drawerStyles.drawerHeaderIcons.menuIcon}
            >
              <MenuIcon />
            </IconButton>
          </>
        ) : (
          <img
            src={"/images/ui/logo-icon.png"}
            width={35}
            style={drawerStyles.drawerHeaderIcons.logoIcon}
            onClick={() => setMenuOpen(true)}
          />
        )}
      </DrawerHeader>
      <Grid sx={drawerStyles.ListItem.ListItemContainer}>
        <List>
          <ListItem sx={drawerStyles.ListItem.parent} key={"perfil"}>
            <ListItemButton
              selected={true}
              sx={drawerStyles.ListItem.container}
              onClick={() => router.push("api/logout")}
            >
              <ManageAccounts sx={drawerStyles.ListItem.icons} />
              {menuOpen && (
                <ListItemText
                  sx={drawerStyles.ListItem.text}
                  primary={"Perfil de usuario"}
                />
              )}
            </ListItemButton>
          </ListItem>
          {menuOpen && (
            <Typography sx={drawerStyles.ListItem.text_separator}>
              COMEDOR
            </Typography>
          )}
          {MenuList.map(({ key, text, Icon, action, childrens }) => (
            <>
              <ListItem sx={drawerStyles.ListItem.parent} key={key}>
                <ListItemButton
                  sx={drawerStyles.ListItem.container}
                  onClick={() =>
                    childrens ? setOptionsOpen(!optionsOpen) : action(router)
                  }
                >
                  <Icon sx={drawerStyles.ListItem.icons} />
                  {menuOpen && (
                    <>
                      <ListItemText
                        sx={drawerStyles.ListItem.text}
                        primary={text}
                      />
                      {childrens &&
                        (optionsOpen ? (
                          <ExpandLess sx={{ color: "white" }} />
                        ) : (
                          <ExpandMore sx={{ color: "white" }} />
                        ))}
                    </>
                  )}
                </ListItemButton>
              </ListItem>
              {childrens && menuOpen && (
                <Collapse in={optionsOpen}>
                  {childrens.map(({ key, text, Icon, action }) => (
                    <ListItem key={key} sx={drawerStyles.ListItem.children_parent}>
                      <ListItemButton sx={drawerStyles.ListItem.children_item}>
                        <Icon sx={drawerStyles.ListItem.children_icon} />
                        <ListItemText
                          primary={text}
                          sx={drawerStyles.ListItem.text}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </Collapse>
              )}
            </>
          ))}
        </List>
        <Grid sx={drawerStyles.exitContainer}>
          <Button sx={drawerStyles.exitButton} onClick={() => router.push('/api/logout')}>
            {menuOpen ? (
              <>
                <ExitToApp sx={{ mr: 1 }} />
                Cerrar Sesión
              </>
            ) : (
              <ExitToApp />
            )}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default MenuItems;
