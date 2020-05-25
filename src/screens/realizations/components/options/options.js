import React from "react"
import { find } from "lodash"
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
        filter: { sourceInstanceName: { eq: "realizations-options-images" } }
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
  const doneImage = find(
    optionImages.allFile.edges,
    edge => edge.node.name === "arena-gliwice"
  )
  const inProgressImage = find(
    optionImages.allFile.edges,
    edge => edge.node.name === "face-2-face"
  )

  return (
    <StyledOptions>
      <div className="image-container">
        <CustomLink to="/realizacje/ukonczone">
          <LeftBackgroundImage
            Tag="section"
            className="image"
            fluid={doneImage.node.childImageSharp.fluid}
            backgroundColor={`#040e18`}
          >
            <div className="label">UKOŃCZONE</div>
          </LeftBackgroundImage>
        </CustomLink>

        <CustomLink to="/realizacje/w-trakcie">
          <RightBackgroundImage
            Tag="section"
            className="image"
            fluid={inProgressImage.node.childImageSharp.fluid}
            backgroundColor={`#040e18`}
          >
            <div className="label">W TRAKCIE</div>
          </RightBackgroundImage>
        </CustomLink>
      </div>
    </StyledOptions>
  )
}
