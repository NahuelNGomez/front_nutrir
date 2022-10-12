import { SvgIconComponent } from "@mui/icons-material";
import { NextRouter } from "next/router";

export type MenuItem = {
    key:string,
    text:string,
    icon:JSX.Element,
    action(router:NextRouter):void
}