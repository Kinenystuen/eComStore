import { faHome, faContactBook, faCartShopping } from '@fortawesome/free-solid-svg-icons';

export const headerNavLinks = [
  {
    icon: faHome,
    title: "Home",
    route: "/",
    label: "Home",
  },
  {
    icon: faCartShopping,
    title: "Cart",
    route: "/cart",
    label: "Cart",
  },
  {
    icon: faContactBook,
    title: "Contact",
    route: "/contact",
    label: "Contact",
  },
];
