import { Ballot, ExitToApp, ManageAccounts, Restaurant, SoupKitchen } from "@mui/icons-material";
import { MenuItem } from "../types/navigation";

export const MenuList:Array<MenuItem> = [
  {
    key: "usuario",
    text: "Editar Usuario",
    icon: <ManageAccounts />,
    action: (router) => {
      router.push('/api/logout');
  }
  },
  {
    key: "comedor",
    text: "Editar Comedor",
    icon: <Restaurant />,
    action: (router) => {
      router.push('/api/logout');
  }
  },
  {
    key: "encuestas",
    text: "Agregar Encuestas Semanales",
    icon: <Ballot />,
    action: (router) => {
      router.push('/api/logout');
  }
  },
  {
    key: "elegir-comedor",
    text: "Elegir Comedor",
    icon: <SoupKitchen />,
    action: (router) => {
      router.push('/api/logout');
  }
  },
  {
    key: "logout",
    text: "Cerrar Sesion",
    icon: <ExitToApp />,
    action: (router) => {
        router.push('/api/logout');
    }
  },
];
