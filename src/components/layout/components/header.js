import React from "react"
import PropTypes from "prop-types"

const Header = () => (
  <div
    className="header"
    style={{
      backgroundImage: "url('../../../img-header.jpg')",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    }}
  >
    <div id="topbar" className="topbar">
      <div className="container">
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
      </div>
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
                  <span className="pe-7s-menu"></span>
                  <span className="sr-only">Primary Menu</span>
                </button>

                <div className="menu-testing-menu-container">
                  <ul
                    id="primary-menu"
                    className="menu nav-menu"
                    aria-expanded="false"
                  >
                    <li className="menu-item current-menu-item">
                      <a href="#">Strona główna</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">O firmie</a>
                    </li>
                    <li
                      className="menu-item menu-item-has-children"
                      aria-haspopup="true"
                    >
                      <a href="#">Usługi</a>
                      <ul className="sub-menu">
                        <li className="menu-item">
                          <a href="#">Wszystkie usługi</a>
                        </li>
                        <li className="menu-item">
                          <a href="#">Doradztwo budowlane</a>
                        </li>
                        <li className="menu-item">
                          <a href="#">Wynajem mieszkań</a>
                        </li>
                        <li className="menu-item">
                          <a href="#">Hydraulika</a>
                        </li>
                        <li className="menu-item">
                          <a href="#">Wentylacja i klimatyzacja</a>
                        </li>
                        <li className="menu-item">
                          <a href="#">Usługi dźwigowe</a>
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
                      <a href="#">Kontakt</a>
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
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
