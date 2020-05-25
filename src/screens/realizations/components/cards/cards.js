/* eslint-disable */
import React from "react"
import { Card, CardsWrapper } from "./styles"
// import { Card } from "./components"
import CustomLink from "@components/customLink/customLink"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { find } from "lodash"
// import { Card } from "./components"
import Img from "gatsby-image"

const Cards = ({ realizationsList, prefix }) => {
  // console.log(realizationsList)
  return (
    <CardsWrapper>
      <div className="row">
        {realizationsList.map((realization, index) => (
          <Card
            className="col-md-3 col-sm-4 col-xs-6 col-xxs-12"
            key={`realization-${index}`}
          >
            <div className="projectblock block">
              <CustomLink
                to={`/realizacje/${prefix}/${realization.node.frontmatter.path}`}
              >
                <div className="image-holder image--landscape">
                  {/* //image */}
                  {console.log(realization.node.frontmatter.thumb)}
                  {realization.node.frontmatter.thumb && (
                    <Img
                      fluid={
                        realization.node.frontmatter.thumb.childImageSharp.fluid
                      }
                    />
                  )}
                </div>
                <div className="project-name">
                  <h3 className="block-title">
                    {realization.node.frontmatter.title}
                  </h3>
                </div>
              </CustomLink>
            </div>
          </Card>
        ))}
      </div>
    </CardsWrapper>
  )
  // const cardThumbnails = useStaticQuery(graphql`
  //   query {
  //     allFile(
  //       filter: { sourceInstanceName: { eq: "realizations-card-thumbnails" } }
  //     ) {
  //       edges {
  //         node {
  //           name
  //           childImageSharp {
  //             fluid(maxWidth: 800, quality: 100) {
  //               ...GatsbyImageSharpFluid_noBase64
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  // console.log(cardThumbnails)
  // return (
  //   <CardsWrapper>
  //     <div className="container">
  //       <div className="row">
  //         {console.log(data)}
  //         {data.allMarkdownRemark.edges.map(edge => {
  //           const image = find(
  //             cardThumbnails.allFile.edges,
  //             thumbEdge =>
  //               thumbEdge.node.name ===
  //               edge.node.frontmatter.mainPage
  //           ).node.childImageSharp.fluid
  //           return (
  //             <div
  //               key={edge.node.frontmatter.path}
  //               className="card-col col-xs-12 col-sm-6 col-md-4"
  //             >
  //               <CustomLink to={edge.node.frontmatter.path}>
  //                 <Card title={edge.node.frontmatter.title} image={image} tags={edge.node.frontmatter.tags} />
  //               </CustomLink>
  //             </div>
  //           )
  //         })}
  //         {/* <Card /> */}
  //       </div>
  //     </div>
  //   </CardsWrapper>
  // )
}

Cards.propTypes = {
  realizationsList: PropTypes.array,
  prefix: PropTypes.string,
}

export default Cards
