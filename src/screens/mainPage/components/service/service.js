import React from "react"
import { ServiceItem } from "./components"

export const Service = () => (
  <div id="service" className="service content-section bg-white">
    <div className="container">
      <div className="row">
        <ServiceItem
          title="Instalacje sanitarne zewnętrzne"
          list={[
            "instalacje wodociągowe",
            "kanalizacje sanitarne",
            "kanalizacje deszczowe",
            "sieci ciepłownicze",
            "sieci elektroenergetyczne",
          ]}
          imgSrc="../../../plumbing.jpg"
          to="/uslugi/instalacje-sanitarne-zewnetrzne"
        />

        <ServiceItem
          title="Instalacje sanitarne wenętrzne"
          list={[
            "instalacje wodno-kanalizacyjne",
            "instalacje centralnego ogrzewania",
            "instalcje ciepła technologicznego i wody lodowej",
            "instalacje gazowe",
            "instalacje wentylacyjne i klimatyzacyjne",
            "kotłownie i wymiennikownie ciepła",
            "instalacje elektryczne",
            "instalacje niskoprądowe",
          ]}
          imgSrc="../../../plumbing.jpg"
          to="/uslugi/instalacje-sanitarne-wewnetrzne"
        />

        <ServiceItem
          title="Instalacje przemysłowe"
          list={[
            "rurociągi pary, tlenu i azotu",
            "remonty urządzeń hutniczych",
            "remonty, serwis i konserwacja urządzeń dźwigowych",
          ]}
          imgSrc="../../../plumbing.jpg"
          to="/uslugi/instalacje-przemyslowe"
        />
      </div>
    </div>
  </div>
)
