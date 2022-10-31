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
import { useAppCtx } from "../../src/contexts/store";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import colors from "@styles/colors";

const ModalSeleccion: FC<{}> = () => {
  const { modalOpen, setModalOpen, modeTheme } = useAppCtx();
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
  ];

  const results = useMemo(() => {
    if(search.length === 0){
        return comedores
    }

    return comedores.filter((comedor) => comedor.name.includes(search));

  },[search]);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "100%", sm: "85%", lg: "60%", xl: "50" },
    height: { xs: "100%", sm: "85%", lg: "60%", xl: "60%" },
    maxHeight: { xs: "100%", sm: "85%", lg: "60%", xl: "60%" },
    overflow:"auto",
    overflowX:"hidden",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: { xs: 2, sm: 1, lg: 4, xl: 4 },
    borderRadius: { xs: 0, sm: 1, lg: 2, xl: 0 },
  };

  return (
    <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
      <Box sx={style}>
        <Grid container justifyContent={"space-between"} sx={{ mb: 2 }}>
          <Typography sx={{fontSize:"18px",fontWeight:"500"}}>Cambiar de Comedor</Typography>
          <CloseIcon
            sx={{ cursor: "pointer",fontSize:"20px",fontWeight:"600" }}
            onClick={() => setModalOpen(false)}
          />
        </Grid>
        <TextField
          sx={{ width: "100%" }}
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
                border: !comedor.selected ? "1px rgba(0, 0, 0, 0.4) solid" : `1px solid ${themeColors.offset_primary}`,
                borderRadius: 1,
                mt: 1,
                p: 1,
                color:comedor.selected ? themeColors.offset_primary : '#000000DE',
                ":hover": {
                  backgroundColor: "white",
                  borderRadius: "3px",
                  border: `1px solid ${themeColors.offset_primary}`,
                  boxShadow: "none",
                  color: `${themeColors.offset_primary}`,
                },
              }}
            >
              <ListItemIcon >
                {comedor.selected ? (
                  <CheckCircleOutlineIcon
                    fontSize={"medium"}
                    color={"primary"}
                    sx={{ml:1}}
                  />
                ) : (
                  <PanoramaFishEyeIcon fontSize={"medium"} sx={{ml:1}}/>
                )}
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="h3" sx={{fontWeight:"bold",textTransform:"uppercase",mb:1 }}>{comedor.name}</Typography>}
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
