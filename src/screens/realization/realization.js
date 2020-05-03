import React from "react"
import PropTypes from "prop-types"
import ImageGallery from "react-image-gallery"
import { Title, Description } from "./styles"

const images = [
  {
    original: "../../../hala-gliwice-1.jpg",
    thumbnail: "../../../hala-gliwice-1.jpg",
  },
  {
    original: "../../../img-content-01.jpg",
    thumbnail: "../../../img-content-01.jpg",
  },
  {
    original: "../../../img-content-02.jpg",
    thumbnail: "../../../img-content-02.jpg",
  },
  {
    original: "../../../img-content-03.jpg",
    thumbnail: "../../../img-content-03.jpg",
  },
  {
    original: "../../../img-content-04.jpg",
    thumbnail: "../../../img-content-04.jpg",
  },
  {
    original: "../../../img-post-content-01.jpg",
    thumbnail: "../../../img-post-content-01.jpg",
  },
  {
    original: "../../../img-post-content-02.jpg",
    thumbnail: "../../../img-post-content-02.jpg",
  },
  {
    original: "../../../img-post-content-03.jpg",
    thumbnail: "../../../img-post-content-03.jpg",
  },
  {
    original: "../../../img-post-content-04.jpg",
    thumbnail: "../../../img-post-content-04.jpg",
  },
]

const RealizationScreen = ({ pageContext }) => (
  <div className="container">
    <Title>{pageContext.title}</Title>
    <Description>{pageContext.description}</Description>
    <ImageGallery items={images} />
  </div>
)

RealizationScreen.propTypes = {
  pageContext: PropTypes.object,
}

export default RealizationScreen
