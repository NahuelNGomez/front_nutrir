import {
  Ballot,
  Dashboard,
  Flatware,
  LensOutlined,
  ManageAccounts,
  PublishedWithChanges,
} from "@mui/icons-material";
import { MenuItem } from "../types/navigation";


export const HeaderMenuList: Array<MenuItem> = [
  {
    key: "dashboard",
    text: "Inicio",
    path:"/",
    Icon:(props) => <Dashboard {...props}  />,
    action: (router) => {
      router.push("/");
    },
  },
  {
    key: "perfil",
    text: "Perfil de usuario",
    path:"/profile",
    Icon:(props) => <ManageAccounts {...props}  />,
    action: (router) => {
      router.push("/profile");
    },
  },
];


export const MenuList: Array<MenuItem> = [
  
  {
    key: "encuestas",
    text: "Encuestas y análisis",
    Icon:(props) => <Ballot {...props}  />,
    childrens: [
      {
        key: "completar-encuestas",
        text: "Completar encuestas",
        path:"survey",
        Icon:(props) => <LensOutlined fontSize="small" {...props}/>,
        action: (router) => {
          router.push("/api/logout");
        },
      },
      {
        key: "ver-estadistinas",
        text: "Ver estadísticas",
        path:"stadistics",
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
    path:"edit",
    Icon:(props) =>  <Flatware {...props} />,
    action: (router) => {
      router.push("/api/logout");
    },
  },

  {
    key: "elegir-comedor",
    text: "Cambiar de Comedor",
    Icon:(props) =>  <PublishedWithChanges {...props} />,
    action: (router,storeActions) => {
      console.log('llega');
      storeActions.setModalOpen(true);
    },
  },

];
