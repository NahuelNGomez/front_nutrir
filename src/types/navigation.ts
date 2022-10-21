import { NextRouter } from "next/router";
import { CSSProperties, ReactNode } from "react";

export type MenuItem = {
  key: string;
  text: string;
  Icon(props:{sx:CSSProperties}):JSX.Element;
  action(router: NextRouter): void;
  childrens?: Array<{
    key: string;
    text: string;
    Icon(props:{sx:CSSProperties}):JSX.Element;
    action(router: NextRouter): void;
  }>;
};
