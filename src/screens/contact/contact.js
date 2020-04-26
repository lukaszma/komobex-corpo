import React from "react"
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs"
import { PageTitle } from "../../components/pageTitle"
import { Map, Form } from "./components"

export const ContactScreen = () => (
  <>
    <PageTitle title="Kontakt" subtitle="Skontaktuj się z Komobex Inel." />
    <Breadcrumbs />
    <div id="contact" className="contact block-section image-block bg-white">
      <Map />
      <Form />
    </div>
  </>
)
