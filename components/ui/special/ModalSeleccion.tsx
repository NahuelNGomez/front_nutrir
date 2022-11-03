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
} from "@mui/material";
import React, { FC, useMemo, useState } from "react";
import { useAppCtx } from "../../../src/contexts/store";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import { componentsStyles } from "@styles/index";

const ModalSeleccion: FC<{}> = () => {
  const { modalOpen, setModalOpen, modeTheme } = useAppCtx();
  const [search, setSearch] = useState("");

  const comedores = [
    {
      name: "comedor 1",
      address: "9 de Julio y Rivadavia, Buenos Aires",
      selected: true,
    },
    {
      name: "comedor 2",
      address: "Cuyin Manzano, Bariloche",
      selected: false,
    },
    {
      name: "comedor 3",
      address: "Lago Steffen y Lago Moreno, San Martin de Los Andes",
      selected: false,
    },
    {
      name: "comedor 4",
      address: "Av. San Martin 50, Junin de los andes",
      selected: false,
    },
    {
      name: "comedor 5",
      address: "Onelli y Palacios, Bariloche",
      selected: false,
    },
  ];

  const results = useMemo(() => {
    if (search.length === 0) {
      return comedores;
    }

    return comedores.filter((comedor) => comedor.name.includes(search));
  }, [search]);

  const {
    uiComponentStyles: { merenderosModalStyles },
  } = componentsStyles(modeTheme);

  return (
    <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
      <Box sx={merenderosModalStyles.modal}>
        <Grid
          container
          justifyContent={"space-between"}
          sx={merenderosModalStyles.headerContainer}
        >
          <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
            Cambiar de Comedor
          </Typography>
          <CloseIcon
            sx={merenderosModalStyles.closeIcon}
            onClick={() => setModalOpen(false)}
          />
        </Grid>
        <TextField
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
        </List>
      </Box>
    </Modal>
  );
};

export default ModalSeleccion;
