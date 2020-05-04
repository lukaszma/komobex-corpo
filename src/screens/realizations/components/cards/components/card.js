/* eslint-disable */
import React from "react"
import CardTag from "./cardTag"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const Card = ({ tags, image, title }) => (
  <div className="card">
    <div className="card__image-container">
      {/* <Img className="card__image" fluid={image} /> */}
      <img className="card__image" src={image.src} alt="" />
    </div>

    <svg className="card__svg" viewBox="0 0 600 850">
      <path
        d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
        stroke="transparent"
        fill="#333"
      />
      <path
        className="card__line"
        d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
        stroke="pink"
        strokeWidth="3"
        fill="transparent"
      />
    </svg>

    <div className="card__content">
      <h2 className="card__title">{title}</h2>
      {tags.map((tag, index) => (
        <CardTag key={index}>{tag}</CardTag>
      ))}
    </div>
  </div>
)

Card.propTypes = {
  tags: PropTypes.array,
  image: PropTypes.object,
  title: PropTypes.string,
}

export default Card
