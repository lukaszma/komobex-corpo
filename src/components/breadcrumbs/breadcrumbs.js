/*eslint-disable */
import React from "react"
import { Link } from "gatsby"
import { Location } from "@reach/router"
import { getLinkDetailsByRoute } from "../../enums/routesEnum"

export const Breadcrumbs = () => (
  <Location>
    {({ location }) => {
      const routes = location.pathname.split("/")

      return (
        <div className="breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ol className="breadcrumb">
                  {routes.map((route, index) => {
                    const routeDetails = getLinkDetailsByRoute(route)
                    const key = index
console.log(route)
                    return index + 1 !== routes.length ? (
                      <li key={key}>
                        <Link to={routeDetails.to}>{routeDetails.title}</Link>
                      </li>
                    ) : (
                      <li key={key} className="active">
                        {routeDetails.title}
                      </li>
                    )
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
