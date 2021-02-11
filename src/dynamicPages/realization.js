import React from "react"
import Layout from "@components/layout/layout"
import PropTypes from "prop-types"
import RealizationScreen from "@screens/realization/realization"
import { graphql } from "gatsby"

const Realization = ({ data }) => {
  const { markdownRemark, images } = data
  const { frontmatter, html } = markdownRemark

  return (
    <div id="home" className="home">
      <Layout pageTitle={frontmatter.title}>
        <RealizationScreen
          frontmatter={frontmatter}
          html={html}
          images={images}
          // pdf={frontmatter.pdf?.publicURL}
        />
      </Layout>
    </div>
  )
}
export const pageQuery = graphql`
  query($slug: String!, $imagesDirectory: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
    images: allFile(
      filter: {
        sourceInstanceName: { eq: "realizations-images" }
        relativeDirectory: { eq: $imagesDirectory }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`

Realization.propTypes = {
  data: PropTypes.object,
}

export default Realization
