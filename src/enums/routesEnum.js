import { find, each } from "lodash"

export const routes = {
  "": {
    title: "Strona główna",
    to: "/",
    hasHeroImage: true,
  },
  "o-firmie": {
    title: "O firmie",
    to: "/o-firmie",
    pageTitle: {
      title: "O firmie",
      subtitle: "Co robimy i kim jesteśmy.",
    },
    hasBreadcrumbs: true,
  },
  kontakt: {
    title: "Kontakt",
    to: "/kontakt",
    hasAdditionalInfo: true,
    pageTitle: {
      title: "Kontakt",
      subtitle: "Skontaktuj się z Komobex Inel.",
    },
    hasBreadcrumbs: true,
  },
  uslugi: {
    title: "Usługi",
    to: "/uslugi",
    pageTitle: {
      title: "Usługi",
      subtitle: "Co możemy zrobić dla Ciebie.",
    },
    hasBreadcrumbs: true,
    children: [
      {
        title: "Instalacje wodno-kanalizacyjne",
        to: "/instalacje-wentylacyjne-i-klimatyzacyjne",
        routeName: "instalacje-wentylacyjne-i-klimatyzacyjne",
      },
      {
        title: "Instalacje c.o.",
        to: "/instalacje-co",
        routeName: "instalacje-co",
      },
      {
        title: "Instalacje elektryczne",
        to: "/instalacje-elektryczne",
        routeName: "instalacje-elektryczne",
      },
      {
        title: "Usługi dźwigowe",
        to: "/uslugi-dzwigowe",
        routeName: "uslugi-dzwigowe",
      },
      {
        title: "Wynajem mieszkań",
        to: "/wynajem-mieszkan",
        routeName: "wynajem-mieszkan",
      },
    ],
  },
  realizacje: {
    title: "Realizacje",
    to: "/realizacje",
    pageTitle: {
      title: "Realizacje",
      subtitle: "",
    },
    hasBreadcrumbs: true,
  },
}

export const getLinkDetailsByRoute = route => {
  let routeObj = {}

  routeObj = routes[route]

  if (!routeObj) {
    each(Object.keys(routes), routeKey => {
      const _route = routes[routeKey]
      if (_route.children) {
        const findedRoute = find(
          _route.children,
          child => child.routeName === route
        )

        if (findedRoute) {
          routeObj = findedRoute
          return
        }
      }
    })
  }

  return routeObj
}
