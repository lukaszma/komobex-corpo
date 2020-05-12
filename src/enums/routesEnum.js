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
        title: "Instalacje sanitarne zewnętrzne",
        to: "/instalacje-sanitarne-zewnetrzne",
        routeName: "instalacje-sanitarne-zewnetrzne",
      },
      {
        title: "Instalacje sanitarne wenętrzne",
        to: "/instalacje-sanitarne-wewnetrzne",
        routeName: "instalacje-sanitarne-wewnetrzne",
      },
      {
        title: "Instalacje przemysłowe",
        to: "/instalacje-przemyslowe",
        routeName: "instalacje-przemyslowe",
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
    children: [
      {
        title: "Realizacje ukończone",
        to: "/ukonczone",
        routeName: "ukonczone",
      },
      {
        title: "Realizacje w trakcie",
        to: "/w-trakcie",
        routeName: "w-trakcie",
      },
      // {
      //   title: "Arena Gliwice",
      //   to: "/arena-gliwice",
      //   routeName: "arena-gliwice",
      // },
      // {
      //   title: "Huta Czestochowa",
      //   to: "/huta-czestochowa",
      //   routeName: "huta-czestochowa",
      // },
      // {
      //   title: "Koszecin Konopiska Kotlownia",
      //   to: "/koszecin-konopiska-kotlownia",
      //   routeName: "koszecin-konopiska-kotlownia",
      // },
      // {
      //   title: "Libero",
      //   to: "/libero",
      //   routeName: "libero",
      // },
      // {
      //   title: "Łódz Politechnika",
      //   to: "/lodz-politechnika",
      //   routeName: "lodz-politechnika",
      // },
      // {
      //   title: "MCK",
      //   to: "/mck",
      //   routeName: "mck",
      // },
      // {
      //   title: "Sad Częstochowa",
      //   to: "/sad-czestochowa",
      //   routeName: "sad-czestochowa",
      // },
      // {
      //   title: "Sagitarius",
      //   to: "/sagitarius",
      //   routeName: "sagitarius",
      // },
      // {
      //   title: "Sezam",
      //   to: "/sezam",
      //   routeName: "sezam",
      // },
      // {
      //   title: "Stadion Zabrze",
      //   to: "/stadion-zabrze",
      //   routeName: "stadion-zabrze",
      // },
      // {
      //   title: "Tarnowskie Góry",
      //   to: "/tarnowskie-gory",
      //   routeName: "tarnowskie-gory",
      // },
      // {
      //   title: "Trampoliny",
      //   to: "/trampoliny",
      //   routeName: "trampoliny",
      // },
      // {
      //   title: "TRW",
      //   to: "/trw",
      //   routeName: "trw",
      // },
      // {
      //   title: "Usługi Dźwigowe",
      //   to: "/uslugi-dzwigowe",
      //   routeName: "uslugi-dzwigowe",
      // },
      // {
      //   title: "Face 2 Face",
      //   to: "/face-2-face",
      //   routeName: "face-2-face",
      // },
    ],
  },
  404: {
    pageTitle: {
      title: "Ups",
      subtitle: "Podana strona nie istnieje.",
    },
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
