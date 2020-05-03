/* eslint-disable */
import React from "react"
import { CardsWrapper } from "./styles"
import { Card } from "./components"
import CustomLink from "@components/customLink/customLink"
import PropTypes from "prop-types"
// import { Card } from "./components"

const Cards = ({ data }) => (
  <CardsWrapper>
    <div className="container">
      <div className="row">
        {console.log(data)}
        {data.allMarkdownRemark.edges.map(edge => (
          <div key={edge.node.frontmatter.path} className="card-col col-xs-12 col-sm-6 col-md-4">
            <CustomLink to={edge.node.frontmatter.path}>
              <Card tags={edge.node.frontmatter.tags}/>
            </CustomLink>
          </div>
        ))}
        {/* <Card /> */}
      </div>
    </div>
  </CardsWrapper>
)

Cards.propTypes = {
  data: PropTypes.object,
}

export default Cards
