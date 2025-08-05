interface NavbarItem {
  name: string;
  url: string | null;
}

export const navbarData: NavbarItem[] = [
  {
    name: "Discover",
    url: "/",
  },
  {
    name: "Our services",
    url: null,
  },
  {
    name: "Inspiration",
    url: "/inspiration",
  },
  {
    name: "Get in touch",
    url: "/contact-us",
  },
];
