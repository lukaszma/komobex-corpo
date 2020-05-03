import React from "react"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const CustomLink = ({ to, children }) => (
  // <AniLink cover duration={0.7} direction="right" bg="#F86040" to={to}>
  //   {children}
  // </AniLink>
  <Link to={to}>{children}</Link>
)

CustomLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
}

export default CustomLink
