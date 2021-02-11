import React from "react"
import Layout from "@components/layout/layout"
import { ContactScreen } from "@screens/contact/contact"

const Contact = () => (
  <div id="home" className="home">
    <Layout pageTitle="Kontakt">
      <ContactScreen />
    </Layout>
  </div>
)

export default Contact
