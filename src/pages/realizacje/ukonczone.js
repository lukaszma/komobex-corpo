import React from "react"
import Layout from "@components/layout/layout"
import { Cards } from "@screens/realizations/components"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

const RealizationsDone = ({ data }) => (
  <div id="realizations-done" className="realizations-done">
    <Layout>
      <Cards realizationsList={data.allMarkdownRemark.edges} prefix="ukonczone" />
    </Layout>
  </div>
)

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/done/" } }
      sort: { fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
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

RealizationsDone.propTypes = {
  data: PropTypes.object,
}

export default RealizationsDone
