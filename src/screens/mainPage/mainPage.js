/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { Service } from "./components/service"
import { Work } from "./components/work"
import { CallToAction } from "./components/callToAction"
import { About } from "./components/about"
import { Why } from "./components/why"

export const MainPage = () => (
  <>
    <Service />
    <Work />
    <CallToAction />
    <About />
    <Why />
  </>
)
