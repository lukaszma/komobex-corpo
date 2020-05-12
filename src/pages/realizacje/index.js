/* eslint-disable */
import React from "react"
import Layout from "@components/layout/layout"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
// import RealizationsScreen from "@screens/realizations/realizations"
import { Options } from "@screens/realizations/components"

const Realizations = ({ data }) => (
  <div id="realizations" className="realizations">
    <Layout>
      <Options />
    </Layout>
  </div>
)

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
            imagesDirectory
            mainPage
            tags
            mainPage
            title
          }
        }
      }
    }
  }
`

Realizations.propTypes = {
  data: PropTypes.object,
}

export default Realizations
