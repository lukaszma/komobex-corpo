/* eslint-disable no-undef */
import React from "react"
import Layout from "@components/layout/layout"
import { Cards } from "@screens/realizations/components"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

const RealizationsDone = ({ data }) => (
  <div id="realizations-done" className="realizations-done">
    <Layout pageTitle="Realizacje ukończone">
      <Cards
        realizationsList={data.allMarkdownRemark.edges}
        prefix="ukonczone"
      />
    </Layout>
  </div>
)

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/done/" } }
      sort: { frontmatter: { date: ASC } }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            order
            thumb {
              childImageSharp {
                gatsbyImageData(width: 400, quality: 100, placeholder: NONE)
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
