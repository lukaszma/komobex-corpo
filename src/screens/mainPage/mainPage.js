/* eslint-disable jsx-a11y/anchor-is-valid */
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
    <Work />
    <CallToAction />
    <About />
    <Why />
    <Testimonial />
    <Client />
  </>
)
