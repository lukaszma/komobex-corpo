import React from "react"
import PropTypes from "prop-types"

const PageTitle = ({ title, subtitle }) => (
  <div className="main-title block-section padd-100-top padd-60-btm bg-grey">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <h1 className="main-title-primary">{title}</h1>
          <h4 className="main-title-secondary">{subtitle}</h4>
        </div>
      </div>
    </div>
  </div>
)

PageTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default PageTitle
