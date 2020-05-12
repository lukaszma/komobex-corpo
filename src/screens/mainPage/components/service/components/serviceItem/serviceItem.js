import React from "react"
import PropTypes from "prop-types"
import CustomLink from "@components/customLink/customLink"
import { ServiceItemList } from "./styles"

const ServiceItem = ({ title, imgSrc, to, list }) => (
  <div className="col-md-4">
    <div className="blog-entry">
      <div className="blog-entry-header">
        <h2 className="entry-title">
          <CustomLink to={to}>{title}</CustomLink>
        </h2>
      </div>
      <CustomLink to={to}>
        <img src={imgSrc} alt={title} className="img-responsive" />
      </CustomLink>

      <div className="blog-entry-content">
        <ServiceItemList>
          {list.map((item, index) => (
            <li key={`${to}-${index}`}>{item}</li>
          ))}
        </ServiceItemList>

        {/* <p>
          <CustomLink to={to}>Czytaj więcej &#43;</CustomLink>
        </p> */}
      </div>
    </div>
  </div>
)

ServiceItem.propTypes = {
  title: PropTypes.string,
  imgSrc: PropTypes.string,
  list: PropTypes.array,
  to: PropTypes.string,
}

export default ServiceItem
