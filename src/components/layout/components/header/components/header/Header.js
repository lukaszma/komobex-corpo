import React from "react"
import CustomLink from "@components/customLink/customLink"
import classnames from "classnames"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Header = ({ currentRouteOptions, isHeaderSticky, onMenuClick }) => {
  const images = useStaticQuery(graphql`
    query {
      logo: file(
        sourceInstanceName: { eq: "main-page-images" }
        name: { eq: "logo" }
      ) {
        name
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <header
      id="masthead"
      className={classnames("site-header", {
        "sticky-bar": isHeaderSticky,
      })}
      role="banner"
    >
      <div className="container">
        <div style={{ width: "200px" }} className="site-branding">
          <h1 className="site-title title-image">
            <CustomLink to="/">
              <Img
                className="img-responsive"
                fluid={images.logo.childImageSharp.fluid}
              />
            </CustomLink>
          </h1>
        </div>
        <nav id="site-navigation" className="main-navigation" role="navigation">
          <button
            className="menu-toggle"
            type="button"
            aria-controls="primary-menu"
            aria-expanded="false"
            onClick={onMenuClick}
          >
            <i className="fa fa-bars"></i>
            <span className="pe-7s-menu"></span>
            <span className="sr-only">Primary Menu</span>
          </button>

          <div className="menu-testing-menu-container">
            <ul
              id="primary-menu"
              className="menu nav-menu"
              aria-expanded="false"
            >
              <li
                className={classnames("menu-item", {
                  "current-menu-item": currentRouteOptions.to === "/",
                })}
              >
                <CustomLink to="/">Strona główna</CustomLink>
              </li>
              <li
                className={classnames("menu-item", {
                  "current-menu-item": currentRouteOptions.to === "/o-firmie",
                })}
              >
                <CustomLink to="/o-firmie">O firmie</CustomLink>
              </li>
              {/* <li
                className={classnames("menu-item", "menu-item-has-children", {
                  "current-menu-item": currentRouteOptions.to === "/uslugi",
                })}
                aria-haspopup="true"
              >
                <CustomLink to="/uslugi">Usługi</CustomLink>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <CustomLink to="/uslugi/instalacje-sanitarne-zewnetrzne">
                      Instalacje i sieci zewnętrzne
                    </CustomLink>
                  </li>
                  <li className="menu-item">
                    <CustomLink to="/uslugi/instalacje-sanitarne-wewnetrzne">
                      Instalacje sanitarne wewnętrzne
                    </CustomLink>
                  </li>
                  <li className="menu-item">
                    <CustomLink to="/uslugi/instalacje-przemyslowe">
                      Instalacje przemysłowe
                    </CustomLink>
                  </li>
                  <li className="menu-item">
                    <CustomLink to="/uslugi/uslugi-dzwigowe">
                      Usługi dźwigowe
                    </CustomLink>
                  </li>
                  <li className="menu-item">
                    <CustomLink to="/uslugi/wynajem-mieszkan">
                      Wynajem mieszkań
                    </CustomLink>
                  </li>
                </ul>
              </li> */}

              <li
                className={classnames("menu-item", {
                  "current-menu-item": currentRouteOptions.to === "/realizacje",
                })}
              >
                <CustomLink to="/realizacje">Realizacje</CustomLink>
              </li>
              <li
                className={classnames("menu-item", {
                  "current-menu-item": currentRouteOptions.to === "/referencje",
                })}
              >
                <CustomLink to="/referencje">Referencje</CustomLink>
              </li>
              <li
                className={classnames("menu-item", {
                  "current-menu-item":
                    currentRouteOptions.to === "/wydzielenie_spolki",
                })}
              >
                <CustomLink to="/wydzielenie_spolki">
                  Wydzielenie spółki
                </CustomLink>
              </li>

              <li
                className={classnames("menu-item", {
                  "current-menu-item": currentRouteOptions.to === "/kontakt",
                })}
              >
                <CustomLink to="/kontakt">Kontakt</CustomLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  isHeaderSticky: PropTypes.bool,
  currentRouteOptions: PropTypes.object,
  onMenuClick: PropTypes.func,
}

export default Header
