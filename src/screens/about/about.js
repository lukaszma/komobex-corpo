import React from "react"
import { ContentSection } from "./components"
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs"
import { PageTitle } from "../../components/pageTitle"
import { Facts } from "./components/facts"

export const AboutScreen = () => (
  <>
    <PageTitle title="O firmie" subtitle="Co robimy i kim jesteśmy." />
    <Breadcrumbs />
    <div className="site-main">
      <ContentSection />
      <Facts />
    </div>
  </>
)
