import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { find } from "lodash"
import Img from "gatsby-image"

export const Why = () => {
  const images = useStaticQuery(graphql`
    query {
      serviceImages: allFile(
        filter: {
          sourceInstanceName: { eq: "main-page-images" }
          relativeDirectory: { eq: "why" }
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

  const step1Image = find(
    images.serviceImages.edges,
    edge => edge.node.name === "wroclavia"
  ).node.childImageSharp.fluid
  const step3Image = find(
    images.serviceImages.edges,
    edge => edge.node.name === "certyfikat"
  ).node.childImageSharp.fluid

  return (
    <div id="why" className="why content-section bg-grey">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2>Dlaczego Komobex Inel?</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="process-item highlight text-center">
              <Img className="img-responsive" fluid={step1Image} />
              <div className="process-item-content">
                <span className="process-item-number">1</span>
                <h3 className="process-item-title">ZAUFANIE</h3>
                <p>
                  Wielu uznanych inwestorów odpowiedzialnych za reazlizację
                  obiektów tj. Arena Gliwice, Wroclavia, Arena Zabrze,
                  Sagittarius Business House czy Sąd Rejonowy
                  Częstochowa-Północ, zdecydowało się na wspópracę z naszą
                  firmą.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="process-item text-center">
              <div className="process-item-icon">
                <span className="pe-7s-science"></span>
              </div>
              <div className="process-item-content">
                <span className="process-item-number">2</span>
                <h3 className="process-item-title">DOŚWIADCZENIE</h3>
                <p>
                  Firma instniejąca na rynku przeszło 25 lat wraz z kadrą ponad
                  150 wykwalifikowanych pracowników, realizuje jako generalny
                  wykonawca lub podwykonawca wiele zadań z zakresu inwestycji
                  budownictwa ogólnego, komunalnego i przemysłowego.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="process-item highlight text-center">
              <Img className="img-responsive" fluid={step3Image} />
              <div className="process-item-content">
                <span className="process-item-number">3</span>
                <h3 className="process-item-title">WIARYGODNOŚĆ</h3>
                <p>
                  Uzyskane Certyfikat Wiarygodności Biznesowej oraz tytuł Gazeli
                  Biznesu, świadczy o dobrym zarządzaniu i uczciwości,
                  gwarantując wysoki poziom rentowności, zdolności oraz
                  płynności finansowej.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="process-item text-center">
              <div className="process-item-icon">
                <span className="pe-7s-graph1"></span>
              </div>
              <div className="process-item-content">
                <span className="process-item-number">4</span>
                <h3 className="process-item-title">RZETELNOŚĆ</h3>
                <p>
                  Dzięki wykwalifikowanej kadrze z zastosowaniem własnego,
                  specjalistycznego sprzętu, powierzone nam ralizacje ukończone
                  są zgodnie z założeniami oraz z zastosowaniem aktualnych norm
                  budowlanych.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
