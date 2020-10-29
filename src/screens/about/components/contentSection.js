/* eslint-disable no-undef */
import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Section = styled.div`
  margin: 50px 0;

  p {
    padding: 0;
  }
`

const Image = styled(Img)`
  height: 300px;
`

const ManagementSection = styled.div`
  .title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .item {
    margin-top: 10px;
    span {
      font-size: 14px;

      &.key {
        font-weight: 600;
      }
    }
  }
`

export const ContentSection = () => {
  const images = useStaticQuery(graphql`
    query {
      aboutImages: allFile(
        filter: { sourceInstanceName: { eq: "about-page-images" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 1200, quality: 100) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div className="about content-section">
      <div className="container">
        <Section className="row">
          <div className="col-sm-6">
            <Image
              fluid={images.aboutImages.edges[0].node.childImageSharp.fluid}
              alt={images.aboutImages.edges[0].node.name}
            />
          </div>
          <div className="col-md-4 col-md-offset-1 col-sm-5 col-sm-offset-1 padd-40-top">
            <p>
              Komobex Inel jest spółką powstałą w 1991 roku, której celem od
              samego początku było wyspecjalizowanie się w usługach z zakresu
              instalacji wodno-kanalizacyjnych, centralnego ogrzewania,
              wentylacyjnych oraz elektrycznych. Zmieniające się warunki
              gospodarcze nie zatrzymały rozwoju przedsiębiorstwa, a dzięki
              elastyczności, zaangażowaniu oraz determinacji w dążeniu do
              perfekcji nadal jesteśmy w stanie sprostać oczekiwaniom inwestorów
              w takim samym stopniu.
            </p>
          </div>
        </Section>
        <Section className="row">
          <div className="col-md-4 col-md-offset-1 col-sm-5 col-sm-offset-1 padd-40-top">
            <p>
              Wiedzę oraz technologię doskonalimy już od ponad 29 lat wykonując
              projekty na terenie całego kraju, zdobywając tym samym zaufanie
              naszych Klientów. Wyspecjalizowana kadra z różnych dziedzin,
              licząca ponad 150 pracowników oraz rozbudowany park maszynowy
              pozwala na wykonanie największych i najbardziej zaawansowanych
              technologicznie inwestycji.
            </p>
          </div>
          <div className="col-sm-6">
            <Image
              fluid={images.aboutImages.edges[1].node.childImageSharp.fluid}
              alt={images.aboutImages.edges[1].node.name}
            />
          </div>
        </Section>
        <Section className="row">
          <div className="col-sm-12">
            <p>Komobex Inel to gwarancja jakości oparta na:</p>
            <ul>
              <li>
                <p>
                  Solidnych podstawach ekonomicznych, za co D&amp;B Poland
                  nadała spółce Komobex Inel sp. z o. o. certyfikat
                  Wiarygodności Biznesowej,
                </p>
              </li>
              <li>
                <p>
                  Doskonaleniu procesów technologicznych oraz zarządzania
                  jakością, czego dowodem jest certyfikat ISO 9001:2001,
                </p>
              </li>
              <li>
                <p>
                  Doświadczeniu oraz podnoszeniu kwalifikacji co pozwala na
                  terminowe realizowanie każdej inwestycji,
                </p>
              </li>
              <li>
                <p>
                  Rzetelności, dzięki czemu utrzymujemy dobre relacje z
                  inwestorami, dostawcami, a także z pracownikami Komobex Inel,
                </p>
              </li>
              <li>
                <p>
                  Lokalnej tożsamości wspierając wiele działań na rzecz sportu,
                  ekologii oraz propagowanie zdrowego stylu życia wśród
                  młodzieży.
                </p>
              </li>
            </ul>
          </div>
        </Section>
        <Section className="row">
          <div className="col-md-4 col-md-offset-1 col-sm-5 col-sm-offset-1 padd-40-top">
            <p></p>
            <p>
              Komobex-Inel, będąc przedsiębiorstwem o uznanej i ugruntowanej
              pozycji na rynku oraz przeświadczeniu o priorytetowej roli jakości
              w aspekcie funkcjonowania organizacji, relacji z Klientami oraz
              nienaganności przy realizowaniu inwestycji staje się partnerem na
              długie lata. Komobex Inel to Tradycja …to Twój wiarygodny partner
            </p>
          </div>
          <div className="col-sm-6">
            <Image
              fluid={images.aboutImages.edges[2].node.childImageSharp.fluid}
              alt={images.aboutImages.edges[2].node.name}
            />
          </div>
        </Section>
        <Section className="row">
          <div className="col-sm-12">
            <ManagementSection>
              <div className="title">Kierownictwo firmy</div>
              <div className="item">
                <span className="key">Prezes Zarządu:</span>&nbsp;
                <span className="value">mgr inż. Tomasz Śledzikowski</span>
              </div>
              <div className="item">
                <span className="key">Prokurent:</span>&nbsp;
                <span className="value">Danuta Matyja</span>
              </div>
              <div className="item">
                <span className="key">
                  Dyrektor przygotowania i realizacji kontraktów:
                </span>
                &nbsp;
                <span className="value">mgr inż. Łukasz Kozłowski</span>
              </div>
            </ManagementSection>
          </div>
        </Section>
      </div>
    </div>
  )
}
