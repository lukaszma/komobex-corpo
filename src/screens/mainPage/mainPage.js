import React from "react"
import { Service } from "./components/service/service"
import { Work } from "./components/work/work"
// import CallToAction from "./components/callToAction"
import { About } from "./components/about"
import { Why } from "./components/why"
// import { Testimonial } from "./components/testimonial"
// import { Client } from "./components/client"

export const MainPage = () => (
  <>
    <Service />
    <About />
    <Work />
    <Why />
    {/* <CallToAction
      title="Wynajem sprzętu budowlanego"
      subtitle=""
      btnLabel="Sprawdź"
      to="/uslugi/uslugi-dzwigowe"
    /> */}
    {/* <CallToAction
      title="Wynajem mieszkan oraz miejsc parkingowych podziemnych na terenie Częstochowy"
      subtitle=""
      btnLabel="Sprawdź"
      to="/uslugi/wynajem-mieszkan"
    /> */}
    {/* <CallToAction
      title="Szukasz profesjonalnej firmy z wieloletnim doświadczeniem?"
      subtitle="Oferujemy konsultacje z najlepszymi inżynierami."
      btnLabel="Porozmawiajmy"
      to="/kontakt"
    /> */}
    {/* <Testimonial /> */}
    {/* <Client /> */}
  </>
)
