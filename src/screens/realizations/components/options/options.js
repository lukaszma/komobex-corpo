import React from "react"
import { find } from "lodash"
import {
  StyledOptions,
  LeftBackgroundImage,
  RightBackgroundImage,
} from "./styles"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
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
              gatsbyImageData(width: 800, quality: 100, placeholder: NONE)
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
          <LeftBackgroundImage className="image">
            <GatsbyImage
              image={getImage(doneImage.node.childImageSharp)}
              alt="ukończone realizacje"
              style={{ position: "absolute", inset: 0, height: "100%" }}
              objectFit="cover"
            />
            <div className="label">UKOŃCZONE</div>
          </LeftBackgroundImage>
        </CustomLink>

        <CustomLink to="/realizacje/w-trakcie">
          <RightBackgroundImage className="image">
            <GatsbyImage
              image={getImage(inProgressImage.node.childImageSharp)}
              alt="realizacje w trakcie"
              style={{ position: "absolute", inset: 0, height: "100%" }}
              objectFit="cover"
            />
            <div className="label">W TRAKCIE</div>
          </RightBackgroundImage>
        </CustomLink>
      </div>
    </StyledOptions>
  )
}
