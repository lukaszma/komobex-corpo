import React from "react"
import Layout from "@components/layout/layout"
import { AboutScreen } from "@screens/about/about"

const About = () => (
  <div id="home" className="home">
    <Layout pageTitle="O Firmie">
      <AboutScreen />
    </Layout>
  </div>
)

export default About
