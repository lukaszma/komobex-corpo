import React from "react"
import { ServiceItem } from "./components"
import { useStaticQuery, graphql } from "gatsby"
import { find } from "lodash"

export const Service = () => {
  const images = useStaticQuery(graphql`
    query {
      serviceImages: allFile(
        filter: {
          sourceInstanceName: { eq: "main-page-images" }
          relativeDirectory: { eq: "services" }
        }
      ) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
    }
  `)

  const outsideImage = find(
    images.serviceImages.edges,
    edge => edge.node.name === "service1"
  ).node.childImageSharp.fluid
  const insideImage = find(
    images.serviceImages.edges,
    edge => edge.node.name === "service2"
  ).node.childImageSharp.fluid
  const industrialImage = find(
    images.serviceImages.edges,
    edge => edge.node.name === "service3"
  ).node.childImageSharp.fluid

  return (
    <div id="service" className="service content-section bg-white">
      <div className="container">
        <div className="row">
          <ServiceItem
            title="Instalacje sanitarne zewnętrzne"
            list={[
              "instalacje wodociągowe",
              "kanalizacje sanitarne",
              "kanalizacje deszczowe",
              "sieci ciepłownicze",
              "sieci elektroenergetyczne",
            ]}
            fluid={outsideImage}
            to="/uslugi/instalacje-sanitarne-zewnetrzne"
          />

          <ServiceItem
            title="Instalacje sanitarne wenętrzne"
            list={[
              "instalacje wodno-kanalizacyjne",
              "instalacje centralnego ogrzewania",
              "instalcje ciepła technologicznego i wody lodowej",
              "instalacje gazowe",
              "instalacje wentylacyjne i klimatyzacyjne",
              "kotłownie i wymiennikownie ciepła",
              "instalacje elektryczne",
              "instalacje niskoprądowe",
            ]}
            fluid={insideImage}
            to="/uslugi/instalacje-sanitarne-wewnetrzne"
          />

          <ServiceItem
            title="Instalacje przemysłowe"
            list={[
              "rurociągi pary, tlenu i azotu",
              "remonty urządzeń hutniczych",
              "remonty, serwis i konserwacja urządzeń dźwigowych",
            ]}
            fluid={industrialImage}
            to="/uslugi/instalacje-przemyslowe"
          />
        </div>
      </div>
    </div>
  )
}
