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
import colors from "@styles/colors";
import { styles } from "@styles/components/ui";

const ModalSeleccion: FC<{}> = () => {
  const { modalOpen, setModalOpen, modeTheme,currentTheme } = useAppCtx();
  const themeColors = colors(modeTheme);
  const [search,setSearch] = useState("")

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
    if(search.length === 0){
        return comedores
    }

    return comedores.filter((comedor) => comedor.name.includes(search));

  },[search]);

  const {modalStyles} = styles(currentTheme);

  return (
    <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
      <Box sx={modalStyles.modal}>
        <Grid container justifyContent={"space-between"} sx={modalStyles.headerContainer}>
          <Typography sx={{fontSize:"18px",fontWeight:"600"}}>Cambiar de Comedor</Typography>
          <CloseIcon
            sx={modalStyles.closeIcon}
            onClick={() => setModalOpen(false)}
          />
        </Grid>
        <TextField
          sx={modalStyles.searchInput}
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
                border: !comedor.selected ? modalStyles.borderUnselected : modalStyles.borderSelected,
                color:  comedor.selected ? modalStyles.colorSelected: "",
                ...modalStyles.item
              }}
            >
              <ListItemIcon >
                {comedor.selected ? (
                  <CheckCircleOutlineIcon
                    fontSize={"medium"}
                    color={"primary"}
                    sx={modalStyles.itemIcon}
                  />
                ) : (
                  <PanoramaFishEyeIcon fontSize={"medium"} sx={modalStyles.itemIcon}/>
                )}
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="h3" sx={modalStyles.primaryText}>{comedor.name}</Typography>}
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
