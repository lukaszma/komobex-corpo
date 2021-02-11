import React from "react"
import Layout from "@components/layout/layout"
import { Cards } from "@screens/realizations/components"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

const RealizationsInProgress = ({ data }) => (
  <div id="realizations-in-progress" className="realizations-in-progress">
    <Layout pageTitle="Realizacje w trakcie">
      <Cards
        realizationsList={data.allMarkdownRemark.edges}
        prefix="w-trakcie"
      />
    </Layout>
  </div>
)

RealizationsInProgress.propTypes = {
  data: PropTypes.object,
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/in-progress/" } }
      sort: { fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            order
            thumb {
              childImageSharp {
                fluid(maxWidth: 400, quality: 100) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`

export default RealizationsInProgress
