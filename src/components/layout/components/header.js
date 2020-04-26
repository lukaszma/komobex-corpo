import React from "react"
import classnames from "classnames"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Location } from "@reach/router"

const Header = () => {
  return (
    <Location>
      {({ location }) => (
        <div
          className="header"
          style={{
            backgroundImage: "url('../../../hero.jpg')",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
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
            <header id="masthead" className="site-header" role="banner">
              <div className="container">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="site-branding">
                      <h1 className="site-title title-image">
                        <a href="#" rel="home">
                          <img
                            src="../../../komobex-logo.jpg"
                            alt="construction business"
                            className="img-responsive"
                          />
                        </a>
                      </h1>
                    </div>
                  </div>

                  <div className="col-sm-9">
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
                              "current-menu-item": location.pathname === "/",
                            })}
                          >
                            <Link to="/">Strona główna</Link>
                          </li>
                          <li
                            className={classnames("menu-item", {
                              "current-menu-item":
                                location.pathname === "/o-firmie",
                            })}
                          >
                            <Link to="/o-firmie">O firmie</Link>
                          </li>
                          <li
                            className="menu-item menu-item-has-children"
                            aria-haspopup="true"
                          >
                            <a href="#">Usługi</a>
                            <ul className="sub-menu">
                              <li className="menu-item">
                                <a href="#">Instalacje wod-kan</a>
                              </li>
                              <li className="menu-item">
                                <a href="#">
                                  Instalacje wentylacyjne i klimatyzacyjne
                                </a>
                              </li>
                              <li className="menu-item">
                                <a href="#">Instalacje c.o.</a>
                              </li>
                              <li className="menu-item">
                                <a href="#">Instalacje elektryczne</a>
                              </li>
                              <li className="menu-item">
                                <a href="#">Usługi dźwigowe</a>
                              </li>
                              <li className="menu-item">
                                <a href="#">Wynajem mieszkań</a>
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
                          <li className="menu-item">
                            <a href="#">Realizacje</a>
                          </li>
                          <li className="menu-item">
                            <a href="#">Blog</a>
                          </li>
                          <li className="menu-item">
                            <Link to="/kontakt">Kontakt</Link>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
      )}
    </Location>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
