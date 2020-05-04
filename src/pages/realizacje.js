import React from "react"
import Layout from "@components/layout/layout"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import  RealizationsScreen  from "@screens/realizations/realizations"

const Realizations = ({ data }) => (
  <div id="realizations" className="realizations">
    <Layout>
      <RealizationsScreen data={data} />
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
