import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Location } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import { Header, Footer, AdditionalInfo, SEO } from "./components"
import { getLinkDetailsByRoute } from "../../enums/routesEnum"
import { PageTitle } from "@components/pageTitle"
import { Breadcrumbs } from "@components/breadcrumbs/breadcrumbs"

const Layout = ({ children }) => {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false)

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset >= 35) {
        setIsHeaderSticky(true)
      } else if (window.pageYOffset < 35) {
        setIsHeaderSticky(false)
      }
    }
  }, [])

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
    <Location>
      {({ location }) => {
        const currentRouteOptions = getLinkDetailsByRoute(
          location.pathname.split("/")[1]
        )
        return (
          <>
            <SEO title={pageTitle} />
            <Header
              currentRouteOptions={currentRouteOptions}
              isHeaderSticky={isHeaderSticky}
              siteTitle={data.site.siteMetadata.title}
            />
            {currentRouteOptions && currentRouteOptions.pageTitle && (
              <PageTitle
                title={currentRouteOptions.pageTitle.title}
                subtitle={currentRouteOptions.pageTitle.subtitle}
              />
            )}
            {currentRouteOptions && currentRouteOptions.hasBreadcrumbs && (
              <Breadcrumbs />
            )}
            {currentRouteOptions && currentRouteOptions.hasAdditionalInfo && (
              <AdditionalInfo />
            )}
            {children}
            <Footer />
          </>
        )
      }}
    </Location>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
