/* eslint-disable */

import React from "react"
import {
  StyledOptions,
  LeftBackgroundImage,
  RightBackgroundImage,
} from "./styles"
import { useStaticQuery, graphql } from "gatsby"
import CustomLink from "@components/customLink/customLink"

export const Options = () => {
  const optionImages = useStaticQuery(graphql`
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

  const image1 = optionImages.allFile.edges[4].node.childImageSharp.fluid
  const image2 = optionImages.allFile.edges[5].node.childImageSharp.fluid
  console.log(image1)

  return (
    <StyledOptions>
      <div className="image-container">
        <CustomLink to="/realizacje/ukonczone">
          <LeftBackgroundImage
            Tag="section"
            className="image"
            fluid={image1}
            backgroundColor={`#040e18`}
          >
            <div className="label">UKOŃCZONE</div>
          </LeftBackgroundImage>
        </CustomLink>

        <CustomLink to="/realizacje/w-trakcie">
          <RightBackgroundImage
            Tag="section"
            className="image"
            fluid={image2}
            backgroundColor={`#040e18`}
          >
            <div className="label">W TRAKCIE</div>
          </RightBackgroundImage>
        </CustomLink>
      </div>
    </StyledOptions>
  )
}
