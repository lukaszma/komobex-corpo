import React from "react"
import Slider from "react-slick"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const CustomSlider = styled(Slider)`
  .slick-track {
    display: flex;
    align-items: center;

    .custom-slick-item {
      padding: 0 10px;
    }
  }
`

export const Client = () => {
  const settings = {
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1300,
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: false,
    rows: 1,
    responsive: [
      {
        breakpoint: 1680,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          centerMode: true,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 1000,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 3,
          autoplay: false,
        },
      },
      {
        breakpoint: 470,
        settings: {
          arrows: false,
          autoplay: true,
          slidesToShow: 2,
          centerPadding: "0px",
        },
      },
    ],
  }

  const images = useStaticQuery(graphql`
    query {
      serviceImages: allFile(
        filter: {
          sourceInstanceName: { eq: "main-page-images" }
          relativeDirectory: { eq: "clients" }
        }
      ) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 300, quality: 100) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div
      id="client"
      className="client block-section bg-white padd-40-top padd-40-btm"
      style={{ width: "100%" }}
    >
      <CustomSlider {...settings}>
        {images.serviceImages.edges.map(edge => (
          <div className="custom-slick-item" key={edge.node.name}>
            <Img fluid={edge.node.childImageSharp.fluid} />
          </div>
        ))}
      </CustomSlider>

      <div className="container">
        <div className="row">
          <div className="col-md-12"></div>
        </div>
      </div>
    </div>
  )
}
