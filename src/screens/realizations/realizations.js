import React from "react"
import { Filters, Cards } from "./components"
import PropTypes from "prop-types"

const RealizationsScreen = ({ data }) => (
  <>
    <Filters />
    <Cards data={data} />
  </>
)

RealizationsScreen.propTypes = {
  data: PropTypes.object,
}

export default RealizationsScreen
