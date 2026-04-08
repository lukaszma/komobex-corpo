import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const About = () => {
  const images = useStaticQuery(graphql`
    query {
      aboutImage: file(
        sourceInstanceName: { eq: "main-page-images" }
        name: { eq: "about" }
      ) {
        name
        childImageSharp {
          gatsbyImageData(width: 1200, quality: 100, placeholder: NONE)
        }
      }
    }
  `)

  return (
    <div id="about" className="block-section image-block bg-white" style={{ position: "relative" }}>
      <GatsbyImage
        className="image-block-item-background"
        image={getImage(images.aboutImage.childImageSharp)}
        alt="o firmie"
        style={{ position: "absolute", inset: 0, width: "50%", height: "100%" }}
        objectFit="cover"
      />

      <div className="container clear" style={{ position: "relative" }}>
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
          </div>
        </div>
      </div>
    </div>
  )
}
