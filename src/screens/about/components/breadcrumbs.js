import React from "react"
import { Link } from "gatsby"

export const Breadcrumbs = () => (
  <div className="breadcrumbs">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <ol className="breadcrumb">
            <li>
              <Link to="/">Strona główna</Link>
            </li>
            <li className="active">O firmie</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
)
