import {
  Ballot,
  Flatware,
  LensOutlined,
  PublishedWithChanges,
} from "@mui/icons-material";
import { MenuItem } from "../types/navigation";

export const MenuList: Array<MenuItem> = [
  
  {
    key: "encuestas",
    text: "Encuestas y análisis",
    Icon:(props) => <Ballot {...props}  />,
    action: (router) => {
      router.push("/api/logout");
    },
    childrens: [
      {
        key: "completar-encuestas",
        text: "Completar encuestas",
        Icon:(props) => <LensOutlined fontSize="small" {...props}/>,
        action: (router) => {
          router.push("/api/logout");
        },
      },
      {
        key: "ver-estadistinas",
        text: "Ver estadísticas",
        Icon:(props) =>  <LensOutlined fontSize="small" {...props} />,
        action: (router) => {
          router.push("/api/logout");
        },
      },
    ],
  },
  {
    key: "comedor",
    text: "Editar Comedor",
    Icon:(props) =>  <Flatware {...props} />,
    action: (router) => {
      router.push("/api/logout");
    },
  },

  {
    key: "elegir-comedor",
    text: "Cambiar de Comedor",
    Icon:(props) =>  <PublishedWithChanges {...props} />,
    action: (router) => {
      router.push("/api/logout");
    },
  },

];
