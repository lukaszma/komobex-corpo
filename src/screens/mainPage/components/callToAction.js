import React from "react"
import PropTypes from "prop-types"
import CustomLink from "@components/customLink/customLink"

const CallToAction = ({ title, subtitle, btnLabel, to }) => (
  <div id="cta" className="cta block-section padd-40-top padd-40-btm bg-dark">
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>
        <div className="col-sm-4 text-right marg-20-top">
          <CustomLink to={to} className="button">
            {btnLabel}
          </CustomLink>
        </div>
      </div>
    </div>
  </div>
)

CallToAction.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  btnLabel: PropTypes.string,
  to: PropTypes.string,
}

export default CallToAction
