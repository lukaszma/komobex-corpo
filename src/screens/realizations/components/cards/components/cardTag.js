import React from "react"
import PropTypes from "prop-types"
import { Tag } from "./styles"

const CardTag = ({ children }) => <Tag className="card-tag">{children}</Tag>

CardTag.propTypes = {
  children: PropTypes.node,
}

export default CardTag
