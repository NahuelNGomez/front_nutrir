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
import { drawerStyles } from "@styles/components/navigation";
import { MenuList } from "../../../src/contents/menuList";
import { useAppCtx } from "../../../src/contexts/store";
import { DrawerHeader } from "@styles/components/navigation/utils";
import MenuIcon from "@mui/icons-material/Menu";
import { ExitToApp, ManageAccounts } from "@mui/icons-material";
import { FC, useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";


const MenuItems:FC<{}> = () => {
  const { menuOpen, setMenuOpen,modeTheme } = useAppCtx();
  const [optionsOpen, setOptionsOpen] = useState(false);
  const router = useRouter();
  const styles = drawerStyles(menuOpen,modeTheme);
  return (
    <>
      <DrawerHeader sx={styles.DrawerHeader}>
        {menuOpen ? (
          <>
            <img
              src={"/images/ui/logo-icon.png"}
              width={35}
              style={styles.drawerHeaderIcons.logoIcon}
            />
            <img src={"/images/ui/nutrir-app.png"} width={120} />
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              onClick={() => setMenuOpen(false)}
              sx={styles.drawerHeaderIcons.menuIcon}
            >
              <MenuIcon />
            </IconButton>
          </>
        ) : (
          <img
            src={"/images/ui/logo-icon.png"}
            width={35}
            style={styles.drawerHeaderIcons.logoIcon}
            onClick={() => setMenuOpen(true)}
          />
        )}
      </DrawerHeader>
      <Grid sx={styles.ListItem.ListItemContainer}>
        <List>
          <ListItem sx={styles.ListItem.parent} key={"perfil"}>
            <ListItemButton
              selected={true}
              sx={styles.ListItem.container}
              onClick={() => router.push("api/logout")}
            >
              <ManageAccounts sx={styles.ListItem.icons} />
              {menuOpen && (
                <ListItemText
                  sx={styles.ListItem.text}
                  primary={"Perfil de usuario"}
                />
              )}
            </ListItemButton>
          </ListItem>
          {menuOpen && (
            <Typography sx={styles.ListItem.text_separator}>
              COMEDOR
            </Typography>
          )}
          {MenuList.map(({ key, text, Icon, action, childrens }) => (
            <>
              <ListItem sx={styles.ListItem.parent} key={key}>
                <ListItemButton
                  sx={styles.ListItem.container}
                  onClick={() =>
                    childrens ? setOptionsOpen(!optionsOpen) : action(router)
                  }
                >
                  <Icon sx={styles.ListItem.icons} />
                  {menuOpen && (
                    <>
                      <ListItemText
                        sx={styles.ListItem.text}
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
                    <ListItem key={key} sx={styles.ListItem.children_parent}>
                      <ListItemButton sx={styles.ListItem.children_item}>
                        <Icon sx={styles.ListItem.children_icon} />
                        <ListItemText
                          primary={text}
                          sx={styles.ListItem.text}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </Collapse>
              )}
            </>
          ))}
        </List>
        <Grid sx={styles.exitContainer}>
          <Button sx={styles.exitButton} onClick={() => router.push('/api/logout')}>
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
