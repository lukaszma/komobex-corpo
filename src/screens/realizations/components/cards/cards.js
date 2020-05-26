import React from "react"
import { Card, CardsWrapper } from "./styles"
import CustomLink from "@components/customLink/customLink"
import PropTypes from "prop-types"
import Img from "gatsby-image"

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
}

Cards.propTypes = {
  realizationsList: PropTypes.array,
  prefix: PropTypes.string,
}

export default Cards
