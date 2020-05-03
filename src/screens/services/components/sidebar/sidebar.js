import React from "react"
import classnames from "classnames"
import { Location } from "@reach/router"
import { routes } from "@enums/routesEnum"
import CustomLink from "@components/customLink/customLink"

const Sidebar = () => (
  <Location>
    {({ location }) => {
      const currentRoute = location.pathname.split("/")[2]

      return (
        <div className="sidebar site-sidebar">
          <div className="widget widget_nav_menu">
            <ul>
              <li
                role="presentation"
                className={classnames({ "current-menu-item": !currentRoute })}
              >
                <CustomLink to={routes.uslugi.to}>Wszystkie usługi</CustomLink>
              </li>
              {routes.uslugi.children.map(childRoute => (
                <li
                  key={childRoute.to}
                  className={classnames({
                    "current-menu-item":
                      currentRoute &&
                      childRoute.to.split("/")[1] === currentRoute,
                  })}
                  role="presentation"
                >
                  <CustomLink to={`${routes.uslugi.to}${childRoute.to}`}>
                    {childRoute.title}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="widget widget_brocure">
            <h3 className="widget-title">Broszury</h3>
            <ul className="nav nav-pills nav-stacked">
              <li role="presentation" className="active">
                <a href="#">
                  <i className="fa fa-file-pdf-o"></i> <span>Pobierz .PDF</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )
    }}
  </Location>
)

export default Sidebar
