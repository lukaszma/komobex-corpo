/* eslint-disable */
import React from "react"
import { CardsWrapper } from "./styles"
import { Card } from "./components"
import CustomLink from "@components/customLink/customLink"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { find } from "lodash"
// import { Card } from "./components"

const Cards = ({ data }) => {
  const cardThumbnails = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "realizations-card-thumbnails" } }
      ) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
    }
  `)
  console.log(cardThumbnails)
  return (
    <CardsWrapper>
      <div className="container">
        <div className="row">
          {console.log(data)}
          {data.allMarkdownRemark.edges.map(edge => {
            const image = find(
              cardThumbnails.allFile.edges,
              thumbEdge =>
                thumbEdge.node.name ===
                edge.node.frontmatter.mainPage
            ).node.childImageSharp.fluid
            return (
              <div
                key={edge.node.frontmatter.path}
                className="card-col col-xs-12 col-sm-6 col-md-4"
              >
                <CustomLink to={edge.node.frontmatter.path}>
                  <Card title={edge.node.frontmatter.title} image={image} tags={edge.node.frontmatter.tags} />
                </CustomLink>
              </div>
            )
          })}
          {/* <Card /> */}
        </div>
      </div>
    </CardsWrapper>
  )
}

Cards.propTypes = {
  data: PropTypes.object,
}

export default Cards
