import React from "react"
import Layout from "@components/layout/layout"
import { PropertiesScreen } from "@screens/properties/properties"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

const Properties = ({ data }) => {
  // eslint-disable-next-line no-undef
  console.log(data)

  return (
    <div id="home" className="home">
      <Layout>
        <PropertiesScreen publicUrl={data.file.publicURL} />
      </Layout>
    </div>
  )
}

export const query = graphql`
  query {
    file(sourceInstanceName: { eq: "pdfs" }, name: { eq: "nieruchomosci" }) {
      publicURL
    }
  }
`

Properties.propTypes = {
  data: PropTypes.object,
}

export default Properties
