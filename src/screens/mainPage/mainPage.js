import React from "react"
import { Service } from "./components/service"
import { Work } from "./components/work"
import { CallToAction } from "./components/callToAction"
import { About } from "./components/about"
import { Why } from "./components/why"
import { Testimonial } from "./components/testimonial"
import { Client } from "./components/client"

export const MainPage = () => (
  <>
    <Service />
    <About />
    <CallToAction />
    <Work />
    <Why />
    <Testimonial />
    <Client />
  </>
)
