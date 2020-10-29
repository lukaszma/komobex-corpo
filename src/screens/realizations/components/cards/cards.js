import React from "react"
import { Card, CardsWrapper } from "./styles"
import CustomLink from "@components/customLink/customLink"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"

const Image = styled(Img)`
  height: 200px;
`

const Title = styled.h3`
  color: #000;
  font-style: italic;
  text-align: center;
`

const Cards = ({ realizationsList, prefix }) => {
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
                  {realization.node.frontmatter.thumb && (
                    <Image
                      fluid={
                        realization.node.frontmatter.thumb.childImageSharp.fluid
                      }
                    />
                  )}
                </div>
                <div className="project-name">
                  <Title className="block-title">
                    {realization.node.frontmatter.title}
                  </Title>
                </div>
              </CustomLink>
            </div>
          </Card>
        ))}
      </div>
    </CardsWrapper>
  )
}

Cards.propTypes = {
  realizationsList: PropTypes.array,
  prefix: PropTypes.string,
}

export default Cards
