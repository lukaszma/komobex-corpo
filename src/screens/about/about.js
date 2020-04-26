import React from "react"
import { MainTitle, Breadcrumbs, ContentSection } from "./components"
import { Facts } from "./components/facts"

export const AboutScreen = () => (
  <>
    <MainTitle />
    <Breadcrumbs />
    <div className="site-main">
      <ContentSection />
      <Facts />
    </div>
  </>
)
