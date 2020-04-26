import React from "react"
import Layout from "@components/layout/layout"
import { AboutScreen } from "@screens/about/about"

const IndexPage = () => (
  <div id="home" className="home">
    <Layout>
      <AboutScreen />
    </Layout>
  </div>
)

export default IndexPage
