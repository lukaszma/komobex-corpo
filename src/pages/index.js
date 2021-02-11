import React from "react"
import Layout from "@components/layout/layout"
import { MainPage } from "@screens/mainPage/mainPage"

const IndexPage = () => (
  <div id="home" className="home">
    <Layout pageTitle="">
      <MainPage />
    </Layout>
  </div>
)

export default IndexPage
