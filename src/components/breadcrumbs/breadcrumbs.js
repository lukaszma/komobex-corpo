/* eslint-disable no-undef */
import React from "react"
import { Link } from "gatsby"
import { Location } from "@reach/router"
import classnames from "classnames"
import { getLinkDetailsByRoute } from "../../enums/routesEnum"

export const Breadcrumbs = () => (
  <Location>
    {({ location }) => {
      let routes = location.pathname.split("/")

      !routes[routes.length - 1] &&
        (routes = routes.slice(0, routes.length - 1))

      return (
        <div className="breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ol className="breadcrumb">
                  {routes.map((route, index) => {
                    const routeDetails = getLinkDetailsByRoute(route)
                    const key = index
                    {
                      return routeDetails ? (
                        <li
                          key={key}
                          className={classnames({
                            active: index + 1 === routes.length,
                          })}
                        >
                          {index + 1 !== routes.length ? (
                            <Link to={routeDetails.to}>
                              {routeDetails.title}
                            </Link>
                          ) : (
                            <span>{routeDetails.title}</span>
                          )}
                        </li>
                      ) : null
                    }
                  })}
                </ol>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </Location>
)
