import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Header, SEO, Footer, AdditionalInfo } from "./components"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const pageTitle = data.site.siteMetadata.title

  return (
    <>
      <SEO title={pageTitle} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <AdditionalInfo />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
