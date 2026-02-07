import { JSX } from "react/jsx-runtime";

export interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: JSX.Element;
  items?: MenuItem[];
}

export interface LogoProps {
  url: string;
  src: string;
  alt: string;
  title: string;
}

export interface AuthProps {
  login: {
    text: string;
    url: string;
  };
  signup: {
    text: string;
    url: string;
  };
}

export interface MobileExtraLink {
  name: string;
  url: string;
}