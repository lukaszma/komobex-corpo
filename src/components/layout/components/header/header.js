import React, { useState } from "react"
import classnames from "classnames"
import PropTypes from "prop-types"
import CustomLink from "@components/customLink/customLink"
import { StyledHeader } from "./styles"
import Menu from "@components/menu/menu"
import scrollTo from "gatsby-plugin-smoothscroll"

const Header = ({ isHeaderSticky, currentRouteOptions }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const onMenuClick = () => setIsMenuOpen(true)

  const onCloseMenuClick = () => setIsMenuOpen(false)

  const onScroll = () => {
    scrollTo("#service")
  }

  return (
    <StyledHeader>
      <div
        className={classnames("header", {
          "header-page": !currentRouteOptions.hasHeroImage,
        })}
        style={
          currentRouteOptions.hasHeroImage
            ? {
                backgroundImage:
                  "url('../../../mainPage/IMG_20190904_132107 — kopia.jpg')",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top",
                height: "100vh",
              }
            : {}
        }
      >
        <div className="main-page-arrow blink" onClick={onScroll}></div>
        <div className="site-header-affix-wrapper">
          <header
            id="masthead"
            className={classnames("site-header", {
              "sticky-bar": isHeaderSticky,
            })}
            role="banner"
          >
            <div className="container">
              <div className="site-branding">
                <h1 className="site-title title-image">
                  <CustomLink to="/">
                    <img
                      src="../../../komobex-logo.jpg"
                      alt="construction business"
                      className="img-responsive"
                    />
                  </CustomLink>
                </h1>
              </div>
              <nav
                id="site-navigation"
                className="main-navigation"
                role="navigation"
              >
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
                        "current-menu-item":
                          currentRouteOptions.to === "/o-firmie",
                      })}
                    >
                      <CustomLink to="/o-firmie">O firmie</CustomLink>
                    </li>
                    <li
                      className={classnames(
                        "menu-item",
                        "menu-item-has-children",
                        {
                          "current-menu-item":
                            currentRouteOptions.to === "/uslugi",
                        }
                      )}
                      aria-haspopup="true"
                    >
                      <CustomLink to="/uslugi">Usługi</CustomLink>
                      <ul className="sub-menu">
                        <li className="menu-item">
                          <CustomLink to="/uslugi/instalacje-sanitarne-zewnetrzne">
                            Instalacje sanitarne zewnętrzne
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
                    </li>

                    <li
                      className={classnames("menu-item", {
                        "current-menu-item":
                          currentRouteOptions.to === "/realizacje",
                      })}
                    >
                      <CustomLink to="/realizacje">Realizacje</CustomLink>
                    </li>

                    <li
                      className={classnames("menu-item", {
                        "current-menu-item":
                          currentRouteOptions.to === "/kontakt",
                      })}
                    >
                      <CustomLink to="/kontakt">Kontakt</CustomLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </header>
        </div>
        {currentRouteOptions.hasHeroImage && (
          <div className="container">
            <div className="row">
              <div className="col-sm-5">
                <div className="header-caption">
                  <h2 className="caption-title">
                    Rzetelny i wiarygodny
                    <br />
                    <span style={{color: '#f86040'}}>partner</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
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
