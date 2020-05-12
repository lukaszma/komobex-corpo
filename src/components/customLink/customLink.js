import React from "react"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const CustomLink = ({ to, children, className }) => (
  // <AniLink cover duration={0.7} direction="right" bg="#F86040" to={to}>
  //   {children}
  // </AniLink>
  <Link className={className} to={to}>
    {children}
  </Link>
)

CustomLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
}

export default CustomLink
