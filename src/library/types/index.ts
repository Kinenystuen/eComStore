import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

/* Typographic props */
export type H1Props = {
  className?: string;
  children: React.ReactNode;
};

/* Button props */
export type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  title?: string;
  ariaLabel?: string;
};

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

export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  discountedPrice: number;
  image: { url: string; alt?: string };
  tags: string[];
  description: string;
  rating: number;
  reviews?: Review[];
}
interface Review {
  id: string;
  username: string;
  rating: number;
  description: string;
}

export interface LoaderProps {
  theme?: "light" | "dark";
  className?: string;
}
