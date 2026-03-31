import React, { useState } from "react"
import classnames from "classnames"
import PropTypes from "prop-types"
import { StyledHeader, HeroContainer } from "./styles"
import Menu from "@components/menu/menu"
import scrollTo from "gatsby-plugin-smoothscroll"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Header as PageHeader } from "./components"

const Header = ({ isHeaderSticky, currentRouteOptions }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const onMenuClick = () => setIsMenuOpen(true)

  const onCloseMenuClick = () => setIsMenuOpen(false)

  const onScroll = () => {
    scrollTo("#service")
  }

  const images = useStaticQuery(graphql`
    query {
      heroImage: file(
        sourceInstanceName: { eq: "main-page-images" }
        name: { eq: "hero" }
      ) {
        name
        childImageSharp {
          gatsbyImageData(width: 1200, quality: 100, placeholder: NONE)
        }
      }
    }
  `)

  return (
    <StyledHeader>
      <PageHeader
        currentRouteOptions={currentRouteOptions}
        isHeaderSticky={isHeaderSticky}
        onMenuClick={onMenuClick}
      />
      {currentRouteOptions.hasHeroImage && <HeroContainer
        className={classnames("header", {
          "header-page": !currentRouteOptions.hasHeroImage,
        })}
      >
        <GatsbyImage
          image={getImage(images.heroImage.childImageSharp)}
          alt="hero"
          style={{ position: "absolute", inset: 0, height: "100%" }}
          objectFit="cover"
          objectPosition="top center"
        />
        <div className="main-page-arrow blink" onClick={onScroll}></div>
        {currentRouteOptions.hasHeroImage && (
          <div className="container">
            <div className="row">
              <div className="col-sm-5">
                <div className="header-caption">
                  <h2 className="caption-title">
                    Rzetelny i wiarygodny
                    <br />
                    <span style={{ color: "#f86040" }}>partner</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        )}
      </HeroContainer>}
      {isMenuOpen && <Menu onCloseClick={onCloseMenuClick} />}
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  isHeaderSticky: PropTypes.bool,
  currentRouteOptions: PropTypes.object,
}

Header.defaultProps = {
  siteTitle: ``,
  isHeaderSticky: false,
  currentRouteOptions: {},
}

export default Header
