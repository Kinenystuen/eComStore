import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
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

export const socialMedia = [
  {
    id: 1,
    platform: "Facebook",
    icon: faFacebook,
    link: "#"
  },
  {
    id: 2,
    platform: "Twitter",
    icon: faTwitter,
    link: "#"
  },
  {
    id: 3,
    platform: "Instagram",
    icon: faInstagram,
    link: "#"
  },
  {
    id: 4,
    platform: "LinkedIn",
    icon: faLinkedin,
    link: "#"
  }
];
