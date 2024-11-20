import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type INavLink = {
  icon: IconDefinition;
  title: string;
  route: string;
  label: string;
};

export interface FormData {
  fullname: string;
  email: string;
  subject: string;
  bodyText: string;
}

// Element types
export interface CloseBtnProps {
  action: () => void;
  message: string;
}



