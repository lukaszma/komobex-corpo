const routes = {
  "": {
    title: "Strona główna",
    to: "/",
  },
  "o-firmie": {
    title: "O firmie",
    to: "/o-firmie",
  },
  kontakt: {
    title: "Kontakt",
    to: "/kontakt",
  },
}

export const getLinkDetailsByRoute = route => routes[route]
