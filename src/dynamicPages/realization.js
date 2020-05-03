import React from "react"
import Layout from "@components/layout/layout"
import PropTypes from "prop-types"
import RealizationScreen from "@screens/realization/realization"

const Realization = ({ pageContext }) => (
  <div id="home" className="home">
    <Layout>
      <RealizationScreen pageContext={pageContext} />
    </Layout>
  </div>
)

Realization.propTypes = {
  pageContext: PropTypes.object,
}

export default Realization
