import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  TextField,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import React, { FC, useEffect, useMemo, useState } from "react";
import { useAppCtx } from "../../../src/contexts/store";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import { componentsStyles } from "@styles/index";
import { useRouter } from "next/router";


const ModalLogin: FC<{}> = () => {
  const { modalLogin, setModalLogin, modeTheme } = useAppCtx();
  const [search, setSearch] = useState("");

  const {
    uiComponentStyles: { loginModalStyles },
  } = componentsStyles(modeTheme);

  const router = useRouter()

  const onLogoutHandler = () => {
    setModalLogin(false)
    fetch('api/logout')
      .then(() => router.push("/"))
      .catch(err => {
        // console.log('client side err', { err });
      })
  }

  return (
    <Modal open={modalLogin} onClose={() => setModalLogin(false)}>
      <Box
        sx={loginModalStyles.modal}
      >
        <Grid
          container
          justifyContent={"space-between"}
          sx={loginModalStyles.headerContainer}
        >
          <Typography sx={loginModalStyles.headerTitle}>
            Su sesión ha expirado
          </Typography>
          <Typography sx={loginModalStyles.headerSubTitle}>
            Por favor, vuelva a iniciar sesión
          </Typography>
          {/* <CloseIcon
            sx={merenderosModalStyles.closeIcon}
            onClick={() => setModalLogin(false)}
          /> */}
          <Grid
            container
            xs={12}
            sx={{ mt: 4}}
            justifyContent={'center'}
          >
            <Grid
              item
              xs={4}
            >
              <Button onClick={onLogoutHandler} sx={loginModalStyles.utils.completeButton}>
                Iniciar sesion
              </Button>
            </Grid>
          </Grid>
        </Grid>

        {/* <TextField
          sx={merenderosModalStyles.searchInput}
          id="outlined-basic"
          label="Buscar Comedor"
          variant="outlined"
          focused
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <List>
          {results.map((comedor, index) => (
            <ListItemButton
              key={index}
              sx={{
                border: !comedor.selected
                  ? merenderosModalStyles.borderUnselected
                  : merenderosModalStyles.borderSelected,
                color: comedor.selected
                  ? merenderosModalStyles.colorSelected
                  : "",
                ...merenderosModalStyles.item,
              }}
            >
              <ListItemIcon>
                {comedor.selected ? (
                  <CheckCircleOutlineIcon
                    fontSize={"medium"}
                    color={"primary"}
                    sx={merenderosModalStyles.itemIcon}
                  />
                ) : (
                  <PanoramaFishEyeIcon
                    fontSize={"medium"}
                    sx={merenderosModalStyles.itemIcon}
                  />
                )}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="h3"
                    sx={merenderosModalStyles.primaryText}
                  >
                    {comedor.name}
                  </Typography>
                }
                secondary={comedor.address}
              />
            </ListItemButton>
          ))}
        </List> */}
      </Box>
    </Modal>
  );
};

export default ModalLogin;
