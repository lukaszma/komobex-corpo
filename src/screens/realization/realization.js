import React from "react"
import PropTypes from "prop-types"
import ImageGallery from "react-image-gallery"
import { map } from "lodash"

const RealizationScreen = ({ html, images }) => {
  const mappedImages = map(images.edges, edge => ({
    original: edge.node.childImageSharp.fluid.src,
    thumbnail: edge.node.childImageSharp.fluid.src,
    srcSet: edge.node.childImageSharp.fluid.srcSet,
  }))

  return (
    <div className="container">
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <ImageGallery items={mappedImages} />
    </div>
  )
}

RealizationScreen.propTypes = {
  frontmatter: PropTypes.object,
  html: PropTypes.string,
  images: PropTypes.shape({
    edges: PropTypes.array,
  }),
}

export default RealizationScreen
