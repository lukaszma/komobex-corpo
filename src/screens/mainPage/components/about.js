import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

export const About = () => {
  const images = useStaticQuery(graphql`
    query {
      aboutImage: file(
        sourceInstanceName: { eq: "main-page-images" }
        name: { eq: "about" }
      ) {
        name
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <div id="about" className="block-section image-block bg-white">
      <div className="container-fluid container-no-padding">
        <div className="row row-no-margin">
          <div className="image-block-item col-md-6 col-sm-5 col-xs-12">
            <BackgroundImage
              className="image-block-item-background"
              fluid={images.aboutImage.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>

      <div className="container clear">
        <div className="row">
          <div className="col-md-5 col-md-offset-7 col-sm-6 col-sm-offset-6 col-xs-10 col-xs-offset-1 padd-80-top padd-60-btm">
            <div className="section-title">
              <h2>Kim jesteśmy?</h2>
            </div>
            <p>
              Przedsiębiorstwo Komobex-Inel sp. z.o.o to firma realizująca wiele
              zadań z zakresu inwestycji budownictwa ogólnego, komunalnego i
              przemysłowego.
            </p>
            <p>
              Komobex-Inel to przedsiębiorstwo z wieloletnią tradycją, które
              łączy w sobie szereg czynników składających się na profesjonalne,
              rzetelne oraz terminowe wykonanie powierzonych inwestycji.
              <br />
              Będąc przedsiębiorstwem o uznanej i ugruntowanej pozycji na rynku
              oraz przeświadczeniu o priorytetowej roli jakości w aspekcie
              funkcjonowania organizacji, określiło długoterminową taktykę
              będącą instrumentem do osiągnięcia strategicznych celów takich
              jak: wszechstronny rozwój przedsiębiorstwa, wysoki poziom
              świadczonych usług oraz zadowolenie klienta
            </p>
            <p>
              <Link className="button btn-danger popup-video" to="/uslugi">
                <i className="fa fa-wrench"></i> Sprawdź nasze usługi
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
