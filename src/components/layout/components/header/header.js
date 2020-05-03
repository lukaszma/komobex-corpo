import React, { useState } from "react"
import classnames from "classnames"
import PropTypes from "prop-types"
import CustomLink from "@components/customLink/customLink"
import { StyledHeader } from "./styles"
import Menu from "@components/menu/menu"

const Header = ({ isHeaderSticky, currentRouteOptions }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const onMenuClick = () => setIsMenuOpen(true)

  const onCloseMenuClick = () => setIsMenuOpen(false)

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
              }
            : {}
        }
      >
        <div id="topbar" className="topbar">
          {/* <div className="container">
    <div className="row">
      <div className="col-sm-8">
        <div className="nav-utility">
          <span className="nav-item">
            A stylish Bootstrap theme for construction companies
          </span>
        </div>
      </div>
      <div className="col-sm-4 hidden-xs">
        <div className="nav-utility nav-right">
          <a href="#" className="nav-item">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#" className="nav-item">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#" className="nav-item">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#" className="nav-item">
            <i className="fa fa-pinterest"></i>
          </a>
          <a href="#" className="nav-item">
            <i className="fa fa-envelope-o"></i>
          </a>
        </div>
      </div>
    </div>
  </div> */}
        </div>
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
                          <CustomLink to="/uslugi/instalacje-wod-kan">
                            Instalacje wod-kan
                          </CustomLink>
                        </li>
                        <li className="menu-item">
                          <CustomLink to="/uslugi/instalacje-wentylacyjne-i-klimatyzacyjne">
                            Instalacje wentylacyjne i klimatyzacyjne
                          </CustomLink>
                        </li>
                        <li className="menu-item">
                          <CustomLink to="/uslugi/instalacje-co">
                            Instalacje c.o.
                          </CustomLink>
                        </li>
                        <li className="menu-item">
                          <CustomLink to="/uslugi/instalacje-elektryczne">
                            Instalacje elektryczne
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
                    {/* <li
                  className="menu-item menu-item-has-children"
                  aria-haspopup="true"
                >
                  <a href="#">Features</a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="#">Single Post</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">
                        Single Post Full Width
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Page Full Width</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Page With Sidebar</a>
                    </li>
                    <li
                      className="menu-item menu-item-has-children"
                      aria-haspopup="true"
                    >
                      <a href="#">Shortcodes</a>
                      <ul className="sub-menu">
                        <li className="menu-item">
                          <a href="#">Alert</a>
                        </li>
                        <li className="menu-item">
                          <a href="#">Progress Bar</a>
                        </li>
                        <li className="menu-item">
                          <a href="#">Social Icon</a>
                        </li>
                        <li className="menu-item">
                          <a href="#">Button &amp; Label</a>
                        </li>
                        <li className="menu-item">
                          <a href="#">Accordion</a>
                        </li>
                        <li className="menu-item">
                          <a href="#">Tabs</a>
                        </li>
                        <li className="menu-item">
                          <a href="#">Pricing</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <a href="#">Typography</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Not Found</a>
                    </li>
                    <li className="menu-item">
                      <a href="comingsoon.html">Comingsoon</a>
                    </li>
                  </ul>
                </li> */}
                    <li
                      className={classnames("menu-item", {
                        "current-menu-item":
                          currentRouteOptions.to === "/realizacje",
                      })}
                    >
                      <CustomLink to="/realizacje">Realizacje</CustomLink>
                    </li>
                    {/* <li
                      className={classnames("menu-item", {
                        "current-menu-item": currentRouteOptions.to === "/blog",
                      })}
                    >
                      <CustomLink to="/blog">Blog</CustomLink>
                    </li> */}
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
            {/* </div>
            </div> */}
          </header>
        </div>
        {currentRouteOptions.hasHeroImage && (
          <div className="container">
            <div className="row">
              <div className="col-sm-5">
                <div className="header-caption">
                  {/* <span className="caption-subtitle">Our Service</span> */}
                  <h2 className="caption-title">
                    Instalacje przemysłowe
                    <br />
                    Zbudujmy razem <br />
                    naszą przyszłość
                  </h2>
                  {/* <p>
                  We provide overall planning, coordination and control of a
                  project, so you don’t have to worry about anything. Our
                  promise as a contractor is to build community value into every
                  project while delivering professional expertise.
                </p>
                <div className="header-action-button">
                  <a className="btn btn-warning btn-md" href="#">
                    Purchase
                  </a>
                  <a className="btn btn-default btn-bordered  btn-md" href="#">
                    Learn more
                  </a>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="contact">
          <div className="contact-item">
            <span className="contact-label">E-mail:</span>
            <span className="value">komobexinel@post.pl</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">Telefon:</span>
            <span className="value accent">+48 34 322 65 11</span>
          </div>
        </div>
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
