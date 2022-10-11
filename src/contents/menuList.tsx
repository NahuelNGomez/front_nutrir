import { Ballot, ExitToApp, ManageAccounts, Restaurant, SoupKitchen } from "@mui/icons-material";
import { MenuItem } from "../types";

export const MenuList:Array<MenuItem> = [
  {
    key: "usuario",
    text: "Editar Usuario",
    icon: <ManageAccounts />,
  },
  {
    key: "comedor",
    text: "Editar Comedor",
    icon: <Restaurant />,
  },
  {
    key: "encuestas",
    text: "Agregar Encuestas Semanales",
    icon: <Ballot />,
  },
  {
    key: "elegir-comedor",
    text: "Elegir Comedor",
    icon: <SoupKitchen />,
  },
  {
    key: "logout",
    text: "Cerrar Sesion",
    icon: <ExitToApp />,
  },
];
