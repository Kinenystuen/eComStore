import { faHome, faContactBook } from "@fortawesome/free-solid-svg-icons";

export const apiKey = import.meta.env.VITE_API_HOST_URL;

export const headerNavLinks = [
  {
    icon: faHome,
    title: "Home",
    route: "/",
    label: "Home"
  },
  {
    icon: faContactBook,
    title: "Contact",
    route: "/contact",
    label: "Contact"
  }
];
